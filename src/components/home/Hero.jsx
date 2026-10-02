import { motion } from 'motion/react'
import { Play, Leaf } from 'lucide-react'
import Button from '../Button.jsx'
import { IMG } from '../../data.js'
export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-deep px-5 pt-24 text-white"
    >
      <img
        src={IMG.hero}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60 lg:left-[28%] lg:w-[72%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-deep/70 to-transparent" />
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="o"
          animate="i"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-xl"
        >
          {[
            <p key="a" className="text-xs tracking-widest text-mint">
              MODERN SPACES. BETTER LIVES.
            </p>,
            <h1
              key="b"
              className="text-5xl font-extrabold leading-[1.05] sm:text-7xl"
            >
              Building <span className="text-mint">Tomorrow,</span> Today.
            </h1>,
            <p key="c" className="max-w-md text-white/80">
              At Antixor Building, we design and build modern, sustainable and
              functional spaces that inspire people and add long-term value.
            </p>,
            <div key="d" className="flex flex-wrap items-center gap-5">
              <Button to="/projects">Explore Our Projects</Button>
              <button className="group flex items-center gap-3 text-sm">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/50 transition group-hover:scale-110 group-hover:bg-white group-hover:text-deep">
                  <Play size={16} />
                </span>
                Watch Video
              </button>
            </div>
          ].map((el, i) => (
            <motion.div
              key={i}
              className="mb-6"
              variants={{ o: { opacity: 0, y: 30 }, i: { opacity: 1, y: 0 } }}
            >
              {el}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute right-5 bottom-8 hidden max-w-xs gap-3 rounded-xl border border-white/15 bg-deep/70 p-4 backdrop-blur md:flex"
      >
        <Leaf className="text-mint" />
        <p className="text-sm">
          <b>Sustainable Building for a Better Future</b>
          <br />
          <span className="text-white/60">
            Built with quality. Designed for generations.
          </span>
        </p>
      </motion.div>
    </section>
  )
}
