import { motion } from 'framer-motion'
import { GraduationCap, FlaskConical } from 'lucide-react'
import { educations, researches } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function TimelineItem({ item, icon: Icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      <div className={`relative z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl ${color.bg} flex items-center justify-center`}>
        <Icon className={color.text} size={20} />
      </div>
      <div className="flex-1 bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
          <span className="text-xs text-slate-400 font-medium">{item.period}</span>
        </div>
        <p className="text-sm font-medium text-primary-500 mb-1.5">{item.org}</p>
        {item.description && (
          <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
        )}
      </div>
    </motion.div>
  )
}

function Timeline({ items, icon, color }) {
  return (
    <div className="relative">
      <div className="absolute left-6 md:left-7 top-0 bottom-0 w-0.5 bg-slate-200" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <TimelineItem
            key={item.title}
            item={item}
            icon={icon}
            color={color}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="教育" accent="经历" subtitle="我的学习历程" />
        <div className="mb-20">
          <Timeline
            items={educations}
            icon={GraduationCap}
            color={{ bg: 'bg-primary-50', text: 'text-primary-500' }}
          />
        </div>

        <SectionHeading title="科研" accent="经历" subtitle="我的研究与项目" />
        <Timeline
          items={researches}
          icon={FlaskConical}
          color={{ bg: 'bg-violet-50', text: 'text-violet-500' }}
        />
      </div>
    </section>
  )
}
