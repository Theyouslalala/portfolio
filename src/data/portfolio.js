// 在这里修改你的个人信息，所有内容都会自动更新到网站上

export const personalInfo = {
  name: "Wangyuhan",
  title: "电子信息硕士 · AI4S 方向",
  tagline: "深耕 AI for Science，以深度学习求解复杂物理方程",
  avatar: "",
  email: "your-email@example.com",
  github: "https://github.com/theyouslalala",
  location: "中国",
}

export const about = {
  description: `我是西安电子科技大学电子信息专业硕士研究生（推免，211，双一流学科），本科毕业于广东工业大学计算机科学与技术专业（ESI 全球前 1‰）。

研究方向聚焦 AI for Science (AI4S)，利用深度学习方法求解复杂偏微分方程，已在 SCI 期刊发表论文。

同时热衷于 LLM 技术探索，完成从模型搭建到强化学习后训练的全链路实践。`,
  educations: [
    {
      school: "西安电子科技大学",
      major: "电子信息 · 硕士",
      detail: "推免 · 211 · 双一流学科",
      period: "2026.09 - 2029.06",
    },
    {
      school: "广东工业大学",
      major: "计算机科学与技术 · 本科",
      detail: "ESI 全球前 1‰ · GPA 4.12/5.00（专业前 5%）",
      period: "2022.09 - 2026.06",
    },
  ],
}

export const skills = [
  { name: "Python", level: 90, category: "编程语言" },
  { name: "C/C++", level: 85, category: "编程语言" },
  { name: "JavaScript", level: 75, category: "编程语言" },
  { name: "Java", level: 70, category: "编程语言" },
  { name: "PyTorch", level: 88, category: "AI / 框架" },
  { name: "Deep Learning", level: 85, category: "AI / 框架" },
  { name: "LLM 训练", level: 80, category: "AI / 框架" },
  { name: "LoRA / RLHF", level: 78, category: "AI / 框架" },
  { name: "React", level: 70, category: "开发工具" },
  { name: "Git", level: 80, category: "开发工具" },
  { name: "Linux", level: 75, category: "开发工具" },
  { name: "LaTeX", level: 85, category: "开发工具" },
]

export const projects = [
  {
    title: "MiniMind — 轻量级大语言模型全链路复现",
    description: "完成 LLM 从模型搭建、预训练、SFT 到 DPO/PPO/GRPO 后训练的全链路实现。基于 PyTorch Decoder-Only 架构，集成 RoPE、YaRN、KV Cache、GQA、SwiGLU 等技术。扩展为 4-Experts MoE 架构（总参 198M / 激活 64M），引入负载均衡缓解专家塌缩。",
    tags: ["PyTorch", "LLM", "MoE", "RLHF", "LoRA"],
    link: "https://github.com/theyouslalala",
    image: "",
    period: "2026.03 - 至今",
  },
  {
    title: "AI4S — 深度学习求解偏微分方程",
    description: "提出 ES-ScaDNN 框架，利用能量泛函直接优化求解 Allen-Cahn 方程，精度提升 67.2%。设计缩放层与方差正则化项确保解的物理意义。参与 EM-NormResNet 模型设计，用于玻色-爱因斯坦凝聚基态问题求解。",
    tags: ["AI4S", "PDE", "Energy Method", "DNN"],
    link: "https://github.com/theyouslalala",
    image: "",
    period: "2024.12 - 至今",
  },
]

export const educations = [
  {
    title: "电子信息 · 硕士研究生",
    org: "西安电子科技大学",
    period: "2026.09 - 2029.06",
    description: "推免入学，211、双一流学科，研究方向为 AI for Science。",
  },
  {
    title: "计算机科学与技术 · 本科",
    org: "广东工业大学",
    period: "2022.09 - 2026.06",
    description: "GPA 4.12/5.00（专业前 5%），ESI 全球前 1‰。获国家奖学金、一等奖学金等。",
  },
]

export const researches = [
  {
    title: "国家级大创项目：深度学习求解偏微分方程",
    org: "广东工业大学 · 主持",
    period: "2024.12 - 至今",
    description: "提出 ES-ScaDNN 框架，创新融合能量泛函与方差约束，Allen-Cahn 方程求解精度提升 67.2%。已发表 SCI 论文 2 篇。",
  },
]

export const publications = [
  {
    role: "学生一作",
    title: "基于能量最小化的深度学习框架求解 Allen-Cahn 方程",
    journal: "Axioms（SCI · 中科院 3 区）",
    brief: "提出 ES-ScaDNN 框架，设计缩放层与方差正则化项，直接优化能量泛函求解相场方程。",
  },
  {
    role: "第三作者",
    title: "能量最小化归一化残差网络求解玻色-爱因斯坦凝聚基态",
    journal: "Chinese Physics B（SCI · 中科院 3 区）",
    brief: "提出 EM-NormResNet 方法，集成归一化技术与梯度稳定化残差网络，提升量子系统模拟精度。",
  },
]

export const honors = [
  { title: "本科生国家奖学金", year: "2025" },
  { title: "美国大学生数学建模竞赛 Honorable Mention（队长）", year: "2025, 2024" },
  { title: "全国大学生统计建模竞赛 广东赛区一等奖 / 国家三等奖", year: "2025" },
  { title: "全国大学生统计建模竞赛 广东赛区二等奖（队长）", year: "2024" },
  { title: "全国大学生数学建模竞赛 广东赛区二等奖（队长）", year: "2024, 2023" },
  { title: "蓝桥杯 C/C++ 省赛二等奖", year: "2025, 2024" },
  { title: "睿抗机器人开发者大赛 广东省三等奖", year: "2025, 2024" },
  { title: "全国大学生数学竞赛 初赛三等奖", year: "2023" },
  { title: "校优秀学生一等奖学金", year: "2025, 2023" },
  { title: "揭阳市大学生科技创新精英奖", year: "2024" },
]

export const contact = {
  email: personalInfo.email,
  github: personalInfo.github,
  wechat: "your-wechat-id",
}
