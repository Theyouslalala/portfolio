import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-slate-500">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
