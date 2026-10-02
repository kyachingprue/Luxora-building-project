import { Star } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import { reviews } from '../../data.js'
export default function Testimonials() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold">
          Trusted by Clients
          <br />
          Across the World
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map(([n, r, t], i) => (
            <Reveal key={n} delay={i * 0.12}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex gap-0.5 text-amber">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-ink/80">"{t}"</p>
                <p className="mt-5 font-semibold">{n}</p>
                <p className="text-xs text-ink/60">{r}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
