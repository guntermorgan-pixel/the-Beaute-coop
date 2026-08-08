import SEO from '../components/SEO.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import Button from '../components/Button.jsx'

export default function About() {
  return (
    <>
      <SEO
        title="About Us | The Beauté Co-op, Arlington VA"
        description="Learn about The Beauté Co-op, Arlington VA's competition-free salon suite — where independent beauty specialists work together, not against each other."
        path="/about"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="font-accent text-2xl text-olive">Our Story</p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">About the Co-op</h1>

        <p className="mt-6 max-w-2xl font-body text-lg text-ink/70">
          Page copy pending — this section will hold the full About story once provided.
        </p>

        <ImageSlot
          alt="Interior of The Beauté Co-op salon suite in Arlington, VA"
          label="About / space photo coming soon"
          aspect="aspect-video"
          className="mt-10 w-full rounded-lg"
        />

        <div className="mt-10">
          <Button to="/book" variant="olive" size="lg">
            Book Now
          </Button>
        </div>
      </section>
    </>
  )
}
