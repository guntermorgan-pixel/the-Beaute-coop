import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Reveal from '../components/Reveal.jsx'
import InstagramIcon from '../components/InstagramIcon.jsx'
import { business } from '../data/business.js'

const QUICK_LINKS = [
  { to: '/book', question: 'Looking to book an appointment?', label: 'Book Now →' },
  { to: '/services', question: 'Interested in a specific artist or service?', label: 'View Services →' },
  { to: '/join', question: 'A beauty professional interested in a suite?', label: 'Join the Co-op →' },
]

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | The Beaute Co-op, Arlington VA"
        description="Get in touch with The Beaute Co-op in Arlington, VA — address, hours, email, and directions to our beauty salon."
        path="/contact"
      />

      <section className="bg-ivory px-5 pt-35 pb-9 text-center sm:px-10 lg:pt-42.5 lg:pb-17.5">
        <Reveal className="mx-auto max-w-[1160px]">
          <Eyebrow center>Get In Touch</Eyebrow>
          <h1 className="mt-5 text-[42px] sm:text-6xl lg:text-[78px]">
            Let's Get You
            <br />
            Booked.
          </h1>
          <p className="mx-auto mt-5 max-w-[540px] text-lg font-light text-ink/70">
            Questions about services, a specific artist, or joining the Co-op as a beauty pro?
            We're here.
          </p>
        </Reveal>
      </section>

      <section className="bg-ivory pb-15 lg:pb-25">
        <Reveal className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12.5 px-5 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h3 className="font-body mb-6 text-[26px] font-medium normal-case">The Beaute Co-op</h3>

            <div className="flex gap-4 border-t border-hairline py-4.5 text-base font-light">
              <span className="label w-22.5 shrink-0 pt-0.5 text-[11.5px] tracking-[0.16em] text-brass">
                Address
              </span>
              <span>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </span>
            </div>

            <div className="flex gap-4 border-t border-hairline py-4.5 text-base font-light">
              <span className="label w-22.5 shrink-0 pt-0.5 text-[11.5px] tracking-[0.16em] text-brass">
                Hours
              </span>
              <span>{business.hours}</span>
            </div>

            <div className="flex gap-4 border-t border-hairline py-4.5 text-base font-light">
              <span className="label w-22.5 shrink-0 pt-0.5 text-[11.5px] tracking-[0.16em] text-brass">
                Email
              </span>
              <a href={business.emailHref} className="hover:text-brass">
                {business.email}
              </a>
            </div>

            <div className="flex gap-4 border-t border-b border-hairline py-4.5 text-base font-light">
              <span className="label w-22.5 shrink-0 pt-0.5 text-[11.5px] tracking-[0.16em] text-brass">
                Follow
              </span>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Beaute Co-op on Instagram"
                className="inline-flex text-ink transition-colors hover:text-brass"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-8.5 flex flex-col">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center justify-between gap-4 border-t py-5 text-base transition-[padding-left,color] duration-200 last:border-b hover:pl-2 hover:text-brass border-hairline"
                >
                  <span>{link.question}</span>
                  <span className="label shrink-0 text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="aspect-[4/3] overflow-hidden border border-hairline bg-greige">
              <iframe
                title="Map to The Beaute Co-op"
                src={business.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-4 inline-block border-b border-transparent text-xs tracking-[0.12em] text-olive transition-colors hover:border-brass hover:text-brass"
            >
              Get Directions ↗
            </a>
            <p className="mt-5 text-[14.5px] leading-[1.6] font-light text-ink/60">
              We offer convenient on-site parking. You're welcome to park in the lot to the
              left of the building, directly underneath, or in front of the entrance. We're
              located on the first floor, you can't miss us!
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
