// voice-orchestrator.mjs — qivi 云端化 V1.0.1 语音编排服务（部署于 8.155.148.75，pm2 常驻）
// 需求正身：fsj-cli/docs/qivi-cloud-v1-requirements.md
// V1.0.1 变更：豆包双协议接入（梦瑶正身 fsj4/xiaozhi-server/server.py 移植 node 版）
//   TTS = seed-tts-2.0 双向流式 WS（X-Api-Key 鉴权，实测 21KB mp3 通）
//   ASR = sauc bigmodel 流式 WS（同键，PCM16k 输入，enable_nonstream）
//   LLM = A2A 信箱 quickthink → win-main qwen3:14b（跨机复用）
// 依赖：零外部 npm 包（node ≥22）
import http from 'node:http';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const cfg = JSON.parse(readFileSync(process.env.A2A_CONFIG || 'config/a2a.local.json', 'utf8'));
const QCFG = cfg.qiviCloud || {};
const PORT = Number(process.env.A2A_PORT || QCFG.port || 8790);
const WAKE_WORD = process.env.A2A_WAKE_WORD || QCFG.wakeWord || 'qivi';
const SILENCE_TIMEOUT_MS = Number(QCFG.silenceTimeoutMs || 30000);
const PUBLIC_DIR = join(HERE, 'public');
const VOLC = QCFG.volc || {};
const DOUBAO_KEY = process.env.A2A_DOUBAO_KEY || VOLC.doubaoKey || '';   // 豆包语音 X-Api-Key（UUID）
const TTS_VOICE = QCFG.ttsVoice || 'zh_female_vv_uranus_bigtts';

// A2A 信箱（LLM quickthink 走这里）
const MAILBOX = (QCFG.serverUrl || cfg.serverUrl || 'https://n8n.100000whys.cn/a2a').replace(/\/$/, '');
const MAILBOX_TOKEN = cfg.agents['win-main'];

// ---------- 会话状态 ----------
const sessionState = new Map();   // agentId → { convState: listening|conversation, lastVoiceAt }
const sessionOf = (agentId) => {
  if (!sessionState.has(agentId)) sessionState.set(agentId, { convState: 'listening', lastVoiceAt: 0 });
  const s = sessionState.get(agentId);
  if (s.convState === 'conversation' && Date.now() - s.lastVoiceAt > SILENCE_TIMEOUT_MS) s.convState = 'listening';
  return s;
};

// ---------- LLM：信箱 quickthink ----------
async function llmQuickthink(prompt, system) {
  const msg_id = crypto.randomUUID();
  const task_id = 'qt-' + crypto.randomUUID().slice(0, 8);
  const r = await fetch(MAILBOX + '/a2a/message:send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${MAILBOX_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ msg_id, task_id, to: 'win-main', payload: { type: 'quickthink', prompt, system } }),
  });
  if (!r.ok) throw new Error('mailbox send HTTP ' + r.status);
  for (let i = 0; i < 60; i++) {
    await new Promise(rr => setTimeout(rr, 1000));
    const q = await fetch(MAILBOX + '/a2a/tasks/' + task_id, { headers: { Authorization: `Bearer ${MAILBOX_TOKEN}` } }).then(x => x.json()).catch(() => ({}));
    if (q.state === 'completed') return String(q.result || '');
    if (q.state === 'failed') throw new Error('quickthink failed: ' + (q.error || ''));
  }
  throw new Error('quickthink timeout (60s)');
}

// ---------- 豆包公共帧（二进制协议）：header4 + event(4B) + [sid len+sid] + payload len(4B) + payload ----------
function frame(header4, eventCode, payload, sessionId = null) {
  const b = [...header4];
  const ev = Buffer.alloc(4); ev.writeUInt32BE(eventCode); b.push(...ev);
  if (sessionId !== null) { const sid = Buffer.from(sessionId); const l = Buffer.alloc(4); l.writeUInt32BE(sid.length); b.push(...l, ...sid); }
  const pl = Buffer.alloc(4); pl.writeUInt32BE(payload.length); b.push(...pl, ...payload);
  return Buffer.from(b);
}

