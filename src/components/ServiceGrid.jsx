import { motion } from 'motion/react'
import {
  PencilRuler,
  HardHat,
  Armchair,
  ClipboardList,
  Hammer,
  Sprout
} from 'lucide-react'
import { services } from '../data.js'
const icons = [PencilRuler, HardHat, Armchair, ClipboardList, Hammer, Sprout]
export default function ServiceGrid({ detailed }) {
  return (
    <div
      className={`grid gap-4 ${detailed ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 lg:grid-cols-3'}`}
    >
      {services.map(([t, d], i) => {
        const I = icons[i]
        return (
          <motion.div
            key={t}
            whileHover={{ y: -6, borderColor: '#7ee0a9' }}
            className={`rounded-xl border border-white/10 bg-white/5 p-5 text-white ${detailed ? 'min-h-48' : ''}`}
          >
            <I className="text-mint" size={detailed ? 34 : 26} />
            <h3 className="mt-6 text-sm font-semibold sm:text-base">{t}</h3>
            {detailed && <p className="mt-2 text-sm text-white/70">{d}</p>}
          </motion.div>
        )
      })}
    </div>
  )
}
