import SEO from '../components/SEO.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import InstagramIcon from '../components/InstagramIcon.jsx'
import { categories, comingSoon } from '../data/business.js'

function ServiceRow({ category, flip }) {
  const { artist } = category

  return (
    <Reveal
      as="div"
      id={category.slug}
      className={`scroll-mt-24 grid grid-cols-1 items-center gap-11 border-t border-hairline py-17.5 first:border-t-0 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-25 ${
        flip ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
      }`}
    >
      <div>
        <span className="label mb-5 block text-xs tracking-[0.22em] text-brass">
          {category.index} — {category.name}
        </span>
        <h2 className="mb-5.5 text-[32px] sm:text-5xl">{category.name}</h2>
        <p className="mb-3.5 max-w-[520px] text-lg leading-[1.8] font-light text-ink/78">
          {category.description}
        </p>
        <span className="label my-6.5 block text-xs tracking-[0.12em] text-ink/45">
          {category.priceNote}
        </span>
        <Button href={category.booking.url}>Book {category.shortName}</Button>
      </div>

      <div className="relative border border-hairline bg-ivory p-11 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-brass">
        <div className="mb-5.5 h-19 w-19 overflow-hidden rounded-full outline outline-brass outline-offset-[5px]">
          <img
            src={artist.photo}
            alt={`${artist.name} of ${artist.businessName}, ${category.name.toLowerCase()} specialist at The Beaute Co-op in Arlington, VA`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="font-display text-[21px]">{artist.name}</div>
        <div className="font-serif-italic mb-4 text-[15px] text-brass">{artist.businessName}</div>
        <p className="mb-6 text-[14.5px] leading-[1.7] font-light text-ink/65">{artist.bio}</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href={artist.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${artist.name} on Instagram`}
            className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors hover:border-brass hover:text-brass"
          >
            <InstagramIcon />
          </a>
          {artist.website && (
            <a
              href={artist.website}
              target="_blank"
              rel="noopener noreferrer"
              className="label border-b border-transparent text-[11.5px] tracking-[0.1em] text-olive transition-colors hover:border-brass hover:text-brass"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Services() {
  return (
    <>
      <SEO
        title="Nails, Lash Extensions, Brow Design & Skincare | The Beaute Co-op, Arlington VA"
        description="Explore nail artistry, lash extensions, brow design, and medical-grade skincare at The Beaute Co-op in Arlington, VA — meet each independent specialist and book directly."
        path="/services"
      />

      <section className="bg-ivory px-5 pt-35 pb-15 sm:px-10 lg:pt-42.5 lg:pb-22.5">
        <Reveal className="mx-auto max-w-[1240px]">
          <Eyebrow tone="olive">Our Beaute Menu</Eyebrow>
          <h1 className="mt-5 text-[42px] sm:text-6xl lg:text-[76px]">
            Every Service.
            <br />
            One Address.
          </h1>
          <p className="mt-5 max-w-[560px] text-lg leading-[1.75] font-light text-ink/72">
            Browse what's available inside Beaute Co-op. Each service is handled by a
            specialist artist, meet them below and book directly.
          </p>
        </Reveal>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
          {categories.map((category, i) => (
            <ServiceRow key={category.slug} category={category} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="grain bg-ink py-18 text-center text-ivory lg:py-27.5">
        <Reveal className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <Eyebrow center>Growing The Co-op</Eyebrow>
          <h2 className="mt-6.5 mb-5 text-[34px] sm:text-5xl">More On The Way</h2>
          <p className="mx-auto mb-10 max-w-[480px] text-base font-light text-ivory/72">
            We're growing the Co-op to include additional service providers, and beyond, so
            that no matter what "beaute" means to you, it's waiting for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            {comingSoon.map((item) => (
              <span
                key={item.slug}
                className="label border border-ivory/28 px-5.5 py-2.75 text-[11.5px] tracking-[0.14em] text-ivory/85"
              >
                Coming Soon — {item.name}
              </span>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center gap-5.5 border-t border-ivory/16 pt-11">
            <p className="max-w-[360px] text-sm font-light text-ivory/68">
              Know someone who'd be a great fit for the space? Send them our way.
            </p>
            <Button to="/join">Join the Beaute Co-op</Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
