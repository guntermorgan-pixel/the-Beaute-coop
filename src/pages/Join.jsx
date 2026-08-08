import SEO from '../components/SEO.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import Button from '../components/Button.jsx'
import { business } from '../data/business.js'

export default function Join() {
  return (
    <>
      <SEO
        title="Join The Beauté Co-op | Salon Suites for Beauty Professionals in Arlington, VA"
        description="Rent a salon suite at The Beauté Co-op in Arlington, VA — a competition-free space for independent beauty professionals to grow their business alongside cross-referring specialists."
        path="/join"
      />

      <section className="bg-ink py-16 text-center text-ivory sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-2xl text-brass">For Beauty Professionals</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">Join the Co-op</h1>
          <p className="mt-4 font-body text-base text-ivory/70 sm:text-lg">
            Page copy pending — recruiting copy for prospective suite renters goes here.
          </p>
          <div className="mt-8">
            <Button href={`mailto:${business.email}`} variant="brass" size="lg">
              Inquire About a Suite
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <ImageSlot
          alt="Available salon suite at The Beauté Co-op, Arlington VA"
          label="Suite photo coming soon"
          aspect="aspect-video"
          className="w-full rounded-lg"
        />
      </section>
    </>
  )
}
