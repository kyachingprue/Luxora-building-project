import { motion } from 'motion/react'
export default function PageHeader({ eyebrow, title, text, img }) {
  return (
    <section className="relative isolate overflow-hidden bg-deep px-5 pt-36 pb-20 text-white">
      {img && (
        <img
          src={img}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
      )}
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium text-mint">{eyebrow}</p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl"
        >
          {title}
        </motion.h1>
        <p className="mt-5 max-w-xl text-white/75">{text}</p>
      </div>
    </section>
  )
}
