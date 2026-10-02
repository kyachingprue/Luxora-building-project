import Button from '../Button.jsx'
import { IMG } from '../../data.js'
export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-deep px-5 py-24 text-white">
      <img
        src={IMG.d}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold sm:text-5xl">
          Your Vision.
          <br />
          Our Expertise.
        </h2>
        <p className="mt-4 text-white/75">
          Let's create something extraordinary. Get in touch with our team
          today.
        </p>
        <div className="mt-7">
          <Button to="/contact">Get a Free Consultation</Button>
        </div>
      </div>
    </section>
  )
}
