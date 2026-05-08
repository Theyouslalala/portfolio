import { motion } from 'framer-motion'

export default function SectionHeading({ title, accent, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
        {title}<span className="text-accent-500">{accent}</span>
      </h2>
      {subtitle && (
        <p className="text-ink-muted text-base mt-3 max-w-xl">{subtitle}</p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-[3px] bg-accent-500 mt-5 rounded-full"
      />
    </motion.div>
  )
}
