import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const categoryColors = {
  '编程语言': { bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-400' },
  'AI / 框架': { bg: 'bg-violet-50', text: 'text-violet-600', dot: 'bg-violet-400' },
  '开发工具': { bg: 'bg-orange-50', text: 'text-orange-600', dot: 'bg-orange-400' },
}

const categories = [...new Set(skills.map(s => s.category))]
const skillsByCategory = Object.fromEntries(
  categories.map(cat => [cat, skills.filter(s => s.category === cat)])
)

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="技术" accent="技能" subtitle="我所掌握的技术栈" />

        <div className="space-y-10">
          {categories.map((cat, ci) => {
            const colors = categoryColors[cat] || categoryColors['编程语言']
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}>
                    {cat}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillsByCategory[cat].map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-md hover:shadow-primary-500/5 transition-all duration-300 cursor-default text-sm font-medium text-slate-700"
                    >
                      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
