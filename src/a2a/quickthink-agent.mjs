// quickthink-agent.mjs — Windows 侧快思考执行体（qivi/agent 快思的模型调用端）
// 链路：n8n/Mac → 信箱 → 本 agent → 本机 ollama qwen3:14b → 结果回信箱
// 用法：A2A_SERVER=http://localhost:8787 node src/a2a/quickthink-agent.mjs
// 消息约定：payload = { type: 'quickthink', prompt: '...', system?: '...' } → 回 { result: '模型输出' }
import { AgentClient } from './client.mjs';
import { readFileSync } from 'node:fs';

const cfg = JSON.parse(readFileSync(process.env.A2A_CONFIG || 'config/a2a.local.json', 'utf8'));
const SERVER = process.env.A2A_SERVER || `http://localhost:${cfg.port || 8787}`;
const MODEL = process.env.A2A_QWEN_MODEL || 'qwen3:14b';
const OLLAMA = process.env.A2A_OLLAMA || 'http://localhost:11434';

async function quickthink(payload) {
  const messages = [];
  if (payload.system) messages.push({ role: 'system', content: payload.system });
  messages.push({ role: 'user', content: String(payload.prompt || '') });
  const r = await fetch(OLLAMA + '/api/chat', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, messages, stream: false }),
  });
  if (!r.ok) throw new Error('ollama HTTP ' + r.status);
  const j = await r.json();
  return { result: j.message?.content ?? '' };
}

const client = new AgentClient({
  serverUrl: SERVER,
  agentId: 'win-main',
  token: cfg.agents['win-main'],
  dbPath: process.env.A2A_DB || 'tmp/a2a-win-main.db',
  leaseSeconds: Math.max(5, Math.floor((cfg.leaseSeconds || 300) / 3)),
  handler: async (m) => {
    const p = typeof m.payload === 'string' ? (() => { try { return JSON.parse(m.payload); } catch { return { raw: m.payload }; } })() : (m.payload || {});
    if (p.type === 'quickthink') return quickthink(p);
    return { result: `echo:${JSON.stringify(p).slice(0, 200)}` };   // 非 quickthink 回显（联调用）
  },
});
client.connect().catch(e => { console.error('[quickthink] fatal:', e.message); process.exit(1); });
console.error(`[quickthink] win-main online @ ${SERVER} (model=${MODEL}, ollama=${OLLAMA})`);
