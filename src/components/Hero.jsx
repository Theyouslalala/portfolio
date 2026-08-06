import { motion } from 'framer-motion'
import { ChevronDown, Github, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gradient accent light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/[0.08] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/[0.06] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-sm font-medium text-white/50 tracking-widest uppercase">
              多模态 AI · 深度学习 · 大语言模型
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[0.95] mb-6"
          >
            {personalInfo.name}
            <span className="text-accent-500">.</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/60 font-light mb-4"
          >
            {personalInfo.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-base text-white/35 leading-relaxed max-w-lg mb-12"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 text-white rounded-lg font-semibold text-sm hover:bg-accent-600 transition-all duration-300"
            >
              查看项目
              <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/15 rounded-lg text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 border border-white/15 rounded-lg text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/50 transition-colors"
      >
        <ChevronDown size={24} />
      </motion.a>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  )
}
