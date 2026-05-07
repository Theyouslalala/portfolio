import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { publications } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const roleColors = {
  '学生一作': 'bg-primary-500 text-white',
  '第三作者': 'bg-slate-500 text-white',
}

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="学术" accent="论文" subtitle="已发表的 SCI 期刊论文" />

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-primary-500/5 hover:border-primary-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors">
                  <BookOpen className="text-primary-500" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${roleColors[pub.role] || 'bg-slate-200 text-slate-600'}`}>
                      {pub.role}
                    </span>
                    <span className="text-xs text-slate-400">{pub.journal}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{pub.brief}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