// ---------- TTS：seed-tts-2.0 双向流式（node 版，实测 21KB mp3 通） ----------
function doubaoTts(text) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket('wss://openspeech.bytedance.com/api/v3/tts/bidirection', {
      headers: { 'X-Api-Key': DOUBAO_KEY, 'X-Api-Resource-Id': 'seed-tts-2.0', 'X-Api-Connect-Id': crypto.randomUUID() },
    });
    ws.binaryType = 'arraybuffer';
    const audio = [];
    const sessionId = crypto.randomUUID();
    let done = false;
    const finish = (fn) => { if (!done) { done = true; try { ws.close(); } catch (e) {} fn(); } };
    const timer = setTimeout(() => finish(() => reject(new Error('TTS 20s 超时'))), 20000);
    ws.addEventListener('open', () => {
      ws.send(frame([0x11, 0x14, 0x10, 0x00], 1, Buffer.from('{}')));   // event 1 StartConnection（无 sid）
      ws.send(frame([0x11, 0x14, 0x10, 0x00], 100, Buffer.from(JSON.stringify({ user: { uid: 'qivi-cloud' }, event: 100, req_params: { speaker: TTS_VOICE, audio_params: { format: 'mp3', sample_rate: 24000 } } })), sessionId));
      ws.send(frame([0x11, 0x14, 0x10, 0x00], 200, Buffer.from(JSON.stringify({ event: 200, req_params: { text } })), sessionId));
      ws.send(frame([0x11, 0x14, 0x10, 0x00], 102, Buffer.from('{}'), sessionId));   // event 102 FinishTask
    });
    ws.addEventListener('message', (ev) => {
      const b = Buffer.from(ev.data);
      const mt = b[1] >> 4;
      let pos = (b[0] & 0x0F) * 4;
      const event = b.readUInt32BE(pos); pos += 4;
      let payload = Buffer.alloc(0);
      if (b.length - pos >= 4) {
        const l = b.readUInt32BE(pos); const rest = b.slice(pos + 4);
        if (l > 0 && l < 128 && l <= rest.length) {
          pos += 4 + l;
          if (b.length - pos >= 4) { const l2 = b.readUInt32BE(pos); payload = b.slice(pos + 4, pos + 4 + l2); }
        } else payload = l > rest.length ? rest : rest.slice(0, l);
      }
      if (mt === 0xB && event === 352) audio.push(payload);              // 音频块
      else if (mt === 0xF) {
        // 错误帧（无 session_id）：不走 l<128 sid 启发式——会误吞错误 JSON（梦瑶实锤"空错误帧"根因），直接解剩余字节
        let p2 = pos;
        if (b.length - p2 >= 4) { const l2 = b.readUInt32BE(p2); payload = b.slice(p2 + 4, p2 + 4 + l2); }
        else payload = b.slice(pos);
        clearTimeout(timer); finish(() => reject(new Error('豆包 TTS 错误帧: ' + payload.slice(0, 200).toString())));
      }
      else if (event === 152 || event === 153) {
        clearTimeout(timer);
        const mp3 = Buffer.concat(audio);
        if (mp3.length < 500) finish(() => reject(new Error('TTS 音频过小 ' + mp3.length)));
        else finish(() => resolve(mp3));
      }
    });
    ws.addEventListener('error', (e) => { clearTimeout(timer); finish(() => reject(new Error('TTS ws: ' + (e.message || e.error?.message || 'error')))); });
  });
}

