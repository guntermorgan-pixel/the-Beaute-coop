import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/join', label: 'Join the Co-op' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `font-display text-sm uppercase tracking-wide transition-colors ${
      isActive ? 'text-brass' : 'text-ivory hover:text-brass'
    }`

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <NavLink to="/" className="font-display text-xl text-ivory sm:text-2xl" onClick={() => setOpen(false)}>
          <span className="font-accent text-brass mr-1 text-lg sm:text-xl">The</span>
          Beauté Co-op
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/book" variant="brass" size="md">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-ink px-6 py-8 sm:top-20 lg:hidden">
          <nav className="flex flex-col gap-6">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-2xl uppercase tracking-wide ${
                    isActive ? 'text-brass' : 'text-ivory'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <Button to="/book" variant="brass" size="lg" className="w-full" onClick={() => setOpen(false)}>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
