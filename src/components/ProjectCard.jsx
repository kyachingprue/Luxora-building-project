import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
export default function ProjectCard({ p, tall }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover="h"
      className={`group relative overflow-hidden rounded-2xl bg-ink ${tall ? 'h-80 sm:h-96' : 'h-72'}`}
    >
      <motion.img
        variants={{ h: { scale: 1.08 } }}
        transition={{ duration: 0.6 }}
        src={p.img}
        alt={p.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
        <div>
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-xs text-white/70">
            {p.cat} / {p.tag}
          </p>
        </div>
        <motion.span
          variants={{
            h: { rotate: -45, backgroundColor: '#7ee0a9', color: '#081d17' }
          }}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/50"
        >
          <ArrowRight size={16} />
        </motion.span>
      </div>
    </motion.article>
  )
}
