import SEO from '../components/SEO.jsx'
import BookingButton from '../components/BookingButton.jsx'
import { categories } from '../data/business.js'

export default function BookNow() {
  return (
    <>
      <SEO
        title="Book Now | The Beauté Co-op, Arlington VA"
        description="Book your nail, lash extension, brow design, or skincare appointment at The Beauté Co-op in Arlington, VA — one tap to each specialist's Square booking page."
        path="/book"
      />

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="text-center">
          <p className="font-accent text-lg text-olive sm:text-xl">Ready when you are</p>
          <h1 className="mt-1 font-display text-2xl text-ink sm:text-4xl">Book Your Appointment</h1>
          <p className="mt-1.5 font-body text-xs text-ink/60 sm:mt-2 sm:text-base">
            Pick your service below to book directly with your specialist.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="flex flex-col justify-between gap-3 rounded-lg bg-greige/40 p-3 sm:gap-4 sm:p-5"
            >
              <div>
                <h2 className="font-display text-xs uppercase leading-tight tracking-wide text-ink sm:text-lg">
                  {category.name}
                </h2>
                <p className="mt-1 font-accent text-sm text-olive sm:text-base">
                  {category.artist.businessName}
                </p>
              </div>
              <BookingButton
                booking={category.booking}
                label="Book Now"
                ariaLabel={`Book ${category.shortName} with ${category.artist.businessName}`}
                size="sm"
                className="!w-full"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
