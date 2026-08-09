import { Link } from 'react-router-dom'
import { business, assets } from '../data/business.js'
import InstagramIcon from './InstagramIcon.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ivory pt-15 pb-8">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <div className="flex flex-wrap items-start justify-between gap-10 border-b border-hairline pb-10">
          <div>
            <img src={assets.logo} alt="The Beaute Co-op logo" className="mb-4 h-15 w-auto" />
            <p className="max-w-[260px] font-body text-sm font-light text-ink/60">
              {business.address.street}, {business.address.city}, {business.address.state}{' '}
              {business.address.zip}. {business.hours}.
            </p>
          </div>

          <div className="flex flex-wrap gap-17.5">
            <div>
              <h4 className="label mb-4.5 text-[11.5px] tracking-[0.18em] text-olive">Explore</h4>
              <Link to="/" className="block py-1.25 font-body text-sm text-ink-soft hover:text-brass">
                Home
              </Link>
              <Link to="/about" className="block py-1.25 font-body text-sm text-ink-soft hover:text-brass">
                About
              </Link>
              <Link
                to="/services"
                className="block py-1.25 font-body text-sm text-ink-soft hover:text-brass"
              >
                Services
              </Link>
              <Link to="/book" className="block py-1.25 font-body text-sm text-ink-soft hover:text-brass">
                Book Now
              </Link>
            </div>

            <div>
              <h4 className="label mb-4.5 text-[11.5px] tracking-[0.18em] text-olive">Co-op</h4>
              <Link to="/join" className="block py-1.25 font-body text-sm text-ink-soft hover:text-brass">
                Join the Beaute Co-op
              </Link>
              <Link
                to="/contact"
                className="block py-1.25 font-body text-sm text-ink-soft hover:text-brass"
              >
                Contact
              </Link>
            </div>

            <div>
              <h4 className="label mb-4.5 text-[11.5px] tracking-[0.18em] text-olive">Connect</h4>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1.25 font-body text-sm text-ink-soft hover:text-brass"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={business.emailHref}
                className="block py-1.25 font-body text-sm text-ink-soft hover:text-brass"
              >
                {business.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 pt-6 font-body text-xs text-ink/50">
          <span>© {new Date().getFullYear()} The Beaute Co-op. All rights reserved.</span>
          <span>Arlington, Virginia</span>
        </div>
      </div>
    </footer>
  )
}
