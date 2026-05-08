import { motion } from 'framer-motion'
import { GraduationCap, FlaskConical } from 'lucide-react'
import { educations, researches } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function TimelineItem({ item, icon: Icon, accentColor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-5 group"
    >
      {/* Icon */}
      <div className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-lg ${accentColor.bg} flex items-center justify-center ring-4 ring-surface`}>
        <Icon className={accentColor.text} size={18} />
      </div>

      {/* Card */}
      <div className="flex-1 pb-10">
        <div className="p-5 bg-white rounded-xl border border-black/[0.04] group-hover:border-accent-200 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h3 className="text-[15px] font-bold text-ink">{item.title}</h3>
            <span className="text-xs text-ink-muted font-medium tabular-nums">{item.period}</span>
          </div>
          <p className="text-sm font-medium text-accent-500 mb-1.5">{item.org}</p>
          {item.description && (
            <p className="text-ink-secondary text-sm leading-relaxed">{item.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Timeline({ items, icon, accentColor }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[21px] top-2 bottom-2 w-px bg-black/[0.06]" />
      <div className="space-y-0">
        {items.map((item, i) => (
          <TimelineItem
            key={item.title}
            item={item}
            icon={icon}
            accentColor={accentColor}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="教育" accent="经历" subtitle="我的学习历程" />
        <div className="mb-20">
          <Timeline
            items={educations}
            icon={GraduationCap}
            accentColor={{ bg: 'bg-accent-50', text: 'text-accent-500' }}
          />
        </div>

        <SectionHeading title="科研" accent="经历" subtitle="我的研究与项目" />
        <Timeline
          items={researches}
          icon={FlaskConical}
          accentColor={{ bg: 'bg-violet-50', text: 'text-violet-500' }}
        />
      </div>
    </section>
  )
}
