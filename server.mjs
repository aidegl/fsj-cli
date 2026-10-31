#!/usr/bin/env node
// world-editor 同步服务（实验室用）——多树版 v2
// 用法：node server.mjs [端口] [trees目录] [逗号分隔的文档根目录]
// 接口：GET /api/trees（树清单）· GET/PUT /api/tree?name=X（读写某棵树）· GET/PUT /api/file?path=X（多根探测）· / 托管编辑页
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, appendFileSync, promises as fsp } from 'fs';
import { dirname, join, resolve, sep } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.argv[2]) || 8330;
const TREES = resolve(process.argv[3] || join(HERE, 'tests', 'fixtures'));
const ROOTS = (process.argv[4] ? process.argv[4].split(',') : [HERE]).map(p => resolve(p.trim()));
const PAGE = join(HERE, 'world-editor.html');

// ===== 沙箱开关（10-28 东城令）：默认关=只许三根内；开=可访问授权根之外（越界访问全留痕） =====
const SBX = join(TREES, 'sandbox.json');
let sandboxOpen = true;   // 默认不限制（10-31 东城令）：沙箱默认开放，sandbox.json 显式 allowOutside:false 才关
try { if (existsSync(SBX)) sandboxOpen = JSON.parse(readFileSync(SBX, 'utf8')).allowOutside !== false; } catch (e) {}
const setSandbox = (v) => { sandboxOpen = v === true; try { mkdirSync(TREES, { recursive: true }); writeFileSync(SBX, JSON.stringify({ allowOutside: sandboxOpen }, null, 2), 'utf8'); } catch (e) {} console.log('[sandbox] ' + (sandboxOpen ? '开启（越界访问将逐条留痕）' : '关闭')); };

// ===== id 全局定位（TREE-SPEC v0.2 §7.2）：索引缓存 + 全盘扫 frontmatter =====
// ===== 多树注册表（10-29 东城令：记忆在各自工作路径）——registry.json: {树名: 绝对路径} =====
const REG = join(TREES, 'registry.json');
const loadRegistry = () => { try { return existsSync(REG) ? JSON.parse(readFileSync(REG, 'utf8')) : {}; } catch (e) { return {}; } };
const EXCLUDE = new Set(['id-index.json', 'sandbox.json', 'registry.json', '.fsj.json']);   // 索引/配置/注册表不是树

const IDX = join(TREES, 'id-index.json');
let idIndex = {};
try { if (existsSync(IDX)) idIndex = JSON.parse(readFileSync(IDX, 'utf8')); } catch (e) {}
// ===== qivi WS 推送（10-30 东城令：迁移到自有 wss://100000whys.cn/ws，SSE 退役）=====
let qiviWS = null;
let qiviWSClients = 0;
const qiviBroadcast = (obj) => { if (qiviWS && qiviWS.readyState === 1) { qiviWS.send(JSON.stringify({ type: 'broadcast', channel: 'qivi', data: obj })); return true; } return false; };
const qiviWSConnect = () => {
  let cfg = {}; try { cfg = JSON.parse(readFileSync(join(HERE, 'ws.json'), 'utf8')); } catch (e) {}
  if (!cfg.url) return;
  const url = cfg.token ? cfg.url + '?token=' + encodeURIComponent(cfg.token) : cfg.url;
  try {
    qiviWS = new WebSocket(url);
    qiviWS.onopen = () => console.log('[qivi-ws] 已连上 ' + cfg.url);
    qiviWS.onclose = () => { console.log('[qivi-ws] 断线，5s 重连'); qiviWS = null; setTimeout(qiviWSConnect, 5000); };
    qiviWS.onerror = () => {};
  } catch (e) { console.log('[qivi-ws] 连接失败：' + e.message); setTimeout(qiviWSConnect, 5000); }
};
qiviWSConnect();

