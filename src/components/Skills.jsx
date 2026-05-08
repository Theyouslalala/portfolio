import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const categories = [...new Set(skills.map(s => s.category))]

const categoryStyles = {
  '编程语言': { bg: 'bg-accent-50', text: 'text-accent-600', bar: 'bg-accent-500' },
  'AI / 框架': { bg: 'bg-violet-50', text: 'text-violet-600', bar: 'bg-violet-500' },
  '开发工具': { bg: 'bg-amber-50', text: 'text-amber-600', bar: 'bg-amber-500' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-surface-warm">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="技术" accent="技能" subtitle="我所掌握的技术栈" />

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => {
            const catSkills = skills.filter(s => s.category === cat)
            const style = categoryStyles[cat] || categoryStyles['编程语言']

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${style.bg} ${style.text} mb-5`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${style.bar}`} />
                  <span className="text-sm font-semibold">{cat}</span>
                </div>

                <div className="space-y-2">
                  {catSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ci * 0.1 + i * 0.03 }}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-black/[0.04] hover:border-accent-200/60 transition-all duration-200 group"
                    >
                      <span className="text-sm font-medium text-ink group-hover:text-accent-500 transition-colors">
                        {skill.name}
                      </span>
                      {skill.level != null && (
                        <div className="flex-1 h-1 bg-surface-warm rounded-full overflow-hidden ml-auto max-w-[80px]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.05 }}
                            className={`h-full rounded-full ${style.bar}`}
                          />
                        </div>
                      )}
                    </motion.div>
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
