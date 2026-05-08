import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { personalInfo, about } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="关于" accent="我" subtitle="学术背景与研究方向" />

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Avatar - editorial offset */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <div className="relative aspect-square max-w-[260px]">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-surface-warm border border-black/[0.04]">
                {personalInfo.avatar ? (
                  <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-7xl font-display font-bold text-ink/10">
                      {personalInfo.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              {/* Decorative number */}
              <div className="absolute -bottom-6 -right-6 font-display text-[6rem] font-bold leading-none text-accent-500/[0.08] select-none pointer-events-none">
                01
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-8"
          >
            <p className="text-ink-secondary leading-[1.8] mb-10 text-[15px] whitespace-pre-line">
              {about.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {about.educations.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="p-5 bg-white rounded-xl border border-black/[0.04] hover:border-accent-200 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent-50 rounded-lg mt-0.5 group-hover:bg-accent-100 transition-colors">
                      <GraduationCap className="text-accent-500" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-[15px]">{edu.school}</p>
                      <p className="text-sm text-ink-secondary">{edu.major}</p>
                      <p className="text-xs text-ink-muted mt-1">{edu.detail} · {edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="p-5 bg-white rounded-xl border border-black/[0.04] flex items-center gap-3">
                <div className="p-2 bg-surface-warm rounded-lg">
                  <MapPin className="text-ink-muted" size={18} />
                </div>
                <div>
                  <p className="text-xs text-ink-muted">所在地</p>
                  <p className="font-semibold text-ink text-[15px]">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
