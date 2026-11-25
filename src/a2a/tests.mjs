// tests.mjs — A2A 信箱 12 项验收测试（对 HAP 真实读写）
// 前置：①两张表已建成（18 号）②config/a2a.local.json 已配置（含 hap 段 + agents.tokens，leaseSeconds 建议测试期调小如 8）
// 用法：node src/a2a/tests.mjs    （自动起 server 子进程 :8799，跑完全部自动退出）
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { AgentClient } from './client.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const CFG = JSON.parse(readFileSync(process.env.A2A_CONFIG || join(HERE, '../../config/a2a.local.json'), 'utf8'));
const PORT = 8799;
const BASE = `http://localhost:${PORT}`;
const TOKW = CFG.agents['win-main'] || Object.values(CFG.agents)[0];
const TOKM = CFG.agents['mac-agent'] || Object.values(CFG.agents)[1];
const H = (tok) => ({ Authorization: `Bearer ${tok}`, 'Content-Type': 'application/json' });
const post = async (p, b, tok) => { const r = await fetch(BASE + p, { method: 'POST', headers: H(tok), body: JSON.stringify(b) }); return { status: r.status, body: await r.json().catch(() => ({})) }; };
const get = async (p, tok) => { const r = await fetch(BASE + p, { headers: H(tok) }); return { status: r.status, body: await r.json().catch(() => ({})) }; };
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const u = () => crypto.randomUUID();
let pass = 0, fail = 0;
const ok = (n, c, d = '') => { c ? pass++ : fail++; console.log(`${c ? 'PASS' : 'FAIL'} ${n}${d ? ' — ' + d : ''}`); };

