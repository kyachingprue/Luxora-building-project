import ServiceGrid from '../ServiceGrid.jsx'
import Button from '../Button.jsx'
import Reveal from '../Reveal.jsx'
export default function ServicesBand() {
  return (
    <section className="bg-ink px-5 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="text-xs tracking-widest text-mint">OUR SERVICES</p>
          <h2 className="mt-3 text-4xl font-bold">
            Complete Building Solutions
          </h2>
          <p className="mt-4 text-white/70">
            From planning to completion, we handle every detail so you can focus
            on what matters most.
          </p>
          <div className="mt-6">
            <Button to="/services">Explore Services</Button>
          </div>
        </Reveal>
        <ServiceGrid />
      </div>
    </section>
  )
}
