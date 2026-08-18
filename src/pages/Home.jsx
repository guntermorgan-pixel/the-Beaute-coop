import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import { categories, comingSoon, assets } from '../data/business.js'

export default function Home() {
  return (
    <>
      <SEO
        title="The Beaute Co-op | Nail, Lash, Brow & Skincare Studio in Arlington, VA"
        description="The Beaute Co-op is a beauty salon in Arlington, VA where independent nail, lash extension, brow design, and medical-grade skincare specialists work under one roof. Book your whole beauty routine in one place."
        path="/"
      />

      {/* Hero */}
      <section className="grain grid min-h-[70vh] grid-cols-1 overflow-hidden bg-ink text-ivory lg:min-h-[88vh] lg:grid-cols-2">
        <div className="relative z-[2] flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-10 lg:py-20 lg:pl-10 lg:pr-15">
          <Eyebrow>Arlington, VA</Eyebrow>
          <h1 className="text-[42px] leading-[0.98] sm:text-6xl lg:text-[84px]">
            <span className="font-script mb-0.5 block text-[0.6em] text-brass-light">Your Beaute.</span>
            All Under
            <br />
            One Roof.
          </h1>
          <p className="mt-7.5 mb-11 max-w-[440px] text-lg leading-[1.7] font-light text-ivory/78">
            Nails, lash extensions, brow design, and medical-grade skin care, handled by top
            independent artists who actually talk to each other. No competition, just
            collaboration.
          </p>
          <div className="flex flex-col gap-4.5 sm:flex-row sm:flex-wrap">
            <Button to="/services">Explore Services</Button>
            <Button to="/book" variant="outline">
              Book Now
            </Button>
          </div>
        </div>
        <div className="relative order-first h-[340px] lg:order-none lg:h-auto">
          <img
            src={assets.entryway}
            alt="The Beaute Co-op entryway and reception in Arlington, VA"
            className="h-full w-full object-cover object-[center_20%] saturate-[1.05]"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--color-ink)_0%,transparent_25%)] lg:bg-[linear-gradient(90deg,var(--color-ink)_0%,transparent_12%)]" />
          <div className="absolute inset-7 left-0 hidden border border-ivory/35 lg:block" />
        </div>
      </section>

      <Marquee items={categories.map((c) => c.marqueeLabel)} />

      {/* The Co-op Difference */}
      <section className="bg-ivory py-22.5 lg:py-37.5">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-[1fr_0.92fr] lg:gap-22.5">
            <Reveal>
              <Eyebrow tone="olive">The Co-op Difference</Eyebrow>
              <h2 className="mb-6.5 text-[34px] sm:text-5xl">
                One Suite.
                <br />
                Every Service.
                <br />
                Zero Competition.
              </h2>
              <p className="text-lg leading-[1.8] font-light">
                Beaute Co-op was built on a simple idea: beauty pros shouldn't have to compete
                with the girl next door, and clients shouldn't have to run all over town for
                their beauty needs. Here, independent artists work side by side, not against
                each other.
              </p>
              <div className="font-serif-italic mt-8.5 border-l border-brass pl-7 text-2xl leading-[1.4] text-ink-soft sm:text-[26px]">
                "When your lash tech points you to the nail room, that's the whole point."
              </div>
            </Reveal>
            <Reveal className="order-first lg:order-none">
              <div className="relative aspect-video p-4.5 lg:aspect-[4/5]">
                <div className="absolute inset-0 bg-ink" />
                <div className="relative h-full w-full overflow-hidden border border-brass-light/40">
                  <img
                    src={assets.entryway}
                    alt="Inside The Beaute Co-op beauty salon"
                    loading="lazy"
                    className="h-full w-full object-cover opacity-82"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,13,10,0.1)_0%,rgba(15,13,10,0.75)_100%)]" />
                  <div className="absolute right-6.5 bottom-6.5 left-6.5 text-ivory">
                    <span className="font-script mb-0.5 block text-4xl text-brass-light">
                      one roof,
                    </span>
                    <span className="font-display text-[26px]">one community of pros</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="services" className="bg-greige py-22.5 lg:py-37.5">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <Reveal className="mb-19 max-w-[640px]">
            <Eyebrow tone="olive">Your Beaute Needs, Handled</Eyebrow>
            <h2 className="mt-6.5 text-[34px] sm:text-5xl">What You'll Find Here</h2>
          </Reveal>

          <Reveal
            as="div"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [&>*:nth-child(n+2)]:border-t [&>*:nth-child(n+2)]:border-hairline lg:[&>*:nth-child(n+2)]:border-t-0 lg:[&>*:nth-child(n+2)]:border-l"
          >
            {categories.map((category) => (
              <div key={category.slug} className="border-t border-hairline pt-9 lg:pl-7.5 lg:first:pl-0">
                <div className="label text-[11px] tracking-[0.2em] text-brass opacity-90">
                  {category.index} — {category.marqueeLabel}
                </div>
                <h3 className="mt-4.5 mb-4 text-[25px]">{category.name}</h3>
                <p className="min-h-19 text-[15.5px] leading-[1.7] font-light text-ink/68">
                  {category.homeDescription}
                </p>
                <Link
                  to={`/artists/${category.artist.artistSlug}`}
                  className="label mt-6.5 inline-flex items-center gap-2 border-b border-transparent pb-0.75 text-[11.5px] tracking-[0.14em] text-olive transition-colors hover:border-brass hover:text-brass"
                >
                  Meet {category.artist.name.split(' ')[0]} →
                </Link>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-14 flex flex-wrap gap-3.5">
            {comingSoon.map((item) => (
              <span
                key={item.slug}
                className="label border border-ink/28 px-5.5 py-2.75 text-[11.5px] tracking-[0.14em] text-ink-soft"
              >
                Coming Soon — {item.name}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Step Inside */}
      <section className="relative flex min-h-[56vh] items-end text-ivory lg:min-h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={assets.entryway}
            alt="Inside The Beaute Co-op beauty salon in Arlington, VA"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--color-ink)_5%,rgba(23,20,16,0.35)_55%,rgba(23,20,16,0.15)_100%)]" />
        </div>
        <Reveal className="relative z-[2] mx-auto max-w-[1240px] px-5 py-20 sm:px-10">
          <Eyebrow>Step Inside</Eyebrow>
          <h2 className="mt-6.5 max-w-[700px] text-[34px] sm:text-5xl lg:text-[58px]">
            A Space Made to
            <br />
            Feel Like You Belong Here.
          </h2>
          <p className="my-5.5 max-w-[480px] text-[17px] font-light text-ivory/82">
            Beaute Co-op isn't a row of doors down a hallway. It's one warm, well-designed
            space built for the whole experience, from the moment you walk in to the moment
            you leave feeling like yourself, only better.
          </p>
          <Button to="/about">See the Space</Button>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="grain bg-ink py-24 text-center text-ivory lg:py-[170px]">
        <Reveal className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <span className="font-script mb-2 block text-4xl text-brass-light">ready to cross</span>
          <h2 className="mx-auto mb-11 max-w-[780px] text-[34px] sm:text-5xl">
            Everything Off Your List?
          </h2>
          <div className="flex flex-col items-stretch justify-center gap-4.5 sm:flex-row">
            <Button to="/book">Book Your Appointment</Button>
            <Button to="/services" variant="outline">
              Explore the Co-op
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
