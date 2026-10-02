import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
const MLink = motion.create(Link)
// variants: mint (filled), dark (filled dark), ghost (outline)
const styles = {
  mint: 'bg-mint text-deep',
  dark: 'bg-deep text-white',
  ghost: 'border border-white/40 text-white'
}
export default function Button({
  to = '/',
  children,
  variant = 'mint',
  className = '',
  arrow = true,
  ...p
}) {
  return (
    <MLink
      to={to}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      {...p}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold ${styles[variant]} ${className}`}
    >
      <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover:left-[150%]" />
      <span className="relative">{children}</span>
      {arrow && (
        <ArrowRight
          size={16}
          className="relative transition-transform duration-300 group-hover:translate-x-1.5"
        />
      )}
    </MLink>
  )
}
