import { motion } from 'framer-motion'
import { GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { personalInfo, about } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="关于" accent="我" subtitle="学术背景与研究方向" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-primary-400 to-violet-500 p-1">
                <div className="w-full h-full rounded-3xl bg-slate-100 flex items-center justify-center overflow-hidden">
                  {personalInfo.avatar ? (
                    <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-primary-400 to-violet-500 bg-clip-text text-transparent">
                      {personalInfo.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400/20 rounded-full -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-primary-500" size={20} />
              <h3 className="text-lg font-bold text-slate-800">简介</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 whitespace-pre-line text-[15px]">
              {about.description}
            </p>

            <div className="space-y-4">
              {about.educations.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-100 transition-all duration-300"
                >
                  <div className="p-2 bg-primary-50 rounded-xl mt-0.5">
                    <GraduationCap className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-[15px]">{edu.school}</p>
                    <p className="text-sm text-slate-600">{edu.major}</p>
                    <p className="text-xs text-slate-400 mt-1">{edu.detail} · {edu.period}</p>
                  </div>
                </motion.div>
              ))}

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="p-2 bg-accent-400/10 rounded-xl">
                  <MapPin className="text-accent-500" size={20} />
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
