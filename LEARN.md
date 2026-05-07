# 个人网站技术栈及修改学习笔记

> 本文档记录网站搭建的技术知识、遇到的问题及解决方案，便于后续查阅和学习。

---

## 目录
- [技术栈概览](#技术栈概览)
- [项目结构](#项目结构)
- [核心概念详解](#核心概念详解)
- [常见修改操作指南](#常见修改操作指南)
- [遇到的问题与解决方案](#遇到的问题与解决方案)
- [部署相关](#部署相关)

---

## 技术栈概览

| 技术 | 作用 | 版本 |
|------|------|------|
| **React** | 前端 UI 框架，组件化开发 | 19.x |
| **Vite** | 构建工具 + 开发服务器（替代 Webpack） | 6.x |
| **Tailwind CSS** | 原子化 CSS 框架，直接在 JSX 中写样式 | 3.x |
| **Framer Motion** | React 动画库，支持滚动触发动画 | 12.x |
| **Lucide React** | 图标库，轻量 SVG 图标 | 0.487+ |
| **Vercel** | 静态网站托管平台，自动部署 | — |

### 为什么选这套方案？
- **React**：组件天然适合简历各板块拆分（头像、技能、项目等各自独立）
- **Vite**：热更新秒级响应，比传统 Webpack 快很多
- **Tailwind**：不用单独写 CSS 文件，样式直接写在 className 里
- **Framer Motion**：滚动进入视口时自动播放动画，几行代码实现炫酷效果

---

## 项目结构

```
web/
├── index.html              ← Vite 入口页面（只有 <div id="root">）
├── vite.config.js          ← Vite 配置（目前只有 React 插件）
├── tailwind.config.js      ← Tailwind 配置（自定义颜色、字体）
├── postcss.config.js       ← PostCSS 配置（让 Tailwind 工作）
├── package.json            ← 依赖声明
├── src/
│   ├── main.jsx            ← React 入口，挂载到 #root
│   ├── index.css           ← Tailwind 指令 + 全局样式
│   ├── App.jsx             ← 主组件，组装所有板块
│   ├── components/         ← 各板块组件
│   │   ├── Navbar.jsx      ← 导航栏（固定顶部，滚动高亮）
│   │   ├── Hero.jsx        ← 首屏（姓名 + 粒子动画背景）
│   │   ├── About.jsx       ← 关于我
│   │   ├── Experience.jsx  ← 教育/科研经历（时间线）
│   │   ├── Projects.jsx    ← 项目卡片
│   │   ├── Publications.jsx← 学术论文
│   │   ├── Skills.jsx      ← 技能标签云
│   │   ├── Honors.jsx      ← 荣誉奖项
│   │   ├── Contact.jsx     ← 联系方式
│   │   ├── Footer.jsx      ← 页脚
│   │   └── SectionHeading.jsx ← 公共标题组件
│   └── data/
│       └── portfolio.js    ← 所有个人数据（修改内容改这里）
├── public/                 ← 静态资源（favicon 等）
├── dist/                   ← 构建产物（自动生成，不要手动改）
└── node_modules/           ← 依赖包（自动生成）
```

### 关键文件说明

**`src/data/portfolio.js`** — 修改网站内容的核心文件
```js
export const personalInfo = { name: "Wangyuhan", title: "...", ... }
export const about = { description: "...", educations: [...] }
export const skills = [{ name: "Python", level: 90, category: "编程语言" }, ...]
export const projects = [{ title: "...", description: "...", tags: [...], ... }, ...]
export const educations = [...]
export const researches = [...]
export const publications = [{ role: "学生一作", title: "...", journal: "...", brief: "..." }, ...]
export const honors = [{ title: "...", year: "2025" }, ...]
export const contact = { email: "...", github: "...", wechat: "..." }
```

**`src/App.jsx`** — 控制板块顺序
```jsx
<Navbar /><Hero /><About /><Experience /><Projects />
<Publications /><Skills /><Honors /><Contact /><Footer />
```

**`tailwind.config.js`** — 自定义主题
- `primary` 色阶：紫蓝色（#6366F1），用于按钮、强调、渐变
- `accent` 色阶：珊瑚橙（#F97316），用于 hover 高亮
- `fontFamily.sans`：Inter 字体

---

## 核心概念详解

### 1. React 组件化
每个 `.jsx` 文件导出一个函数组件，函数返回 JSX（类似 HTML 的语法）。组件可以接收 `props`（参数）。

```jsx
// 简单组件示例
export default function Greeting({ name }) {
  return <p>你好，{name}</p>
}
// 使用：<Greeting name="Wangyuhan" />
```

### 2. Tailwind CSS 原子化
不写单独的 CSS 文件，直接在 `className` 中使用工具类：
- `text-4xl` = 字体大小 2.25rem
- `bg-slate-50` = 背景色 slate-50
- `py-24 px-6` = 上下 padding 6rem，左右 padding 1.5rem
- `rounded-3xl` = 圆角 1.5rem
- `hover:shadow-xl` = hover 时添加大阴影
- `md:text-5xl` = 屏幕宽度 ≥ 768px 时字体 3rem（响应式）

### 3. Framer Motion 动画
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}       // 初始状态：透明，向下偏移 30px
  whileInView={{ opacity: 1, y: 0 }}     // 进入视口时：完全显示，回到原位
  viewport={{ once: true, margin: '-80px' }} // 只触发一次，提前 80px 触发
  transition={{ duration: 0.5 }}         // 动画时长 0.5 秒
>
  {内容}
</motion.div>
```

### 4. 滚动监听与 requestAnimationFrame
Navbar 中使用 RAF 节流滚动事件，避免频繁 setState 导致卡顿：
```js
const handleScroll = () => {
  if (rafRef.current) return           // 已有 pending 的帧，跳过
  rafRef.current = requestAnimationFrame(() => {
    // 实际处理逻辑
    rafRef.current = null
  })
}
```
**为什么用 ref 而不是 state？** 回调中读取 state 会拿到旧值（闭包问题），ref 的 `.current` 始终是最新的。

---

## 常见修改操作指南

### 修改个人信息
编辑 `src/data/portfolio.js`，修改对应的 `export` 对象即可，所有组件自动更新。

### 修改板块顺序
编辑 `src/App.jsx`，调整各组件的排列顺序。

### 添加新的导航链接
编辑 `src/components/Navbar.jsx`，在 `navItems` 数组中添加：
```js
{ name: '新板块', href: '#new-section' }
```

### 添加新板块
1. 在 `src/data/portfolio.js` 中添加数据
2. 创建 `src/components/NewSection.jsx`
3. 在 `src/App.jsx` 中导入并放置到合适位置
4. 在 `Navbar.jsx` 的 `navItems` 中添加导航链接

### 修改颜色主题
编辑 `tailwind.config.js` 中的 `colors.primary` 或 `colors.accent`。

### 修改网站图标（Favicon）
1. 在 `public/` 目录下放置 SVG 图标文件（推荐 SVG 格式，可缩放不失真）
2. 在 `index.html` 中修改 `<link rel="icon">` 的 `href` 指向新文件
3. SVG favicon 示例（圆角方块 + 字母）：
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#6366F1"/><stop offset="100%" stop-color="#8B5CF6"/>
  </linearGradient></defs>
  <rect width="32" height="32" rx="8" fill="url(#bg)"/>
  <text x="16" y="23" text-anchor="middle" font-weight="800" font-size="20" fill="white">W</text>
</svg>
```
**知识点：** `viewBox="0 0 32 32"` 定义坐标系；`rx="8"` 圆角；SVG 内可使用 `<linearGradient>` 渐变。

### 修改全局样式
编辑 `src/index.css`，其中包含：
- `@tailwind base/components/utiliences` — Tailwind 基础样式
- `html { scroll-behavior: smooth }` — 平滑滚动
- `body` — 全局字体和背景
- `::selection` — 文本选中颜色
- `::-webkit-scrollbar` — 自定义滚动条
- `.loading-screen` — 加载动画样式

---

## 遇到的问题与解决方案

### 1. Navbar 滚动状态过时闭包 (Stale Closure)
**现象：** 滚动时导航栏背景不变化
**原因：** `requestAnimationFrame` 回调中读取 `scrolled` state，由于闭包捕获的是旧值
**解决：** 使用 `useRef` 存储值，ref 的 `.current` 不受闭包影响
```js
const scrolledRef = useRef(false)
// 在 RAF 回调中：if (scrolledRef.current !== isScrolled) { ... }
```
**原理：** React state 在异步回调中会"过时"，ref 则始终指向最新值。

### 2. 数据文件重复 key
**现象：** 教育经历只显示一条
**原因：** `portfolio.js` 中两个教育对象用了相同的 `education` key，后者覆盖了前者
**解决：** 改为 `educations` 数组，遍历渲染

### 3. Vite base 路径导致部署失败
**现象：** 设置 `base: '/portfolio/'` 后 Vercel 页面加载失败
**原因：** base 路径影响所有资源引用路径，Vercel 默认从根路径提供服务
**解决：** 移除 base 配置，Vercel 自动处理路径

### 4. 部署平台选择
| 平台 | 问题 | 结论 |
|------|------|------|
| GitHub Pages | 国内访问不稳定 | 放弃 |
| Cloudflare Pages | workers.dev 域名 SSL 错误（需自定义域名） | 放弃 |
| jsDelivr CDN | 服务 raw HTML 不渲染网页 | 放弃 |
| **Vercel** | 国内可直接访问 | **选定** |

### 5. CRLF/LF 换行符警告
**现象：** git 操作时提示 "LF will be replaced by CRLF"
**原因：** Windows 使用 CRLF，Git 默认配置自动转换
**影响：** 无实际影响，仅警告。如需消除可运行 `git config core.autocrlf true`

### 6. 条件渲染 vs CSS 隐藏（React 性能）
**现象：** 加载动画用 CSS class `hidden`（opacity: 0）隐藏后，framer-motion 的 `repeat: Infinity` 动画仍在后台运行
**原因：** CSS 隐藏只是视觉上不可见，DOM 节点和 JS 动画仍然存在
**解决：** 使用 React 条件渲染 `{loading && <div>...</div>}`，条件为 false 时彻底卸载组件
**对比：**
```jsx
// ❌ 隐藏但动画持续运行
<div className={loading ? '' : 'hidden'}><motion.div animate={{...}} /></div>

// ✅ 彻底卸载，停止一切计算
{loading && <div><div className="animate-spin" /></div>}
```
**知识点：** CSS 动画（`@keyframes`）在 `visibility: hidden` 时浏览器会暂停；但 framer-motion 使用 JS `requestAnimationFrame`，不感知 CSS 隐藏状态。

### 7. 滚动事件中的 state 更新优化
**现象：** `requestAnimationFrame` 回调中每帧调用 `setActiveSection`，即使值没变
**原因：** 没有检查新值是否与旧值相同
**解决：** 用 `useRef` 存储当前值，先比较再决定是否 setState
```js
const activeSectionRef = useRef('hero')
// 在 RAF 回调中：
if (activeSectionRef.current !== sections[i]) {
  activeSectionRef.current = sections[i]
  setActiveSection(sections[i])
}
```
**知识点：** React 每次 `setState` 都会触发重新渲染（即使值相同），在高频事件（scroll、resize）中必须加变更检测。

### 8. 提取子组件消除重复代码
**场景：** Experience.jsx 中教育和科研两个时间线结构完全相同，只有数据源和颜色不同
**解决：** 提取 `Timeline` 子组件，接收 `items`、`icon`、`color` 参数
```jsx
function Timeline({ items, icon, color }) {
  return (
    <div className="relative">
      <div className="absolute left-6 md:left-7 top-0 bottom-0 w-0.5 bg-slate-200" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <TimelineItem key={item.title} item={item} icon={icon} color={color} index={i} />
        ))}
      </div>
    </div>
  )
}
```
**知识点：** 当两段 JSX 只有数据源和少量参数不同时，提取子组件是最佳实践。保持 DRY（Don't Repeat Yourself）。

---

## 部署相关

### 本地开发
```bash
npm run dev      # 启动开发服务器（http://localhost:5173）
npm run build    # 构建生产版本（输出到 dist/）
npm run preview  # 预览构建结果
```

### Vercel 部署流程
1. 代码推送到 GitHub：`git push origin main`
2. Vercel 自动检测到 push，触发构建和部署
3. 构建命令：`npm run build`
4. 输出目录：`dist`
5. 部署完成后自动更新线上网站

### 构建产物
- `dist/index.html` — 入口页面
- `dist/assets/index-xxx.css` — 样式文件（26 KB）
- `dist/assets/index-xxx.js` — JS 文件（352 KB）
- 构建时间约 4-5 秒

### 常用 Git 命令
```bash
git status              # 查看修改了哪些文件
git diff                # 查看具体改了什么
git add <files>         # 暂存文件
git commit -m "说明"     # 提交
git push origin main    # 推送到远程
git log --oneline       # 查看提交历史
```

---

## 学习资源推荐

- **React 官方文档**：https://react.dev — 组件、Hooks、生命周期
- **Tailwind CSS 文档**：https://tailwindcss.com — 所有工具类速查
- **Framer Motion 文档**：https://www.framer.com/motion/ — 动画 API
- **Vite 文档**：https://vitejs.dev — 构建配置
- **Vercel 文档**：https://vercel.com/docs — 部署和域名配置
