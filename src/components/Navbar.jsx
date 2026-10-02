import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Search, Building2 } from 'lucide-react'
import Button from './Button.jsx'
const links = [
  ['Home', '/'],
  ['Projects', '/projects'],
  ['Services', '/services'],
  ['About Us', '/about'],
  ['Contact', '/contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(scrollY > 40)
    f()
    addEventListener('scroll', f)
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? 'bg-deep/95 backdrop-blur' : 'bg-transparent'}`}
    >
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-3 items-center px-5 text-white lg:flex lg:justify-between">
        {/* small devices: 3-bar on the left */}
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="justify-self-start rounded-lg p-2 hover:bg-white/10 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 justify-self-center font-bold leading-none"
        >
          <Building2 className="text-mint" size={30} />
          <span>
            Luxora
            <br />
            <small className="font-normal text-white/70">building.com</small>
          </span>
        </Link>
        <ul className="hidden gap-9 text-sm lg:flex">
          {links.map(([n, to]) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-mint after:transition-transform ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`
                }
              >
                {n}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 justify-self-end">
          <motion.span
            whileHover={{ rotate: 15 }}
            className="hidden rounded-full bg-white/10 p-2.5 sm:block"
          >
            <Search size={16} />
          </motion.span>
          <Button to="/contact" arrow={false} className="!px-4 !py-2">
            Get a Quote
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden bg-deep text-center text-white lg:hidden"
          >
            {links.map(([n, to]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-4 ${isActive ? 'text-mint' : ''}`
                  }
                >
                  {n}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
