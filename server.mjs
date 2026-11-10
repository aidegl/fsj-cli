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
const DOC_ROOTS = (process.argv[5] ? process.argv[5].split(',') : ROOTS).map(p => resolve(p.trim()));   // 体检用的文档扫描根（fsj-id 索引来源）
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



const persistIdx = () => { try {                                                     // 合并写（11-02 无名修）：先并回磁盘上别人补的条目再写——禁全量覆盖抹掉外部编辑
  let disk = {}; try { disk = JSON.parse(readFileSync(IDX, 'utf8')); } catch (e) {}
  for (const k of Object.keys(disk)) if (!idIndex[k]) idIndex[k] = disk[k];
  writeFileSync(IDX, JSON.stringify(idIndex, null, 2), 'utf8'); } catch (e) {} };
const SKIP_DIRS = new Set(['.git', 'node_modules', '.obsidian']);
async function scanIds(needId) {                                         // 全盘扫各根的 .md/.txt 文件头，找 fsj-id
  async function walk(dir, depth) {
    if (depth > 8) return;
    let ents = [];
    try { ents = await fsp.readdir(dir, { withFileTypes: true }); } catch (e) { return; }
    for (const e of ents) {
      if (e.name.startsWith('.') && e.name !== '.claude' || SKIP_DIRS.has(e.name)) continue;   /* .claude 放行（11-02 无名修）：全局技能文件住 ~/.claude/skills，点目录一律跳过会让技能永远扫不到 */
      const full = join(dir, e.name);
      if (e.isDirectory()) await walk(full, depth + 1);
      else if (/\.(md|txt)$/i.test(e.name)) {
        try {
          const fh = await fsp.open(full, 'r');
          const buf = Buffer.alloc(2048);
          const { bytesRead } = await fh.read(buf, 0, 2048, 0);
          await fh.close();
          const m = /^(?:fsj_id|fsj-id):\s*(\S+)\s*$/m.exec(buf.slice(0, bytesRead).toString('utf8'));   // fsj_id 正身（11-03 东城定 snake_case），fsj-id 旧键过渡兼容
          if (m) { idIndex[m[1]] = { path: full }; if (m[1] === needId) return true; }
        } catch (e) {}
      }
    }
    return false;
  }
  for (const r of ROOTS) { if (await walk(r, 0)) break; }                // 找到即止
  persistIdx();
}

