import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Languages } from 'lucide-react'

const navItems = [
  { name: '关于', href: '#about' },
  { name: '经历', href: '#experience' },
  { name: '项目', href: '#projects' },
  { name: '论文', href: '#publications' },
  { name: '技能', href: '#skills' },
  { name: '荣誉', href: '#honors' },
  { name: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const rafRef = useRef(null)
  const scrolledRef = useRef(false)
  const activeSectionRef = useRef('hero')
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 50
        if (scrolledRef.current !== isScrolled) {
          scrolledRef.current = isScrolled
          setScrolled(isScrolled)
        }

        const sections = ['hero', ...navItems.map(i => i.href.slice(1))]
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i])
          if (el && el.getBoundingClientRect().top <= 150) {
            if (activeSectionRef.current !== sections[i]) {
              activeSectionRef.current = sections[i]
              setActiveSection(sections[i])
            }
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
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [mobileOpen])

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="text-lg font-extrabold bg-gradient-to-r from-primary-500 to-violet-500 bg-clip-text text-transparent">
          WYH
        </a>

        <ul className="hidden lg:flex items-center gap-0.5">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                    : 'text-slate-600 hover:text-primary-500 hover:bg-primary-50'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button
              className="ml-2 px-3 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 flex items-center gap-1"
              title="English (coming soon)"
            >
              <Languages size={15} />
              <span className="text-xs">EN</span>
            </button>
          </li>
        </ul>

        <button
          onClick={(e) => { e.stopPropagation(); setMobileOpen(!mobileOpen) }}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 pb-4"
        >
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-sm font-medium transition-colors ${
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
