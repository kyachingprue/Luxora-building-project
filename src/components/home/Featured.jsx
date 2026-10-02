import Reveal from '../Reveal.jsx'
import Button from '../Button.jsx'
import ProjectCard from '../ProjectCard.jsx'
import { projects } from '../../data.js'
export default function Featured() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest">OUR FEATURED PROJECTS</p>
            <h2 className="mt-3 text-4xl font-bold">
              Iconic Structures.
              <br />
              Lasting Impressions.
            </h2>
            <p className="mt-4 max-w-md text-ink/70">
              From residential homes to commercial landmarks, we bring your
              vision to life with creativity, precision, and unmatched quality.
            </p>
            <div className="mt-6">
              <Button to="/projects" variant="dark">
                View All Projects
              </Button>
            </div>
          </div>
          <ul className="hidden border-l-2 border-amber pl-5 text-sm sm:block">
            <li>Modern Design</li>
            <li>Sustainable Solutions</li>
            <li>Exceptional Quality</li>
          </ul>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-[1.4fr_1fr]">
          {projects.slice(0, 2).map(p => (
            <ProjectCard key={p.title} p={p} tall />
          ))}
        </div>
      </div>
    </section>
  )
}
