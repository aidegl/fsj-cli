// data.mjs — HAP/ERP 数据读出口（11-10 东城令：与小风 CLI 合流；原 fsj-data.mjs 迁入 fsj-cli，脚本退役避免双份）
// 通道：MCP 正身 hap-mcp.mjs（FSJ共用账号，密钥零落地）——与 fsj cloud 同源
// 边界：fsj data 管 HAP 数据读出口；fsj cloud 管世界树上云；互补不重叠
// 表注册表正身：fsj-cli/config/data-tables.json（一处维护，fsj data tables 自输出）
import { readFileSync } from 'fs';
import { callTool, HAP_MCP_PATH } from '../mcp/hap-mcp.mjs';

const CFG = new URL('../../config/data-tables.json', import.meta.url);
const REG = JSON.parse(readFileSync(CFG, 'utf8'));
export const APP = REG.appId;

// 成员档案字段 controlId（11-10 get_worksheet_structure 实测）——同样放注册表，避免散在代码里
const M = REG.members.fields;

const rows = async (wsId) => {
  const r = await callTool('get_record_list', { appId: APP, worksheet_id: wsId, pageIndex: 1, pageSize: 500 });
  return r?.data?.rows || [];
};
const userName = r => (r[M.user] || []).map(x => x.name).join('/');
const rt = s => (typeof s === 'string' ? s : JSON.stringify(s ?? '')).replace(/<[^>]+>/g, '').trim();
const die = m => { throw new Error(m); };

export async function run(argv) {
  const cmd = argv[0];
  const arg = n => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : ''; };
  if (cmd === 'tables') {
    console.log(`FSJ108 ERP 表注册表（app ${APP}）——别名即命令参数 --ws 值：`);
    for (const [k, v] of Object.entries(REG.tables)) console.log(`- ${k}  ${v.name}  ${v.id}`);
    return;
  }
  if (cmd === 'members') {
    const dept = arg('--dept');
    let rs = await rows(REG.tables.members.id);
    rs.sort((a, b) => (Number(a[M.no]) || 999) - (Number(b[M.no]) || 999));
    if (dept) rs = rs.filter(r => (r[M.dept] || '').includes(dept));
    console.log(`成员名单${dept ? `（五行部含「${dept}」）` : ''} 共 ${rs.length} 行，详情: fsj data member <姓名|编号>：`);
    for (const r of rs) console.log(`- ${String(r[M.no]).padStart(3)} ${userName(r)}｜${r[M.star] || ''}｜${r[M.dept] || ''}｜${r[M.post] || '（岗位空）'}｜MBTI:${r[M.mbti] || '？'} (${r.rowId || r._id})`);
    return;
  }
  if (cmd === 'member') {
    const q = argv[1];
    if (!q) die('用法: fsj data member <姓名|编号>');
    const rs = await rows(REG.tables.members.id);
    const hit = rs.filter(r => userName(r).includes(q) || String(r[M.no]) === q || (r.rowId || '').endsWith(q) || String(r._id || '').endsWith(q));
    if (!hit.length) { console.log(`（无命中：${q}）`); return; }
    for (const r of hit) {
      console.log(`【${userName(r)}】 ${r[M.no]}号 ${r[M.star] || ''}｜${r[M.dept] || '（五行部空）'}｜${r[M.post] || '（岗位空）'}｜MBTI:${r[M.mbti] || '（空）'}｜权限:${r[M.perm] || '（空）'}`);
      console.log('职责: ' + (r[M.duty] || '（空）'));
      console.log('介绍: ' + (rt(r[M.intro]) || '（空）'));
      console.log('在做: ' + (rt(r[M.now]) || '（空）'));
      if (r[M.note]) console.log('备注: ' + r[M.note]);
      console.log(`rowid: ${r.rowId || r._id}｜回读比对: fsj data member ${q}`);
    }
    return;
  }
  if (cmd === 'get') {
    const rowid = argv[1];
    const alias = arg('--ws') || 'members';
    if (!rowid || !REG.tables[alias]) die(`用法: fsj data get <rowid> [--ws ${Object.keys(REG.tables).join('|')}]`);
    const r = await callTool('get_record_details', { appId: APP, worksheet_id: REG.tables[alias].id, row_id: rowid });
    console.log(JSON.stringify(r?.data || r, null, 1));
    return;
  }
  die('用法: fsj data tables | member <姓名|编号> | members [--dept 部] | get <rowid> [--ws 别名]');
}
