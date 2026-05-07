import { motion } from 'framer-motion'
import { ChevronDown, Github, Mail, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 100,
  y: (i * 53 + 7) % 100,
  size: (i % 4) + 2,
  delay: (i * 0.3) % 5,
  duration: 15 + (i % 10),
}))

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500">
        <motion.div
          animate={{ x: [0, 120, -60, 0], y: [0, -100, 80, 0], scale: [1, 1.3, 0.85, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.07] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 80, 0], y: [0, 120, -60, 0], scale: [1, 0.8, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-fuchsia-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 80, -120, 0], y: [0, -80, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
        />
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/20"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
        >
          <Sparkles size={14} />
          <span className="text-sm font-medium tracking-wide">AI for Science · 深度学习 · 大语言模型</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 font-light"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-white/55 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-white text-violet-700 rounded-full font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
          >
            查看项目
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 border border-white/25 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3.5 border border-white/25 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
