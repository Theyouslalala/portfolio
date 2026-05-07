# 个人网站修改日志

> 记录网站每次重要修改，方便回溯和查找。

---

## 2026-05-07 — 代码审查修复：加载动画、滚动检测、时间线去重

**Git:** `47fa296`

### 修改内容
1. **加载动画优化** — App.jsx：从 CSS class 切换改为条件渲染 `{loading && (...)}`，加载完成后彻底卸载 DOM；spinner 从 framer-motion 改为 CSS `animate-spin`，避免隐藏后 JS 动画持续运行
2. **移除无用导入** — App.jsx：移除 `motion` 导入（不再需要）
3. **滚动检测优化** — Navbar.jsx：`setActiveSection` 增加 `activeSectionRef` 变更检测，避免每帧重复 setState
4. **时间线代码去重** — Experience.jsx：提取 `Timeline` 子组件，消除教育/科研两个重复的时间线块

### 审查发现但未修改的问题（低优先级）
- 多个组件中重复的 `motion.div` 动画模式（可提取 FadeIn 组件，但项目规模小，暂不抽象）
- `categoryColors` / `roleColors` / `tagColors` 分散在各组件（可在 portfolio.js 统一，暂不改动）
- 首屏以下板块未使用懒加载（framer-motion 的 whileInView 已减少重复动画，影响有限）

---

## 2026-05-07 — 替换默认 Vite favicon 为自定义网站图标

**Git:** `69ab152`

### 修改内容
- 创建 `public/favicon.svg`：紫蓝渐变圆角方块 + 白色 W 字母
- `index.html` 引用从 `/vite.svg` 改为 `/favicon.svg`
- 删除默认 `public/vite.svg`

---

## 2026-05-07 — 全面优化：修复导航栏、动画、布局等多项问题

**Git:** `b719238`

### 修改内容
1. **Navbar 修复** — 滚动状态过时闭包 bug，改用 ref 比较替代 state
2. **移动端菜单** — 添加点击外部关闭功能
3. **英文切换** — 添加按钮骨架（UI only，功能待实现）
4. **Hero 优化** — 粒子动画改为确定性计算；底部添加渐变过渡到白色背景
5. **响应式文字** — Hero 姓名 `text-4xl sm:text-5xl md:text-7xl lg:text-8xl`
6. **Skills 重构** — 百分比进度条改为标签云样式（圆角药丸 + 彩色圆点）
7. **Contact 重构** — 提取 ContactCard 子组件，消除重复 JSX
8. **动画统一** — 所有组件 viewport margin 统一为 `-80px`
9. **背景交替** — 板块背景 white / slate-50 交替
10. **板块顺序** — Hero → About → Experience → Projects → Publications → Skills → Honors → Contact
11. **SEO** — 添加 description、OG 标签、theme-color
12. **加载动画** — 旋转 spinner + "Loading..." 文字
13. **Tailwind 扩展** — primary(50-900) + accent(50-900) 完整色阶
14. **全局样式** — 选区颜色、自定义滚动条、加载屏幕 CSS

### 修改文件
`index.html` `src/App.jsx` `src/index.css` `tailwind.config.js` `src/components/About.jsx` `src/components/Contact.jsx` `src/components/Experience.jsx` `src/components/Hero.jsx` `src/components/Honors.jsx` `src/components/Navbar.jsx` `src/components/Projects.jsx` `src/components/Publications.jsx` `src/components/SectionHeading.jsx` `src/components/Skills.jsx`

---

## 2026-05-07 — 个人经历拆分为教育经历和科研经历

**Git:** `683e7e8`

### 修改内容
- 将 Experience 板块中的 "个人经历" 拆分为两个独立板块：教育经历 + 科研经历
- 数据源从单一 `education` 改为 `educations` 数组 + `researches` 数组
- 使用不同图标区分：GraduationCap（教育）/ FlaskConical（科研）

---

## 2026-05-07 — 移除其他部署平台，仅保留 Vercel

**Git:** `7e7b1b8`

### 修改内容
- 移除 GitHub Pages 部署工作流（`.github/workflows/deploy.yml`）
- 移除 jsDelivr CDN 相关配置
- 确认 Vercel 为唯一部署平台

---

## 2026-05-07 — 尝试多平台部署（已回退）

**Git:** `1b5eb96` `5e5d34f` `faf96db` `a85ad1d` `62cb7b7` `f1066ec`

### 尝试过的平台
| 平台 | 结果 | 原因 |
|------|------|------|
| GitHub Pages | 已移除 | 国内访问不稳定 |
| Cloudflare Pages | 已移除 | workers.dev 域名 SSL 错误（ERR_SSL_VERSION_OR_CIPHER_MISMATCH），需要自定义域名 |
| jsDelivr CDN | 已移除 | CDN 将 index.html 当纯文本返回，不渲染网页 |

### 最终结论
- 仅使用 Vercel 部署
- 网址：`https://portfolio-umber-eight-jatrxxpn29.vercel.app/`

---

## 2026-05-07 — 深度定制：填入真实简历数据 + 新增论文/荣誉板块

**Git:** `dfb6711`

### 修改内容
- 根据用户个人简历文件填入真实数据
- 新增 Publications（学术论文）板块：2 篇 SCI 论文
- 新增 Honors（荣誉奖项）板块：10 项荣誉
- 导航栏添加论文和荣誉链接

---

## 2026-05-07 — 代码质量优化：修复 bug、提取公共组件、提升性能

**Git:** `b234bfa`

### 修改内容
- 提取 SectionHeading 公共组件（标题 + 渐变色强调 + 副标题）
- 修复数据文件中的重复 key bug
- 提升 Navbar 滚动性能（requestAnimationFrame 节流）

---

## 2026-05-05 — 初始化个人简历网站

**Git:** `cbebbe4`

### 技术栈
- React + Vite + Tailwind CSS + Framer Motion + Lucide React

### 初始板块
- Navbar / Hero / About / Skills / Projects / Experience / Contact / Footer
