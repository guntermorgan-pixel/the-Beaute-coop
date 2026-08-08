import { Link } from 'react-router-dom'
import { business } from '../data/business.js'

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-14 text-ivory lg:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl">
            <span className="font-accent text-brass mr-1 text-lg">The</span>
            Beauté Co-op
          </p>
          <p className="mt-3 max-w-xs font-body text-sm text-ivory/70">
            A competition-free salon suite in Arlington, VA — independent nail, lash,
            brow, and skincare specialists, all under one roof.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-brass">Visit</h3>
          <address className="mt-3 space-y-1 font-body text-sm not-italic text-ivory/80">
            <p>{business.address.street}</p>
            <p>
              {business.address.city}, {business.address.state} {business.address.zip}
            </p>
            <p className="pt-2">
              <a href={business.phoneHref} className="hover:text-brass">
                {business.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${business.email}`} className="hover:text-brass">
                {business.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-brass">Hours</h3>
          <ul className="mt-3 space-y-1 font-body text-sm text-ivory/80">
            {business.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex gap-4">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beauté Co-op on Instagram"
              className="text-ivory/80 hover:text-brass"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.62-.07-4.81s.01-3.56.07-4.81c.15-3.23 1.67-4.77 4.92-4.92C8.4 2.2 8.8 2.2 12 2.2zm0 2.16c-3.14 0-3.51.01-4.75.07-2.34.1-3.43 1.22-3.53 3.53-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.1 2.31 1.19 3.43 3.53 3.53 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c2.34-.1 3.43-1.22 3.53-3.53.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.1-2.31-1.2-3.43-3.53-3.53-1.24-.06-1.61-.07-4.75-.07zm0 3.68a4.96 4.96 0 110 9.92 4.96 4.96 0 010-9.92zm0 8.18a3.22 3.22 0 100-6.44 3.22 3.22 0 000 6.44zm6.31-8.38a1.16 1.16 0 11-2.32 0 1.16 1.16 0 012.32 0z" />
              </svg>
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beauté Co-op on Facebook"
              className="text-ivory/80 hover:text-brass"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M13.5 21v-7.5h2.52l.38-2.93H13.5V8.7c0-.85.24-1.43 1.45-1.43h1.55V4.65c-.27-.04-1.18-.11-2.24-.11-2.22 0-3.74 1.35-3.74 3.84v2.14H8v2.93h2.52V21h3.48z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-ivory/10 px-4 pt-6 sm:px-6 lg:px-8">
        <p className="flex flex-wrap gap-x-6 gap-y-2 font-body text-xs text-ivory/50">
          <span>&copy; {new Date().getFullYear()} The Beauté Co-op. All rights reserved.</span>
          <Link to="/contact" className="hover:text-brass">
            Contact
          </Link>
          <Link to="/join" className="hover:text-brass">
            Join the Co-op
          </Link>
        </p>
      </div>
    </footer>
  )
}
