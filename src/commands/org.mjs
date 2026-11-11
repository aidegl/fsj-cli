// org.mjs — FSJ 组织索引生成器（11-11 Schema v0 第 2 批，已批）
// 只读拼装：HAP user 表 + ERP 成员档案 + 本地 AGENTS.md frontmatter → config/teams.json（索引）
// 铁律：AGENTS.md 与 ERP 行仍是正身，teams.json 仅索引（一处正身一处字段——本文件不定义任何组织事实）
import { readFileSync, existsSync } from 'fs';
import { callTool } from '../mcp/hap-mcp.mjs';

const CFG = new URL('../../config/data-tables.json', import.meta.url);
const REG = JSON.parse(readFileSync(CFG, 'utf8'));
const M = REG.members.fields;
const ERP_APP = REG.appId;
const USER_APP = '203def35-81c1-4930-9ea4-9ded2d92e489';
const USER_WS = '69b0077358322d512e60bad0';
const ROOTS = [
  'D:/Item/fsj4/agents/108',
  'D:/Item/fsj4/agents/zsfy',
  'D:/Item/fsj4/agents/wuming',
];

const pad3 = n => String(n).padStart(3, '0');
const fm = (p) => {
  if (!existsSync(p)) return {};
  const t = readFileSync(p, 'utf8').replace(/\r\n/g, '\n');   // CRLF 兼容（Windows 各工具混写，11-11 实测：仅 2/108 是 LF，其余 CRLF 全漏）
  if (!/^---\n/.test(t)) return {};
  const end = t.indexOf('\n---', 3);
  if (end < 0) return {};
  const o = {};
  for (const line of t.slice(4, end).split('\n')) {
    const m = /^([\w-]+)\s*:\s*(.*)$/.exec(line);
    if (m) o[m[1]] = m[2].trim();
  }
  return o;
};

export async function build(outPath) {
  // ① HAP user 表（rowid/no/cn_name）
  const users = [];
  for (let p = 1; p <= 3; p++) {
    const r = await callTool('get_record_list', { appId: USER_APP, worksheet_id: USER_WS, pageIndex: p, pageSize: 100 });
    const rr = r?.data?.rows || [];
    if (!rr.length) break;
    users.push(...rr);
    if (rr.length < 100) break;
  }
  // ② ERP 成员档案（108 行；M.user.sid = HAP user rowid → 人身主键关联）
  const erp = await callTool('get_record_list', { appId: ERP_APP, worksheet_id: REG.tables.members.id, pageIndex: 1, pageSize: 200 });
  const erpRows = erp?.data?.rows || [];
  // ③ 本地宪法扫描
  const consts = [];
  for (const root of ROOTS) {
    if (!existsSync(root)) continue;
    let ents = [];
    try { ents = (await import('fs')).readdirSync(root, { withFileTypes: true }); } catch (e) { continue; }
    for (const e of ents) {
      const dir = `${root}/${e.name}`;
      const f = `${dir}/AGENTS.md`;
      if (e.isDirectory() && existsSync(f)) consts.push({ __dir: dir, __dirNo: (/^(\d{3})/.exec(e.name) || [])[1] || '', ...fm(f) });
    }
  }
  const byRowid = new Map(consts.filter(c => c.user_rowid).map(c => [c.user_rowid, c]));
  const members = erpRows.map(r => {
    const sid = (r[M.user] || [])[0]?.sid || '';
    const u = users.find(x => (x.rowid || x.rowId) === sid) || {};
    const c = byRowid.get(sid) || consts.find(x => x.cn_name === (u.cn_name || '')) || {};
    const dirNo = c.__dirNo || '';
    const agentsNo = String(c.no || '').replace(/"/g, '').trim();
    const no = (String(u.no || '').trim() || dirNo || agentsNo);
    const seat_conflict = (dirNo && agentsNo && dirNo !== pad3(Number(agentsNo))) ? { dir: dirNo, agents: agentsNo } : null;
    return {
      seat_key: no ? pad3(Number(no)) : null,
      no,
      cn_name: u.cn_name || r[M.user]?.[0]?.name || c.cn_name || '',
      user_rowid: sid,
      erp_rowid: r.rowId || r._id,
      star: u.star || c.star || '',
      dept: r[M.dept] || '',
      post: r[M.post] || '',
      session_id: c.session_id || '',
      memory_user: c.memory_user || '',
      tree_path: (() => { const g = c.__dir ? `${c.__dir}/world_tree.json` : ''; return g && existsSync(g) ? g : ''; })(),
      constitution: c.__dir ? `${c.__dir}/AGENTS.md` : '',
      seat_conflict,
      sources: { erp: !!r.rowId, hap_user: !!u.rowid, local: !!c.cn_name },
    };
  });
  const payload = { schema: 'fsj-org/v0', generated: new Date().toISOString(), note: '索引非正身：正身=AGENTS.md 与 ERP 行（org-schema-v0 §三）', count: members.length, members };
  if (outPath) { (await import('fs')).writeFileSync(outPath, JSON.stringify(payload, null, 2), 'utf8'); }
  return payload;
}
