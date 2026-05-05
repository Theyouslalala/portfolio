import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const categoryColors = {
  '前端': 'from-blue-500 to-cyan-400',
  '后端': 'from-green-500 to-emerald-400',
  '工具': 'from-orange-500 to-amber-400',
}

const categoryBg = {
  '前端': 'bg-blue-50 text-blue-600',
  '后端': 'bg-green-50 text-green-600',
  '工具': 'bg-orange-50 text-orange-600',
}

export default function Skills() {
  const categories = [...new Set(skills.map(s => s.category))]

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            技术<span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">技能</span>
          </h2>
          <p className="text-slate-500 text-lg">我在以下技术领域有开发经验</p>
        </motion.div>

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
                {skills
                  .filter(s => s.category === cat)
                  .map((skill, i) => (
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
