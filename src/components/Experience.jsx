import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award } from 'lucide-react'
import { experiences } from '../data/portfolio'

const typeConfig = {
  education: { icon: GraduationCap, color: 'bg-primary-500', lightColor: 'bg-primary-50' },
  intern: { icon: Briefcase, color: 'bg-green-500', lightColor: 'bg-green-50' },
  award: { icon: Award, color: 'bg-accent-500', lightColor: 'bg-orange-50' },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            个人<span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">经历</span>
          </h2>
          <p className="text-slate-500 text-lg">我的教育和工作经历</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const config = typeConfig[exp.type] || typeConfig.education
              const Icon = config.icon

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl ${config.lightColor} flex items-center justify-center`}>
                    <Icon className={`${config.color.replace('bg-', 'text-')}`} size={22} />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-bold text-slate-800">{exp.title}</h3>
                      <span className="text-sm text-slate-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-sm font-medium text-primary-500 mb-2">{exp.org}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
