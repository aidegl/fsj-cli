# A2A 客户端技能（a2a-client）

> 作者：52小风（慕容风）｜2026-11-26｜来源：A2A 信箱 V1 三地实战（Windows/Mac/云服务器三方在役）经东城本人令提炼入世界库。
> 给谁看：任何要跨机器与其他 agent 通信的 FSJ agent 及其主理会话。拿到本技能 = 可以直接接入信箱收发任务。

## ⭐ 触发条件

凡要：跨机器与其他 agent 收发消息、投递任务、借用其他 agent 算力（quickthink 推理）、查询任务结果、接入 A2A 信箱——触发本技能。

## 一、身份与接入（5 分钟）

1. **领身份**：向东城或信箱主理（52小风）领取 `agentId` + `token`（token 即身份证，勿外传）。
2. **前置**：node ≥ 22（用内置 node:sqlite）。验证：
   `node -e "const {DatabaseSync}=require('node:sqlite');new (require('node:sqlite').DatabaseSync)(':memory:').exec('CREATE TABLE t(a)');console.log('sqlite OK')"`
3. **接入**：用 `fsj-cli/src/a2a/client.mjs` 的 AgentClient（三行）：

```js
import { AgentClient } from './client.mjs';
const c = new AgentClient({
  serverUrl: 'https://n8n.100000whys.cn/a2a',   // 云端信箱
  agentId: '<你的agentId>', token: '<你的token>',
  dbPath: './a2a-<agentId>.db',                  // 本地幂等台账
  handler: async (m) => ({ result: '处理结果' }), // 收到消息自动执行并回执
});
await c.connect();   // SSE 常驻收件流（自动重连+断点补收）
await c.send('<目标agentId>', { type: 'hello', text: '…' });   // 发送
```

## 二、寻址（指向某个 agent 对话）

- `c.send(to, payload)` 的 `to` 即定向——指谁发给谁。
- 名册（当前在册）：`win-main`（52小风·Windows/快思考 qwen3:14b）、`mac-agent`（梦瑶机·Mac mini M4）、`openclaw-server`（8.155.148.75·沈嫣楠）。新 agent 入册经东城+52。
- **多会话对话约定**：一次独立对话 = 一个 `conversation_id`（发起方生成 uuid，放 payload.conv_id）+ 该对话产生的 task_id。回复方在 payload 带 `conv_id` 回到同一对话。要开新话题就换新 conv_id——同一 agent 身份下多线对话互不串。

## 三、执行顺序铁律（违者丢消息/重复执行）

**先写本地 SQLite → 再 ACK delivered → claim 领租约 → 执行（长任务每分钟 renew）→ results 回执。**

三重幂等：msg_id（消息不重复建）、claim_request_id（接单不重复递增 generation）、result_id（结果不重复提交）。

## 四、API 速查（全程 Authorization: Bearer <token>）

| 端点 | 用途 |
|---|---|
| POST /a2a/message:send | 投递 `{msg_id, task_id, to, payload}` |
| GET /mailbox/inbox/stream | SSE 收件流（自动重连+未确认集补发） |
| POST /mailbox/ack | `{msg_id, state:'delivered'}` |
| POST /mailbox/tasks/claim | `{task_id, claim_request_id}` → 租约+generation |
| POST /mailbox/lease/renew | 续租 |
| POST /mailbox/results | `{task_id, generation, result_id, result}` |
| GET /mailbox/directory | （V1.1）查 agent 名册 |

**任务查询外网完整路径**：`{serverUrl}/a2a/tasks/{task_id}`——serverUrl 已含 /a2a、路由再带 /a2a，**路径里 a2a 出现两次不是笔误**（nginx location 前缀剥离所致）。

## 五、已知坑（全部实战踩过）

| 坑 | 解 |
|---|---|
| HAP create_record 用 controlId 写值 | 静默丢弃（success 回执但值空）——用 `{id:'<alias>', value}` 形状 |
| HAP 日期时间字段 | 东八区显示；内存比较用 ISO，持久化恢复注意时区偏移 |
| JSON.stringify(undefined).slice | 直接崩——先判空 |
| 大文本回显只留 100 字 | handler 的 slice 限制，按需调整 |
| bash 里嵌套引号写 JS | 转义地狱——复杂逻辑落文件再执行 |

## 六、部署与常驻

- 客户端常驻：`spawn(node, [agent脚本], { detached: true, stdio: ['ignore', logFd, logFd] }).unref()`——脱离会话 7×24 收发。
- 服务端部署（信箱主理人职责）：pm2 常驻 + nginx SSE 反代三要点（proxy_buffering off / read_timeout 3600s / HTTP1.1）。
- 架构正身：fsj4 仓 `agents/108/052·xiaofeng/workspace/research/a2a-mailbox-v13-constraints.md`。

## 正身链条

客户端库 `fsj-cli/src/a2a/client.mjs`｜服务端 `fsj-cli/src/a2a/mailbox-server.mjs`｜学员手册 `fsj-cli/docs/a2a-onboarding.md`（Mac 版 a2a-mac-onboarding.md）｜测试 `src/a2a/tests.mjs`（15 断言）｜HAP 表 `agent_message_log` / `agent_task_log`（appId 15180c64）。本 skill 升版须更新本文与 fsj-cli 仓同版号。
