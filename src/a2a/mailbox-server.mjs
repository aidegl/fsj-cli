// mailbox-server.mjs — A2A 云端信箱 v1.3（FSJ agent 通信基建）
// 架构正身：workspace/research/a2a-mailbox-v13-constraints.md（V1.3 冻结稿）
// 用法：A2A_PORT=8787 A2A_CONFIG=config/a2a.local.json node src/a2a/mailbox-server.mjs
// 零外部依赖：node 内置 http/crypto/fs；node ≥22。
// 纪律：HAP 无事务→单实例串行写入队列；msg_id/claim_request_id/result_id 三重幂等；
//       generation 仅接管递增；先落库成功才返回成功；允许 seq 空洞不许重复。

import http from 'node:http';
import crypto from 'node:crypto';
import { readFileSync } from 'node:fs';

// ---------- 配置 ----------
const CONFIG_PATH = process.env.A2A_CONFIG || 'config/a2a.local.json';
const cfg = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
// cfg = { port, hap: {url, pat, appId, messageWs, taskWs}, agents: {agentId: token},
//         leaseSeconds, deliveryTimeoutMs, protocolVersion }
const PORT = Number(process.env.A2A_PORT || cfg.port || 8787);
const LEASE_SECONDS = Number(cfg.leaseSeconds || 300);          // 执行租约
const nowIso = () => new Date().toISOString();
const today = () => nowIso().slice(0, 10);
const uuid = () => crypto.randomUUID();

// ---------- 鉴权 ----------
function authAgent(req) {
  const h = req.headers['authorization'] || '';
  const m = h.match(/^Bearer (.+)$/);
  if (!m) return null;
  for (const [aid, tok] of Object.entries(cfg.agents)) {
    if (tok === m[1]) return aid;
  }
  return null;
}
function deny(res, code, msg) {
  res.writeHead(code, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ error: msg }));
}