// ===== 世界树体检（11-09 小风加）：只读体检——维度分布/挂文档率/断链/孤文/双份 =====
// 注：维度中文名不在服务端硬编码（维度词属内核词汇，页面侧映射；本仓隐身铁律=零核心痕迹）
const AUDIT_SKIP = new Set(['node_modules', '.git', '__pycache__', 'memory-lab', '.venv', 'temp', 'logs']);
let _auditCache = { at: 0, data: null };
async function auditAll(force) {
  if (!force && _auditCache.data && Date.now() - _auditCache.at < 60000) return _auditCache.data;
  const reg = loadRegistry();
  const targets = [];
  for (const f of readdirSync(TREES)) if (f.endsWith('.json') && !EXCLUDE.has(f)) targets.push({ name: f.replace(/\.json$/, ''), path: join(TREES, f) });
  for (const [name, p] of Object.entries(reg)) if (!targets.some(t => t.name === name)) targets.push({ name, path: p });
  // 文档索引：扫 DOC_ROOTS，读 frontmatter 的 fsj_id
  const docIndex = {}; const mdCount = {}; let mdTotal = 0;
  for (const root of DOC_ROOTS) {
    let n = 0;
    const walk = async (dir) => {
      let ents; try { ents = await fsp.readdir(dir, { withFileTypes: true }); } catch (e) { return; }
      for (const e of ents) {
        if (AUDIT_SKIP.has(e.name)) continue;
        const full = join(dir, e.name);
        if (e.isDirectory()) { await walk(full); continue; }
        if (!/\.md$/i.test(e.name)) continue;
        n++; mdTotal++;
        try {
          const fh = await fsp.open(full, 'r'); const buf = Buffer.alloc(2048);
          const { bytesRead } = await fh.read(buf, 0, 2048, 0); await fh.close();
          const m = /^(?:fsj_id|fsj-id):\s*(\S+)\s*$/m.exec(buf.slice(0, bytesRead).toString('utf8'));
          if (m) docIndex[m[1]] = full;
        } catch (e) {}
      }
    };
    await walk(root); mdCount[root] = n;
  }
  // 逐树体检
  const usedRefs = new Set(); const trees = [];
  for (const t of targets) {
    let tree = null; try { tree = JSON.parse(readFileSync(t.path, 'utf8')); } catch (e) {}
    if (!tree) { trees.push({ name: t.name, path: t.path, error: '读不出/非 JSON' }); continue; }
    const nodes = [];
    (function walk(n, depth) {
      if (!n || typeof n !== 'object') return;
      nodes.push({ title: n.title || n.name || '(无题)', dim: n.dimension, depth, body: String(n.docRef || n.body || '') });   // docRef 为正身字段；body 兼容旧树
      (n.children || []).forEach(c => walk(c, depth + 1));
    })(tree, 0);
    const dims = {}; let bound = 0, empty = 0, pathBody = 0; const refs = new Set();
    for (const n of nodes) {
      const d = String(n.dim); dims[d] = (dims[d] || 0) + 1;
      const ms = [...n.body.matchAll(/fsj:\/\/([0-9a-zA-Z-]+)/g)].map(m => m[1]);
      if (ms.length) { bound++; ms.forEach(r => { refs.add(r); usedRefs.add(r); }); }
      else if (!n.body.trim()) empty++;
      else pathBody++;
    }
    const broken = [...refs].filter(r => !docIndex[r]);
    const src = /fsj4/i.test(t.path) ? 'fsj4' : (/fsj3/i.test(t.path) ? 'fsj3' : '其它');
    trees.push({
      name: t.name, title: tree.title || t.name, path: t.path, src,
      nodes: nodes.length, maxDepth: nodes.reduce((m, n) => Math.max(m, n.depth), 0),
      dims, bound, empty, pathBody, refs: refs.size, broken,
      bindRate: nodes.length ? +(bound / nodes.length * 100).toFixed(1) : 0,
    });
  }
  // 双份检测：同内容（sha1）不同路径 = 同一棵树的两份拷贝
  const byHash = {};
  for (const t of targets) {
    let h = null; try { h = (await import('crypto')).createHash('sha1').update(readFileSync(t.path)).digest('hex'); } catch (e) {}
    if (!h) continue;
    (byHash[h] = byHash[h] || []).push(t.path);
  }
  const dupGroups = Object.values(byHash).filter(v => v.length > 1);
  const orphans = Object.keys(docIndex).filter(id => !usedRefs.has(id));
  // 盲区检测：文档根之外的一级目录 = 搬家过去就扫不到、id 会悬空的地方（只列目录名，浅层计数）
  const blindSpots = [];
  try {
    const base = 'D:/Item';
    for (const e of readdirSync(base, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      const full = resolve(base, e.name);
      if (DOC_ROOTS.some(r => full === r || full.startsWith(r + sep))) continue;
      let md = 0;
      try { for (const f of readdirSync(full)) if (/\.md$/i.test(f)) md++; } catch (err) {}
      blindSpots.push({ dir: full, mdTop: md });
    }
  } catch (e) {}
  const data = {
    at: new Date().toISOString(), docRoots: DOC_ROOTS, mdTotal, mdCount, idCount: Object.keys(docIndex).length,
    trees, brokenTotal: trees.reduce((s, t) => s + (t.broken ? t.broken.length : 0), 0),
    orphanTotal: orphans.length, orphans: orphans.slice(0, 200), dupGroups, blindSpots,
  };
  _auditCache = { at: Date.now(), data };
  return data;
}

// ===== HAP user 表云端世界树（11-10 东城令）：本地树保留，云端正身起步——读清单/读树/存树走 MCP 正身 =====
const HAP_MCP = 'file:///D:/Item/fsj4/agents/108/026%C2%B7limuchen/workspace/tmp/hap-mcp.mjs';  // 慕尘 MCP 正身（argv 清空后 import，防误触发其 CLI）
const HAP_APP = '203def35-81c1-4930-9ea4-9ded2d92e489';    // 108将世界 app（user 表所在）
const HAP_USER_WS = '69b0077358322d512e60bad0';            // user 表（world_tree 字段在此）
let _hap = null;
async function hapTool(){ if(!_hap){ const _a=process.argv; process.argv=[_a[0],_a[1]]; const m=await import(HAP_MCP); process.argv=_a; _hap=m.callTool; } return _hap; }

const send = (res, code, body, type = 'application/json; charset=utf-8') => {  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' });
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
    if (u.pathname === '/api/hap-users' && req.method === 'GET') {   // 云端成员清单：world_tree 非空者
      try {
        const tool = await hapTool();
        const r = await tool('get_record_list', { appId: HAP_APP, worksheet_id: HAP_USER_WS, pageIndex: 1, pageSize: 500 });
        const rows = (r?.data?.rows) || [];
        const users = rows.filter(x => x.world_tree && String(x.world_tree).trim()).map(x => ({ rowid: x.rowid || x.rowId, name: x.cn_name || x.nickname || x.en_name || String(x.rowid||'').slice(0,8) }));
        return send(res, 200, JSON.stringify({ total: rows.length, users }));
      } catch (e) { return send(res, 502, JSON.stringify({ error: 'HAP 读失败：' + String(e.message || e).slice(0, 120) })); }
    }
    if (u.pathname === '/api/hap-tree' && req.method === 'GET') {    // 读某成员云端树
      const rowid = u.searchParams.get('rowid') || '';
      if (!/^[0-9a-f-]{8,}$/i.test(rowid)) return send(res, 400, '{"error":"bad rowid"}');
      try {
        const tool = await hapTool();
        const r = await tool('get_record_details', { appId: HAP_APP, worksheet_id: HAP_USER_WS, row_id: rowid });
        const rec = r?.data || r || {};
        const wt = rec.world_tree !== undefined ? rec.world_tree : (rec.fields || {}).world_tree;
        const str = typeof wt === 'string' ? wt : JSON.stringify(wt ?? '');
        return send(res, 200, JSON.stringify(JSON.parse(str)));      // 坏 JSON 如实 500
      } catch (e) { return send(res, 502, JSON.stringify({ error: 'HAP 读树失败：' + String(e.message || e).slice(0, 160) })); }
    }
    if (u.pathname === '/api/hap-tree-save' && req.method === 'POST') { // 存回云端（写走 MCP 正身，全留痕）
      let b = ''; req.on('data', c => b += c);
      req.on('end', async () => {
        try {
          const j = JSON.parse(b || '{}');
          if (!/^[0-9a-f-]{8,}$/i.test(j.rowid || '')) return send(res, 400, '{"error":"bad rowid"}');
          const tree = typeof j.tree === 'string' ? JSON.parse(j.tree) : j.tree;   // 非法树 JSON 会抛
          const tool = await hapTool();
          await tool('update_record', { appId: HAP_APP, worksheet_id: HAP_USER_WS, row_id: j.rowid, fields: [{ id: 'world_tree', value: JSON.stringify(tree) }] });
          console.log('[hap-tree-save] ' + j.rowid + ' ' + new Date().toISOString());
          return send(res, 200, '{"ok":true}');
        } catch (e) { return send(res, 500, JSON.stringify({ error: 'HAP 存树失败：' + String(e.message || e).slice(0, 160) })); }
      });
      return;
    }
    if (u.pathname === '/api/audit' && req.method === 'GET') {
      // 世界树体检（11-09 小风加）：维度分布 / 挂文档率 / 断链 / 孤文 / 双份检测 —— 只读，不改任何数据
      const a = await auditAll();
      return send(res, 200, JSON.stringify(a));
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
        const md = '---\nfsj_id: ' + fid + '\ntitle: "' + t + '"\nctime: ' + today + '\nutime: ' + today + '\n---\n\n' + content.replace(/\r\n/g, '\n');
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
        const m = /^---\r?\n[\s\S]*?^(?:fsj_id|fsj-id):\s*(\S+)\s*$/m.exec(b.slice(0, 400));   // 写入时顺手登记 id 索引（双键兼容，11-03 起 writes 走 fsj_id）
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
