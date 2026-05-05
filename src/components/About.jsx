import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { personalInfo, about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            关于<span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">我</span>
          </h2>
          <p className="text-slate-500 text-lg">了解更多关于我的信息</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-primary-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-3xl bg-slate-100 flex items-center justify-center overflow-hidden">
                  {personalInfo.avatar ? (
                    <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-primary-400 to-purple-500 bg-clip-text text-transparent">
                      {personalInfo.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400/20 rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-600 leading-relaxed text-lg mb-8 whitespace-pre-line">
              {about.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="p-2 bg-primary-50 rounded-xl">
                  <GraduationCap className="text-primary-500" size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">教育背景</p>
                  <p className="font-semibold text-slate-800">
                    {about.education.school} · {about.education.major}
                  </p>
                  <p className="text-sm text-slate-500">{about.education.degree} · {about.education.period}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="p-2 bg-accent-400/10 rounded-xl">
                  <MapPin className="text-accent-500" size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">所在地</p>
                  <p className="font-semibold text-slate-800">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
