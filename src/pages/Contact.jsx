import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { IMG } from '../data.js'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [state, setState] = useState({ s: 'idle', msg: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  async function submit(e) {
    e.preventDefault()
    setState({ s: 'loading', msg: '' })
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f)
      })
      const d = await r.json()
      if (!r.ok) throw new Error(d.error)
      setF({ name: '', email: '', message: '' })
      setState({
        s: 'ok',
        msg: 'Message sent. We will reply within one working day.'
      })
    } catch (err) {
      setState({
        s: 'err',
        msg:
          err.message ||
          'Could not send. Check that the server is running (npm run server).'
      })
    }
  }
  const input =
    'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/40'
  return (
    <PageShell
      title="Contact"
      description="Request a quote or free consultation."
    >
      <PageHeader
        eyebrow="Get in touch"
        title="Your Vision. Our Expertise."
        text="Tell us about your project and we will reply within one working day."
        img={IMG.hero}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-5">
          {[
            [Mail, 'hello@antixorbuilding.com'],
            [Phone, '+880 1783 342794'],
            [MapPin, 'Dhaka, Bangladesh']
          ].map(([I, t]) => (
            <p key={t} className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-deep text-mint">
                <I size={18} />
              </span>
              {t}
            </p>
          ))}
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input
            className={input}
            placeholder="Your name"
            value={f.name}
            onChange={set('name')}
            required
          />
          <input
            className={input}
            type="email"
            placeholder="Email address"
            value={f.email}
            onChange={set('email')}
            required
          />
          <textarea
            className={input}
            rows={5}
            placeholder="Tell us about your project"
            value={f.message}
            onChange={set('message')}
            required
          />
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            disabled={state.s === 'loading'}
            className="group inline-flex items-center gap-3 rounded-full bg-deep px-7 py-3 font-semibold text-mint disabled:opacity-60"
          >
            {state.s === 'loading' ? 'Sending…' : 'Send message'}
            <Send
              size={16}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.button>
          {state.msg && (
            <p
              role="status"
              className={state.s === 'ok' ? 'text-green-700' : 'text-red-600'}
            >
              {state.msg}
            </p>
          )}
        </form>
      </section>
    </PageShell>
  )
}
