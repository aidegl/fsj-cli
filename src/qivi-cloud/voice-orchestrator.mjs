// voice-orchestrator.mjs — qivi 云端化 V1.0 语音编排服务（部署于 8.155.148.75，pm2 常驻）
// 需求正身：fsj-cli/docs/qivi-cloud-v1-requirements.md（V1.0 冻结版）
// 职责：①静态页面托管 ②语音管线编排（浏览器录音 → 火山ASR → LLM → 豆包TTS → 音频回页）
//       ③WS 信令（会话状态广播）④监听模式唤醒词门禁（LLM/TTS 仅唤醒词命中后调用——算力纪律）
// 依赖：零外部 npm 包（node ≥22 内置能力）
// LLM 走 A2A 信箱 quickthink（to: win-main → 本机 qwen3:14b）——复用跨机基建，零穿透

import http from 'node:http';
import crypto from 'node:crypto';
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

// 豆包/火山引擎凭据（未配置时 TTS 降级为文本回执+提示音缺失）
const VOLC = QCFG.volc || {};   // { appId, accessToken, ttsAppId... }

// A2A 信箱（LLM quickthink 走这里）
const MAILBOX = (QCFG.serverUrl || cfg.serverUrl || 'https://n8n.100000whys.cn/a2a').replace(/\/$/, '');
const MAILBOX_TOKEN = cfg.agents['win-main'];   // 编排服务以 win-main 身份调 quickthink

// ---------- 会话状态（内存：agentId → { convState, lastVoiceAt }） ----------
// convState: 'listening'（只听唤醒词） | 'conversation'（已唤醒，对话中）
const sessionState = new Map();
const sessionOf = (agentId) => {
  if (!sessionState.has(agentId)) sessionState.set(agentId, { convState: 'listening', lastVoiceAt: 0 });
  const s = sessionState.get(agentId);
  // 静默超时：对话态超时回监听（不思考但保持监听）
  if (s.convState === 'conversation' && Date.now() - s.lastVoiceAt > SILENCE_TIMEOUT_MS) {
    s.convState = 'listening';
  }
  return s;
};

// ---------- LLM：经 A2A 信箱 quickthink（跨机复用，零穿透） ----------
async function llmQuickthink(prompt, system) {
  const msg_id = crypto.randomUUID();
  const task_id = 'qt-' + crypto.randomUUID().slice(0, 8);
  const r = await fetch(MAILBOX + '/a2a/message:send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${MAILBOX_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      msg_id, task_id, to: 'win-main',
      payload: { type: 'quickthink', prompt, system },
    }),
  });
  if (!r.ok) throw new Error('mailbox send HTTP ' + r.status);
  // 轮询任务结果（quickthink 执行通常 5~30s）
  for (let i = 0; i < 60; i++) {
    await new Promise(rr => setTimeout(rr, 1000));
    const q = await fetch(MAILBOX + '/a2a/tasks/' + task_id, { headers: { Authorization: `Bearer ${MAILBOX_TOKEN}` } });
    const t = await q.json().catch(() => ({}));
    if (t.state === 'completed') return String(t.result || '');
    if (t.state === 'failed') throw new Error('quickthink failed: ' + (t.error || ''));
  }
  throw new Error('quickthink timeout (60s)');
}

