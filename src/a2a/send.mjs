// send.mjs — A2A 一行发送命令（V1.1 待办落地：client 正式化 send 子命令）
// 用法：node src/a2a/send.mjs <to> '<text或JSON payload>' [--from <agentId>]
// 发送侧同步写通知盘（direction=out），东城经通知链可见全部双向流量。
import { readFileSync, appendFileSync } from 'node:fs';
import crypto from 'node:crypto';

const cfg = JSON.parse(readFileSync(process.env.A2A_CONFIG || 'config/a2a.local.json', 'utf8'));
const SERVER = process.env.A2A_SERVER || cfg.serverUrl || `http://localhost:${cfg.port || 8787}`;
const NOTIFY = process.env.A2A_NOTIFY || 'C:/temp/fsj-logs/a2a-inbox-notify.jsonl';
const [, , to, ...rest] = process.argv;
const fromFlag = process.argv.indexOf('--from');
const from = fromFlag > 0 ? process.argv[fromFlag + 1] : 'win-main';
const raw = rest.filter(a => a !== '--from' && a !== from).join(' ');
if (!to || !raw) { console.error('用法：node src/a2a/send.mjs <to> \'<text|JSON>\' [--from <agentId>]'); process.exit(1); }

let payload;
try { payload = JSON.parse(raw); } catch { payload = { type: 'message', text: raw }; }

const msg_id = crypto.randomUUID();
const task_id = 'send-' + crypto.randomUUID().slice(0, 8);
const r = await fetch(SERVER + '/a2a/message:send', {
  method: 'POST',
  headers: { Authorization: `Bearer ${cfg.agents[from]}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ msg_id, task_id, to, payload }),
});
const j = await r.json().catch(() => ({}));
try {
  appendFileSync(NOTIFY, JSON.stringify({ at: new Date().toISOString(), direction: 'out', from, to, task_id, msg_id: j.message?.msg_id, state: j.message?.state, summary: JSON.stringify(payload).slice(0, 160) }) + '\n');
} catch {}
console.log(JSON.stringify({ status: r.status, state: j.message?.state, seq: j.message?.seq, task_id }, null, 1));
if (!r.ok) process.exit(1);
