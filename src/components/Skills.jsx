import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const categoryColors = {
  '编程语言': 'from-blue-500 to-cyan-400',
  'AI / 框架': 'from-violet-500 to-purple-400',
  '开发工具': 'from-orange-500 to-amber-400',
}

const categoryBg = {
  '编程语言': 'bg-blue-50 text-blue-600',
  'AI / 框架': 'bg-violet-50 text-violet-600',
  '开发工具': 'bg-orange-50 text-orange-600',
}

const categories = [...new Set(skills.map(s => s.category))]
const skillsByCategory = Object.fromEntries(
  categories.map(cat => [cat, skills.filter(s => s.category === cat)])
)

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="技术" accent="技能" subtitle="我在以下技术领域有开发经验" />

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryBg[cat]}`}>
                  {cat}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillsByCategory[cat].map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 cursor-default"
                    >
                      <p className="font-semibold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
                        {skill.name}
                      </p>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${categoryColors[cat]}`}
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-1.5 text-right">{skill.level}%</p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
