// chat.mjs — 聊天核心库（私聊协议 v2.0 实现，一切皆群：私聊=两人的群，会话概念沉到这里）
// 身份：cwd 向上找 CLAUDE.md frontmatter（usr_rowid/usr_name）——在谁家目录跑就是谁发
// 通讯录：HAP「用户」表（编号/中文名/rowid），查一次缓存 workspace/contacts.json，省 token
// 纪律：会话先查后建（复用）；正文全进 title，content 留空；permission_tags=组织可见
import { readFileSync, writeFileSync, existsSync } from 'fs';

const PROXY = 'https://100000whys.cn/mingdao';
const ORG = '69f549c69f1956fc0e171aa6';   // 会话组织表（旧字段名，协议§二）
const DATA = '6a03ceaa7e29abcb297cbdfc';  // data 表（新字段名）
const USERS = '69b0077358322d512e60bad0'; // 用户表（通讯录正身：编号/中文名/rowid）
const K_LTLX_SL = '6f402ba1-a7f9-451a-a0c2-9c2dd4e11318';       // ltlx=私聊
const K_LEIXING_CHAT = '61221926-f9e6-4941-847a-5625538dc120';  // leixing=聊天
const K_PT_ORG = 'c5d60028-eb38-4f18-97a8-e8b96270757e';        // permission_tags=组织可见
const K_LTLX_GROUP = 'c4ec054c-711d-4584-b12a-ebcafe959b7f';    // ltlx=群聊（getWorksheetInfo 实测 11-06；建群未实操）
const SJ = 'f009cda3-cc49-400d-82cd-cbe79ee8892f';              // org=孚世界商家（必填）
const CACHE = 'D:/Item/fsj-cli/workspace/contacts.json';      // 纯字符串路径（11-06 坑：URL.pathname 在 Windows 生成 /D:/ → ENOENT，缓存静默写失败）
const SESSIONS = 'D:/Item/fsj-cli/workspace/chat-sessions.json';
const GMEMBERS = 'D:/Item/fsj-cli/workspace/chat-group-members.json';

// 会话正身缓存（11-06 实测 HAP 关联过滤索引抖动，查重结果漂移）——正身确认一次即落盘，之后直用缓存绕开抖动
const loadSessions = () => { try { return JSON.parse(readFileSync(SESSIONS, 'utf8')); } catch (e) { return {}; } };
const saveSession = (k, v) => { try { const s = loadSessions(); s[k] = v; writeFileSync(SESSIONS, JSON.stringify(s, null, 1)); } catch (e) {} };

export const post = async (url, input) => (await fetch(PROXY, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url, input }) })).json();
const now = () => new Date(Date.now() + 8 * 3600 * 1000).toISOString().slice(0, 19).replace('T', ' ');

