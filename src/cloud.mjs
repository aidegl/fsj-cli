// cloud.mjs — 云端世界树 CLI（11-10 东城令：上云做成函数，agent 一条命令搞定，省 token）
// 通道：MCP 正身 hap-mcp.mjs（慕尘建，共用账号）——与 8330 服务端同源逻辑，此处给 CLI 直用
// 用法（经 bin/fsj.mjs 分发）：
//   fsj cloud ls                        # 云端 world_tree 非空成员清单（含树大小）
//   fsj cloud pull <名字> [-o <路径>]    # 拉某成员云端树（-o 落文件，缺省打印）
//   fsj cloud push --name <名字> --file <树.json>   # 推本地树到云端该成员行（写权限开通后可用）
//   fsj cloud show <名字>               # 只看云端树头（根 title + 一级分区）
const _argv = process.argv; process.argv = [_argv[0], _argv[1]];   // 清 argv 防 hap-mcp 尾部 CLI 误触发
const { callTool } = await import('file:///D:/Item/fsj4/agents/108/026%C2%B7limuchen/workspace/tmp/hap-mcp.mjs');
process.argv = _argv;

export const HAP_APP = '203def35-81c1-4930-9ea4-9ded2d92e489';     // 108将世界1.0（user 表所在）
export const USER_WS = '69b0077358322d512e60bad0';                  // user 表（world_tree 字段在此）

const detail = async (rowid) => {
  const r = await callTool('get_record_details', { appId: HAP_APP, worksheet_id: USER_WS, row_id: rowid });
  return r?.data || r || {};
};
const findRowByName = async (name) => {
  let page = 1;
  for (; page <= 5; page++) {
    const r = await callTool('get_record_list', { appId: HAP_APP, worksheet_id: USER_WS, pageIndex: page, pageSize: 100 });
    const rows = r?.data?.rows || [];
    if (!rows.length) break;
    const hit = rows.find(x => [x.cn_name, x.nickname, x.en_name].some(v => String(v || '').trim() === name));
    if (hit) return hit;
    if (rows.length < 100) break;
  }
  throw new Error('user 表找不到「' + name + '」');
};
export const listCloud = async () => {
  const rows = []; let page = 1;
  for (; page <= 5; page++) {
    const r = await callTool('get_record_list', { appId: HAP_APP, worksheet_id: USER_WS, pageIndex: page, pageSize: 100 });
    const rr = r?.data?.rows || [];
    if (!rr.length) break;
    rows.push(...rr);
    if (rr.length < 100) break;
  }
  const out = []; const batch = 8;
  for (let i = 0; i < rows.length; i += batch) {
    const rs = await Promise.all(rows.slice(i, i + batch).map(async x => {
      try {
        const rec = await detail(x.rowid || x.rowId);
        const wt = rec.world_tree;
        return (wt && String(wt).trim().length > 2) ? { rowid: x.rowid || x.rowId, name: x.cn_name || x.nickname || x.en_name || '', size: String(wt).length, root: (() => { try { return JSON.parse(wt).title || ''; } catch (e) { return '(坏JSON)'; } })() } : null;
      } catch (e) { return null; }
    }));
    for (const r2 of rs) if (r2) out.push(r2);
  }
  return out;
};
export const pull = async (name) => {
  const row = name.match(/^[0-9a-f-]{8,}$/i) ? { rowid: name } : await findRowByName(name);
  const rec = await detail(row.rowid || row.rowId);
  const wt = rec.world_tree;
  if (!wt || !String(wt).trim()) throw new Error('该成员云端 world_tree 为空');
  return JSON.parse(wt);
};
export const push = async (name, treeJsonStr) => {
  const row = await findRowByName(name);
  JSON.parse(treeJsonStr);   // 先验合法性，坏树拒推
  const r = await callTool('update_record', { appId: HAP_APP, worksheet_id: USER_WS, row_id: row.rowid || row.rowId, fields: [{ id: 'world_tree', value: treeJsonStr }] });
  if (r && r.success === false) throw new Error(r.error_msg || '写失败（多为权限：共用账号 user 表只读，写权限待东城批）');
  return { rowid: row.rowid || row.rowId, name: row.cn_name || name, bytes: treeJsonStr.length };
};
