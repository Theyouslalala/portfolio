import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { publications } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Publications() {
  return (
    <section id="publications" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="学术" accent="论文" subtitle="已发表的 SCI 期刊论文" />

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex gap-5 p-6 bg-white rounded-xl border border-black/[0.04] hover:border-accent-200/60 transition-all duration-300"
            >
              {/* Index number */}
              <div className="flex-shrink-0 font-display text-3xl font-bold text-ink/[0.06] leading-none pt-0.5 select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                    pub.role === '学生一作'
                      ? 'bg-accent-500 text-white'
                      : 'bg-ink/10 text-ink-secondary'
                  }`}>
                    {pub.role}
                  </span>
                  <span className="text-xs text-ink-muted">{pub.journal}</span>
                </div>
                <h3 className="text-[15px] font-bold text-ink mb-2 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{pub.brief}</p>
              </div>

              <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-ink-muted" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
