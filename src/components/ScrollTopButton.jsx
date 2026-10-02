import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUp } from 'lucide-react'
// Appears once the hero is scrolled past; click returns to the top banner.
export default function ScrollTopButton() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(scrollY > innerHeight * 0.6)
    f()
    addEventListener('scroll', f)
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          aria-label="Back to top"
          initial={{ opacity: 0, y: 30, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.6 }}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-5 bottom-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-mint text-deep shadow-lg shadow-black/30"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