// ---------- ASR：火山引擎一句话识别（HTTP POST，音频 base64） ----------
// 文档：https://www.volcengine.com/docs/6561/80817（全模型一句话识别）
async function volcAsr(audioB64, audioFormat) {
  if (!VOLC.asrAppId || !VOLC.accessToken) throw new Error('ASR 未配置（volc.asrAppId/accessToken）');
  const body = {
    app: { appid: VOLC.asrAppId, cluster: VOLC.asrCluster || 'volcengine_streaming_common' },
    user: { uid: 'qivi-cloud' },
    audio: { format: audioFormat || 'wav', data: audioB64 },
    request: { model_name: 'bigmodel', sequence: -1 },
  };
  const r = await fetch('https://openspeech.bytedance.com/api/v1/asr', {
    method: 'POST',
    headers: {
      Authorization: `Bearer; ${VOLC.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const j = await r.json();
  const t = j.result?.text ?? '';
  if (!t) throw new Error('ASR empty: ' + JSON.stringify(j).slice(0, 120));
  return t;
}

// ---------- TTS：豆包/火山语音合成（HTTP，返回音频二进制） ----------
async function doubaoTts(text, voice) {
  if (!VOLC.ttsAppId || !VOLC.ttsToken) throw new Error('TTS 未配置（volc.ttsAppId/ttsToken）——先在 config 填凭据');
  const body = {
    app: { appid: VOLC.ttsAppId, token: VOLC.ttsToken, cluster: VOLC.ttsCluster || 'volcano_tts' },
    user: { uid: 'qivi-cloud' },
    audio: { voice_type: voice || QCFG.ttsVoice || 'zh_female_cancan_mars_bigtts', encoding: 'mp3' },
    request: {
      reqid: crypto.randomUUID(),
      text,
      operation: 'query',   // 一次性合成返回全部音频
    },
  };
  const r = await fetch('https://openspeech.bytedance.com/api/v1/tts', {
    method: 'POST',
    headers: { Authorization: `Bearer; ${VOLC.ttsToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const j = await r.json();
  if (j.code !== 3000 || !j.data) throw new Error('TTS fail: ' + (j.message || j.code));
  return Buffer.from(j.data, 'base64');   // mp3 二进制
}

// ---------- 语音管线：录音 → ASR → 唤醒词门禁 → LLM → TTS ----------
async function voicePipeline(agentId, audioBuf, audioFormat) {
  const s = sessionOf(agentId);
  s.lastVoiceAt = Date.now();
  const audioB64 = audioBuf.toString('base64');
  const text = await volcAsr(audioB64, audioFormat);
  console.error(`[voice] ${agentId} asr: "${text}"`);

  // 监听态：唤醒词门禁（文本不含唤醒词 → 丢弃，不调 LLM/TTS——算力纪律）
  if (s.convState === 'listening') {
    if (!text.includes(WAKE_WORD)) {
      return { state: s.convState, asr: text, matched: false, reply_text: '', reply_audio: null };
    }
    s.convState = 'conversation';   // 唤醒词命中 → 进入对话态
  }
  s.lastVoiceAt = Date.now();

  // LLM（经信箱 quickthink → win-main 的 qwen3:14b）
  const reply = await llmQuickthink(text, '你是 qivi，简短口语化回答（一两句话）。');
  console.error(`[voice] ${agentId} llm: "${String(reply).slice(0, 60)}"`);

  // TTS（豆包）
  let audio = null, ttsErr = '';
  try { audio = await doubaoTts(reply); } catch (e) { ttsErr = e.message; }
  return { state: s.convState, asr: text, matched: true, reply_text: reply, reply_audio: audio, reply_audio_fmt: 'mp3', tts_error: ttsErr };
}

// ---------- 静态页面 ----------
const pageCache = (() => {
  const p = join(PUBLIC_DIR, 'qivi-cloud.html');
  return () => (existsSync(p) ? readFileSync(p) : Buffer.from('<h1>qivi-cloud: 页面文件未部署（public/qivi-cloud.html 缺失）</h1>'));
})();

// ---------- HTTP 路由 ----------
const routes = [];
const route = (method, pattern, fn) => routes.push({ method, pattern, fn });

route('GET', /^\/$/, (req, res) => { res.writeHead(301, { location: '/qivi-cloud.html' }); res.end(); });
route('GET', /^\/qivi-cloud\.html$/, (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(pageCache());
});
route('GET', /^\/healthz$/, (req, res) => { res.writeHead(200); res.end('ok'); });

// 语音入口（浏览器整段录音上传）——返回 JSON（文本+音频 base64）
route('POST', /^\/voice$/, async (req, res, body) => {
  const agent = body.agent || 'unknown';
  const audio = Buffer.from(body.audio_b64 || '', 'base64');
  if (!audio.length) return deny(res, 400, 'audio_b64 empty');
  try {
    const out = await voicePipeline(agent, audio, body.audio_format || 'webm');
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({
      ...out,
      reply_audio_b64: out.reply_audio ? out.reply_audio.toString('base64') : null,
    }));
  } catch (e) {
    console.error('[voice]', e.message);
    res.writeHead(500, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ error: e.message.slice(0, 200) }));
  }
});

// 配置查询（页面初始化用：唤醒词/模式）
route('GET', /^\/config$/, (req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ wake_word: WAKE_WORD, silence_timeout_ms: SILENCE_TIMEOUT_MS, tts_ready: !!(VOLC.ttsAppId && VOLC.ttsToken) }));
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
  for (const r of routes) {
    if (r.method !== req.method) continue;
    const m = url.pathname.match(r.pattern);
    if (!m) continue;
    try {
      const body = req.method === 'POST' ? await readBody(req) : {};
      await r.fn(req, res, body, m, url);
    } catch (e) {
      console.error('[route]', url.pathname, e.message);
      if (!res.writableEnded) deny(res, 500, e.message.slice(0, 200));
    }
    return;
  }
  deny(res, 404, 'no route');
});

mkdirSync(PUBLIC_DIR, { recursive: true });
server.listen(PORT, () => console.error(`[qivi-orchestrator] v1.0 listening :${PORT} (wake="${WAKE_WORD}", tts=${VOLC.ttsAppId ? 'ready' : '未配置'})`));
