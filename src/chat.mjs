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
const CACHE = new URL('./workspace/contacts.json', 'file:///D:/Item/fsj-cli/').pathname;
const SESSIONS = new URL('./workspace/chat-sessions.json', 'file:///D:/Item/fsj-cli/').pathname;

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
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(t)) return { rowid: t, name: t.slice(0, 8) };  // rowid 直用
  const list = await contacts();
  const hit = list.find(x => x.no === t) || list.find(x => x.name === t);              // 编号优先，中文名兜底
  if (!hit) throw new Error(`通讯录没有「${t}」——用 fsj chat who 查编号，或直接给 rowid`);
  return hit;
}

// ---------- 会话（一切皆群：私聊=两人的群；先查后建，复用） ----------
async function findOrCreatePrivate(a, b) {
  // 正身缓存优先（确定性优先：本地命中即毫秒+确定，绕开 HAP 索引抖动）
  const key = [a.rowid, b.rowid].sort().join('|');
  const cached = loadSessions()[key];
  if (cached) return cached;

  const queryOnce = () => post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: ORG, pageSize: 5, pageIndex: 1, listType: 0,
    filters: [
      { controlId: 'zzyh', dataType: 29, spliceType: 1, filterType: 24, value: a.rowid },
      { controlId: 'zzyh', dataType: 29, spliceType: 1, filterType: 24, value: b.rowid },
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
  const cr = await post('https://api.mingdao.com/v2/open/worksheet/addRow', {
    worksheetId: ORG, triggerWorkflow: false,
    controls: [
      { controlId: 'mingcheng', value: a.name + '-' + b.name + '-私聊' },
      { controlId: 'leixing', value: K_LEIXING_CHAT, valueType: 2 },
      { controlId: 'ltlx', value: K_LTLX_SL, valueType: 2 },
      { controlId: 'fabuzhe', value: a.rowid, valueType: 2 },
      { controlId: 'zzyh', value: a.rowid + ',' + b.rowid, valueType: 2 },
    ],
  });
  const id = typeof cr.data === 'string' ? cr.data : cr.data && cr.data.rowid;
  if (!id) throw new Error('建会话失败:' + JSON.stringify(cr).slice(0, 150));
  saveSession([a.rowid, b.rowid].sort().join('|'), id);
  return id;
}

// ---------- 群聊（11-06 东城令开放：建群/发群/读群；一切皆群，私聊只是两人的群） ----------
async function findGroup(name) {
  const fr = await post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
    worksheetId: ORG, pageSize: 5, pageIndex: 1, listType: 0,
    controls: ['rowid', 'mingcheng', 'zzyh'],
    filters: [
      { controlId: 'mingcheng', dataType: 1, spliceType: 1, filterType: 1, value: name },
      { controlId: 'ltlx', dataType: 1, spliceType: 1, filterType: 1, value: '群聊' },
    ],
  });
  return (fr.data && fr.data.rows) || [];
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
      { controlId: 'mingcheng', value: name },
      { controlId: 'leixing', value: K_LEIXING_CHAT, valueType: 2 },
      { controlId: 'ltlx', value: K_LTLX_GROUP, valueType: 2 },
      { controlId: 'fabuzhe', value: me.rowid, valueType: 2 },
      { controlId: 'zzyh', value: members.map(m => m.rowid).join(','), valueType: 2 },
    ],
  });
  const id = typeof cr.data === 'string' ? cr.data : cr.data && cr.data.rowid;
  if (!id) throw new Error('建群失败:' + JSON.stringify(cr).slice(0, 150));
  return { sid: id, name, members: members.map(m => m.name || m.rowid.slice(0, 8)) };
}
async function publishTo(me, sid, text) {
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
    .map(x => ({ at: x.published_at, from: pub(x.publisher), text: x.title }));
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
    controls: ['rowid', 'mingcheng', 'ltlx', 'zzyh'],
    filters: [{ controlId: 'zzyh', dataType: 29, spliceType: 1, filterType: 24, value: me.rowid }],
  });
  return ((fr.data && fr.data.rows) || []).map(x => ({
    rowid: x.rowid, name: x.mingcheng, type: (x.ltlx && x.ltlx.value) || (Array.isArray(x.ltlx) ? x.ltlx[0] : '') || '',
  }));
}

export async function read(me, target, last = 20) {
  let sid;
  if (/^[0-9a-f]{8}-/i.test(String(target))) sid = target;
  else {
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
    .map(x => ({ at: x.published_at, from: pub(x.publisher), text: x.title }));
}
