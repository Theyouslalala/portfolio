import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { honors } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Honors() {
  return (
    <section id="honors" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="荣誉" accent="奖项" subtitle="竞赛获奖与学术荣誉" />

        <div className="grid sm:grid-cols-2 gap-3">
          {honors.map((honor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-3.5 p-5 bg-white rounded-xl border border-black/[0.04] hover:border-accent-200/60 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center group-hover:bg-accent-100 transition-colors">
                <Award className="text-accent-500" size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-ink text-[15px] leading-snug">{honor.title}</p>
                <p className="text-xs text-ink-muted mt-1 font-medium">{honor.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
