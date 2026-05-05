import { motion } from 'framer-motion'
import { Mail, Github, MessageCircle } from 'lucide-react'
import { contact } from '../data/portfolio'

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

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            联系<span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">我</span>
          </h2>
          <p className="text-slate-500 text-lg">欢迎与我交流，期待你的来信</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {links.map((link, i) => {
            const Icon = link.icon
            const Wrapper = link.href ? 'a' : 'div'
            const wrapperProps = link.href
              ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="group block p-6 bg-white rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 text-center hover:-translate-y-1"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${link.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <p className="text-sm text-slate-500 mb-1">{link.label}</p>
                  <p className="font-semibold text-slate-800 group-hover:text-primary-500 transition-colors break-all">
                    {link.value}
                  </p>
                </Wrapper>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
