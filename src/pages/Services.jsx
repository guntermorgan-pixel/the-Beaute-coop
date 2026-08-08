import SEO from '../components/SEO.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import BookingButton from '../components/BookingButton.jsx'
import { categories, comingSoon } from '../data/business.js'

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.62-.07-4.81s.01-3.56.07-4.81c.15-3.23 1.67-4.77 4.92-4.92C8.4 2.2 8.8 2.2 12 2.2zm0 2.16c-3.14 0-3.51.01-4.75.07-2.34.1-3.43 1.22-3.53 3.53-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.1 2.31 1.19 3.43 3.53 3.53 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c2.34-.1 3.43-1.22 3.53-3.53.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.1-2.31-1.2-3.43-3.53-3.53-1.24-.06-1.61-.07-4.75-.07zm0 3.68a4.96 4.96 0 110 9.92 4.96 4.96 0 010-9.92zm0 8.18a3.22 3.22 0 100-6.44 3.22 3.22 0 000 6.44zm6.31-8.38a1.16 1.16 0 11-2.32 0 1.16 1.16 0 012.32 0z" />
    </svg>
  )
}

function ServiceSection({ category }) {
  const { artist } = category

  return (
    <section
      id={category.slug}
      aria-labelledby={`${category.slug}-heading`}
      className="scroll-mt-20 border-b border-ink/10 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ImageSlot
            alt={`${category.name} service at The Beauté Co-op, Arlington VA`}
            label={`${category.name} photo coming soon`}
            aspect="aspect-[4/3]"
            className="w-full rounded-lg lg:order-2"
          />

          <div className="lg:order-1">
            <h2 id={`${category.slug}-heading`} className="font-display text-3xl text-ink sm:text-4xl">
              {category.name}
            </h2>
            <p className="mt-4 max-w-lg font-body text-base text-ink/70 sm:text-lg">
              {category.description}
            </p>

            {/* Meet your artist */}
            <div className="mt-8 flex items-start gap-4 rounded-lg bg-greige/40 p-4 sm:p-5">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <ImageSlot
                  alt={`${artist.name} of ${artist.businessName}, ${category.name} specialist at The Beauté Co-op`}
                  label="Photo"
                  aspect="aspect-square"
                  className="h-full w-full"
                />
              </div>

              <div className="min-w-0">
                <h3 className="font-display text-base uppercase tracking-wide text-ink">
                  {artist.name}
                </h3>
                <div className="mt-0.5 flex items-center gap-2">
                  {artist.logo ? (
                    <img
                      src={artist.logo}
                      alt={`${artist.businessName} logo`}
                      className="h-5 w-auto"
                    />
                  ) : (
                    <span className="font-accent text-base text-olive">
                      {artist.businessName}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-body text-sm text-ink/70">{artist.bio}</p>

                {artist.instagram && (
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${artist.businessName} on Instagram`}
                    className="mt-3 inline-flex text-ink/50 hover:text-brass"
                  >
                    <InstagramIcon />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-6">
              <BookingButton booking={category.booking} label={`Book ${category.shortName}`} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <SEO
        title="Nails, Lash Extensions, Brow Design & Skincare | The Beauté Co-op, Arlington VA"
        description="Explore nail artistry, lash extensions, brow design, and medical-grade skincare at The Beauté Co-op in Arlington, VA — book directly with each independent specialist."
        path="/services"
      />

      <section className="bg-ink py-14 text-center text-ivory sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-2xl text-brass">Everyone, under one roof</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">Our Services</h1>
          <p className="mt-4 font-body text-base text-ivory/70 sm:text-lg">
            Every specialist at The Beauté Co-op runs their own independent business. Browse by
            service below to meet your artist and book directly with them.
          </p>
        </div>
      </section>

      {categories.map((category) => (
        <ServiceSection key={category.slug} category={category} />
      ))}

      <section aria-labelledby="coming-soon-heading" className="py-14 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="coming-soon-heading" className="font-display text-3xl text-ink sm:text-4xl">
            Coming Soon
          </h2>
          <p className="mt-3 font-body text-ink/70">
            We're growing the co-op. These services will be joining us soon.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {comingSoon.map((item) => (
              <span
                key={item.slug}
                className="rounded-full border-2 border-brass px-6 py-2 font-display text-sm uppercase tracking-wide text-ink"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
