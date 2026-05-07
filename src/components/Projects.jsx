import { motion } from 'framer-motion'
import { ExternalLink, FolderGit2, Clock } from 'lucide-react'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const tagColors = [
  'bg-blue-100 text-blue-700',
  'bg-green-100 text-green-700',
  'bg-purple-100 text-purple-700',
  'bg-orange-100 text-orange-700',
  'bg-pink-100 text-pink-700',
  'bg-cyan-100 text-cyan-700',
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="项目" accent="经历" subtitle="代表性项目与研究工作" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 flex flex-col"
            >
              <div className="h-40 bg-gradient-to-br from-primary-100 via-violet-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <FolderGit2 size={44} className="text-primary-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-violet-600/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-semibold bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={16} />
                    查看详情
                  </a>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
                {project.period && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <Clock size={12} />
                    {project.period}
                  </div>
                )}
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${tagColors[ti % tagColors.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