// ---------- HAP 存储层（JSON-RPC over mingdao MCP，SSE 兼容） ----------
const hap = cfg.hap;
let hapSid = null;
async function hapRpc(body, { session = true } = {}) {
  const headers = {
    Authorization: `Bearer ${hap.pat}`,
    'Content-Type': 'application/json',
    Accept: 'application/json, text/event-stream',
  };
  if (session && hapSid) headers['mcp-session-id'] = hapSid;
  const r = await fetch(hap.url, { method: 'POST', headers, body: JSON.stringify(body) });
  const nsid = r.headers.get('mcp-session-id');
  if (nsid) hapSid = nsid;
  const text = await r.text();
  let parsed = null;
  for (const line of text.split('\n')) if (line.startsWith('data:')) parsed = JSON.parse(line.slice(5));
  if (!parsed && text.trim()) parsed = JSON.parse(text);
  if (!parsed || parsed.error) throw new Error('HAP RPC: ' + JSON.stringify(parsed?.error || text.slice(0, 200)));
  return parsed;
}
async function hapInit() {
  await hapRpc({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-03-26', capabilities: {}, clientInfo: { name: 'a2a-mailbox', version: '1.3' } } }, { session: false });
  await hapRpc({ jsonrpc: '2.0', method: 'notifications/initialized' });
}
async function hapTool(name, args) {
  const r = await hapRpc({ jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name, arguments: args } });
  const txt = r.result?.content?.[0]?.text;
  if (!txt) throw new Error('HAP tool empty: ' + name);
  let inner;
  try { inner = JSON.parse(txt); } catch { inner = JSON.parse(txt.slice(txt.indexOf('{'))); }
  if (inner.success === false) throw new Error('HAP fail: ' + (inner.error_msg || ''));
  return inner;
}
// 记录字段统一 {id: alias, value} 形状（controlId 直写会静默空值——实锤坑）
const F = (pairs) => pairs.filter(([, v]) => v !== undefined && v !== null && v !== '').map(([alias, value]) => ({ id: alias, value }));
const sel = (v) => (Array.isArray(v) ? v[0] : v); // SingleSelect 回读 [{key,value}]

async function hapCreate(table, pairs) {
  const r = await hapTool('create_record', { appId: hap.appId, worksheet_id: table, fields: F(pairs) });
  return r.data?.id;
}
async function hapUpdate(table, rowId, pairs) {
  await hapTool('update_record', { appId: hap.appId, worksheet_id: table, row_id: rowId, fields: F(pairs) });
}
async function hapList(table) {
  const out = [];
  for (let p = 1; ; p++) {
    const r = await hapTool('get_record_list', { appId: hap.appId, worksheet_id: table, pageSize: 200, pageIndex: p });
    const rows = r.data?.rows || [];
    out.push(...rows);
    if (rows.length < 200 || out.length >= (r.data?.total || 0)) break;
  }
  return out;
}

// ---------- 内存状态（信箱为唯一写入者，本地即真相；落 HAP 为持久化） ----------
const msgIdx = new Map();      // msg_id -> record（含 rowId/state/seq/to/task_id/result_id…）
const taskIdx = new Map();     // task_id -> record（含 rowId/state/generation/lease…）
const seqByTo = new Map();     // to -> last assigned seq
const sseByTo = new Map();     // to -> res（活跃 SSE 连接）
const writeQueue = [];         // 串行写入队列（进程内并发隔离）
let chain = Promise.resolve();
const serial = (fn) => { const p = chain.then(fn); chain = p.catch(() => {}); return p; };

function recordOf(m) {
  return { msg_id: m.msg_id, task_id: m.task_id, from: m.from, to: m.to, state: m.state,
    seq: m.seq, attempt: m.attempt, payload: m.payload, error: m.error || '' };
}
function taskOf(t) {
  return { task_id: t.task_id, title: t.title, state: t.state, generation: t.generation,
    lease_until: t.lease_until, execution_attempt: t.execution_attempt,
    claim_request_id: t.claim_request_id, result_id: t.result_id, result: t.result, error: t.error || '' };
}

async function loadFromHap() {
  await hapInit();
  const rows = await hapList(hap.messageWs);
  for (const r of rows) {
    const m = {
      rowId: r.rowId, msg_id: r.biz_msg_id, task_id: r.biz_task_id, from: r.biz_from,
      to: r.biz_to, state: sel(r.biz_state) || 'queued', seq: Number(r.biz_seq) || 0,
      attempt: Number(r.biz_delivery_attempt) || 0, payload: r.biz_payload, error: r.biz_error,
    };
    msgIdx.set(m.msg_id, m);
    const cur = seqByTo.get(m.to) || 0;
    if (m.seq > cur) seqByTo.set(m.to, m.seq);
  }
  const trows = await hapList(hap.taskWs);
  for (const r of trows) {
    const t = {
      rowId: r.rowId, task_id: r.biz_task_id, title: r.biz_title, state: sel(r.biz_state) || 'submitted',
      generation: Number(r.biz_lease_generation) || 0, lease_until: r.biz_lease_until,
      execution_attempt: Number(r.biz_execution_attempt) || 0, claim_request_id: r.biz_claim_request_id,
      result_id: r.biz_result_id, result: r.biz_result, error: r.biz_error,
    };
    taskIdx.set(t.task_id, t);
  }
  console.error(`[mailbox] loaded: ${msgIdx.size} msgs, ${taskIdx.size} tasks`);
}

// ---------- 投递（核心：未确认集补发 + 实时推） ----------
function sseWrite(to, event, data, id) {
  const res = sseByTo.get(to);
  if (!res) return false;
  try {
    res.write(`event: ${event}\n`);
    if (id !== undefined) res.write(`id: ${id}\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
    return true;
  } catch { sseByTo.delete(to); return false; }
}
async function deliver(m) {
  const ok = sseWrite(m.to, 'message', recordOf(m), m.seq);
  m.state = ok ? 'sent' : 'queued';
  await hapUpdate(hap.messageWs, m.rowId, [['biz_state', m.state], ['biz_row_utime', today()]]);
}
async function deliverPending(to, stream) {
  // 未确认集：state ∈ {queued, sent} 全部补发（不管 Last-Event-ID——业务可靠性不依赖游标）
  const pend = [...msgIdx.values()].filter(m => m.to === to && (m.state === 'queued' || m.state === 'sent')).sort((a, b) => a.seq - b.seq);
  for (const m of pend) {
    stream.write(`event: message\nid: ${m.seq}\ndata: ${JSON.stringify(recordOf(m))}\n\n`);
    m.state = 'sent';
    await serial(() => hapUpdate(hap.messageWs, m.rowId, [['biz_state', 'sent'], ['biz_row_utime', today()]]));
  }
  return pend.length;
}
// 投递循环：queued 且对端在线 → 推
setInterval(() => {
  for (const m of [...msgIdx.values()]) {
    if (m.state === 'queued' && sseByTo.has(m.to)) serial(() => deliver(m)).catch(e => console.error('[deliver]', e.message));
  }
}, 2000);

// ---------- 路由 ----------
const routes = [];
const route = (method, pattern, fn) => routes.push({ method, pattern, fn });

// A2A 发现
route('GET', /^\/\.well-known\/agent-card\.json$/, (req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({
    name: 'FSJ A2A Mailbox', version: '1.3.0',
    supportedInterfaces: [{ url: cfg.publicUrl || `http://localhost:${PORT}`, protocolBinding: 'HTTP+JSON', protocolVersion: cfg.protocolVersion || '1.0' }],
    capabilities: { streaming: true },
    securitySchemes: { bearer: { type: 'http' } }, security: [{ bearer: [] }],
  }));
});

