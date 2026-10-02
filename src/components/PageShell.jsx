import { motion } from 'motion/react'
import Seo from './Seo.jsx'
export default function PageShell({ title, description, children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Seo title={title} description={description} />
      {children}
    </motion.main>
  )
}