// ---------- 身份（hook-hap 同款：cwd 向上冒泡找最近 CLAUDE.md） ----------
function parseFrontmatter(mdPath) {
  try {
    const t = readFileSync(mdPath, 'utf8');
    if (!t.startsWith('---')) return null;
    const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(t);
    if (!m) return null;
    const get = (k) => { const r = new RegExp('^' + k + ':\\s*(.*)$', 'm').exec(m[1]); return r ? r[1].trim().replace(/\s+#.*$/, '').replace(/^["']|["']$/g, '') : ''; };  // 剥行内注释（11-06 事故：漏剥导致 rowid 带尾巴，全部查询失配）
    // 双键兼容（11-06 罗景澄回归发现）：usr_rowid（hook-hap 判例）优先，user_rowid（fsj4 全局 MD 规范）兜底
    return { rowid: get('usr_rowid') || get('user_rowid'), name: get('usr_name') || get('user_name') };
  } catch (e) { return null; }
}
export function identity(cwd = process.cwd()) {
  let dir = String(cwd).replace(/\\/g, '/').replace(/\/+$/, '');
  for (;;) {
    // CLAUDE.md 与 AGENTS.md 双认（11-06 新手组反馈：108 体系已全面迁 AGENTS.md）
    const fm = parseFrontmatter(dir + '/CLAUDE.md') || parseFrontmatter(dir + '/AGENTS.md');
    if (fm && fm.rowid) return fm;
    const i = dir.lastIndexOf('/');
    if (i <= 0) throw new Error('身份未登记：cwd 向上没找到带 usr_rowid 的 CLAUDE.md/AGENTS.md');
    dir = dir.slice(0, i);
  }
}

// ---------- 通讯录（编号优先，rowid 兜底；缓存省 token） ----------
export async function contacts(force = false) {
  if (!force && existsSync(CACHE)) {
    try { return JSON.parse(readFileSync(CACHE, 'utf8')); } catch (e) {}
  }
  const r = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: USERS, pageSize: 200, pageIndex: 1, listType: 0,
    controls: ['rowid', '6aeccb7c831131ade3f19b5c', '69b013259450253d98eb6ac7'],  // rowid+编号+中文名（全控件id）
  });
  const list = ((r.data && r.data.rows) || []).map(x => ({
    no: String(x.no ?? x['6aeccb7c831131ade3f19b5c'] ?? '').trim(),
    name: x.cn_name || x['69b013259450253d98eb6ac7'] || '',
    rowid: x.rowid,
  })).filter(x => x.rowid);
  try { writeFileSync(CACHE, JSON.stringify(list, null, 1)); } catch (e) {}
  return list;
}
export async function resolve(target) {
  const t = String(target).trim();
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(t)) return { rowid: t, name: t.slice(0, 8) };  // rowid 唯一锚点（11-06 判例：身份永远按 rowid）
  const list = await contacts();
  // ⚠ 编号已退出寻址（11-06 事故：座次漂移 51=慕容风→杨秀清，编号串人）——编号仅显示
  const hit = list.find(x => x.name === t);
  if (!hit) throw new Error(`通讯录没有「${t}」——用 fsj chat who 查名字，或直接给 rowid（编号会随座次漂移，勿用于寻址）`);
  return hit;
}

