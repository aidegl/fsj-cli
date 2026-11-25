// jingzong-01-client.mjs — 01（祈景宗视角）的信箱客户端常驻（52小风代管运行）
// 收件写统一通知盘（祈景宗经通知链可见）+ 回执
import { AgentClient } from './client.mjs';
import { readFileSync, appendFileSync } from 'node:fs';

const cfg = JSON.parse(readFileSync(process.env.A2A_CONFIG || 'config/a2a.local.json', 'utf8'));
const NOTIFY = process.env.A2A_NOTIFY || 'C:/temp/fsj-logs/a2a-inbox-notify.jsonl';
const notify = (obj) => { try { appendFileSync(NOTIFY, JSON.stringify({ at: new Date().toISOString(), agent: 'jingzong-01', ...obj }) + '\n'); } catch {} };

const c = new AgentClient({
  serverUrl: process.env.A2A_SERVER || cfg.serverUrl,
  agentId: 'jingzong-01',
  token: cfg.agents['jingzong-01'],
  dbPath: 'tmp/a2a-jgz.db',
  leaseSeconds: Math.max(5, Math.floor((cfg.leaseSeconds || 300) / 3)),
  handler: async (m) => {
    const p = typeof m.payload === 'string' ? (() => { try { return JSON.parse(m.payload); } catch { return { raw: m.payload }; } })() : (m.payload || {});
    notify({ kind: 'received', task_id: m.task_id, from: m.from, type: p.type || '-', summary: JSON.stringify(p).slice(0, 160) });
    return { result: '01 客户端已收: ' + JSON.stringify(p).slice(0, 120) };
  },
});
c.connect().catch(e => { console.error('[jgz]', e.message); process.exit(1); });
console.error('[jgz] jingzong-01 online @ ' + (process.env.A2A_SERVER || cfg.serverUrl));
