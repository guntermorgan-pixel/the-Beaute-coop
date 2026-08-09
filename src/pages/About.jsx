import SEO from '../components/SEO.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { assets } from '../data/business.js'

const PRINCIPLES = [
  {
    index: '01',
    lead: "Different specialties aren't competition,",
    rest: "they're collaboration.",
  },
  {
    index: '02',
    lead: 'A rising tide lifts every chair.',
    rest: 'When one artist thrives, referrals flow to everyone.',
  },
  {
    index: '03',
    lead: 'Clients deserve a one-stop shop,',
    rest: 'not five different appointments across town.',
  },
  {
    index: '04',
    lead: "Independent doesn't have to mean isolated.",
    rest: '',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us | The Beaute Co-op, Arlington VA"
        description="Meet the founder behind The Beaute Co-op and learn why this Arlington, VA salon suite was built as a competition-free space for independent beauty professionals."
        path="/about"
      />

      {/* Hero */}
      <section className="bg-ivory px-5 pt-35 pb-15 text-center sm:px-10 lg:pt-42.5 lg:pb-22.5">
        <Reveal className="mx-auto max-w-[1160px]">
          <Eyebrow center>Our Story</Eyebrow>
          <h1 className="mt-5.5 text-[42px] sm:text-6xl lg:text-[80px]">
            Beauty Is Better
            <br />
            Shared.
          </h1>
          <p className="mx-auto mt-5.5 max-w-[560px] text-lg leading-[1.75] font-light text-ink/70">
            The story behind Beaute Co-op, and why we're rewriting what it means to work (and
            get glammed) in a salon suite.
          </p>
        </Reveal>
      </section>

      {/* Founder note */}
      <section className="bg-ivory py-15 lg:py-25">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <Reveal className="grid grid-cols-1 items-center gap-8.5 text-center lg:grid-cols-[0.55fr_1fr] lg:gap-17.5 lg:text-left">
            <div className="mx-auto h-40 w-40 overflow-hidden rounded-full outline outline-brass outline-offset-[10px] lg:h-50 lg:w-50">
              <img
                src={assets.morganHeadshot}
                alt="Morgan Gunter, Founder of The Beaute Co-op"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <Eyebrow tone="olive" center className="justify-center lg:justify-start">
                A Note From Our Founder
              </Eyebrow>
              <div className="font-serif-italic mt-6 text-[22px] leading-[1.5] text-ink-soft sm:text-[30px]">
                <p className="mb-5.5">
                  I've been in this industry for years, and I kept running into the same
                  problem: talented beauty professionals stuck in traditional suites, competing
                  with the person next door for the exact same clients, even when we weren't
                  offering anything close to the same service.
                </p>
                <p className="mb-5.5">
                  I wanted something different. A space where we actually work together instead
                  of around each other, where a nail artist and a lash tech and a brow
                  specialist all send clients to each other instead of guarding them. That's why
                  I built Beaute Co-op.
                </p>
                <p>This isn't just a business to me. It's the space I wished existed when I was starting out.</p>
              </div>
              <div className="mt-7 flex items-baseline justify-center gap-3.5 lg:justify-start">
                <span className="font-script text-[32px] text-brass">Morgan</span>
                <span className="font-body text-sm text-ink/55">
                  Morgan Gunter, Founder, The Beaute Co-op
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-ivory py-15 lg:py-25">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <Reveal className="grid grid-cols-1 items-center gap-11 lg:grid-cols-[1.05fr_0.95fr] lg:gap-22.5">
            <div>
              <Eyebrow tone="olive">What That Looks Like</Eyebrow>
              <p className="mt-6.5 mb-5.5 text-[19px] leading-[1.85] font-light text-ink/82">
                Beaute Co-op is a <strong className="font-medium text-ink">competition-free space</strong>, a
                home base for beauty pros across every specialty to grow their business{' '}
                <em>with</em> a community instead of in spite of one. Nails, lash extensions,
                brow design, skin care, and soon additional service providers, all under one
                roof, all rooting for each other.
              </p>
              <p className="text-[19px] leading-[1.85] font-light text-ink/82">
                Your lash client probably needs her nails done too. When artists collaborate
                instead of compete, everybody wins.
              </p>
            </div>
            <div className="order-first aspect-video p-4 lg:order-none lg:aspect-[4/5]">
              <div className="relative h-full w-full overflow-hidden border border-brass-light/40">
                <img
                  src={assets.entryway}
                  alt="Inside The Beaute Co-op salon suite"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-greige py-22.5 lg:py-37.5">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <Reveal className="mb-19 max-w-[640px]">
            <Eyebrow tone="olive">Our Philosophy</Eyebrow>
            <h2 className="mt-6.5 text-[34px] sm:text-5xl">
              No Competition.
              <br />
              Just Co-op.
            </h2>
          </Reveal>

          <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div
                key={p.index}
                className="border-t border-hairline pt-9 sm:nth-[2n]:border-l sm:nth-[2n]:border-hairline sm:nth-[2n]:pl-6 lg:border-l lg:border-hairline lg:pl-7.5 lg:first:border-l-0! lg:first:pl-0!"
              >
                <span className="label text-[11px] tracking-[0.2em] text-brass">{p.index}</span>
                <p className="mt-4.5 text-base leading-[1.65] font-light text-ink/75">
                  <strong className="font-medium text-ink">{p.lead}</strong> {p.rest}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="grain bg-ink py-24 text-center text-ivory lg:py-37.5">
        <Reveal className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <span className="font-script mb-1.5 block text-[34px] text-brass-light">
            where we're headed
          </span>
          <h2 className="mx-auto mb-6.5 max-w-[760px] text-[34px] sm:text-5xl">
            The Wishlist Keeps Growing
          </h2>
          <p className="mx-auto mb-4.5 max-w-[600px] text-[17px] font-light text-ivory/78">
            What started with nails, lash extensions, brow design, and medical-grade skin care
            is just the beginning. We're growing the Co-op to include additional service
            providers, and beyond, so that no matter what "beaute" means to you, it's waiting
            for you here.
          </p>
          <p className="mb-9 text-sm text-ivory/60">
            Know someone who'd be a great fit for the space? Send them our way.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-4.5 sm:flex-row">
            <Button to="/services">Explore Services</Button>
            <Button to="/join" variant="outline">
              Join the Beaute Co-op
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
