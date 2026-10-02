import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ServiceGrid from '../components/ServiceGrid.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { IMG } from '../data.js'
const steps = [
  ['Consult', 'We listen to your goals, site and budget.'],
  ['Design', 'Concepts and drawings you can review and adjust.'],
  ['Build', 'Managed construction with weekly progress reports.'],
  ['Handover', 'Final inspection and long-term support.']
]
export default function Services() {
  return (
    <PageShell
      title="Services"
      description="Architecture, construction, interiors, renovation and sustainable building."
    >
      <PageHeader
        eyebrow="What we do"
        title="Complete Building Solutions"
        text="From planning to completion, we handle every detail."
        img={IMG.b}
      />
      <section className="bg-ink px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <ServiceGrid detailed />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-3xl font-bold">How a project runs</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <li className="rounded-xl border-t-4 border-mint bg-white p-5">
                <span className="text-sm font-bold text-amber">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-ink/70">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10">
          <Button to="/contact" variant="dark">
            Start your project
          </Button>
        </div>
      </section>
    </PageShell>
  )
}
