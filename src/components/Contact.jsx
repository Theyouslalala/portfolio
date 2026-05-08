import { motion } from 'framer-motion'
import { Mail, Github, MessageCircle } from 'lucide-react'
import { contact } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const links = [
  {
    label: '邮箱',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
    color: 'bg-red-50 text-red-500',
  },
  {
    label: 'GitHub',
    value: contact.github.replace('https://', ''),
    href: contact.github,
    icon: Github,
    color: 'bg-ink/[0.06] text-ink',
  },
  {
    label: '微信',
    value: contact.wechat,
    href: null,
    icon: MessageCircle,
    color: 'bg-emerald-50 text-emerald-500',
  },
]

function ContactCard({ link, index }) {
  const Icon = link.icon
  const content = (
    <>
      <div className={`inline-flex p-3 rounded-xl ${link.color} mb-4 group-hover:scale-105 transition-transform duration-300`}>
        <Icon size={22} />
      </div>
      <p className="text-xs text-ink-muted mb-1 uppercase tracking-wider font-medium">{link.label}</p>
      <p className="font-semibold text-ink group-hover:text-accent-500 transition-colors text-[15px] break-all">
        {link.value}
      </p>
    </>
  )

  const cardClass = "group block p-6 bg-white rounded-xl border border-black/[0.04] hover:border-accent-200/60 hover:shadow-md hover:shadow-accent-500/[0.03] transition-all duration-300 text-center hover:-translate-y-0.5"

  return (
    <motion.div
      key={link.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {link.href ? (
        <a href={link.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
          {content}
        </a>
      ) : (
        <div className={cardClass}>{content}</div>
      )}
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-surface-warm">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="联系" accent="我" subtitle="欢迎与我交流，期待你的来信" />

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <ContactCard key={link.label} link={link} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