// ---------- ASR：sauc bigmodel 流式（同键，PCM16k 输入，nonstream 一次返回） ----------
function doubaoAsr(pcm16k) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket('wss://openspeech.bytedance.com/api/v3/sauc/bigmodel_async', {
      headers: { 'X-Api-Key': DOUBAO_KEY, 'X-Api-Resource-Id': 'volc.seedasr.sauc.duration', 'X-Api-Sequence': '-1', 'X-Api-Connect-Id': crypto.randomUUID() },
    });
    ws.binaryType = 'arraybuffer';
    let done = false;
    const finish = (fn) => { if (!done) { done = true; try { ws.close(); } catch (e) {} fn(); } };
    const timer = setTimeout(() => finish(() => reject(new Error('ASR 15s 超时'))), 15000);
    const h4 = (mt, flags, serial, comp) => Buffer.from([(1 << 4) | 1, (mt << 4) | flags, (serial << 4) | comp, 0]);
    const gzipP = (b) => new Promise((ok, no) => zlib.gzip(b, (e, r) => e ? no(e) : ok(r)));
    ws.addEventListener('open', async () => {
      const full = await gzipP(Buffer.from(JSON.stringify({
        user: { uid: 'qivi-cloud' },
        audio: { format: 'pcm', codec: 'raw', rate: 16000, bits: 16, channel: 1, language: 'zh-CN' },
        request: { model_name: 'bigmodel', enable_nonstream: true, show_utterances: true, result_type: 'full', enable_itn: true, enable_punc: true, enable_ddc: true },
      })));
      const flen = Buffer.alloc(4); flen.writeUInt32BE(full.length);
      ws.send(Buffer.concat([h4(0b0001, 0, 1, 1), flen, full]));   // 长度头必须显式拼接（writeUInt32BE 单独调用不会拼包——实锤坑）
      const chunk = 6400;
      for (let i = 0; i < pcm16k.length; i += chunk) {
        const g = await gzipP(pcm16k.slice(i, i + chunk));
        const hh = h4(0b0010, 0b0000, 0, 1); const ll = Buffer.alloc(4); ll.writeUInt32BE(g.length);   // 数据片恒为非 last（正身顺序：数据片全 0b0000，循环后单独空 last 帧）
        ws.send(Buffer.concat([hh, ll, g]));
        await new Promise(r => setTimeout(r, 5));
      }
      const g = await gzipP(Buffer.alloc(0));
      const hh = h4(0b0010, 0b0010, 0, 1); const ll = Buffer.alloc(4); ll.writeUInt32BE(g.length);
      ws.send(Buffer.concat([hh, ll, g]));   // 唯一的 last 帧
    });
    ws.addEventListener('message', async (ev) => {
      const b = Buffer.from(ev.data);
      const mt = b[1] >> 4;
      const flags = b[1] & 0x0F, comp = b[2] & 0x0F;
      let pos = (b[0] & 0x0F) * 4;
      if (flags === 1 || flags === 3) pos += 4;   // 跳过服务端 sequence
      if (mt === 0b1111) {
        const code = b.readUInt32BE(pos); pos += 4;
        const size = b.readUInt32BE(pos); pos += 4;
        clearTimeout(timer); finish(() => reject(new Error(`豆包 ASR 错误 ${code}: ${b.slice(pos, pos + size).toString().slice(0, 150)}`)));
        return;
      }
      if (mt !== 0b1001) return;
      const size = b.readUInt32BE(pos); pos += 4;
      let payload = b.slice(pos, pos + size);
      if (comp === 1) payload = zlib.gunzipSync(payload);
      let j; try { j = JSON.parse(payload); } catch (e) { return; }
      let r = j.result;
      if (Array.isArray(r)) r = r.length ? r.reduce((a, x) => ((x.confidence || 0) > (a.confidence || 0) ? x : a), {}) : {};
      const text = (r && r.text) || '';
      const isFinal = flags === 3 || !!((r && r.utterances) || []).some(u => u.definite);
      if (text) sessionState.set('__asr_text__', text);   // 全量覆盖
      if (isFinal && text) { clearTimeout(timer); finish(() => resolve(text.replace(/\s/g, ''))); }
    });
    ws.addEventListener('error', (e) => { clearTimeout(timer); finish(() => reject(new Error('ASR ws: ' + (e.message || e.error?.message || 'error')))); });
  });
}

// ---------- 语音管线：PCM16k → ASR → 唤醒词门禁 → LLM → TTS ----------
async function voicePipeline(agentId, pcm16k) {
  const s = sessionOf(agentId);
  s.lastVoiceAt = Date.now();
  const text = await doubaoAsr(pcm16k);
  console.error(`[voice] ${agentId} asr: "${text}"`);
  if (s.convState === 'listening') {
    const variants = [WAKE_WORD, 'kiwi', 'kivi', 'q i v i', '奇一'];   // ASR 会把 qivi 转写成 Kiwi/kivi 等变体（实测"Kiwi"）
    const low = text.toLowerCase();
    if (!variants.some(v => low.includes(v.toLowerCase()))) {
      return { state: s.convState, asr: text, matched: false, reply_text: '', reply_audio_b64: null };
    }
    s.convState = 'conversation';
  }
  s.lastVoiceAt = Date.now();
  const reply = await llmQuickthink(text, '你是 qivi，简短口语化回答（一两句话）。');
  console.error(`[voice] ${agentId} llm: "${String(reply).slice(0, 60)}"`);
  let audio = null, ttsErr = '';
  try { audio = await doubaoTts(reply); } catch (e) { ttsErr = String(e.message).slice(0, 150); }
  return { state: s.convState, asr: text, matched: true, reply_text: reply, reply_audio: audio, reply_audio_fmt: 'mp3', tts_error: ttsErr };
}

