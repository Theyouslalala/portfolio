import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { honors } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Honors() {
  return (
    <section id="honors" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="荣誉" accent="奖项" subtitle="竞赛获奖与学术荣誉" />

        <div className="grid sm:grid-cols-2 gap-4">
          {honors.map((honor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-md hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Award className="text-primary-400" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm leading-snug">{honor.title}</p>
                <p className="text-xs text-slate-400 mt-1">{honor.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
