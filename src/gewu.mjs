// gewu.mjs — 格物 v0 结构扫描器（六科目，证据到 文件:行）
// 用法：node src/gewu.mjs <树json路径> [树2 …]   输出格物单 MD 到 workspace/
// 科目：双正身/断链(docRef,fsj://,nodeRef)/权重打架/判据互斥/id违规/空壳
// 严重度：确认（结构性实锤）/苗头（需人工核）。红线：只出单不动刀。
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

const scanTree = (treePath) => {
  const raw = readFileSync(treePath, 'utf8');
  const lines = raw.split(/\r?\n/);
  // 行号映射：节点id -> 首次出现的行号
  const lineOf = {};
  lines.forEach((l, i) => {
    const m = l.match(/"id":\s*"([^"]+)"/);
    if (m && !(m[1] in lineOf)) lineOf[m[1]] = i + 1;
  });
  const tree = JSON.parse(raw);
  const items = [];
  const push = (type, sev, node, claim, evidence) => items.push({
    type, severity: sev,
    target: node.id,
    claim,
    evidence: evidence || (treePath + ':' + (lineOf[node.id] || '?')),
    node_path: (node.__path || []).join('›'),
  });

  const all = [];
  (function visit(n, path) {
    if (!n || !n.id) return;
    n.__path = [...path, String(n.title || '')];
    all.push(n);
    (n.children || []).forEach(c => visit(c, [...path, String(n.title || '')]));
  })(tree, []);

  const byId = new Map();
  for (const n of all) { const a = byId.get(n.id) || []; a.push(n); byId.set(n.id, a); }

  // ---- 1 双正身：同 title 多节点（排除归类容器；排除 12 维生命周期维面——千人千面：同名维面挂不同对象是合法形态，位置跟对象走） ----
  const DIM_FACE = /^(1技能|2想法|3项目|4交流|5规则|6价值|7目标|8计划|9信息|10人脉|11仓|12经历|.*的规范|.*的理念|.*的思考|关于.*的思考)$/;
  const byTitle = new Map();
  for (const n of all) {
    const t = String(n.title || '').trim();
    if (!t || n.htype === '归类' || DIM_FACE.test(t)) continue;
    const a = byTitle.get(t) || []; a.push(n); byTitle.set(t, a);
  }
  for (const [t, ns] of byTitle) if (ns.length > 1) {
    for (const n of ns.slice(1)) push('双正身', '苗头', n, `同题「${t}」已有人格节点（首见 id=${ns[0].id}），本节点疑重复/影子`, `${treePath}:${lineOf[n.id]} 与 :${lineOf[ns[0].id]}`);
  }

  // ---- 2 断链：docRef / fsj:// / nodeRef ----
  const idIndexPath = join(dirname(treePath), 'id-index.json');
  let idIndex = {};
  try { idIndex = JSON.parse(readFileSync(idIndexPath, 'utf8')); } catch (e) {}
  for (const n of all) {
    const d = String(n.docRef || '').trim();
    if (!d) continue;
    if (d.startsWith('fsj://')) {
      const fid = d.slice(6);
      if (!idIndex[fid] && !Object.values(idIndex).some(v => v === fid || (v && v.fid === fid))) {
        // id-index 结构未知时宽松：值里包含即算命中
        const hit = JSON.stringify(idIndex).includes(fid);
        if (!hit) push('断链', '苗头', n, `docRef fsj://${fid} 在 id-index 未命中`, `${treePath}:${lineOf[n.id]}`);
      }
    } else if (n.docRef && !/^(https?:|#)/.test(d)) {
      const p = d.replace(/^\.\//, '');
      const abs = /^([A-Za-z]:)?[\\/]/.test(p) ? p : join(dirname(treePath), p);
      if (!existsSync(abs)) push('断链', '确认', n, `docRef 路径不存在: ${d}`, `${treePath}:${lineOf[n.id]}`);
    }
    if (n.nodeRef && !byId.has(n.nodeRef)) push('断链', '确认', n, `nodeRef 指向不存在的节点: ${n.nodeRef}`, `${treePath}:${lineOf[n.id]}`);
  }

  // ---- 3 权重打架 ----
  for (const n of all) {
    if (n.weight == null) continue;
    if ((n.status === 'done' || String(n.description || '').includes('已完成')) && n.weight >= 9000)
      push('权重打架', '苗头', n, `完成/done 但权重仍 ${n.weight}（≥9000 未降权）`, `${treePath}:${lineOf[n.id]}`);
    if (n.weight >= 9951 && n.weight <= 9960 && n.dimension !== 8 && n.htype !== '归类')
      push('权重打架', '苗头', n, `占任务段 9951-9960 但 dimension=${n.dimension}（任务段判据）`, `${treePath}:${lineOf[n.id]}`);
  }

  // ---- 4 判据互斥：同题不同维（同 title 不同 dimension 且都非归类） ----
  for (const [t, ns] of byTitle) {
    const dims = [...new Set(ns.map(n => n.dimension))];
    if (ns.length > 1 && dims.length > 1)
      for (const n of ns) push('判据互斥', '苗头', n, `同题「${t}」散在多个维度 (${dims.join(',')})——归位判定未做`, `${treePath}:${lineOf[n.id]}`);
  }

  // ---- 5 id 违规（提示级：11-01 前旧 id 历史正身不判违） ----
  const LEGACY = /^(wu_|shu_|tkw|^pf[a-z0-9]{10}$|^r[0-9a-z]{11}$)/;  // 旧命名已知形态白名单过粗，只做提示
  for (const n of all) {
    const id = String(n.id || '');
    if (/^(n-|a-)?[a-z0-9]{12}$/.test(id)) continue;       // 12位随机（含 n-/a- 前缀）合规
    if (id === 'wu_root') continue;
    push('id违规', '苗头', n, `id「${id}」非 12 位随机形态（历史正身或违规，人工核）`, `${treePath}:${lineOf[n.id]}`);
  }

  // ---- 6 空壳：无 docRef 无 description 无 children 且非归类 ----
  for (const n of all) {
    if (n === tree) continue;
    const empty = !String(n.docRef || '').trim()
      && !String(n.description || '').trim()
      && !(n.children || []).length
      && n.htype !== '归类';
    if (empty) push('空壳', '苗头', n, `空壳节点（无docRef/描述/子节点且非归类容器）`, `${treePath}:${lineOf[n.id]}`);
  }

  return { treePath, items, total: all.length, lineOf };
};

// ---------- 主流程 ----------
const outDir = 'D:/Item/fsj3/teams/zsfy/xiaofeng/workspace/project/fsj/fsj-cli/workspace';
mkdirSync(outDir, { recursive: true });
const date = new Date(Date.now() + 8 * 3600 * 1000).toISOString().slice(0, 10);
const allItems = [];
for (const p of process.argv.slice(2)) {
  const r = scanTree(p);
  allItems.push(...r.items);
  console.error(`${r.treePath}: ${r.total} 节点, 命中 ${r.items.length}`);
}
allItems.sort((a, b) => (a.severity === '确认' ? -1 : 1) - (b.severity === '确认' ? -1 : 1));
const gwId = Math.random().toString(36).slice(2, 14);
const lines = [
  '# 格物单 ' + gwId + '（' + date + '）',
  '',
  '- 扫描对象：' + process.argv.slice(2).join('、'),
  '- 科目：双正身/断链/权重打架/判据互斥/id违规/空壳（结构六项，语义项不在 v0 自动扫）',
  '- 命中：确认 ' + allItems.filter(i => i.severity === '确认').length + ' / 苗头 ' + allItems.filter(i => i.severity === '苗头').length,
  '- 红线：格物只出单不动刀；双正身确认命中另走即时报通道',
  '',
  '| # | 严重度 | 类型 | 涉及条目 | 判定 | 证据(文件:行) |',
  '|--|--|--|--|--|--|',
];
allItems.forEach((it, i) => lines.push(`| ${i + 1} | ${it.severity} | ${it.type} | ${it.target} @ ${it.node_path.slice(-40)} | ${it.claim} | ${it.evidence} |`));
const out = join(outDir, `gewu-${gwId}.md`);
writeFileSync(out, lines.join('\n') + '\n');
console.log('格物单已出:', out, '（共 ' + allItems.length + ' 条）');
