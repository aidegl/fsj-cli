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
  } else if (cmd === 'decode' || cmd === 'log' || cmd === 'flow') {
    console.error(`fsj ${cmd}：M2 实现（PR 第 9 节里程碑），先跑 boot/get/find`);
    process.exit(2);
  } else {
    console.log('fsj — FSJ 世界接入器 v0.1\n用法：fsj boot | get <rowid> | getr <rowid> | find <词> [--json]\nM2 桩：decode / log / flow');
  }
} catch (e) {
  process.stderr.write('✘ ' + e.message + '\n');
  process.exit(1);
}
