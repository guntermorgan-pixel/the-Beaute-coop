import { Link } from 'react-router-dom'
import { business, assets } from '../data/business.js'
import InstagramIcon from './InstagramIcon.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ivory pt-15 pb-8">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <div className="flex flex-col gap-6 border-b border-hairline pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[380px]">
            <h3 className="text-2xl">Stay in the Know</h3>
            <p className="mt-2.5 font-body text-sm font-light text-ink/60">
              Get first access to new artists, seasonal offers, and everything happening at the
              Co-op, straight to your inbox.
            </p>
          </div>
          <div className="w-full lg:max-w-[420px]">
            <form
              action="https://squareup.com/outreach/jngJ76/subscribe"
              method="POST"
              target="_blank"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input type="hidden" name="embed" value="1" />
              <input
                type="email"
                name="email_address"
                required
                placeholder="Your Email Address"
                className="w-full border border-hairline bg-ivory px-4.5 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-brass focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-ink px-6 py-3 font-body text-xs font-medium tracking-[0.14em] text-ivory uppercase transition-colors hover:bg-brass hover:text-ink"
              >
                Join the Co-op List
              </button>
            </form>
            <p className="mt-2.5 font-body text-xs text-ink/45">
              No spam, just the good stuff. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-10 border-b border-hairline pb-10 pt-10">
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