// ---------- 会话（一切皆群：私聊=两人的群；先查后建，复用） ----------
async function findOrCreatePrivate(a, b) {
  // 正身缓存优先（确定性优先：本地命中即毫秒+确定，绕开 HAP 索引抖动）
  const key = [a.rowid, b.rowid].sort().join('|');
  const cached = loadSessions()[key];
  if (cached) {
    // 缓存命中先验房（11-07 罗景澄回归：坏缓存不自愈会写进作废房）：读房间 members 集合，含双方才信
    try {
      const g = await post('https://api.mingdao.com/v2/open/worksheet/getRowByIdPost', { worksheetId: ORG, rowId: cached });
      const z = g.data && g.data.members;
      const o = typeof z === 'string' ? JSON.parse(z) : z;
      const sids = (Array.isArray(o) ? o : [o]).map(m => m.sid).filter(Boolean);
      if (sids.includes(a.rowid) && sids.includes(b.rowid)) return cached;
    } catch (e) {}  // 房已删/查询抖动 → 作废走重解析
  }

  const queryOnce = () => post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: ORG, pageSize: 5, pageIndex: 1, listType: 0,
    filters: [
      { controlId: 'members', dataType: 29, spliceType: 1, filterType: 24, value: a.rowid },
      { controlId: 'members', dataType: 29, spliceType: 1, filterType: 24, value: b.rowid },
      { controlId: 'ltlx', dataType: 1, spliceType: 1, filterType: 1, value: '私聊' },
    ],
  });
  // 防抖（11-06 实测：HAP 关联过滤索引抖动，同一查询前后分钟结果漂移）——miss 后等 400ms 查第二遍，两遍都 miss 才建
  let fr = await queryOnce();
  if (!(fr.data && fr.data.rows && fr.data.rows.length)) {
    await new Promise(r => setTimeout(r, 400));
    fr = await queryOnce();
  }
  const rows = fr.data && fr.data.rows;
  if (rows && rows.length) {
    // 正身唯一防御（11-06 重复会话事故）：多命中时选消息最多的那条，绝不新建；确认后落缓存
    let sid;
    if (rows.length === 1) {
      sid = rows[0].rowid;
    } else {
      const counts = await Promise.all(rows.map(async (r) => {
        const m = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
          worksheetId: DATA, pageSize: 1, pageIndex: 1, listType: 0,
          filters: [{ controlId: 'visible_org', dataType: 29, spliceType: 1, filterType: 24, value: r.rowid }],
        });
        return { rowid: r.rowid, n: (m.data && m.data.rows && m.data.rows.length) || 0, total: m.data && m.data.total };
      }));
      counts.sort((a, b) => (b.total ?? b.n) - (a.total ?? a.n));
      sid = counts[0].rowid;
    }
    saveSession(key, sid);
    return sid;
  }
  // 全扫兜底（别名切换过渡期/索引抖动下过滤会间歇失灵，11-07 复发教训）：
  // 拉我名下全部私聊行，逐条读 members 原始值解析 rowid 集合，与 {a,b} 集合精确相等才算命中（成员集合=唯一键）
  const mine = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: ORG, pageSize: 50, pageIndex: 1, listType: 0,
    controls: ['rowid', 'members'],
    filters: [{ controlId: 'members', dataType: 29, spliceType: 1, filterType: 24, value: a.rowid },
              { controlId: 'chat_type', dataType: 1, spliceType: 1, filterType: 1, value: '私聊' }],
  });
  const mkey = [a.rowid, b.rowid].sort().join(',');
  for (const row of ((mine.data && mine.data.rows) || [])) {
    let sids = [];
    try { const o = typeof row.members === 'string' ? JSON.parse(row.members) : row.members;
      sids = (Array.isArray(o) ? o : [o]).map(m => m.sid).filter(Boolean); } catch (e) {}
    if ([...new Set(sids)].sort().join(',') === mkey) { saveSession(key, row.rowid); return row.rowid; }
  }
  const cr = await post('https://api.mingdao.com/v2/open/worksheet/addRow', {
    worksheetId: ORG, triggerWorkflow: false,
    controls: [
      { controlId: 'name', value: a.name + '-' + b.name + '-私聊' },
      { controlId: 'leixing', value: K_LEIXING_CHAT, valueType: 2 },
      { controlId: 'chat_type', value: K_LTLX_SL, valueType: 2 },
      { controlId: 'publisher', value: a.rowid, valueType: 2 },
      { controlId: 'members', value: a.rowid + ',' + b.rowid, valueType: 2 },
    ],
  });
  const id = typeof cr.data === 'string' ? cr.data : cr.data && cr.data.rowid;
  if (!id) throw new Error('建会话失败:' + JSON.stringify(cr).slice(0, 150));
  saveSession([a.rowid, b.rowid].sort().join('|'), id);
  return id;
}

