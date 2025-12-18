import { CardData, CardType, ComparisonData } from './types';

export const CARDS: CardData[] = [
  {
    id: CardType.POWER,
    title: "电力",
    subtitle: "AI 的入场券",
    description: "AI 不是写代码，是烧电。大模型训练是 24 小时不关机的“超级用电器”。",
    bulletPoints: [
      "万卡集群耗电堪比中小城市",
      "没有稳定廉价电力，AI 根本跑不动",
      "电力基建决定算力上限"
    ],
    insight: "没有稳定、廉价、规模化电力，AI 根本跑不动",
    color: "bg-amber-500",
    iconName: "zap"
  },
  {
    id: CardType.COMPUTE,
    title: "算力",
    subtitle: "AI 的发动机",
    description: "算力不是买几块显卡，而是芯片、制造、供应链、生态的总和。",
    bulletPoints: [
      "GPU（现在的主力）",
      "TPU/NPU（定制加速）",
      "QPU（未来量子方向）"
    ],
    insight: "算力是芯片、制造、供应链、生态的总和",
    color: "bg-cyan-500",
    iconName: "cpu"
  },
  {
    id: CardType.ALGO,
    title: "算法",
    subtitle: "算力的驾驶员",
    description: "算法决定你能不能把算力“用出花”。同样的卡，算法差一年，结果可能差一个时代。",
    bulletPoints: [
      "大模型架构",
      "多模态能力",
      "推理效率与训练效率"
    ],
    insight: "同样一堆卡，算法差一年，结果可能差一个时代",
    color: "bg-violet-500",
    iconName: "network"
  },
  {
    id: CardType.DATA,
    title: "语料",
    subtitle: "AI 的认知粮食",
    description: "AI 的认知上限，本质上是人类留下的“数字痕迹”上限。",
    bulletPoints: [
      "预训练数据的规模",
      "多语言、多模态",
      "真实世界数据质量"
    ],
    insight: "AI 的认知上限，本质上是人类留下的“数字痕迹”上限",
    color: "bg-emerald-500",
    iconName: "database"
  },
  {
    id: CardType.TALENT,
    title: "人才",
    subtitle: "AI 的核心资产",
    description: "AI 是极度“头部密集型”的行业。1000 个普通工程师，可能不如 10 个顶级研究员。",
    bulletPoints: [
      "顶尖科学家",
      "架构师",
      "工程化团队"
    ],
    insight: "1000 个普通工程师，可能不如 10 个顶级研究员",
    color: "bg-pink-500",
    iconName: "users"
  },
  {
    id: CardType.MARKET,
    title: "市场",
    subtitle: "胜负决定手",
    description: "没有应用，AI就是实验室玩具。这一张最容易被低估，但决定最终胜负。",
    bulletPoints: [
      "足够大的真实需求",
      "快速试错、快速规模化",
      "应用反哺模型迭代"
    ],
    insight: "没有应用，AI就是实验室玩具",
    color: "bg-orange-500",
    iconName: "shopping-bag"
  }
];

export const GEOPOLITICS: ComparisonData[] = [
  {
    region: "美国",
    strengths: [CardType.ALGO, CardType.TALENT, CardType.COMPUTE],
    weaknesses: [CardType.POWER],
    description: "算法强、人才强、芯片体系强。全球真正凑齐 6 张牌的两家之一。",
    bottleneck: "电力正在成为瓶颈"
  },
  {
    region: "中国",
    strengths: [CardType.MARKET, CardType.DATA],
    weaknesses: [CardType.COMPUTE, CardType.ALGO],
    description: "市场最大、数据最复杂、工程化能力极强。全球真正凑齐 6 张牌的两家之一。",
    bottleneck: "高端算力和原创算法仍然承压"
  },
  {
    region: "第二梯队",
    strengths: [],
    weaknesses: [],
    description: "英、法、日等国。有一两张好牌，有科研、有企业。但小国玩不起，只能陪跑。",
    bottleneck: "缺乏全产业链支撑，无法承担举国之力的高投入"
  }
];