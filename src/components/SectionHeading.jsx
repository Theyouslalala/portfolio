import { motion } from 'framer-motion'

export default function SectionHeading({ title, accent, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title}<span className="bg-gradient-to-r from-primary-500 to-violet-500 bg-clip-text text-transparent">{accent}</span>
      </h2>
      <p className="text-slate-500 text-lg">{subtitle}</p>
    </motion.div>
  )
}
