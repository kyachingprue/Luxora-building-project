import PageShell from '../components/PageShell.jsx'
import Hero from '../components/home/Hero.jsx'
import Stats from '../components/home/Stats.jsx'
import Featured from '../components/home/Featured.jsx'
import ServicesBand from '../components/home/ServicesBand.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import CTA from '../components/home/CTA.jsx'
export default function Home() {
  return (
    <PageShell
      title="Building Tomorrow, Today"
      description="Modern, sustainable and functional building design and construction."
    >
      <Hero />
      <Stats />
      <Featured />
      <ServicesBand />
      <Testimonials />
      <CTA />
    </PageShell>
  )
}