// 投递（msg_id 幂等入口）
route('POST', /^\/a2a\/message:send$/, async (req, res, body, agent) => {
  const { msg_id, task_id, to, payload } = body;
  if (!msg_id || !to || !payload) return deny(res, 400, 'msg_id/to/payload required');
  const exist = msgIdx.get(msg_id);
  if (exist) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ ok: true, duplicate: true, message: recordOf(exist) })); }
  const m = { msg_id, task_id: task_id || msg_id, from: agent, to, state: 'queued', seq: (seqByTo.get(to) || 0) + 1, attempt: 0, payload, error: '' };
  await serial(async () => {
    m.rowId = await hapCreate(hap.messageWs, [
      ['biz_msg_id', m.msg_id], ['biz_task_id', m.task_id], ['biz_from', m.from], ['biz_to', m.to],
      ['biz_state', m.state], ['biz_seq', String(m.seq)], ['biz_delivery_attempt', '0'],
      ['biz_payload', typeof m.payload === 'string' ? m.payload : JSON.stringify(m.payload)],
      ['biz_row_ctime', today()], ['biz_row_utime', today()],
    ]);
    msgIdx.set(m.msg_id, m); seqByTo.set(m.to, m.seq);
    await deliver(m);
  });
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: true, duplicate: false, message: recordOf(m) }));
});

// A2A 标准任务查询
route('GET', /^\/a2a\/tasks\/([^/]+)$/, (req, res, _b, _a, ms) => {
  const t = taskIdx.get(decodeURIComponent(ms[1]));
  if (!t) return deny(res, 404, 'task not found');
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(taskOf(t)));
});

// Mailbox：收件流（SSE）
route('GET', /^\/mailbox\/inbox\/stream$/, async (req, res, _b, agent, _m, url) => {
  res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive' });
  res.write(`event: hello\ndata: {"agent":"${agent}","protocol":"mailbox/1.3"}\n\n`);
  sseByTo.set(agent, res);
  const lastId = req.headers['last-event-id'];
  const n = await deliverPending(agent, res);
  console.error(`[inbox] ${agent} connected (last-event-id=${lastId || '-'}, pending=${n})`);
  const hb = setInterval(() => { try { res.write(`: hb ${Date.now()}\n\n`); } catch {} }, 15000);
  req.on('close', () => { clearInterval(hb); if (sseByTo.get(agent) === res) sseByTo.delete(agent); });
});

// Mailbox：ACK（仅 delivered）
route('POST', /^\/mailbox\/ack$/, async (req, res, body, agent) => {
  const m = msgIdx.get(body.msg_id);
  if (!m || m.to !== agent) return deny(res, 404, 'message not found');
  if (m.state !== 'delivered') {
    m.state = 'delivered';
    await serial(() => hapUpdate(hap.messageWs, m.rowId, [['biz_state', 'delivered'], ['biz_row_utime', today()]]));
  }
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: true, message: recordOf(m) }));
});