// ===== 提案通道（10-31 东城令 → 同日简化：纯 JSON 轮询，无 WS——历史文件即队列，pending=有 proposed 无 decided）
const todayStr = () => new Date().toISOString().slice(0, 10);
const resolveTreeFile = (name) => {                     // 复用 /api/tree 的正身解析：注册表优先
  const reg = loadRegistry();
  if (reg[name]) return reg[name];
  const n = String(name).replace(/[^\w一-鿿-]/g, '');
  const f = join(TREES, n + '.json');
  return f.startsWith(TREES + sep) ? f : null;
};
const findNode = (root, id) => {
  if (root.id === id) return root;
  for (const c of root.children || []) { const r = findNode(c, id); if (r) return r; }
  return null;
};
const applyOp = (op) => {                               // op: add/update/delete/move——单写通道，服务端落树
  const f = resolveTreeFile(op.tree);
  if (!f || !existsSync(f)) throw new Error('树不存在：' + op.tree);
  const root = JSON.parse(readFileSync(f, 'utf8'));
  const touch = (n) => { n.utime = todayStr(); };
  if (op.op === 'add') {
    const p = findNode(root, op.parentId); if (!p) throw new Error('父节点不存在：' + op.parentId);
    const exist = findNode(root, op.node.id);                /*返工：同 id 已存在=替换不重复建（10-31）*/
    if (exist) { const cut = (n) => { const ch = n.children || []; const i2 = ch.findIndex(c => c.id === op.node.id); if (i2 >= 0) { ch.splice(i2, 1); return true; } return ch.some(cut); }; cut(root); }
    p.children = p.children || []; p.children.push(op.node); touch(p); touch(op.node);
  } else if (op.op === 'update') {
    const n = findNode(root, op.id); if (!n) throw new Error('节点不存在：' + op.id);
    Object.assign(n, op.fields); touch(n);
  } else if (op.op === 'delete') {
    const cut = (n) => { const ch = n.children || []; const i = ch.findIndex(c => c.id === op.id); if (i >= 0) { ch.splice(i, 1); return true; } return ch.some(cut); };
    if (!cut(root)) throw new Error('节点不存在：' + op.id);
  } else if (op.op === 'move') {
    const n = findNode(root, op.id); const old = findNode(root, op.newParentId); if (!n || !old) throw new Error('节点不存在');
    const cut2 = (x) => { const ch = x.children || []; const i = ch.findIndex(c => c.id === op.id); if (i >= 0) { ch.splice(i, 1); return true; } return ch.some(cut2); };
    cut2(root); (old.children = old.children || []).push(n); touch(n); touch(old);
  } else throw new Error('未知 op：' + op.op);
  writeFileSync(f, JSON.stringify(root, null, 2), 'utf8');
  return true;
};
const PROPOSAL_LOG = 'D:/Item/fsj/tmp-api/proposal-results.jsonl';



const persistIdx = () => { try { writeFileSync(IDX, JSON.stringify(idIndex, null, 2), 'utf8'); } catch (e) {} };
const SKIP_DIRS = new Set(['.git', 'node_modules', '.obsidian']);
async function scanIds(needId) {                                         // 全盘扫各根的 .md/.txt 文件头，找 fsj-id
  async function walk(dir, depth) {
    if (depth > 8) return;
    let ents = [];
    try { ents = await fsp.readdir(dir, { withFileTypes: true }); } catch (e) { return; }
    for (const e of ents) {
      if (e.name.startsWith('.') || SKIP_DIRS.has(e.name)) continue;
      const full = join(dir, e.name);
      if (e.isDirectory()) await walk(full, depth + 1);
      else if (/\.(md|txt)$/i.test(e.name)) {
        try {
          const fh = await fsp.open(full, 'r');
          const buf = Buffer.alloc(2048);
          const { bytesRead } = await fh.read(buf, 0, 2048, 0);
          await fh.close();
          const m = /^fsj-id:\s*(\S+)\s*$/m.exec(buf.slice(0, bytesRead).toString('utf8'));
          if (m) { idIndex[m[1]] = { path: full }; if (m[1] === needId) return true; }
        } catch (e) {}
      }
    }
    return false;
  }
  for (const r of ROOTS) { if (await walk(r, 0)) break; }                // 找到即止
  persistIdx();
}

const send = (res, code, body, type = 'application/json; charset=utf-8') => {
  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' });
  res.end(body);
};
const treePath = (name) => {
  const n = String(name || '').replace(/[^\w一-鿿-]/g, '');   // 树名白名单：字母数字中文连字符
  if (!n) return null;
  const f = join(TREES, n + '.json');
  return f.startsWith(TREES + sep) ? f : null;
};
// 文档多根探测：绝对路径直接验根；根相对（/开头）与普通相对路径逐根试；沙箱开启时允许越界（留痕）
const docPath = (p) => {
  const raw = String(p || '');
  if (!raw) return null;
  const cands = [];
  if (resolve(raw) === raw) cands.push(resolve(raw));
  else for (const r of ROOTS) cands.push(resolve(r, /^[\/\\]/.test(raw) ? '.' + raw : raw));
  const hit = cands.find(c => ROOTS.some(rt => c.startsWith(rt + sep)) && existsSync(c));
  if (hit) return hit;
  if (sandboxOpen) {
    const out = cands.find(c => existsSync(c));
    if (out) { console.log('[sandbox-open] 越界访问：' + out); return out; }
  }
  return null;
};

