import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 bg-ink">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-white/30">
          &copy; {year} {personalInfo.name}
        </p>
        <p className="text-xs text-white/20">
          🚧 网站处于施工迭代阶段 · 内容仅供参考
        </p>
      </div>
    </footer>
  )
}
