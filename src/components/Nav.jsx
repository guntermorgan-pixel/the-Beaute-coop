import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../data/business.js'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/join', label: 'Join the Co-op' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative pb-1 font-body text-[12.5px] font-medium uppercase tracking-[0.14em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-[width] after:duration-300 hover:after:w-full ${
      isActive ? 'text-brass' : 'text-ink hover:text-ink'
    }`

  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-ivory">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 sm:px-10">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={assets.logo} alt="The Beaute Co-op logo" className="h-10 w-auto sm:h-13" />
        </NavLink>

        <div className="hidden items-center gap-8.5 lg:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/book"
            className="bg-ink px-6 py-2.5 font-body text-xs font-medium uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-brass hover:text-ink"
          >
            Book Now
          </NavLink>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-0.5 w-6.5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`block h-0.5 w-6.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6.5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[70px] bottom-0 z-40 flex flex-col gap-6 overflow-y-auto bg-ivory px-5 py-8 lg:hidden">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-xl ${isActive ? 'text-brass' : 'text-ink'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block w-fit bg-ink px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-ivory"
          >
            Book Now
          </NavLink>
        </div>
      )}
    </nav>
  )
}
