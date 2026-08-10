import { Link, Navigate, useParams } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import LinkButton from '../components/LinkButton.jsx'
import Reveal from '../components/Reveal.jsx'
import InstagramIcon from '../components/InstagramIcon.jsx'
import { categories } from '../data/business.js'

export default function ArtistPage() {
  const { artistSlug } = useParams()
  const category = categories.find((c) => c.artist.artistSlug === artistSlug)

  if (!category) return <Navigate to="/services" replace />

  const { artist } = category
  const firstName = artist.name.split(' ')[0]
  const chips = category.priceNote.split(' · ')

  return (
    <>
      <SEO
        title={`Meet ${artist.name} — ${artist.businessName} | The Beaute Co-op, Arlington VA`}
        description={`${artist.heroSub} Book directly with ${firstName} at The Beaute Co-op in Arlington, VA.`}
        path={`/artists/${artist.artistSlug}`}
      />

      {/* Hero */}
      <section className="grain grid min-h-[60vh] grid-cols-1 overflow-hidden bg-ink text-ivory lg:min-h-[78vh] lg:grid-cols-2">
        <div className="relative z-[2] flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-10 lg:py-17.5 lg:pl-10 lg:pr-15">
          <Link
            to={`/services#${category.slug}`}
            className="mb-7.5 w-fit border-b border-transparent font-body text-[11.5px] font-medium tracking-[0.16em] text-ivory/55 uppercase transition-colors hover:border-brass-light hover:text-brass-light"
          >
            ← Back to Services
          </Link>
          <span className="label mb-4.5 block text-[11.5px] tracking-[0.2em] text-ivory/50">
            {category.name}
          </span>
          <h1 className="mb-2 text-[42px] sm:text-6xl lg:text-[72px]">{artist.name}</h1>
          <div className="font-serif-italic mb-2.5 text-xl text-brass-light">{artist.businessName}</div>
          {artist.specialtyTag && (
            <p className="mb-6.5 text-[15px] font-light text-ivory/65">{artist.specialtyTag}</p>
          )}
          <p className="mt-7.5 mb-11 max-w-[440px] text-lg leading-[1.7] font-light text-ivory/78">
            {artist.heroSub}
          </p>
          <div className="flex flex-col gap-4.5 sm:flex-row sm:flex-wrap">
            <Button href={category.booking.url}>Book With {firstName}</Button>
          </div>
          <div className="mt-4.5 flex flex-wrap gap-3">
            <LinkButton
              href={artist.instagram}
              tone="light"
              icon={<InstagramIcon className="h-3.75 w-3.75" />}
            >
              Instagram
            </LinkButton>
            {artist.website && (
              <LinkButton href={artist.website} tone="light">
                Website
              </LinkButton>
            )}
          </div>
        </div>
        <div className="relative order-first h-[340px] lg:order-none lg:h-auto">
          <img
            src={artist.photo}
            alt={`${artist.name}, ${artist.businessName}`}
            className="h-full w-full object-cover object-[center_20%] saturate-[1.05]"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--color-ink)_0%,transparent_22%)] lg:bg-[linear-gradient(90deg,var(--color-ink)_0%,transparent_14%)]" />
          <div className="absolute inset-7 left-0 hidden border border-ivory/30 lg:block" />
        </div>
      </section>

      {/* Bio */}
      <section className="bg-ivory py-15 lg:py-25">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <Reveal className="max-w-[760px]">
            <Eyebrow tone="olive">Meet {firstName}</Eyebrow>
            <div className="mt-9 mb-9 max-h-27.5 border-b border-hairline pb-7.5">
              <img
                src={artist.logo}
                alt={`${artist.businessName} logo`}
                loading="lazy"
                className="max-h-25 max-w-70 object-contain"
              />
            </div>
            <p className="font-serif-italic mb-6.5 text-[22px] leading-[1.55] text-ink-soft sm:text-[28px]">
              {artist.bioLead}
            </p>
            <div>
              {artist.bioBody.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mb-4.5 text-[17px] leading-[1.8] font-light text-ink/75">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-7.5 flex flex-wrap gap-3.5">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="label border border-hairline px-5.5 py-3 text-xs tracking-[0.1em] text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="grain bg-ink py-24 text-center text-ivory lg:py-35">
        <Reveal className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <span className="font-script mb-1.5 block text-[34px] text-brass-light">ready when you are</span>
          <h2 className="mx-auto mb-9 max-w-[700px] text-[34px] sm:text-5xl">
            Book Your {category.ctaLabel} Appointment With {firstName}
          </h2>
          <Button href={category.booking.url}>Book With {firstName}</Button>
        </Reveal>
      </section>
    </>
  )
}
