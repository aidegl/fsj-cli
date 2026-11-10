// hap-mcp.mjs — MCP 正身适配层（11-10 东城令：CLI 合流时通道只此一处）
// 正身实体仍归慕尘（hap-mcp.mjs，全局技能 tmp 目录）——此处只做引用适配，**不复制正身**（一物一正身）。
// 适配两件事：① import 前清空 argv（正身尾部带 CLI 入口，argv 有参会误触发）② import 后还原。
// 慕尘把正身迁到稳定位置后，只需改下面 HAP_MCP_PATH 一行。
export const HAP_MCP_PATH = 'file:///D:/Item/fsj4/agents/108/026%C2%B7limuchen/workspace/src/mcp/hap-mcp.mjs';   // 慕尘 11-10 已迁稳定位
const _argv = process.argv;
process.argv = [_argv[0], _argv[1]];
const mod = await import(HAP_MCP_PATH);
process.argv = _argv;
export const callTool = mod.callTool;
