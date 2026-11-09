// tgp — 世界树 TGP 投影（11-09 东城定调：世界树格式是内部正身，TGP 是 CLI 输出给别人看的东西）
// 只读视图：树是唯一正身，本模块现场生成投影、永不落档，防第二正身。
// 规则（无教育成本）：保持树形缩进；7目标维=终点，其中全树第一个 7 维节点显示为 T（原点）；8计划维=计划；
// G01/P001 编号按输出顺序生成，仅显示不寻址（rowid 才是锚——编号漂移六案纪律）。
// 树里没有的字段不显示（不臆造）：节点无 status，投影不出状态列。
import { readFileSync } from 'fs';

export function tgpView(treePath) {
  const tree = JSON.parse(readFileSync(treePath, 'utf8'));
  const lines = [];
  let gN = 0, pN = 0, tSeen = false;

  function walk(n, depth) {
    const dim = n.dimension;
    if (dim === 7 || dim === 8) {
      if (dim === 7) {
        gN++;
        const label = !tSeen ? (tSeen = true, 'T') : 'G';
        lines.push(`${'  '.repeat(depth)}${label}${String(gN).padStart(2, '0')}-${n.title}（${n.id.slice(0, 8)}…）`);
      } else {
        pN++;
        lines.push(`${'  '.repeat(depth)}P${String(pN).padStart(3, '0')}-${n.title}（${n.id.slice(0, 8)}…）`);
      }
      depth++;
    }
    for (const c of n.children || []) walk(c, depth);
  }
  walk(tree, 0);

  const head = `# TGP 视图 · ${tree.title || treePath}\n（世界树 ${treePath} 的只读投影 · T=原点目标 G=终点 P=计划 Pn落子无悔 · 编号仅显示，rowid 为锚）`;
  return { markdown: lines.length ? head + '\n\n' + lines.join('\n') : head + '\n\n（此树暂无 7目标/8计划维节点）', counts: { T: tSeen ? 1 : 0, G: gN - (tSeen ? 1 : 0), P: pN } };
}