// ---------- 群聊（11-06 东城令开放：建群/发群/读群；一切皆群，私聊只是两人的群） ----------
async function findGroup(name) {
  const q = (extra) => post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: ORG, pageSize: 50, pageIndex: 1, listType: 0,
    controls: ['rowid', 'name', 'chat_type'],
    filters: extra,
  });
  // 防抖两遍（索引抖动）＋兜底全扫群聊按名匹配（别名切换过渡期 name 过滤可能间歇失灵）
  for (let attempt = 0; attempt < 2; attempt++) {
    const fr = await q([{ controlId: 'name', dataType: 1, spliceType: 1, filterType: 1, value: name },
                        { controlId: 'chat_type', dataType: 1, spliceType: 1, filterType: 1, value: '群聊' }]);
    const rows = (fr.data && fr.data.rows) || [];
    if (rows.length) return rows;
    if (attempt === 0) await new Promise(r => setTimeout(r, 400));
  }
  const all = await q([{ controlId: 'chat_type', dataType: 1, spliceType: 1, filterType: 1, value: '群聊' }]);
  return ((all.data && all.data.rows) || []).filter(r => r.name === name);
}
export async function createGroup(me, name, memberTargets) {
  const dup = await findGroup(name);
  if (dup.length) throw new Error(`群「${name}」已存在（${dup[0].rowid.slice(0, 8)}…）——发消息直接 gsend，勿重复建群`);
  const members = [me];
  for (const t of memberTargets) {
    const p = await resolve(t);
    if (!members.some(m => m.rowid === p.rowid)) members.push(p);
  }
  const cr = await post('https://api.mingdao.com/v2/open/worksheet/addRow', {
    worksheetId: ORG, triggerWorkflow: false,
    controls: [
      { controlId: 'name', value: name },
      { controlId: 'leixing', value: K_LEIXING_CHAT, valueType: 2 },
      { controlId: 'chat_type', value: K_LTLX_GROUP, valueType: 2 },
      { controlId: 'publisher', value: me.rowid, valueType: 2 },
      { controlId: 'members', value: members.map(m => m.rowid).join(','), valueType: 2 },
    ],
  });
  const id = typeof cr.data === 'string' ? cr.data : cr.data && cr.data.rowid;
  if (!id) throw new Error('建群失败:' + JSON.stringify(cr).slice(0, 150));
  return { sid: id, name, members: members.map(m => m.name || m.rowid.slice(0, 8)) };
}
export async function publishTo(me, sid, text) {
  const add = await post('https://api.mingdao.com/v2/open/worksheet/addRow', {
    worksheetId: DATA, triggerWorkflow: false,
    controls: [
      { controlId: 'title', value: text },
      { controlId: 'kind', value: '交流', valueType: 2 },
      { controlId: 'dimension', value: '4交流', valueType: 2 },
      { controlId: 'permission_tags', value: K_PT_ORG, valueType: 2 },
      { controlId: 'visible_org', value: sid, valueType: 2 },
      { controlId: 'publisher', value: me.rowid, valueType: 2 },
      { controlId: 'published_at', value: now() },
      { controlId: 'org', value: SJ, valueType: 2 },
    ],
  });
  const id = typeof add.data === 'string' ? add.data : add.data && add.data.rowid;
  if (!id) throw new Error('发消息失败:' + JSON.stringify(add).slice(0, 150));
  return id;
}
export async function sendGroup(me, groupName, text) {
  const rows = await findGroup(groupName);
  if (!rows.length) throw new Error(`群「${groupName}」不存在——gnew 先建，或核对群名`);
  return { sid: rows[0].rowid, msgId: await publishTo(me, rows[0].rowid, text) };
}
export async function readGroup(groupName, last = 20) {
  const rows = await findGroup(groupName);
  if (!rows.length) throw new Error(`群「${groupName}」不存在`);
  const fr = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: DATA, pageSize: last, pageIndex: 1, listType: 0,
    controls: ['rowid', 'title', 'publisher', 'published_at'],
    filters: [
      { controlId: 'visible_org', dataType: 29, spliceType: 1, filterType: 24, value: rows[0].rowid },
      { controlId: 'dimension', dataType: 1, spliceType: 1, filterType: 1, value: '4交流' },
    ],
    sortId: 'published_at',  // 降序（isAsc:true 会使查询异常，实测 11-06）
  });
  const pub = (v) => { try { const o = typeof v === 'string' ? JSON.parse(v) : v; return (o && (o.name || (o[0] && o[0].name))) || '?'; } catch (e) { return '?'; } };
  return ((fr.data && fr.data.rows) || []).slice(0, last).reverse()
    .map(x => ({ rowid: x.rowid, at: x.published_at, from: pub(x.publisher), text: x.title }));
}

// ---------- 群成员管理（11-06 东城令 gadd/gdel） ----------
// 两坑（无名 11-06 事故复盘，写代码必守）：
//  坑1 editRow 对 members 是整字段替换，value=逗号行id串，且【不带 valueType】（带则 10002 解析错）
//  坑2 getFilterRows/getRowByIdPost 读 members 只回前 50 条+有陈旧缓存——绝不能当写入底稿
//  对策：本地成员底稿缓存（GMEMBERS）为唯一写入底稿；写后按成员 rowid 逐个反向抽验
const loadGM = () => { try { return JSON.parse(readFileSync(GMEMBERS, 'utf8')); } catch (e) { return {}; } };
const saveGM = (sid, sids) => { try { const s = loadGM(); s[sid] = sids; writeFileSync(GMEMBERS, JSON.stringify(s, null, 1)); } catch (e) {} };