// Mailbox：接单（claim_request_id 幂等 + generation 接管递增 + 有效租约拒抢）
route('POST', /^\/mailbox\/tasks\/claim$/, async (req, res, body, agent) => {
  const { task_id, claim_request_id } = body;
  if (!task_id || !claim_request_id) return deny(res, 400, 'task_id/claim_request_id required');
  let t = taskIdx.get(task_id);
  if (!t) {
    t = { rowId: null, task_id, title: body.title || task_id, state: 'submitted', generation: 0,
      lease_until: null, execution_attempt: 0, claim_request_id: '', result_id: '', result: '', error: '' };
    taskIdx.set(task_id, t);
  }
  if (['completed', 'failed', 'canceled'].includes(t.state)) return deny(res, 409, 'task in terminal state, cannot claim');
  // 同 agent 同 claim_request_id 重试 → 返回原租约，generation 不递增
  if (t.claim_request_id === claim_request_id && t.generation > 0) {
    res.writeHead(200, { 'content-type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, duplicate: true, task: taskOf(t) }));
  }
  const leaseValid = t.lease_until && new Date(t.lease_until.replace(' ', 'T') + 'Z') > new Date();
  if (leaseValid) return deny(res, 409, `lease held until ${t.lease_until}`);
  // 接管/首次接单：generation+1
  t.generation += 1; t.execution_attempt += 1; t.claim_request_id = claim_request_id;
  t.state = 'working'; t.lease_until = nowIso();
  await serial(async () => {
    const pairs = [['biz_state', t.state], ['biz_lease_generation', String(t.generation)],
      ['biz_lease_until', t.lease_until], ['biz_execution_attempt', String(t.execution_attempt)],
      ['biz_claim_request_id', t.claim_request_id], ['biz_row_utime', today()]];
    if (body.title && !t.rowId) pairs.push(['biz_title', body.title]);
    if (!t.rowId) t.rowId = await hapCreate(hap.taskWs, pairs);
    else await hapUpdate(hap.taskWs, t.rowId, pairs);
  });
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: true, duplicate: false, task: taskOf(t) }));
});

// Mailbox：续租（只延 lease_until，不递增 generation）
route('POST', /^\/mailbox\/lease\/renew$/, async (req, res, body) => {
  const t = taskIdx.get(body.task_id);
  if (!t) return deny(res, 404, 'task not found');
  if (Number(body.generation) !== t.generation) return deny(res, 409, 'stale generation');
  t.lease_until = nowIso();
  await serial(() => hapUpdate(hap.taskWs, t.rowId, [['biz_lease_until', t.lease_until], ['biz_row_utime', today()]]));
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: true, lease_until: t.lease_until }));
});

// Mailbox：结果回执（result_id 幂等 + generation fencing 四重校验，单实例串行）
route('POST', /^\/mailbox\/results$/, async (req, res, body) => {
  const { task_id, generation, result_id, result, error, failed } = body;
  const t = taskIdx.get(task_id);
  if (!t) return deny(res, 404, 'task not found');
  if (t.result_id === result_id) { // 同 result_id 重试 → 返回已存结果（响应丢失安全重试）
    res.writeHead(200, { 'content-type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, duplicate: true, task: taskOf(t) }));
  }
  if (['completed', 'failed', 'canceled'].includes(t.state)) return deny(res, 409, `task already ${t.state} with different result_id — refuse overwrite`);
  if (Number(generation) !== t.generation) return deny(res, 409, `stale generation ${generation} vs ${t.generation}`);
  if (t.lease_until && new Date(t.lease_until.replace(' ', 'T') + 'Z') < new Date()) return deny(res, 409, 'lease expired — renew or re-claim');
  const state = failed ? 'failed' : 'completed';
  t.state = state; t.result_id = result_id; t.result = result || ''; t.error = error || '';
  await serial(() => hapUpdate(hap.taskWs, t.rowId, [['biz_state', state], ['biz_result_id', result_id],
    ['biz_result', typeof result === 'string' ? result : JSON.stringify(result || '')], ['biz_error', t.error], ['biz_row_utime', today()]]));
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: true, duplicate: false, task: taskOf(t) }));
});

// ---------- HTTP 骨架 ----------
function readBody(req) {
  return new Promise((ok) => { let d = ''; req.on('data', c => d += c); req.on('end', () => { try { ok(d ? JSON.parse(d) : {}); } catch { ok({}); } }); });
}
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  for (const r of routes) {
    if (r.method !== req.method) continue;
    const m = url.pathname.match(r.pattern);
    if (!m) continue;
    try {
      const agent = authAgent(req);
      const body = req.method === 'POST' ? await readBody(req) : {};
      await r.fn(req, res, body, agent, m, url);
    } catch (e) {
      console.error('[route]', url.pathname, e.message);
      if (!res.writableEnded) deny(res, 500, e.message.slice(0, 200));
    }
    return;
  }
  deny(res, 404, 'no route');
});

loadFromHap().then(() => {
  server.listen(PORT, () => console.error(`[mailbox] v1.3 listening :${PORT} (agents: ${Object.keys(cfg.agents).join(',')})`));
}).catch(e => { console.error('[mailbox] init failed:', e.message); process.exit(1); });