createServer(async (req, res) => {
  const u = new URL(req.url, 'http://x');
  if (req.method === 'OPTIONS') {                                    // 跨域预检（file:// 与 Live Preview 打开编辑页时触发）
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400' });
    return res.end();
  }
  try {
    if (u.pathname === '/api/trees' && req.method === 'GET') {
      const reg = loadRegistry();
      const dirTrees = readdirSync(TREES).filter(f => f.endsWith('.json') && !EXCLUDE.has(f)).map(f => {
        try { return { name: f.replace(/\.json$/, ''), title: JSON.parse(readFileSync(join(TREES, f), 'utf8')).title || f }; }
        catch (e) { return { name: f.replace(/\.json$/, ''), title: f }; }
      });
      const regTrees = Object.entries(reg).map(([name, p]) => {
        if (dirTrees.some(d => d.name === name)) return null;            // 目录里已有的不重复
        try { return { name, title: JSON.parse(readFileSync(p, 'utf8')).title || name }; } catch (e) { return { name, title: name }; }
      }).filter(Boolean);
      return send(res, 200, JSON.stringify([...dirTrees, ...regTrees]));
    }
    if (u.pathname === '/api/tree') {
      const reg = loadRegistry();
      const qname = u.searchParams.get('name') || 'world_tree';
      let f;
      if (reg[qname]) f = reg[qname];                                    // 注册表优先（树在各自工作路径）
      else {
        const n = String(qname).replace(/[^\w一-鿿-]/g, '');
        f = join(TREES, n + '.json');
        if (!f.startsWith(TREES + sep)) return send(res, 403, '{"error":"bad tree name"}');
      }
      if (req.method === 'GET') {
        if (!existsSync(f)) return send(res, 404, '{"error":"tree not found"}');
        return send(res, 200, readFileSync(f, 'utf8'));
      }
      if (req.method === 'PUT') {
        const LOCK = join(TREES, 'edit-lock.json');                      // 编辑锁（10-29 事故对策）：旧编辑器未刷新前禁止保存树
        try { if (existsSync(LOCK) && JSON.parse(readFileSync(LOCK, 'utf8')).locked === true) return send(res, 409, '{"error":"编辑器版本过期：请先 F5 刷新页面再保存（树处于锁定保护中）"}'); } catch (e) {}
        let b = ''; req.on('data', c => b += c);
        req.on('end', () => {
          JSON.parse(b);                                             // 先验证合法 JSON 再落盘
          mkdirSync(dirname(f), { recursive: true });
          writeFileSync(f, b, 'utf8');
          send(res, 200, '{"ok":true}');
        });
        return;
      }
    }
    if (u.pathname === '/api/newdoc' && req.method === 'POST') {       // 默认目录自动建档（10-29 东城令）：没内容不建档，建档必有内容
      let b = ''; req.on('data', c => b += c);
      req.on('end', () => {
        let j; try { j = JSON.parse(b); } catch (e) { return send(res, 400, '{"error":"bad json"}'); }
        const content = String(j.content || '');
        if (!content.trim()) return send(res, 400, '{"error":"没内容不建档：正文为空的文件永不创建"}');
        let cfg = {}; try { cfg = JSON.parse(readFileSync(join(TREES, '.fsj.json'), 'utf8')); } catch (e) {}
        const dir = String(cfg.default_dir || '').trim();
        if (!dir) return send(res, 500, '{"error":"未配置默认文件地址：在 trees/.fsj.json 写 default_dir"}');
        const rdir = resolve(dir);
        if (!sandboxOpen && !ROOTS.some(rt => rdir.startsWith(rt + sep))) return send(res, 403, '{"error":"default_dir 在文档根之外且沙箱未开"}');
        const CH = 'abcdefghjkmnpqrstuvwxyz23456789';
        const fid = Array.from({ length: 12 }, () => CH[Math.floor(Math.random() * CH.length)]).join('');
        const today = new Date().toISOString().slice(0, 10);
        const t = String(j.title || '无题').replace(/[\r\n]+/g, ' ').replace(/"/g, "'");
        const md = '---\nfsj-id: ' + fid + '\ntitle: "' + t + '"\nctime: ' + today + '\nutime: ' + today + '\n---\n\n' + content.replace(/\r\n/g, '\n');
        try {
          mkdirSync(rdir, { recursive: true });
          const full = join(rdir, fid + '.md');
          writeFileSync(full, md, 'utf8');
          idIndex[fid] = { path: full }; persistIdx();                 // 建档即入索引：首次 id 寻址免全盘扫描
          console.log('[newdoc] ' + full);
          send(res, 200, JSON.stringify({ id: fid, path: full }));
        } catch (e) { send(res, 500, '{"error":"建档失败：' + String(e.message).replace(/"/g, "'") + '"}'); }
      });
      return;
    }
    if (u.pathname === '/api/reveal' && req.method === 'GET') {       // 打开文件所在管理器（10-30 东城令）：资源管理器定位，沙箱判据照走
      const hit = docPath(u.searchParams.get('path') || '');
      if (!hit) return send(res, 404, '{"error":"文件无法解析或越界（沙箱）"}');
      spawn('explorer', ['/select,' + hit], { detached: true, stdio: 'ignore' }).unref();
      return send(res, 200, '{"ok":true}');
    }
    if (u.pathname === '/minimax/t2a_v2' && req.method === 'POST') { // MiniMax TTS 代理（qivi 小人语音，10-30）——密钥在 minimax.json，不进前端
      let b = ''; req.on('data', c => b += c);
      req.on('end', async () => {
        try {
          let mm = {}; try { mm = JSON.parse(readFileSync(join(HERE, 'minimax.json'), 'utf8')); } catch (e) {}
          if (!mm.apiKey) return send(res, 500, '{"error":"minimax.json 未配置 apiKey"}');
          const r = await fetch('https://api.minimaxi.com/v1/t2a_v2', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + mm.apiKey }, body: b });
          const txt = await r.text();
          res.writeHead(r.status, { 'Content-Type': 'application/json' });
          return res.end(txt);
        } catch (e) { return send(res, 500, JSON.stringify({ error: String(e.message || e) })); }
      });
      return;
    }
    if (u.pathname === '/api/qivi-cfg' && req.method === 'GET') {    // dock 拉取 WS 连接配置（token 服务端持有，不进前端源码）
      let cfg = {}; try { cfg = JSON.parse(readFileSync(join(HERE, 'ws.json'), 'utf8')); } catch (e) {}
      return send(res, 200, JSON.stringify({ url: cfg.url || '', token: cfg.token || '' }));
    }
    if (u.pathname === '/api/qivi-log' && req.method === 'POST') {   // qivi 客户端诊断留痕（10-30 东城令：看不到浏览器内部，推回服务端记）
      let b = ''; req.on('data', c => b += c);
      req.on('end', () => { try { appendFileSync('D:/Item/fsj/tmp-api/qivi-client.log.jsonl', JSON.stringify({ t: new Date().toISOString(), ...JSON.parse(b || '{}') }) + '\n'); } catch (e) {} send(res, 200, '{"ok":true}'); });
      return;
    }
    if (u.pathname === '/api/qivi-event' && req.method === 'POST') {  // hook/任何源 推事件：本地即时反应 + 异步 n8n，全部 WS 广播
      let b = ''; req.on('data', c => b += c);
      req.on('end', () => {
        send(res, 200, '{"ok":true}');                                 // 先回 hook（绝不阻塞对话），n8n 往后异步跑
        let ev = {}; try { ev = JSON.parse(b || '{}'); } catch (e) {}
        const source = String(ev.source || '');
        if (!source.trim()) return;
        (async () => {
          try {
            /* 快意识：本地即时反应（v0 规则与 n8n 同款），毫秒级先推——10-30 东城令：体验优先 */
            let local = null;
            if (source.includes('保存') || source.includes('save')) local = { emotion: '成就', say: '树已落账，稳了', impulse: 'bounce' };
            else if (source.includes('?') || source.includes('？') || source.includes('困惑')) local = { emotion: '困惑', say: '让我想想…', impulse: 'shiver' };
            else local = { emotion: '开心', say: '收到：' + source.slice(0, 20), impulse: 'bounce' };
            qiviBroadcast({ ...local, via: 'local' });
            /* 无意识层：异步问云端 n8n，回了再补一推（覆盖本地版） */
            let sec = {}; try { sec = JSON.parse(readFileSync(join(HERE, 'n8n-secret.json'), 'utf8')); } catch (e) {}
            if (!sec.url) return;
            const headers = { 'Content-Type': 'application/json' };
            if (sec.token) headers.Authorization = 'Bearer ' + sec.token;
            const r = await fetch(sec.url, { method: 'POST', headers, body: JSON.stringify({ source }) });
            const reaction = r.ok ? await r.json().catch(() => null) : null;
            appendFileSync('D:/Item/fsj/tmp-api/n8n-heartbeat.log.jsonl', JSON.stringify({ t: new Date().toISOString(), args: { source, via: 'ws' }, status: r.status }) + '\n');
            if (reaction && (reaction.emotion || reaction.say)) qiviBroadcast({ ...reaction, via: 'n8n' });
          } catch (e) {}
        })();
      });
      return;
    }
    if (u.pathname === '/api/n8n' && req.method === 'POST') {        // n8n 代理（10-30 东城令：qivi 小人快思考通道）——密钥在服务端 n8n-secret.json，不进前端
      let b = ''; req.on('data', c => b += c);
      req.on('end', async () => {
        try {
          const { args } = JSON.parse(b || '{}');
          let sec = {}; try { sec = JSON.parse(readFileSync(join(HERE, 'n8n-secret.json'), 'utf8')); } catch (e) {}
          if (!sec.url) return send(res, 500, '{"error":"n8n-secret.json 未配置 url"}');
          const headers = { 'Content-Type': 'application/json' };
          if (sec.token) headers.Authorization = 'Bearer ' + sec.token;
          const r = await fetch(sec.url, { method: 'POST', headers, body: JSON.stringify(args || { source: 'idle-poll' }) });
          appendFileSync('D:/Item/fsj/tmp-api/n8n-heartbeat.log.jsonl', JSON.stringify({ t: new Date().toISOString(), args: args || { source: 'idle-poll' }, status: r.status }) + '\n');  // 心跳留痕（10-30 东城令：要看日志）
          if (!r.ok) return send(res, 502, JSON.stringify({ error: 'n8n HTTP ' + r.status }));
          let reaction = await r.json().catch(() => null);
          return send(res, 200, JSON.stringify({ ok: true, reaction }));
        } catch (e) { return send(res, 500, JSON.stringify({ error: String(e.message || e) })); }
      });
      return;
    }
    if (u.pathname === '/api/sandbox') {                           // 沙箱开关：GET 查询 / PUT 设置
      if (req.method === 'GET') return send(res, 200, JSON.stringify({ allowOutside: sandboxOpen }));
      if (req.method === 'PUT') {
        let b = ''; req.on('data', c => b += c);
        req.on('end', () => { setSandbox(JSON.parse(b).allowOutside); send(res, 200, JSON.stringify({ allowOutside: sandboxOpen })); });
        return;
      }
    }
    if (u.pathname === '/api/file') {
      const qid = u.searchParams.get('id');
      if (qid && req.method === 'GET') {                             // id 寻址：索引命中直取，未命中全盘扫描
        let hit = idIndex[qid] && existsSync(idIndex[qid].path) ? idIndex[qid].path : null;
        if (!hit) { await scanIds(qid); hit = idIndex[qid] && existsSync(idIndex[qid].path) ? idIndex[qid].path : null; }
        if (!hit) return send(res, 404, '{"error":"id not found in any root"}');
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*', 'X-FSJ-Path': encodeURIComponent(hit) });  // 路径可能含中文，头里必须编码
        return res.end(readFileSync(hit, 'utf8'));
      }
      const f = docPath(u.searchParams.get('path'));
      if (!f) return send(res, 403, '{"error":"path outside allowed roots"}');
      if (req.method === 'GET') return send(res, 200, readFileSync(f, 'utf8'), 'text/plain; charset=utf-8');
      let b = ''; req.on('data', c => b += c);
      req.on('end', () => {
        if (!/\.(md|txt)$/i.test(f) && b.trimStart().startsWith('---')) {           // 服务端铁律（10-28 东城令）：结构文件禁止 frontmatter——旧页面也拦得住
          return send(res, 403, '{"error":"只有 .md/.txt 允许 frontmatter——.base/.json 等结构文件保持路径指针"}');
        }
        writeFileSync(f, b, 'utf8');
        const m = /^---\r?\n[\s\S]*?^fsj-id:\s*(\S+)\s*$/m.exec(b.slice(0, 400));   // 写入时顺手登记 id 索引
        for (const k of Object.keys(idIndex)) if (idIndex[k].path === f && k !== (m && m[1])) delete idIndex[k];   // 改 id 场景：同路径旧 id 清理
        if (m) { idIndex[m[1]] = { path: f }; }
        persistIdx();
        send(res, 200, '{"ok":true}');
      });
      return;
    }
    if (u.pathname === '/api/proposal' && req.method === 'POST') {  // agent 推提案：只落档，编辑器轮询历史即取（纯 JSON，无 WS）
      let b = ''; req.on('data', c => b += c);
      req.on('end', () => {
        try {
          const j = JSON.parse(b);
          if (!Array.isArray(j.items) || !j.items.length) return send(res, 400, '{"error":"items 不能为空"}');
          const id = 'pp' + Date.now().toString(36);
          appendFileSync(PROPOSAL_LOG, JSON.stringify({ t: new Date().toISOString(), event: 'proposed', id, from: j.from || 'agent', question: String(j.question || ''), items: j.items }) + '\n');
          return send(res, 200, JSON.stringify({ ok: true, id }));
        } catch (e) { return send(res, 500, JSON.stringify({ error: String(e.message || e) })); }
      });
      return;
    }
    if (u.pathname === '/api/proposal-result' && req.method === 'POST') {  // 编辑器回传人审结果：批准项服务端落树，全部留痕
      let b = ''; req.on('data', c => b += c);
      req.on('end', () => {
        try {
          const j = JSON.parse(b);
          const results = [];
          for (const d of (j.decisions || [])) {
            let applied = false, error = null;
            if (d.action === 'approve') { try { applyOp(d.op); applied = true; } catch (e) { error = String(e.message || e); } }
            results.push({ itemId: d.itemId, title: d.title, action: d.action, text: d.text || '', applied, error });
          }
          appendFileSync(PROPOSAL_LOG, JSON.stringify({ t: new Date().toISOString(), event: 'decided', id: j.id, results }) + '\n');
          return send(res, 200, JSON.stringify({ ok: true, results }));
        } catch (e) { return send(res, 500, JSON.stringify({ error: String(e.message || e) })); }
      });
      return;
    }
    if (u.pathname === '/api/proposal-history' && req.method === 'GET') {  // 提案留痕回溯：proposed+decided 按 id 合并；只留最近3天，顺手裁日志（10-31 东城定）
      let rows = [];
      try { rows = readFileSync(PROPOSAL_LOG, 'utf8').split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch (e) { return null; } }).filter(Boolean); } catch (e) {}
      const cutoff = Date.now() - 3 * 864e5;
      const fresh = rows.filter(r => r.t && Date.parse(r.t) >= cutoff);
      if (fresh.length !== rows.length) { try { writeFileSync(PROPOSAL_LOG, fresh.map(r => JSON.stringify(r)).join('\n') + '\n', 'utf8'); } catch (e) {} }
      rows = fresh;
      const byId = new Map();
      for (const r of rows) {
        if (r.event === 'proposed') byId.set(r.id, { id: r.id, t: r.t, question: r.question, from: r.from, items: r.items, results: null });
        if (r.event === 'decided') { const e = byId.get(r.id); if (e) e.results = r.results; }
      }
      const all = [...byId.values()];
      return send(res, 200, JSON.stringify(all));   // results 为 null = 待批
    }
    if (u.pathname === '/' || u.pathname === '/world-editor.html') {
      return send(res, 200, readFileSync(PAGE, 'utf8'), 'text/html; charset=utf-8');
    }
    if (u.pathname === '/qivi-dock.iife.js') {                      // qivi 小人 bundle（10-30 东城令：极简快意识实验台）
      return send(res, 200, readFileSync(join(HERE, 'qivi-dock.iife.js')), 'application/javascript; charset=utf-8');
    }
    send(res, 404, '{"error":"not found"}');
  } catch (e) {
    send(res, 500, JSON.stringify({ error: String(e.message || e) }));
  } finally {
    console.log(`[${new Date().toTimeString().slice(0, 8)}] ${req.method} ${req.url.slice(0, 120)}`);
  }
}).listen(PORT, () => console.log(`world-editor 同步服务 v2 → http://localhost:${PORT}\n  树目录：${TREES}\n  文档根：${ROOTS.join(' | ')}\n  提案通道：ws://localhost:${PORT}/ws`));