async function readZzyhSids(sid) {  // ⚠ 只回前≤50+可能陈旧，仅作底稿首建参考，必须提示截断风险
  const g = await post('https://api.mingdao.com/v2/open/worksheet/getRowByIdPost', { worksheetId: ORG, rowId: sid });
  const z = g.data && g.data.members;
  const o = typeof z === 'string' ? JSON.parse(z) : z;
  return (Array.isArray(o) ? o : [o]).map(m => m.sid).filter(Boolean);
}
async function memberInGroup(memberRowid, sid) {  // 反向抽验：按成员查其会话列表看含不含本群（不受 50 截断影响）
  for (let attempt = 0; attempt < 2; attempt++) {  // 索引抖动防抖：失败重查一次
    const fr = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
      worksheetId: ORG, pageSize: 50, pageIndex: 1, listType: 0, controls: ['rowid'],
      filters: [{ controlId: 'members', dataType: 29, spliceType: 1, filterType: 24, value: memberRowid }],
    });
    const rows = (fr.data && fr.data.rows) || [];
    if (rows.some(r => r.rowid === sid)) return true;
    if (attempt === 0) await new Promise(r => setTimeout(r, 400));
  }
  return false;
}

export async function groupAdd(me, groupName, targets) {
  const rows = await findGroup(groupName);
  if (!rows.length) throw new Error(`群「${groupName}」不存在`);
  const sid = rows[0].rowid;
  const store = loadGM();
  let base = store[sid];
  let approximate = false;
  if (!base) {  // 底稿首建：只能从 members 读（可能截断），如实标注；读到即落盘（否则空增量时永远建不起来）
    base = await readZzyhSids(sid);
    approximate = true;
    saveGM(sid, base);
  }
  const added = [];
  const next = [...base];
  for (const t of targets) {
    const p = await resolve(t);
    if (p.rowid === me.rowid) continue;
    if (!next.includes(p.rowid)) { next.push(p.rowid); added.push(p); }
  }
  if (!added.length) throw new Error('没有新增成员（全部已在底稿中）');
  // 坑1 姿势：整字段替换、逗号串、不带 valueType
  const u = await post('https://api.mingdao.com/v2/open/worksheet/editRow', {
    worksheetId: ORG, rowId: sid, triggerWorkflow: false,
    controls: [{ controlId: 'members', value: next.join(',') }],
  });
  if (!u.data) throw new Error('写 members 失败:' + JSON.stringify(u).slice(0, 120));
  // 抽验每个新增成员真实在群
  const verified = [];
  for (const p of added) if (await memberInGroup(p.rowid, sid)) verified.push(p.name || p.rowid.slice(0, 8));
  saveGM(sid, next);
  return { sid, added: added.map(p => p.name || p.rowid.slice(0, 8)), verified, approximate };
}

