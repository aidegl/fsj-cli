// personality.mjs — 先机性格开放层 v0（可插拔占位模块）
// 东城 11-07 硬需求：Si 型不发散（涌现式送达）、Ne 型不全盘接受（VR 高是天性）——
// 一套基线会误判：性格层只做"基线偏移与策略选择"，机心红线作用于扣除天性偏移后的残余。
// v0 = MBTI 四型占位（profile.source='MBTI占位'）；东城八维体系整理好后换注册表模块，接口不变。
//
// 接口：personalityLayer(profile, prediction) → adjustments
//   profile: { source: 'MBTI占位'|'东城八维vN', mbti?: 'INTJ', 八维?: {...} }
//   prediction: { confidence }（原始置信度 0-100）
//   adjustments: { dj, dv, strategy, k, note }  dj/dv=JF/VR基线偏移；strategy=送达策略；k=置信系数

const MBTI_PLACEHOLDER = {
  // 占位系数表（偏见风险已知：占位期间误判由人工复核兜底，PR §一挂账）
  SJ: { dj: 0,  dv: -15, strategy: '攒批涌现', k: 0.9, note: 'Si主：VR低是天性，数据攒到量涌现式给' },
  NP: { dj: 0,  dv: +15, strategy: '即时标参考', k: 1.0, note: 'Ne主：VR高是天性，即时送但标"供参考"' },
  NT: { dj: 0,  dv: 0,   strategy: '标准',       k: 1.0, note: 'Ti/Te主：标准基线' },
  NF: { dj: 0,  dv: +5,  strategy: '标准软措辞', k: 0.95, note: 'Fi/Fe主：价值敏感，措辞软' },
};
const groupOf = (mbti) => {
  const s = String(mbti || '').toUpperCase();
  if (/N.*P$/.test(s)) return 'NP';
  if (/^E.?J$|S.*J$/.test(s)) return 'SJ';
  if (/N.*J$/.test(s)) return 'NT';
  if (/[FS]..F|F$/.test(s)) return 'NF';
  return 'NT';  // 未知归标准
};

const MODULES = {
  'MBTI占位': { apply(profile, prediction) {
    const g = groupOf(profile.mbti);
    const base = MBTI_PLACEHOLDER[g];
    return { dj: base.dj, dv: base.dv, strategy: base.strategy,
             k: base.k, adjustedConfidence: Math.round(prediction.confidence * base.k),
             module: 'MBTI占位', group: g, note: base.note };
  } },
};

export function personalityLayer(profile, prediction) {
  const mod = MODULES[profile.source] || MODULES['MBTI占位'];
  return mod.apply(profile, prediction);
}

export const registerModule = (name, impl) => { MODULES[name] = impl; };  // 东城体系到位后注册新模块
export const listModules = () => Object.keys(MODULES);