// ---------- 静态页面 ----------
const pageCache = (() => {
  const p = join(PUBLIC_DIR, 'qivi-cloud.html');
  return () => (existsSync(p) ? readFileSync(p) : Buffer.from('<h1>qivi-cloud: 页面文件未部署</h1>'));
})();

// ---------- 路由 ----------
const routes = [];
const route = (method, pattern, fn) => routes.push({ method, pattern, fn });

route('GET', /^\/$/, (req, res) => { res.writeHead(301, { location: '/qivi-cloud.html' }); res.end(); });
route('GET', /^\/qivi-cloud\.html$/, (req, res) => { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); res.end(pageCache()); });
route('GET', /^\/healthz$/, (req, res) => { res.writeHead(200); res.end('ok'); });

route('POST', /^\/voice$/, async (req, res, body) => {
  const agent = body.agent || 'unknown';
  const pcm = Buffer.from(body.pcm_b64 || '', 'base64');
  if (!pcm.length) return deny(res, 400, 'pcm_b64 empty');
  try {
    const out = await voicePipeline(agent, pcm);
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ...out, reply_audio_b64: out.reply_audio ? out.reply_audio.toString('base64') : null }));
  } catch (e) {
    console.error('[voice]', e.message);
    res.writeHead(500, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ error: e.message.slice(0, 200) }));
  }
});

route('GET', /^\/config$/, (req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({
    wake_word: WAKE_WORD, silence_timeout_ms: SILENCE_TIMEOUT_MS,
    tts_ready: !!DOUBAO_KEY, asr_ready: !!DOUBAO_KEY,
  }));
});

// dock 渲染内核静态托管（页面引用 /qivi-dock.iife.js——公开资产）
route('GET', /^\/qivi-dock\.iife\.js$/, (req, res) => {
  try {
    res.writeHead(200, { 'content-type': 'application/javascript; charset=utf-8' });
    res.end(readFileSync(join(PUBLIC_DIR, 'qivi-dock.iife.js')));
  } catch (e) { res.writeHead(404); res.end('/* not found */'); }
});

function deny(res, code, msg) {
  res.writeHead(code, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ error: msg }));
}
function readBody(req, limitMB = 15) {
  return new Promise((ok, err) => {
    const chunks = []; let size = 0;
    req.on('data', c => { size += c.length; if (size > limitMB * 1024 * 1024) { err(new Error('too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => { try { ok(JSON.parse(Buffer.concat(chunks).toString('utf8'))); } catch (e) { ok({}); } });
    req.on('error', err);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  const agent = authAgent(req);
  const isPublic = ['/qivi-cloud.html', '/qivi-dock.iife.js', '/config', '/healthz', '/', '/voice'].some(p => url.pathname === p);   // /voice 公开（页面用户无 token；V1.1 加访问控制）
  if (!isPublic && !agent) return deny(res, 401, 'unauthorized');
  for (const r of routes) {
    if (r.method !== req.method) continue;
    const m = url.pathname.match(r.pattern);
    if (!m) continue;
    try {
      const body = req.method === 'POST' ? await readBody(req) : {};
      await r.fn(req, res, body, agent, m, url);
    } catch (e) {
      console.error('[route]', url.pathname, e.message);
      if (!res.writableEnded) deny(res, 500, e.message.slice(0, 200));
    }
    return;
  }
  deny(res, 404, 'no route');
});
function authAgent(req) {
  const m = (req.headers['authorization'] || '').match(/^Bearer (.+)$/);
  if (!m) return null;
  for (const [aid, tok] of Object.entries(cfg.agents)) if (tok === m[1]) return aid;
  return null;
}

mkdirSync(PUBLIC_DIR, { recursive: true });
server.listen(PORT, () => console.error(`[qivi-orchestrator] v1.0.1 listening :${PORT} (wake="${WAKE_WORD}", doubao=${DOUBAO_KEY ? 'ready' : '未配置'})`));
