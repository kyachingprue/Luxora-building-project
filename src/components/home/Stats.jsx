import { Building, Star, ShieldCheck, Users } from 'lucide-react'
import { stats } from '../../data.js'
const icons = [Building, Star, ShieldCheck, Users]
export default function Stats() {
  return (
    <section className="bg-deep px-5 py-8 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map(([n, l], i) => {
          const I = icons[i]
          return (
            <div
              key={l}
              className="flex items-center gap-4 lg:border-l lg:border-white/10 lg:pl-8 first:lg:border-0 first:lg:pl-0"
            >
              <I className="text-mint" size={34} />
              <div>
                <p className="text-2xl font-bold">{n}</p>
                <p className="text-xs text-white/70">{l}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
