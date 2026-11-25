---
name: a2a-mac-onboarding
user_rowid: a851e76-7b02-4baf-bedd-3ff011b1a9e5
ctime: 2026-11-26
utime: 2026-11-26
aliases: [Mac接入指南, 梦瑶机A2A手册]
---

# A2A 接入手册（Mac mini M4 · mac-agent 专用版）

> 编写：52小风（Windows 侧，win-main 常驻在线中）。目标：Mac 侧三课跑完，双机端到端闭环。
> 你发消息我就能秒收——win-main 客户端已在 Windows 常驻在线。

## 〇、你的身份（已备好，无需申请）

- agentId：`mac-agent`
- token：`e5020e827443ad82342aaa882a9ffe65afc4568e0b395f4f`（东城手里那把）
- 信箱入口：`https://n8n.100000whys.cn/a2a`

## 一、前置：Node ≥ 22

```bash
node -v   # 需要 v22+（要用内置 node:sqlite）
# 没有就装：brew install node@22
```

**node:sqlite 验证（一次性）**：
```bash
node -e "const {DatabaseSync}=require('node:sqlite');const d=new DatabaseSync(':memory:');d.exec('CREATE TABLE t(a)');console.log('sqlite OK')"
```

## 二、取客户端代码（二选一）

**A. git（推荐）**：
```bash
git clone https://github.com/aidegl/fsj-cli.git
# 客户端在 fsj-cli/src/a2a/client.mjs
```
**B. 免 git**：手册附带文件直接用（client.mjs 已随本手册打包）。

## 三、第一课：自发自收

建 `mac-agent.mjs`：

```js
import { AgentClient } from './client.mjs';
const c = new AgentClient({
  serverUrl: 'https://n8n.100000whys.cn/a2a',
  agentId: 'mac-agent',
  token: 'e5020e827443ad82342aaa882a9ffe65afc4568e0b395f4f',
  dbPath: './a2a-mac.db',
  handler: async (m) => ({ result: '收到：' + JSON.stringify(m.payload).slice(0, 100) }),
});
await c.connect();
// 另一终端发给自己：
// node -e "import('./client.mjs').then(async m=>{const c=new m.AgentClient({serverUrl:'https://n8n.100000whys.cn/a2a',agentId:'mac-agent',token:'e5020e827443ad82342aaa882a9ffe65afc4568e0b395f4f',dbPath:'./tmp-send.db'});console.log(await c.send('mac-agent',{hello:'mac'}));process.exit(0)})"
```

判定：任务 completed + handler 打印 → 第一课过。

## 四、第二课：跨机发消息给 Windows（win-main 常驻在线，秒回）

```js
await c.send('win-main', { type: 'hello', from: 'mac-agent（梦瑶机）', text: 'Mac 已接入 A2A' });
```

发完 **几秒内** win-main（Windows 侧）就会收到并回执——这次不用等（沈嫣楠当时等补收是因为对端没常驻，你的对端常驻在线）。

**验证回执**：任务 state=completed、result 里是 win-main 的回显。

## 五、第三课：幂等证明

同 msg_id 发两次 → 第二次 `duplicate:true`、handler 只执行一次。

## 六、进阶（可选）：借 Windows 的脑子

Mac 不跑大模型。需要推理时把请求**转投 win-main**：

```js
const r = await c.send('win-main', { type: 'quickthink', prompt: '你的问题', system: '简短回答' });
const taskId = r.message.task_id;
// 回执查询（重要）：nginx location /a2a/ 会剥前缀，外网完整路径里 a2a 出现两次——不是笔误
const q = await fetch(`https://n8n.100000whys.cn/a2a/a2a/tasks/${taskId}`, {
  headers: { Authorization: 'Bearer <你的token>' },
});
const t = await q.json();   // t.state==='completed' 时 t.result 即 qwen3:14b 的回答
```

**同规则适用于一切任务查询**：`{serverUrl}/a2a/tasks/{task_id}`（serverUrl 已含 /a2a，路由再带 /a2a）。第二课 hello 的回执同理——在 task.result 里查，win-main 不会反向推消息。

## 七、执行顺序铁律（四句话记牢）

先本地落库（SQLite）→ 再 ACK → claim 领租约 → 执行 → results 回执。顺序反了会丢消息。

## 八、毕业验收（回报小风，经东城转）

1. 第一课 completed 日志
2. 第二课 win-main 的回执内容（我这边也会同时看到你的消息——双机互证）
3. 幂等证明（duplicate:true + 执行一次）

毕业即双机端到端闭环，V1 正式收官。
