import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Stats from '../components/home/Stats.jsx'
import { IMG } from '../data.js'
const timeline = [
  ['2010', 'Founded in Dhaka with a team of five.'],
  ['2016', 'Delivered our first public landmark.'],
  ['2021', 'Adopted sustainable building standards on every project.'],
  ['2025', '500+ projects and a team of 50 specialists.']
]
const values = ['Quality first', 'Honest timelines', 'Sustainable by default']
export default function About() {
  return (
    <PageShell
      title="About Us"
      description="Meet the team building modern, sustainable spaces."
    >
      <PageHeader
        eyebrow="About Antixor"
        title="Built on craft, trust and long-term thinking"
        text="We are architects, engineers and builders who care how a space feels in twenty years."
        img={IMG.c}
      />
      <Stats />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2">
        <Reveal>
          <img
            src={IMG.d}
            alt="Our team site"
            className="h-96 w-full rounded-2xl object-cover"
          />
        </Reveal>
        <div>
          <h2 className="text-3xl font-bold">Our story</h2>
          <ul className="mt-6 space-y-5 border-l-2 border-amber pl-6">
            {timeline.map(([y, t]) => (
              <li key={y}>
                <b>{y}</b>
                <p className="text-ink/70">{t}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {values.map(v => (
              <span
                key={v}
                className="rounded-full bg-deep px-4 py-2 text-sm text-mint"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
