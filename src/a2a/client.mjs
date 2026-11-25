// client.mjs — A2A agent 客户端库 v1.3（配 mailbox-server.mjs 用）
// 用法：
//   const c = new AgentClient({ serverUrl, agentId, token, dbPath, handler });
//   await c.connect();                     // SSE 收件流（自动重连+补收）
//   await c.send(toAgentId, payload);      // 投递
// 执行顺序铁律：先写 SQLite → 再 ACK delivered → claim 领租约 → 执行（renew 续租）→ results 回执。
import { DatabaseSync } from 'node:sqlite';
import crypto from 'node:crypto';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const uuid = () => crypto.randomUUID();

export class AgentClient {
  constructor({ serverUrl, agentId, token, dbPath = './a2a-client.db', handler = null, leaseSeconds = 240 }) {
    this.serverUrl = serverUrl.replace(/\/$/, '');
    this.agentId = agentId;
    this.token = token;
    this.leaseSeconds = leaseSeconds;   // 必须小于服务端 LEASE_SECONDS
    this.handler = handler;             // async (message) => ({ result, error? })
    this.db = new DatabaseSync(dbPath);
    this.db.exec(`CREATE TABLE IF NOT EXISTS seen(
      msg_id TEXT PRIMARY KEY, task_id TEXT, state TEXT, updated_at TEXT)`);
    this.lastEventId = '';
    this.closed = false;
  }

  _headers(extra = {}) {
    return { Authorization: `Bearer ${this.token}`, 'Content-Type': 'application/json', ...extra };
  }
  async _post(path, body) {
    const r = await fetch(this.serverUrl + path, { method: 'POST', headers: this._headers(), body: JSON.stringify(body) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) { const e = new Error(j.error || `HTTP ${r.status}`); e.code = r.status; e.body = j; throw e; }
    return j;
  }

  // 投递（msg_id 幂等：调用方重试复用同一 msg_id）
  async send(to, payload, { msg_id = uuid(), task_id } = {}) {
    const r = await this._post('/a2a/message:send', { msg_id, task_id, to, payload });
    return { msg_id, duplicate: r.duplicate, message: r.message };
  }

  // SSE 收件流：自动重连；未确认集由服务端补发（不依赖本地游标）
  async connect() {
    while (!this.closed) {
      const ac = new AbortController();
      this._ac = ac;
      try {
        const r = await fetch(this.serverUrl + '/mailbox/inbox/stream', {
          headers: this._headers(this.lastEventId ? { 'Last-Event-ID': this.lastEventId } : {}),
          signal: ac.signal,
        });
        if (!r.ok || !r.body) throw new Error('stream HTTP ' + r.status);
        const reader = r.body.getReader();
        const dec = new TextDecoder();
        let buf = '';
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while ((i = buf.indexOf('\n\n')) >= 0) {
            const chunk = buf.slice(0, i); buf = buf.slice(i + 2);
            const ev = { event: 'message', id: '', data: '' };
            for (const line of chunk.split('\n')) {
              if (line.startsWith('event:')) ev.event = line.slice(6).trim();
              else if (line.startsWith('id:')) ev.id = line.slice(3).trim();
              else if (line.startsWith('data:')) ev.data += line.slice(5).trim();
            }
            if (ev.id) this.lastEventId = ev.id;
            if (ev.event === 'message' && ev.data) {
              try { this._onMessage(JSON.parse(ev.data)).catch(e => console.error(`[${this.agentId}] handle:`, e.message)); }
              catch (e) { console.error(`[${this.agentId}] parse:`, e.message); }
            }
          }
        }
      } catch (e) {
        if (this.closed) return;
        console.error(`[${this.agentId}] stream down (${e.message}), reconnecting...`);
      }
      if (!this.closed) await sleep(1000 + Math.floor(Math.random() * 2000));
    }
  }
  close() {
    this.closed = true;
    try { this._ac?.abort(); } catch {}     // abort 在飞 SSE 流，防旧实例继续用已关的 db
    try { this.db.close(); } catch {}
  }

  // 收件处理：先落 SQLite → ACK → 需要执行时 claim→handler→result
  async _onMessage(m) {
    const row = this.db.prepare('SELECT state FROM seen WHERE msg_id = ?').get(m.msg_id);
    if (row && (row.state === 'done' || row.state === 'working')) return;  // 幂等：已处理完 / 本实例处理中（二次推送忽略）
    if (!row) {
      // 先持久化，再 ACK（顺序铁律——反了中间崩溃就是丢消息）
      this.db.prepare('INSERT INTO seen(msg_id, task_id, state, updated_at) VALUES(?,?,?,?)')
        .run(m.msg_id, m.task_id || '', 'received', new Date().toISOString());
    }
    await this._post('/mailbox/ack', { msg_id: m.msg_id, state: 'delivered' });
    if (this.db.prepare('SELECT state FROM seen WHERE msg_id = ?').get(m.msg_id).state === 'done') return;
    if (!this.handler) return;
    // 接单（claim_request_id 重试复用）
    let claim = null, gen = null;
    for (;;) {
      try {
        claim = await this._post('/mailbox/tasks/claim', { task_id: m.task_id, claim_request_id: this._claimReqId(m.msg_id), title: m.task_id });
        gen = claim.task.generation; break;
      } catch (e) {
        if (e.code === 409 && String(e.body?.error || '').includes('terminal')) return; // 终态：已被别人完成
        if (e.code === 409 && String(e.body?.error || '').includes('duplicate')) { gen = e.body.task?.generation; break; }
        await sleep(2000); // 租约被占：等待过期后重试
      }
    }
    // 标记执行中 + 启动续租心跳
    this.db.prepare('UPDATE seen SET state=?, updated_at=? WHERE msg_id=?').run('working', new Date().toISOString(), m.msg_id);
    const renewTimer = setInterval(() => {
      this._post('/mailbox/lease/renew', { task_id: m.task_id, generation: gen }).catch(() => {});
    }, Math.min(60, Math.floor(this.leaseSeconds / 3)) * 1000);
    // 执行业务
    let out;
    try { out = await this.handler(m); }
    catch (e) { out = { error: e.message, failed: true }; }
    clearInterval(renewTimer);
    const result_id = this._resultId(m.msg_id);
    for (;;) {
      try {
        await this._post('/mailbox/results', {
          task_id: m.task_id, generation: gen, result_id,
          result: out?.result ?? '', error: out?.error ?? '', failed: !!out?.failed,
        });
        break;
      } catch (e) {
        if (e.code === 409) {
          if (String(e.body?.error || '').includes('lease expired')) {
            await this._post('/mailbox/lease/renew', { task_id: m.task_id, generation: gen }).catch(() => {});
            continue;                   // 执行超租约：续租后同 result_id 重试
          }
          break;                        // stale generation / 终态覆盖：放弃（新执行者负责）
        }
        await sleep(2000);              // 网络失败：同 result_id 安全重试
      }
    }
    this.db.prepare('UPDATE seen SET state=?, updated_at=? WHERE msg_id=?').run('done', new Date().toISOString(), m.msg_id);
  }
  _claimIds = new Map();
  _claimReqId(msgId) { if (!this._claimIds.has(msgId)) this._claimIds.set(msgId, uuid()); return this._claimIds.get(msgId); }
  _resultIds = new Map();
  _resultId(msgId) { if (!this._resultIds.has(msgId)) this._resultIds.set(msgId, uuid()); return this._resultIds.get(msgId); }
}
