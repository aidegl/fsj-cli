// ws-server v2（10-30 无名改）——在 v1 echo 基础上加：qivi 广播频道 + token 鉴权 + 客户端日志
// 部署：覆盖 /www/wwwroot/workspace/ws-server/server.js → pm2 restart ws-server
// 协议：
//   客户端→服务端 {type:"ping"}                        → {type:"pong"}
//   客户端→服务端 {type:"broadcast", channel, data}    → 全体客户端收 {type:"broadcast", channel, data}
//   客户端→服务端 {input:"..."}                        → v1 echo 原样保留（点对点 reply）
//   服务端→新客户端 {type:"welcome", ...}
// 鉴权：URL ?token=xxx 对比 process.env.WS_TOKEN（pm2 ecosystem 或启动环境变量给；不设=不鉴权）
const http = require('http');
const { WebSocketServer } = require('ws');

const PORT = Number(process.env.WS_PORT) || 8080;
const WS_TOKEN = process.env.WS_TOKEN || '';
let nextId = 1;
const clients = new Map();   // ws -> {id}

const server = http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('{"ok":true,"clients":' + clients.size + '}'); }
  res.writeHead(404); res.end();
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws, req) => {
  const url = new URL(req.url, 'http://x');
  if (WS_TOKEN && url.searchParams.get('token') !== WS_TOKEN) {
    ws.close(4001, 'unauthorized');
    return;
  }
  const id = nextId++;
  clients.set(ws, { id });
  console.log(`[conn] #${id} 连入（在线 ${clients.size}）`);
  ws.send(JSON.stringify({ type: 'welcome', clientId: id, clients: clients.size, ts: Date.now() }));

  ws.on('message', (raw) => {
    let m; try { m = JSON.parse(raw.toString()); } catch (e) { return; }
    if (m.type === 'ping') return ws.send(JSON.stringify({ type: 'pong', ts: Date.now() }));
    if (m.type === 'broadcast' && m.channel) {
      const out = JSON.stringify({ type: 'broadcast', channel: m.channel, data: m.data, ts: Date.now() });
      let n = 0;
      for (const [c] of clients) { try { if (c.readyState === 1) { c.send(out); n++; } } catch (e) {} }
      console.log(`[bc] #${id} channel=${m.channel} → ${n} 客户端`);
      return;
    }
    // v1 echo 保留
    ws.send(JSON.stringify({ type: 'reply', clientId: id, input: m.input || '', echo: m.input || '', length: String(m.input || '').length, ts: Date.now() }));
  });

  ws.on('close', () => { clients.delete(ws); console.log(`[disc] #${id} 离开（在线 ${clients.size}）`); });
  ws.on('error', () => {});
});

// 心跳清扫：30 秒没 pong 的踢掉
setInterval(() => {
  for (const [ws] of clients) { if (ws.readyState === 1) { ws.ping(); } }
}, 30000);

server.listen(PORT, '127.0.0.1', () => console.log(`[ws-server v2] 127.0.0.1:${PORT} 起来（token:${WS_TOKEN ? '开' : '关'}）`));
