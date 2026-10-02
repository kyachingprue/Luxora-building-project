import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, IMG } from '../data.js'
const cats = ['All', 'Architecture', 'Interior', 'Construction']
export default function Projects() {
  const [c, setC] = useState('All')
  const list = projects.filter(p => c === 'All' || p.cat === c)
  return (
    <PageShell
      title="Projects"
      description="Explore recent architecture, interior and construction work."
    >
      <PageHeader
        eyebrow="Our portfolio"
        title="Explore Our Recent Work"
        text="Every project tells a story of craftsmanship and commitment to excellence."
        img={IMG.a}
      />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex flex-wrap gap-3">
          {cats.map(k => (
            <button
              key={k}
              onClick={() => setC(k)}
              className="relative rounded-full px-5 py-2 text-sm font-medium"
            >
              {c === k && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 rounded-full bg-deep"
                />
              )}
              <span className={`relative ${c === k ? 'text-mint' : ''}`}>
                {k}
              </span>
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {list.map(p => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageShell>
  )
}
