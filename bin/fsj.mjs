#!/usr/bin/env node
// fsj — FSJ 世界接入器命令入口（M1：boot/get/getr/find 可用；decode/log/flow 为 M2 桩）
// 用法：node bin/fsj.mjs <命令> [参数] [--json]
import { get, getReal, find, boot, DIM } from '../src/core.mjs';

const args = process.argv.slice(2);
const json = args.includes('--json');
const [cmd, ...rest] = args.filter(a => a !== '--json');
const arg = rest.join(' ');
const t0 = performance.now();

const stamp = (ms) => process.stderr.write(`[${cmd} ${ms.toFixed(1)}ms]\n`);
const outJson = (v) => console.log(JSON.stringify(v, null, 2));

try {
  if (cmd === 'boot') {
    const md = boot();
    stamp(performance.now() - t0);
    json ? outJson({ markdown: md }) : console.log(md);
  } else if (cmd === 'get') {
    const r = get(arg);
    stamp(performance.now() - t0);
    json ? outJson(r) : console.log(`【get】${r.title}（w${r.weight}·${DIM[r.dimension] || r.dimension}维）\n${r.content}`);
  } else if (cmd === 'getr') {
    const r = await getReal(arg);
    stamp(performance.now() - t0);
    json ? outJson(r) : console.log(`【getr 真云】${r.title}\n${r.content.slice(0, 400)}${r.content.length > 400 ? '…' : ''}`);
  } else if (cmd === 'find') {
    const hits = find(arg);
    stamp(performance.now() - t0);
    json ? outJson(hits) : console.log(`【find "${arg}"】${hits.length} 命中\n` + hits.map(r => `- [w${r.weight}] ${r.title}（${DIM[r.dimension] || r.dimension}维 · ${r.rowid}）`).join('\n'));
  } else if (cmd === 'chat') {
    // chat 动词族（11-06 东城令）：send/list/read/who —— 一切皆群，私聊=两人的群，寻址编号优先
    const { identity, send, listMine, read, contacts } = await import('../src/chat.mjs');
    const [verb, target, ...msgParts] = rest;
    if (verb === 'send') {
      const me = identity();
      const r = await send(me, target, msgParts.join(' '));
      stamp(performance.now() - t0);
      json ? outJson(r) : console.log(`【chat send】我（${me.name}）→ ${r.to}｜消息 ${r.msgId}`);
    } else if (verb === 'list') {
      const me = identity();
      const rows = await listMine(me);
      stamp(performance.now() - t0);
      json ? outJson(rows) : console.log(`【chat list】我（${me.name}）的会话 ${rows.length} 个\n` + rows.map(r => `- ${r.name}（${r.type || '?'} · ${r.rowid}）`).join('\n'));
    } else if (verb === 'read') {
      const me = identity();
      const lastN = (() => { const i = rest.indexOf('--last'); return i >= 0 ? +rest[i + 1] : 20; })();
      const rows = await read(me, target, lastN);
      stamp(performance.now() - t0);
      json ? outJson(rows) : console.log(`【chat read】${target} 最近 ${rows.length} 条\n` + rows.map(r => `[${r.at}] ${r.from}: ${r.text.slice(0, 60)}${r.text.length > 60 ? '…' : ''}`).join('\n'));
    } else if (verb === 'who') {
      const list = await contacts(rest[0] === '--fresh');
      stamp(performance.now() - t0);
      json ? outJson(list) : console.log(`【chat who】通讯录 ${list.length} 人（编号优先寻址）\n` + list.map(x => `${x.no || '—'}\t${x.name}\t${x.rowid}`).join('\n'));
    } else {
      console.log('fsj chat — 聊天命令族（私聊协议 v2.0）\n用法：fsj chat send <编号|rowid> <正文> | list | read <编号|rowid> [--last N] | who [--fresh]');
    }
  } else if (cmd === 'decode' || cmd === 'log' || cmd === 'flow') {
    console.error(`fsj ${cmd}：M2 实现（PR 第 9 节里程碑），先跑 boot/get/find`);
    process.exit(2);
  } else {
    console.log('fsj — FSJ 世界接入器 v0.1\n用法：fsj boot | get <rowid> | getr <rowid> | find <词> | chat send/list/read/who [--json]\nM2 桩：decode / log / flow');
  }
} catch (e) {
  process.stderr.write('✘ ' + e.message + '\n');
  process.exit(1);
}
