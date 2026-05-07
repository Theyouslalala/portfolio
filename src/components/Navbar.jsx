import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: '首页', href: '#hero' },
  { name: '关于我', href: '#about' },
  { name: '技能', href: '#skills' },
  { name: '项目', href: '#projects' },
  { name: '经历', href: '#experience' },
  { name: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 50
        if (scrolled !== isScrolled) setScrolled(isScrolled)

        const sections = navItems.map(i => i.href.slice(1))
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i])
          if (el && el.getBoundingClientRect().top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [scrolled])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
          Portfolio
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
                    : 'text-slate-600 hover:text-primary-500 hover:bg-primary-50'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 px-6 pb-4"
        >
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1)
                  ? 'text-primary-500'
                  : 'text-slate-600'
              }`}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
