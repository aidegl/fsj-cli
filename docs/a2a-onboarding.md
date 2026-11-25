---
name: a2a-onboarding
user_rowid: a851e76-7b02-4baf-bedd-3ff011b1a9e5
ctime: 2026-11-26
utime: 2026-11-26
aliases: [A2A学员手册, OpenClaw接入指南]
---

# A2A 学员手册（致沈嫣楠 / OpenClaw）

> 编写：52小风。目标：三个练习跑完，你（OpenClaw）就是信箱的正式收发方。

## 一、三分钟概念

A2A 信箱是 FSJ 的 agent 可靠通信枢纽（你部署的那个 node 服务，公网入口 `https://n8n.100000whys.cn/a2a`）。四句话讲完：

- **每个 agent 一把 token = 一个身份**。持 token 者即可收发，token 即身份证。
- **发消息** = POST 投递（云端落库，绝不丢）；**收消息** = SSE 收件流（断线自动补发）。
- **执行任务** = claim 领租约（generation 是你的执行权版本号）；**完成** = results 回执。
- 三条铁律：①先本地落库再 ACK（消息不丢）②同 msg_id/result_id 重试幂等（任务不重复执行）③generation 防旧执行者覆盖（不互相踩）。

## 二、第一步：领身份

你还没有 agent 身份（现有 token 只有 win-main / mac-agent 两把）。在服务器 `config/a2a.local.json` 的 `agents` 里加一行（token 自生成）：

```bash
node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"
# 填入 agents："openclaw-server": "<生成的值>"
pm2 restart a2a-mailbox
```

把 token 值回报东城转小风登记。

## 三、第二步：跑通自发自收

仓里客户端库现成（`src/a2a/client.mjs`），写 10 行：

```js
import { AgentClient } from './src/a2a/client.mjs';
const c = new AgentClient({
  serverUrl: 'https://n8n.100000whys.cn/a2a',
  agentId: 'openclaw-server',
  token: '<你的token>',
  dbPath: './a2a-oc.db',                       // 本地幂等台账（SQLite）
  handler: async (m) => ({ result: '收到：' + JSON.stringify(m.payload).slice(0, 100) }),
});
await c.connect();
// 另一个终端发一条给自己：
await c.send('openclaw-server', { hello: 'world' });
```

判定：任务 state=completed、handler 打印收到 → 第一课过。

## 四、API 速查（全程带 Authorization: Bearer <token>）

| 端点 | 用途 |
|---|---|
| POST /a2a/message:send | 投递 `{msg_id, task_id, to, payload}` |
| GET /mailbox/inbox/stream | SSE 收件流（自动重连+未确认集补发） |
| POST /mailbox/ack | `{msg_id, state:'delivered'}` 确认收到 |
| POST /mailbox/tasks/claim | `{task_id, claim_request_id}` 接单领租约 |
| POST /mailbox/lease/renew | 长任务每分钟续租（不递增 generation） |
| POST /mailbox/results | `{task_id, generation, result_id, result}` 回执 |
| GET /a2a/tasks/{id} | 查任务状态 |

**执行顺序铁律**：先写本地 SQLite → ACK delivered → claim 领租约 → 执行（长任务续租）→ results。顺序反了会丢消息。

## 五、进阶阅读（想深挖再看）

- 架构正身：fsj4 仓 `agents/108/052·xiaofeng/workspace/research/a2a-mailbox-v13-constraints.md`
- 测试即示例：`src/a2a/tests.mjs`——12 个场景（断线/幂等/接管/fencing）全覆盖，是最好的用法教材
- 设计三问：消息有没有丢、任务有没有重复执行、旧执行者能不能覆盖新执行者

## 六、毕业验收（三项，回报小风）

1. 自发自收 completed（日志或截图）
2. 用 mac-agent 的身份给 win-main 发一条真消息（跨 agent 投递）
3. 故意重发同 msg_id 两次 → 证明只执行一次（duplicate:true 且 handler 只跑一遍）

毕业即入册：openclaw-server 成为信箱第三个正式收发方。
