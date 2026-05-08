import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className={`text-xl font-display font-bold tracking-tight transition-colors ${
          scrolled ? 'text-ink' : 'text-white'
        }`}>
          WYH<span className="text-accent-500">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? scrolled
                      ? 'text-accent-500 bg-accent-50'
                      : 'text-white bg-white/15'
                    : scrolled
                      ? 'text-ink-secondary hover:text-ink hover:bg-surface-warm'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={(e) => { e.stopPropagation(); setMobileOpen(!mobileOpen) }}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'hover:bg-surface-warm text-ink' : 'hover:bg-white/10 text-white'
          }`}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.04] px-6 pb-4"
        >
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1)
                  ? 'text-accent-500'
                  : 'text-ink-secondary'
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
