// fsj 核心库 v0.1 — PR M1 正式化（从 temp/core 原型毕业）
// 数据源：mock（默认，a12 拍板先 mock 独立测试）/ 真云 getr（HAP 代理，零密钥落地）
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const HAP_PROXY = 'https://100000whys.cn/mingdao';
const SHANGPIN = '6a03ceaa7e29abcb297cbdfc';
export const DIM = { 1: '技能', 2: '想法', 3: '项目', 4: '交流', 5: '原则', 6: '价值观', 7: '目标', 8: '计划', 9: '事迹', 10: '人脉', 11: '资产', 12: '经历' };

// ── 数据源层（换真源只改这里）────────────────────────────
export function loadWorld(baseDir) {
  const p = baseDir ? join(baseDir, 'mock', 'world.json') : join(HERE, 'mock', 'world.json');
  if (!existsSync(p)) throw new Error('数据文件不存在：' + p);
  return JSON.parse(readFileSync(p, 'utf8'));
}

const post = async (url, input) => {
  const r = await fetch(HAP_PROXY, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url, input }) });
  if (!r.ok) throw new Error('代理 HTTP ' + r.status);
  return await r.json();
};

// ── 命令实现 ────────────────────────────────────────────
// get：rowid 直取（mock 毫秒内；真云实测 444-604ms）
export function get(rowid, baseDir) {
  const r = loadWorld(baseDir).records.find(x => x.rowid === rowid);
  if (!r) throw new Error('取不到记录 ' + rowid);
  return r;
}

// getr：真云直取（验证"换源只换一行"的架构承诺）
export async function getReal(rowid) {
  const r = await post('https://api.mingdao.com/v2/open/worksheet/getRowByIdPost', { worksheetId: SHANGPIN, rowId: rowid });
  const d = r.data?.data || r.data;
  if (!d) throw new Error('真源取不到 ' + rowid);
  return { rowid, title: d.title || d.mingcheng || '(无标题)', content: d.content || d.wznr || '', weight: Number(d.weight) || 0, dimension: Number(d.dimension) || 0 };
}

// find：关键词扫索引（标题+正文+标签），按权重降序
export function find(word, baseDir) {
  if (!word) throw new Error('find 需要关键词');
  return loadWorld(baseDir).records
    .filter(r => r.title.includes(word) || r.content.includes(word) || (r.tags || []).some(t => t.includes(word)))
    .sort((a, b) => b.weight - a.weight);
}

// boot：预制提示词启动包 = 五事档案 + 路由表 + 按权重排序的骨架索引（a6/a9 拍板的数据模型）
export function boot(baseDir) {
  const w = loadWorld(baseDir);
  const L = ['# fsj boot · 启动包', ''];
  L.push('## 一、我是谁（道天地将法档案）');
  for (const k of ['道', '天', '地', '将', '法']) L.push(`- **${k}**：${w.profile[k]}`);
  L.push('', '## 二、路由表（任务→目标）');
  for (const r of w.route) L.push(`- ${r.task} → ${r.target}${r.note ? '（' + r.note + '）' : ''}`);
  L.push('', '## 三、骨架索引（按权重降序，get <rowid> 直取正文）');
  for (const r of [...w.records].sort((a, b) => b.weight - a.weight))
    L.push(`- [w${r.weight}] ${r.title}（${DIM[r.dimension] || r.dimension}维 · ${r.rowid}）`);
  return L.join('\n');
}
