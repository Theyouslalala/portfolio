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
    color: 'from-red-500 to-pink-500',
  },
  {
    label: 'GitHub',
    value: contact.github.replace('https://', ''),
    href: contact.github,
    icon: Github,
    color: 'from-slate-700 to-slate-900',
  },
  {
    label: '微信',
    value: contact.wechat,
    href: null,
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-500',
  },
]

function ContactCard({ link, index }) {
  const Icon = link.icon
  const content = (
    <>
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${link.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="text-white" size={28} />
      </div>
      <p className="text-sm text-slate-500 mb-1">{link.label}</p>
      <p className="font-semibold text-slate-800 group-hover:text-primary-500 transition-colors break-all">
        {link.value}
      </p>
    </>
  )

  const cardClass = "group block p-6 bg-white rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 text-center hover:-translate-y-1"

  return (
    <motion.div
      key={link.label}
      initial={{ opacity: 0, y: 30 }}
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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="联系" accent="我" subtitle="欢迎与我交流，期待你的来信" />

        <div className="grid sm:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <ContactCard key={link.label} link={link} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
