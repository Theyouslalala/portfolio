// 在这里修改你的个人信息，所有内容都会自动更新到网站上

export const personalInfo = {
  name: "Theyous",
  title: "计算机科学学生",
  tagline: "热爱编程，追求创新",
  avatar: "", // 放入 public/avatar.png 后填写 "/avatar.png"
  email: "your-email@example.com",
  github: "https://github.com/theyouslalala",
  location: "中国",
}

export const about = {
  description: `我是一名计算机科学专业的在读学生，对软件开发充满热情。
  我热爱探索新技术，喜欢用代码解决实际问题。
  在学习过程中，我积累了丰富的项目经验，并持续提升自己的技术能力。`,
  educations: [
    {
      school: "广东工业大学",
      major: "计算机科学与技术",
      degree: "本科",
      period: "2022 - 2026",
    },
    {
      school: "西安电子科技大学",
      major: "电子信息",
      degree: "硕士",
      period: "2026 - 2029",
    },
  ],
}

export const skills = [
  { name: "JavaScript", level: 85, category: "前端" },
  { name: "React", level: 75, category: "前端" },
  { name: "HTML/CSS", level: 90, category: "前端" },
  { name: "Tailwind CSS", level: 80, category: "前端" },
  { name: "Python", level: 85, category: "后端" },
  { name: "Java", level: 70, category: "后端" },
  { name: "Node.js", level: 70, category: "后端" },
  { name: "MySQL", level: 75, category: "后端" },
  { name: "Git", level: 80, category: "工具" },
  { name: "Linux", level: 65, category: "工具" },
  { name: "Docker", level: 60, category: "工具" },
]

export const projects = [
  {
    title: "在线商城系统",
    description: "基于 React + Node.js 开发的全栈电商网站，支持用户注册、商品浏览、购物车和订单管理等功能。",
    tags: ["React", "Node.js", "MySQL"],
    link: "https://github.com/yourusername/project1",
    image: "",
  },
  {
    title: "智能聊天机器人",
    description: "使用 Python 和自然语言处理技术开发的聊天机器人，能够理解用户意图并给出智能回复。",
    tags: ["Python", "NLP", "Flask"],
    link: "https://github.com/yourusername/project2",
    image: "",
  },
  {
    title: "校园二手交易平台",
    description: "移动端二手物品交易小程序，支持发布商品、在线沟通和交易评价功能。",
    tags: ["微信小程序", "云开发"],
    link: "https://github.com/yourusername/project3",
    image: "",
  },
]

export const experiences = [
  {
    type: "education",
    title: "计算机科学与技术 · 本科",
    org: "广东工业大学",
    period: "2022 - 2026",
    description: "主修数据结构、算法设计、操作系统、计算机网络等课程，GPA 3.8/4.0",
  },
  {
    type: "education",
    title: "电子信息 · 硕士",
    org: "西安电子科技大学",
    period: "2026 - 2029",
  },
  {
    type: "intern",
    title: "前端开发实习生",
    org: "某某科技公司",
    period: "2025.06 - 2025.09",
    description: "参与公司内部管理系统的前端开发，使用 React + Ant Design 实现多个业务模块。",
  },
  {
    type: "award",
    title: "蓝桥杯程序设计大赛 · 省二等奖",
    org: "蓝桥杯组委会",
    period: "2024",
    description: "在全国软件和信息技术专业人才大赛中获得省级二等奖。",
  },
]

export const contact = {
  email: personalInfo.email,
  github: personalInfo.github,
  wechat: "your-wechat-id",
}
