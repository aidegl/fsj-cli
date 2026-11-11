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
  } else if (cmd === 'commit') {
    // 安全提交包装（11-11 小粽令：物理锁防 git add 一把梭——同日两次事故后升格禁手）
    // 用法：fsj commit -m "<msg>" <pathspec...>   ｜ 特性：①显式 pathspec 必填 ②staged>20 文件拒并打清单 ③禁目录级 add
    const { spawnSync } = await import('node:child_process');
    const mi = rest.indexOf('-m');
    const msg = mi >= 0 ? rest[mi + 1] : '';
    const specs = rest.filter((v, i) => i !== mi && i !== mi + 1 && v !== '-m');
    if (!msg || !specs.length) throw new Error('用法：fsj commit -m "<msg>" <pathspec...>（pathspec 必填，点名文件或文件名通配，禁裸目录）');
    const dirBad = specs.filter(s2 => !/[.][a-zA-Z0-9]+$|\*$|^\.[^.]/.test(s2) && !/\*|\.[a-zA-Z0-9]+$/.test(s2));
    if (dirBad.length) throw new Error('拒收目录级 pathspec（改用文件名或通配限定）：' + dirBad.join(' , '));
    const add = spawnSync('git', ['add', '--', ...specs], { stdio: 'inherit' });
    if (add.status !== 0) process.exit(add.status ?? 1);
    const st = spawnSync('git', ['diff', '--cached', '--stat'], { encoding: 'utf8' });
    const lines = (st.stdout || '').trim().split(String.fromCharCode(10));
    const statTail = lines[lines.length - 1] || '';
    const m = / (\d+) files? changed/.exec(statTail);
    const n = m ? +m[1] : 0;
    if (n > 20) {
      const lst = spawnSync('git', ['diff', '--cached', '--name-only'], { encoding: 'utf8' });
      console.error('✘ 拒绝提交：staged ' + n + ' 个文件 > 20 上限（小粽令物理锁）。清单：' + lst.stdout.split(String.fromCharCode(10)).slice(0,25).join(' | '));
      spawnSync('git', ['reset'], { stdio: 'ignore' });
      process.exit(1);
    }
    if (!n) { console.log('（nothing staged）'); process.exit(0); }
    console.log('[fsj commit] staged ' + n + ' 文件：' + statTail);
    const ci = spawnSync('git', ['commit', '-m', msg], { stdio: 'inherit' });
    process.exit(ci.status ?? 0);
  } else if (cmd === 'org') {
    // 组织索引（Schema v0 第 2 批，已批）：只读拼装 → config/teams.json（索引非正身）
    const o = await import('../src/commands/org.mjs');
    const oi = rest.indexOf('-o');
    const out = oi >= 0 ? rest[oi + 1] : new URL('../config/teams.json', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
    const payload = await o.build(out);
    stamp(performance.now() - t0);
    if (json) outJson(payload);
    else console.log(`【org build】索引已生成 ${out}
成员 ${payload.count} 人（含 191 用户表比对）
注意：teams.json 是索引非正身，正身=AGENTS.md 与 ERP 行`);
  } else if (cmd === 'data') {
    // HAP/ERP 数据读出口（11-10 东城令与 cloud 合流进同一个 fsj 入口；原 fsj-data.mjs 已迁入 src/commands/data.mjs）
    const d = await import('../src/commands/data.mjs');
    await d.run(rest);
    stamp(performance.now() - t0);
  } else if (cmd === 'cloud') {
    // 云端世界树（11-10 东城令：上云做成函数，agent 一条命令，省 token）——ls/pull/push/show
    const c = await import('../src/cloud.mjs');
    const [verb, name] = rest;
    if (verb === 'ls') {
      const rows = await c.listCloud();
      stamp(performance.now() - t0);
      if (json) outJson(rows);
      else console.log(`【cloud ls】云端 world_tree 非空 ${rows.length} 人`);
      for (const r of rows) console.log(`- ☁ ${r.name}｜树 ${r.size} 字｜根：${r.root}｜${r.rowid.slice(0,8)}`);
    } else if (verb === 'pull') {
      const tree = await c.pull(name);
      const oi = rest.indexOf('-o');
      if (oi >= 0 && rest[oi + 1]) {
        (await import('fs')).writeFileSync(rest[oi + 1], JSON.stringify(tree, null, 2));
        stamp(performance.now() - t0);
        console.log(`【cloud pull】${name} → 已落 ${rest[oi + 1]}（${JSON.stringify(tree).length} 字符）`);
      } else {
        stamp(performance.now() - t0);
        if (json) outJson(tree);
        else console.log(`【cloud pull】${name} 根：${tree.title}｜子分区 ${(tree.children || []).length}（-o <路径> 落文件；--json 出全树）`);
      }
    } else if (verb === 'push') {
      const gi = rest.indexOf('--file'); const fi = rest.indexOf('--name');
      if (gi < 0 || !rest[gi + 1]) throw new Error('用法：fsj cloud push --name <名字> --file <树.json>');
      const file = rest[gi + 1]; const nm = fi >= 0 ? rest[fi + 1] : name;
      const treeStr = (await import('fs')).readFileSync(file, 'utf8');
      const r = await c.push(nm, treeStr);
      stamp(performance.now() - t0);
      if (json) outJson(r); else console.log(`【cloud push】✓ ${r.name}（${r.rowid.slice(0, 8)}）已写云端 world_tree，${r.bytes} 字符`);
    } else if (verb === 'show') {
      const tree = await c.pull(name);
      stamp(performance.now() - t0);
      console.log(`【cloud show】${name}｜根：${tree.title}｜${tree.description || ''}`);
      for (const x of (tree.children || [])) console.log(`- [${x.dimension}] ${x.title}`);
    } else throw new Error('用法：fsj cloud ls|pull <名>|push --name <名> --file <树>|show <名>');
} else if (cmd === 'chat') {
    // chat 动词族（11-06 东城令）：send/list/read/who —— 一切皆群，私聊=两人的群，寻址 rowid/全名（编号已弃用防漂移）
    const { identity, send, listMine, read, contacts, createGroup, sendGroup, readGroup, groupAdd, groupRemove, dismissGroup } = await import('../src/chat.mjs');
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
      json ? outJson(rows) : console.log(`【chat list】我（${me.name}）的会话 ${rows.length} 个\n` + rows.map(r => `- ${r.name}（${r.type || '未分类'} · ${r.rowid.slice(0, 8)}…）`).join('\n'));
    } else if (verb === 'read') {
      const me = identity();
      const lastN = (() => { const i = rest.indexOf('--last'); return i >= 0 ? +rest[i + 1] : 20; })();
      const rows = await read(me, target, lastN);
      stamp(performance.now() - t0);
      json ? outJson(rows) : console.log(`【chat read】${target} 最近 ${rows.length} 条\n` + rows.map(r => `[${r.at}] ${r.from}: ${r.text.slice(0, 60)}${r.text.length > 60 ? '…' : ''}`).join('\n'));
    } else if (verb === 'gnew') {
      const me = identity();
      if (!target || !msgParts.length) { console.error('用法：fsj chat gnew <群名> <成员编号|名字...>（自己自动入群）'); process.exit(2); }
      const r = await createGroup(me, target, msgParts);
      stamp(performance.now() - t0);
      json ? outJson(r) : console.log(`【chat gnew】群「${r.name}」已建（${r.sid.slice(0, 8)}…）\n成员 ${r.members.length} 人：${r.members.join('、')}`);
    } else if (verb === 'gsend') {
      const me = identity();
      if (!target || !msgParts.length) { console.error('用法：fsj chat gsend <群名> <正文>'); process.exit(2); }
      const r = await sendGroup(me, target, msgParts.join(' '));
      stamp(performance.now() - t0);
      json ? outJson(r) : console.log(`【chat gsend】→ 群「${target}」｜消息 ${r.msgId}`);
    } else if (verb === 'gread') {
      const lastN = (() => { const i = rest.indexOf('--last'); return i >= 0 ? +rest[i + 1] : 20; })();
      if (!target) { console.error('用法：fsj chat gread <群名> [--last N]'); process.exit(2); }
      const rows = await readGroup(target, lastN);
      stamp(performance.now() - t0);
      json ? outJson(rows) : console.log(`【chat gread】群「${target}」最近 ${rows.length} 条\n` + rows.map(r => `[${r.at}] ${r.from}: ${r.text.slice(0, 60)}${r.text.length > 60 ? '…' : ''}`).join('\n'));
    } else if (verb === 'gadd' || verb === 'gdel') {
      const me = identity();
      if (!target || !msgParts.length) { console.error(`用法：fsj chat ${verb} <群名> <成员编号|名字...>`); process.exit(2); }
      const r = verb === 'gadd' ? await groupAdd(me, target, msgParts) : await groupRemove(me, target, msgParts);
      stamp(performance.now() - t0);
      const act = verb === 'gadd' ? '入群' : '移出';
      json ? outJson(r) : console.log(`【chat ${verb}】群「${target}」\n${act}: ${r[verb === 'gadd' ? 'added' : 'removed'].join('、')}\n抽验${verb === 'gadd' ? '在群' : '已移出'}: ${r.verified.join('、') || '（未验到，重跑抽验）'}` + (r.approximate ? '\n⚠ 底稿为首建（HAP zzyh 只回前50，可能不全）——大群请谨慎，必要时手动核对' : ''));
    } else if (verb === 'gdismiss') {
      if (!target) { console.error('用法：fsj chat gdismiss <群名>'); process.exit(2); }
      const r = await dismissGroup(target);
      stamp(performance.now() - t0);
      json ? outJson(r) : console.log(`【chat gdismiss】群「${r.name}」已解散（${r.dismissed.slice(0, 8)}…）`);
    } else if (verb === 'who') {
      const list = await contacts(rest[0] === '--fresh');
      stamp(performance.now() - t0);
      json ? outJson(list) : console.log(`【chat who】通讯录 ${list.length} 人（编号仅显示，寻址用 rowid/全名）\n` + list.map(x => `${x.no || '—'}\t${x.name}\t${x.rowid}`).join('\n'));
    } else {
      console.error(`fsj chat: 未知动词 "${verb || ''}"。用法：\n` + [
        '  fsj chat send <编号|中文名|rowid> <正文>',
        '  fsj chat read <编号|中文名|rowid> [--last N]',
        '  fsj chat list',
        '  fsj chat who [--fresh]',
        '  fsj chat gnew <群名> <成员编号|名字...>',
        '  fsj chat gsend <群名> <正文>',
        '  fsj chat gread <群名> [--last N]',
      ].join('\n'));
      process.exit(2);
    }
  } else if (cmd === 'tgp') {
    // TGP 投影（11-09 东城定调）：世界树格式是内部正身，TGP 是 CLI 输出给别人看的东西——只读视图，永不落档
    const { tgpView } = await import('../src/tgp.mjs');
    const r = tgpView(arg || 'trees/xiaofeng.json');
    stamp(performance.now() - t0);
    json ? outJson(r) : console.log(r.markdown);
  } else if (cmd === 'decode' || cmd === 'log' || cmd === 'flow') {
    console.error(`fsj ${cmd}：M2 实现（PR 第 9 节里程碑），先跑 boot/get/find`);
    process.exit(2);
  } else {
    console.log('fsj — FSJ 世界接入器 v0.1\n用法：fsj boot | get <rowid> | getr <rowid> | find <词> | tgp <树json路径> | chat send/list/read/who [--json]\nM2 桩：decode / log / flow');
  }
} catch (e) {
  process.stderr.write('✘ ' + e.message + '\n');
  process.exit(1);
}