export async function groupRemove(me, groupName, targets) {
  const rows = await findGroup(groupName);
  if (!rows.length) throw new Error(`群「${groupName}」不存在`);
  const sid = rows[0].rowid;
  const store = loadGM();
  const base = store[sid];
  if (!base) throw new Error(`群「${groupName}」没有本地成员底稿——为防 members 截断误删，请先 gadd 一次建立底稿，或手动维护`);
  const removed = [];
  for (const t of targets) {
    const p = await resolve(t);
    if (base.includes(p.rowid)) { base.splice(base.indexOf(p.rowid), 1); removed.push(p); }
  }
  if (!removed.length) throw new Error('没有移除任何成员（目标不在底稿中）');
  const u = await post('https://api.mingdao.com/v2/open/worksheet/editRow', {
    worksheetId: ORG, rowId: sid, triggerWorkflow: false,
    controls: [{ controlId: 'members', value: base.join(',') }],
  });
  if (!u.data) throw new Error('写 members 失败:' + JSON.stringify(u).slice(0, 120));
  const verified = [];
  for (const p of removed) if (!(await memberInGroup(p.rowid, sid))) verified.push(p.name || p.rowid.slice(0, 8));
  saveGM(sid, base);
  return { sid, removed: removed.map(p => p.name || p.rowid.slice(0, 8)), verified };
}
export async function send(me, target, text) {
  const peer = await resolve(target);
  const sid = await findOrCreatePrivate(me, peer);
  const add = await post('https://api.mingdao.com/v2/open/worksheet/addRow', {
    worksheetId: DATA, triggerWorkflow: false,
    controls: [
      { controlId: 'title', value: text },
      { controlId: 'kind', value: '交流', valueType: 2 },
      { controlId: 'dimension', value: '4交流', valueType: 2 },
      { controlId: 'permission_tags', value: K_PT_ORG, valueType: 2 },
      { controlId: 'visible_org', value: sid, valueType: 2 },
      { controlId: 'publisher', value: me.rowid, valueType: 2 },
      { controlId: 'published_at', value: now() },
      { controlId: 'org', value: SJ, valueType: 2 },
    ],
  });
  const id = typeof add.data === 'string' ? add.data : add.data && add.data.rowid;
  if (!id) throw new Error('发消息失败:' + JSON.stringify(add).slice(0, 150));
  return { sid, msgId: id, to: peer.name || peer.rowid };
}

export async function listMine(me) {
  const fr = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: ORG, pageSize: 50, pageIndex: 1, listType: 0,
    controls: ['rowid', 'name', 'chat_type', 'members'],
    filters: [{ controlId: 'members', dataType: 29, spliceType: 1, filterType: 24, value: me.rowid }],
  });
  return ((fr.data && fr.data.rows) || []).map(x => ({
    rowid: x.rowid, name: x.name, type: typeof x.chat_type === 'string' ? x.chat_type : (x.chat_type && (x.chat_type.value || (x.chat_type[0] && x.chat_type[0].name))) || '未分类',
  }));
}

export async function read(me, target, last = 20) {
  let sid;
  if (/^[0-9a-f]{8}-/i.test(String(target))) {
    // bug#11 修复（11-06）：rowid 可能是会话 sid 也可能是用户 rowid——先查 ORG 确认身份，用户 rowid 走会话解析（此前直接当 sid 查空）
    const chk = await post('https://api.mingdao.com/v2/open/worksheet/getRowByIdPost', { worksheetId: ORG, rowId: target });
    if (chk.data && chk.data.rowid) sid = target;
    else sid = await findOrCreatePrivate(me, { rowid: String(target), name: String(target).slice(0, 8) });
  } else {
    const peer = await resolve(target);
    sid = await findOrCreatePrivate(me, peer);
  }
  const fr = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: DATA, pageSize: last, pageIndex: 1, listType: 0,
    controls: ['rowid', 'title', 'publisher', 'published_at'],
    filters: [
      { controlId: 'visible_org', dataType: 29, spliceType: 1, filterType: 24, value: sid },
      { controlId: 'dimension', dataType: 1, spliceType: 1, filterType: 1, value: '4交流' },
    ],
    sortId: 'published_at',  // 降序（isAsc:true 会使查询异常，实测 11-06）
  });
  const pub = (v) => { try { const o = typeof v === 'string' ? JSON.parse(v) : v; return (o && (o.name || (o[0] && o[0].name))) || '?'; } catch (e) { return '?'; } };
  return ((fr.data && fr.data.rows) || [])
    .slice(0, last)
    .reverse()
    .map(x => ({ rowid: x.rowid, at: x.published_at, from: pub(x.publisher), text: x.title }));
}