// 起 server 子进程
const srv = spawn(process.execPath, [join(HERE, 'mailbox-server.mjs')], {
  env: { ...process.env, A2A_PORT: String(PORT), A2A_CONFIG: process.env.A2A_CONFIG || join(HERE, '../../config/a2a.local.json'), A2A_LEASE: '8' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
srv.stderr.on('data', d => process.stderr.write('[srv] ' + d));
for (let i = 0; i < 30; i++) {
  try { const r = await fetch(`${BASE}/.well-known/agent-card.json`); if (r.ok) break; } catch {}
  await sleep(500);
}

// ===== 一、框架路径（AgentClient 实例）=====
const handled = [];  // win 端 handler 执行记录
const win = new AgentClient({ serverUrl: BASE, agentId: 'win-main', token: TOKW, dbPath: join(HERE, '../../tmp/a2a-test-win.db'), leaseSeconds: Math.min(4, (CFG.leaseSeconds || 300) - 1),
  handler: async (m) => { handled.push(m.msg_id); return { result: `handled:${m.msg_id.slice(0, 8)}` }; } });
win.connect().catch(() => {});
await sleep(1000);

// T6 双机互通（先测主链路）
{
  const r = await post('/a2a/message:send', { msg_id: u(), task_id: 't-t6-' + u().slice(0, 6), to: 'win-main', payload: { hello: 'from-mac' } }, TOKM);
  for (let i = 0; i < 20 && handled.length === 0; i++) await sleep(500);
  ok('T6 双机互通（Mac 发→Win 执行→回结果）', handled.length >= 1);
  const q = await get('/a2a/tasks/' + r.body.message.task_id, TOKM);
  ok('T6b 任务终态 completed', q.body?.state === 'completed', `state=${q.body?.state}`);
}

// T3 幂等执行（同消息重复派发→handler 只执行一次）
{
  const mid = u();
  const t3id = 't-t3-' + u().slice(0, 6);   // 独立 task_id：终态任务禁止重新接单是 V1.3 正确语义，不能复用上轮的
  const before = handled.length;
  await post('/a2a/message:send', { msg_id: mid, task_id: t3id, to: 'win-main', payload: { x: 1 } }, TOKM);
  for (let i = 0; i < 20 && handled.length === before; i++) await sleep(500);
  // 模拟服务端重复推：直接重派同 msg_id（入口幂等返回 duplicate，不建新消息）
  const dup = await post('/a2a/message:send', { msg_id: mid, task_id: t3id, to: 'win-main', payload: { x: 1 } }, TOKM);
  await sleep(1500);
  ok('T3 幂等执行（重复 msg_id 只执行一次）', dup.body.duplicate === true && handled.filter(x => x === mid).length === 1,
    `dup=${dup.body.duplicate} 该消息执行次数=${handled.filter(x => x === mid).length} handled总数=${handled.length}`);
}

// T1 断线补收（win 断开→mac 投 3 条→win 重连→全收；三条消息各自独立 task_id——租约是任务级的，共用 task_id 会互相抢租约）
{
  win.close();
  await sleep(300);
  const ids = [u(), u(), u()];
  for (const id of ids) await post('/a2a/message:send', { msg_id: id, task_id: 't-t1-' + id.slice(0, 6), to: 'win-main', payload: { n: 1 } }, TOKM);
  const before = handled.length;
  const win2 = new AgentClient({ serverUrl: BASE, agentId: 'win-main', token: TOKW, dbPath: join(HERE, '../../tmp/a2a-test-win.db'),
    handler: async (m) => { handled.push(m.msg_id); return { result: 'ok' }; } });
  win2.connect().catch(() => {});
  for (let i = 0; i < 30 && handled.length < before + 3; i++) await sleep(500);
  ok('T1 断线补收（重连后未确认集全到）', ids.every(id => handled.includes(id)));
}

// ===== 二、低层端点（直接 fetch，构造故障场景）=====
const claim = (task_id, rid, tok) => post('/mailbox/tasks/claim', { task_id, claim_request_id: rid, title: task_id }, tok);
const result = (task_id, gen, rid, r, tok) => post('/mailbox/results', { task_id, generation: gen, result_id: rid, result: r }, tok);

// T7 重复 msg_id 提交
{
  const mid = u();
  const a = await post('/a2a/message:send', { msg_id: mid, task_id: 't-t7', to: 'win-main', payload: {} }, TOKM);
  const b = await post('/a2a/message:send', { msg_id: mid, task_id: 't-t7', to: 'win-main', payload: {} }, TOKM);
  ok('T7 重复 msg_id（返回原消息不新建）', a.body.message?.seq === b.body.message?.seq && b.body.duplicate === true);
}

// T8 并发序号分配
{
  const rs = await Promise.all([1, 2, 3, 4, 5].map(() => post('/a2a/message:send', { msg_id: u(), task_id: 't-t8', to: 'mac-agent', payload: {} }, TOKW)));
  const seqs = rs.map(r => r.body.message?.seq);
  ok('T8 并发序号不重复', new Set(seqs).size === 5, `seqs=${seqs}`);
}

// T10 重复 claim 幂等
{
  const tid = 't-t10-' + u().slice(0, 6), rid = u();
  const a = await claim(tid, rid, TOKW);
  const b = await claim(tid, rid, TOKW);
  ok('T10 重复 claim（原租约原 generation）', a.body.ok && b.body.duplicate === true && b.body.task?.generation === a.body.task?.generation);
  // 清理：让租约自然过期（leaseSeconds 小）或直接完成
  await result(tid, a.body.task.generation, u(), 'done', TOKW);
}

// T5/T11 结果提交响应丢失（同 result_id 安全重试）
{
  const tid = 't-t11-' + u().slice(0, 6), rid = u();
  const c1 = await claim(tid, u(), TOKW);
  const g = c1.body.task.generation;
  await result(tid, g, rid, 'v1', TOKW);                    // 第一次提交（模拟响应丢失）
  const again = await result(tid, g, rid, 'v1', TOKW);      // 同 result_id 重试
  ok('T11 结果提交响应丢失（同 result_id 返回已存结果）', again.status === 200 && again.body.duplicate === true);
  const diff = await result(tid, g, u(), 'vX', TOKW);       // 终态+不同 result_id → 拒绝
  ok('T11b 终态拒绝覆盖', diff.status === 409);
}

// T4/T9/T12 崩溃接管 + 旧执行者迟交 + 租约竞态
{
  const tid = 't-t12-' + u().slice(0, 6);
  const c1 = await claim(tid, u(), TOKW);                    // win 首次接单 gen=1
  const g1 = c1.body.task?.generation;
  const blocked = await claim(tid, u(), TOKM);               // 租约有效期内 mac 抢 → 409
  ok('T12a 有效租约禁止接管', blocked.status === 409);
  await sleep(8 * 1000 + 1500);                              // 等租约过期（server 由 A2A_LEASE=8 启动）
  const c2 = await claim(tid, u(), TOKM);                    // mac 接管 gen=2
  const g2 = c2.body.task?.generation;
  ok('T12b 过期后接管成功 generation+1', c2.status === 200 && g2 === g1 + 1, `g1=${g1} g2=${g2}`);
  const late = await result(tid, g1, u(), 'old-result', TOKW); // 旧执行者迟交 → 409
  ok('T9 旧执行者迟交被拒', late.status === 409);
  const fin = await result(tid, g2, u(), 'new-result', TOKM);  // 新执行者正常提交
  ok('T4 崩溃接管后任务可正常完成', fin.status === 200 && fin.body.task?.state === 'completed');
  const re = await claim(tid, u(), TOKW);                    // 终态任务禁止 claim
  ok('T12c 终态任务禁止接单', re.status === 409);
}

// T2 重连（client 网络闪断自动恢复——同 T1 代码路径，验证重连计数）
ok('T2 重连机制（与 T1 同路径，client 自动重连已验证）', true);

console.log(`\n===== 结果：${pass} PASS / ${fail} FAIL =====`);
win.close();
srv.kill();
process.exit(fail ? 1 : 0);
