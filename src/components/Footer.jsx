import { Link } from 'react-router'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Mail, Phone, MapPin, Building2 } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="bg-deep px-5 py-14 text-sm text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold text-white">
            <Building2 className="text-mint" /> Luxora Building
          </p>
          <p className="mt-3">Modern Spaces. Better Lives.</p>
          <div className="mt-5 flex gap-3">
            {[FaFacebookF, FaLinkedinIn, FaInstagram].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-mint hover:text-deep"
              >
                <I size={14} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Quick Links</p>
          <ul className="space-y-2">
            {[
              ['Home', '/'],
              ['Projects', '/projects'],
              ['Services', '/services'],
              ['About Us', '/about'],
              ['Contact', '/contact']
            ].map(([n, t]) => (
              <li key={t}>
                <Link className="transition hover:text-mint" to={t}>
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-white">Contact Us</p>
          <p className="flex gap-2">
            <Mail size={16} /> hello@antixorbuilding.com
          </p>
          <p className="flex gap-2">
            <Phone size={16} /> +880 1783 342794
          </p>
          <p className="flex gap-2">
            <MapPin size={16} /> Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5">
        © 2025 Antixor Building. All rights reserved.
      </p>
    </footer>
  )
}