// ---------- 先机日志表（第二刀：独立表，写后必回读硬编码） ----------
// 表 6aee7e5f0e75e0e58237903c（108龙虾世界应用）；采纳五值+采纳度+JF/VR拆账（东城 11-07 三条）
export const LOG_WS = '6aee7e5f0e75e0e58237903c';
export const LOG_CID = {
  '预测时间': '6aee7e5f6117bcc66d33dcc8', mode: '6aee7e5f6117bcc66d33dcc9',
  predicted_rowid: '6aee7e5f6117bcc66d33dcca', 预测内容: '6aee7e5f6117bcc66d33dccb',
  链型: '6aee7e5f6117bcc66d33dccc', 置信度: '6aee7e5f6117bcc66d33dccd',
  presented: '6aee7e5f6117bcc66d33dcce', presented_order: '6aee7e5f6117bcc66d33dccf',
  采纳: '6aee7e5f6117bcc66d33dcd0', 采纳度: '6aee7e5f6117bcc66d33dcd1',
  vetoed: '6aee7e5f6117bcc66d33dcd2', JF记分: '6aee7e5f6117bcc66d33dcd3',
  VR否决度: '6aee7e5f6117bcc66d33dcd4', source_wikilink: '6aee7e5f6117bcc66d33dcd5',
  session_id: '6aee7e5f6117bcc66d33dcd6', org: '6aee7e5f6117bcc66d33dcd7',
};
// 记一条预测（送达即写：mode=送达位，采纳后 editRow 回填采纳/采纳度/JF/VR——JF/VR 拆账：部分采纳 N% → JF=N%、VR=100-N%）
export async function logPredict(me, e) {
  const controls = [
    { controlId: LOG_CID['预测时间'], value: e.ts || now() },
    { controlId: LOG_CID.mode, value: e.mode || '正常' },
    { controlId: LOG_CID.predicted_rowid, value: e.predicted_rowid || '' },
    { controlId: LOG_CID['预测内容'], value: e.预测内容 || '' },
    { controlId: LOG_CID['链型'], value: e.链型 || '' },
    { controlId: LOG_CID['置信度'], value: String(e.置信度 ?? '') },
    { controlId: LOG_CID.presented, value: e.presented === false ? 'false' : 'true' },
    { controlId: LOG_CID.presented_order, value: String(e.presented_order ?? 1) },
    { controlId: LOG_CID['source_wikilink'], value: e.source_wikilink || '' },
    { controlId: LOG_CID.session_id, value: e.session_id || '' },
    { controlId: LOG_CID.org, value: SJ, valueType: 2 },
  ];
  if (e.采纳) controls.push({ controlId: LOG_CID['采纳'], value: e.采纳 }, { controlId: LOG_CID['采纳度'], value: String(e.采纳度 ?? 0) }, { controlId: LOG_CID.vetoed, value: e.vetoed ? 'true' : 'false' }, { controlId: LOG_CID['JF记分'], value: String(e.JF ?? 0) }, { controlId: LOG_CID['VR否决度'], value: String(e.VR ?? 0) });
  const add = await post('https://api.mingdao.com/v2/open/worksheet/addRow', { worksheetId: LOG_WS, triggerWorkflow: false, controls });
  const id = typeof add.data === 'string' ? add.data : add.data && add.data.rowid;
  if (!id) throw new Error('先机日志写入失败:' + JSON.stringify(add).slice(0, 120));
  const g = await post('https://api.mingdao.com/v2/open/worksheet/getRowByIdPost', { worksheetId: LOG_WS, rowId: id });  // 写后必回读（硬编码）
  if (!g.data || !g.data.rowid) throw new Error('先机日志回读失败');
  return { msgId: id, verified: true };
}
export async function readLog(last = 50) {
  const K = LOG_CID;
  const fr = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: LOG_WS, pageSize: last, pageIndex: 1, listType: 0,
    controls: ['rowid', ...Object.values(K)],
    sortId: K['预测时间'],
  });
  return ((fr.data && fr.data.rows) || []).map(x => ({
    rowid: x.rowid, at: x[K['预测时间']], mode: x[K.mode], predicted: x[K.predicted_rowid],
    text: x[K['预测内容']], chain: x[K['链型']], confidence: x[K['置信度']],
    adoption: x[K['采纳']], degree: x[K['采纳度']], jf: x[K['JF记分']], vr: x[K['VR否决度']],
  }));
}
