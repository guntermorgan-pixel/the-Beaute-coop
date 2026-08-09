import SEO from '../components/SEO.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { categories } from '../data/business.js'

export default function BookNow() {
  return (
    <>
      <SEO
        title="Book Now | The Beaute Co-op, Arlington VA"
        description="Book your nail, lash extension, brow design, or skincare appointment at The Beaute Co-op in Arlington, VA — one tap to each specialist's Square booking page."
        path="/book"
      />

      <section className="bg-ivory px-5 pt-35 pb-9 text-center sm:px-10 lg:pt-42.5 lg:pb-17.5">
        <Reveal className="mx-auto max-w-[1160px]">
          <Eyebrow center>Skip The Scrolling</Eyebrow>
          <h1 className="mt-4.5 text-[44px] sm:text-7xl lg:text-[84px]">Book In Seconds.</h1>
          <p className="mx-auto mt-4.5 max-w-[480px] text-lg leading-[1.7] font-light text-ink/70">
            Already know what you need? Pick a service below and book directly, no exploring
            required.
          </p>
        </Reveal>
      </section>

      <section className="bg-ivory pb-15">
        <Reveal
          as="div"
          className="mx-auto grid max-w-[1240px] grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <div
              key={category.slug}
              className="flex flex-col items-center gap-5 bg-ivory p-12 text-center"
            >
              <span className="label text-[11px] tracking-[0.2em] text-brass">{category.name}</span>
              <h3 className="text-[26px]">{category.bookLabel}</h3>
              <Button href={category.booking.url} size="lg" className="mt-1.5 w-full">
                Book Now
              </Button>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-greige py-30 text-center">
        <Reveal className="mx-auto max-w-[1160px] px-5 sm:px-10">
          <Eyebrow tone="olive" center>
            New Here?
          </Eyebrow>
          <h2 className="mt-6.5 mb-5 text-[30px] sm:text-[44px]">Not Sure What You Need?</h2>
          <p className="mx-auto mb-8.5 max-w-[440px] text-base font-light text-ink/65">
            Browse our full service list and meet the artist behind each one.
          </p>
          <Button to="/services" variant="dark">
            Explore Services
          </Button>
        </Reveal>
      </section>
    </>
  )
}
