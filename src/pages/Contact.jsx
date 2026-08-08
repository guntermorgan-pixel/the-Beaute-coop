import SEO from '../components/SEO.jsx'
import { business } from '../data/business.js'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | The Beauté Co-op, Arlington VA"
        description="Get in touch with The Beauté Co-op in Arlington, VA — address, phone, email, hours, and directions to our salon suite."
        path="/contact"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="font-accent text-2xl text-olive">We'd Love to See You</p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Contact</h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8 font-body text-ink">
            <div>
              <h2 className="font-display text-sm tracking-widest text-brass">Address</h2>
              <address className="mt-2 not-italic text-lg">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </address>
            </div>

            <div>
              <h2 className="font-display text-sm tracking-widest text-brass">Phone &amp; Email</h2>
              <p className="mt-2 text-lg">
                <a href={business.phoneHref} className="hover:text-olive">
                  {business.phone}
                </a>
                <br />
                <a href={`mailto:${business.email}`} className="hover:text-olive">
                  {business.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-sm tracking-widest text-brass">Hours</h2>
              <ul className="mt-2 space-y-1 text-lg">
                {business.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-6 sm:max-w-xs">
                    <span>{h.days}</span>
                    <span className="text-ink/70">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm tracking-widest text-brass">Follow Along</h2>
              <div className="mt-2 flex gap-4 text-lg">
                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-olive">
                  Instagram
                </a>
                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-olive">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="aspect-square w-full overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
            <iframe
              title="Map to The Beauté Co-op"
              src={business.mapEmbedUrl}
              className="h-full w-full min-h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
