import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import Button from '../components/Button.jsx'
import { categories } from '../data/business.js'

// PLACEHOLDER copy throughout — swap in final page copy once provided.
// Structure/sections below map to the four business objectives:
// showcase the space, help visitors find services/artists, make booking
// effortless, and support local SEO.

const GALLERY = [
  { label: 'Entryway & reception photo coming soon', alt: 'The Beauté Co-op reception and entryway in Arlington, VA' },
  { label: 'Treatment room photo coming soon', alt: 'A treatment room inside The Beauté Co-op, Arlington VA' },
  { label: 'Lounge photo coming soon', alt: 'The Beauté Co-op client lounge seating area' },
  { label: 'Suite detail photo coming soon', alt: 'Design details inside a Beauté Co-op salon suite' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="The Beauté Co-op | Nail, Lash, Brow & Skincare Studio in Arlington, VA"
        description="The Beauté Co-op is a salon suite in Arlington, VA where independent nail, lash extension, brow design, and medical-grade skincare specialists work under one roof. Book your whole beauty routine in one place."
        path="/"
      />

      {/* Hero */}
      <section className="relative">
        <ImageSlot
          alt="The Beauté Co-op entryway and reception in Arlington, VA"
          label="Hero photo coming soon"
          aspect="aspect-[3/4] sm:aspect-[16/9] lg:aspect-[21/9]"
          className="w-full"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/20 to-transparent sm:items-center">
          <div className="w-full px-4 pb-10 sm:px-6 sm:pb-0 lg:px-8">
            <div className="max-w-xl">
              <p className="font-accent text-2xl text-brass sm:text-3xl">The</p>
              <h1 className="-mt-2 font-display text-5xl leading-none text-ivory sm:text-6xl lg:text-7xl">
                Beauté Co-op
              </h1>
              <p className="mt-4 max-w-md font-body text-base text-ivory/90 sm:text-lg">
                Placeholder subhead — one roof, every specialist your beauty routine needs.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button to="/book" variant="brass" size="lg">
                  Book Now
                </Button>
                <Button to="/services" variant="outline-light" size="lg">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value prop / concept intro */}
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:py-20">
        <p className="font-accent text-2xl text-olive">Competition-Free, By Design</p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">One Roof. Every Specialist.</h2>
        <p className="mt-4 font-body text-base text-ink/70 sm:text-lg">
          Placeholder copy — a short paragraph on the co-op concept: independent artists who
          refer clients to each other instead of competing, so your whole beauty routine gets
          handled in one visit.
        </p>
      </section>

      {/* Step Inside gallery */}
      <section aria-labelledby="step-inside-heading" className="bg-greige/30 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-accent text-2xl text-olive">Take a Look Inside</p>
              <h2 id="step-inside-heading" className="mt-1 font-display text-3xl text-ink sm:text-4xl">
                Step Inside
              </h2>
            </div>
          </div>

          <div className="mt-8 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {GALLERY.map((item) => (
              <ImageSlot
                key={item.label}
                alt={item.alt}
                label={item.label}
                aspect="aspect-[4/5]"
                className="w-64 shrink-0 snap-start rounded-lg sm:w-auto sm:shrink"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section aria-labelledby="services-overview-heading" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-accent text-2xl text-olive">Find Your Specialist</p>
            <h2 id="services-overview-heading" className="mt-1 font-display text-3xl text-ink sm:text-4xl">
              What We Offer
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/services#${category.slug}`}
                className="group block overflow-hidden rounded-lg bg-greige/30 transition-shadow hover:shadow-lg"
              >
                <ImageSlot
                  alt={`${category.name} at The Beauté Co-op, Arlington VA`}
                  label={`${category.name} photo`}
                  aspect="aspect-square"
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="font-display text-base uppercase tracking-wide text-ink">
                    {category.name}
                  </h3>
                  <p className="mt-1 font-accent text-base text-olive">{category.artist.businessName}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/services" variant="outline" size="lg">
              See All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-16 text-center text-ivory sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl">Ready to Book?</h2>
          <p className="mt-3 font-body text-base text-ivory/70 sm:text-lg">
            Placeholder copy — friendly nudge toward booking with one of our specialists.
          </p>
          <div className="mt-7">
            <Button to="/book" variant="brass" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
