import { motion } from 'framer-motion'
import { ExternalLink, FolderGit2, Clock } from 'lucide-react'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-surface-warm">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="项目" accent="经历" subtitle="代表性项目与研究工作" />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-black/[0.04] hover:border-accent-200/60 hover:shadow-lg hover:shadow-accent-500/[0.04] transition-all duration-300 flex flex-col"
            >
              {/* Image area with numbered overlay */}
              <div className="relative h-44 bg-surface overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FolderGit2 size={40} className="text-ink-muted/30" />
                  </div>
                )}
                {/* Number overlay */}
                <div className="absolute top-4 left-5 font-display text-5xl font-bold text-ink/[0.04] select-none pointer-events-none leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-medium text-sm bg-white/15 px-5 py-2.5 rounded-lg backdrop-blur-sm hover:bg-white/25 transition-colors"
                    >
                      <ExternalLink size={15} />
                      查看详情
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-display font-bold text-ink mb-2 group-hover:text-accent-500 transition-colors leading-snug">
                  {project.title}
                </h3>
                {project.period && (
                  <div className="flex items-center gap-1.5 text-xs text-ink-muted mb-3">
                    <Clock size={12} />
                    {project.period}
                  </div>
                )}
                <p className="text-ink-secondary text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-warm text-ink-secondary border border-black/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
