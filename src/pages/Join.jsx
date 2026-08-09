import SEO from '../components/SEO.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { business } from '../data/business.js'

const WHY = [
  {
    index: '01',
    title: 'Built-in referral network',
    body: 'Every artist in the space is a different specialty, which means clients get referred to you, not away from you.',
  },
  {
    index: '02',
    title: 'Shared clientele, not shared competition',
    body: 'Nails, lash extensions, brow design, skin care: one client, multiple appointments, more revenue for everyone.',
  },
  {
    index: '03',
    title: 'A real community',
    body: "You're still your own boss, running your own business, but you're not doing it alone.",
  },
  {
    index: '04',
    title: 'A space designed for beauty',
    body: 'WiFi, weekly cleaning, and utilities are all included, so you can focus on your clients, not the upkeep. Enjoy natural light throughout the space, on-site parking, and a beautifully styled shared reception area that makes every client\'s first impression a great one.',
  },
  {
    index: '05',
    title: 'A brand that draws clients in',
    body: 'The Beaute Co-op markets the space as a destination, which means more visibility for every artist inside it.',
  },
]

const STEPS = [
  { index: '01', title: 'Reach Out', body: 'Tell us about your business and specialty.' },
  {
    index: '02',
    title: 'Tour the Space',
    body: 'See the suite, meet the current artists, get a feel for the vibe.',
  },
  {
    index: '03',
    title: 'Move In',
    body: 'Start building your business inside a community that actually has your back.',
  },
]

function ContactAlt({ tone = 'light' }) {
  return (
    <p className={`relative z-[2] mt-5 font-body text-sm font-light ${tone === 'light' ? 'text-ivory/65' : 'text-ink/55'}`}>
      or text{' '}
      <a
        href={business.textPhoneHref}
        className={`border-b ${tone === 'light' ? 'border-ivory/40' : 'border-ink/30'}`}
      >
        {business.textPhone}
      </a>
    </p>
  )
}

export default function Join() {
  return (
    <>
      <SEO
        title="Join The Beaute Co-op | Salon Suites for Beauty Professionals in Arlington, VA"
        description="Rent a salon suite at The Beaute Co-op in Arlington, VA — a competition-free space for independent beauty professionals to grow their business alongside cross-referring specialists."
        path="/join"
      />

      <section className="grain relative bg-ink px-5 pt-35 pb-14 text-center text-ivory sm:px-10 lg:pt-42.5 lg:pb-27.5">
        <Reveal className="relative z-[2] mx-auto max-w-[1160px]">
          <Eyebrow center>For Beauty Professionals</Eyebrow>
          <h1 className="mt-5.5 text-[40px] sm:text-6xl lg:text-[74px]">
            Grow Your Business.
            <br />
            Not Your Competition.
          </h1>
          <p className="mx-auto mt-5.5 mb-10 max-w-[560px] text-lg leading-[1.75] font-light text-ivory/78">
            Beaute Co-op is a suite space for beauty professionals who are done competing with
            the artist next door, and ready to build something bigger, together.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-4.5 sm:flex-row">
            <Button href={business.inquiryEmailHref}>Inquire About a Suite</Button>
          </div>
          <ContactAlt />
        </Reveal>
      </section>

      <section className="bg-ivory py-15 lg:py-25">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <Reveal className="mb-19 max-w-[640px]">
            <Eyebrow tone="olive">This Isn't a Traditional Suite</Eyebrow>
            <h2 className="mt-6.5 text-[34px] sm:text-5xl">Why Beaute Co-op</h2>
            <p className="mt-6 text-lg leading-[1.7] font-light">
              You've done the traditional suite thing, or you've heard about it. Everyone's
              independent, everyone's isolated, and somehow you're still competing with the
              person renting the room right next to yours. Beaute Co-op works differently.
            </p>
          </Reveal>

          <Reveal className="flex flex-col">
            {WHY.map((item) => (
              <div
                key={item.index}
                className="grid grid-cols-1 items-start gap-3 border-t border-hairline py-9 sm:grid-cols-[120px_1fr] sm:gap-9"
              >
                <span className="font-display text-[34px] text-brass opacity-70">
                  {item.index}
                </span>
                <div>
                  <h3 className="font-body mb-2.5 text-xl font-medium normal-case">
                    {item.title}
                  </h3>
                  <p className="max-w-[560px] text-[16.5px] leading-[1.7] font-light text-ink/72">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-greige py-22.5 lg:py-37.5">
        <Reveal className="mx-auto max-w-[1240px] px-5 sm:px-10">
          <Eyebrow tone="olive">Currently Seeking</Eyebrow>
          <h2 className="mt-2 mb-2 text-[30px] sm:text-[44px]">Who We're Looking For</h2>
          <div className="my-9 flex flex-wrap gap-4">
            <span className="label border border-brass bg-brass/8 px-6.5 py-3.5 text-[13px] tracking-[0.1em] text-ink">
              Waxing Specialists
            </span>
            <span className="label border border-brass bg-brass/8 px-6.5 py-3.5 text-[13px] tracking-[0.1em] text-ink">
              Massage Therapists
            </span>
          </div>
          <p className="max-w-[480px] text-[15.5px] font-light text-ink/65">
            Not one of these but think you'd be a great fit? We'd still love to hear from you.
          </p>
          <div className="mt-6.5">
            <Button href={business.inquiryEmailHref} variant="dark">
              Reach Out
            </Button>
          </div>
          <ContactAlt tone="dark" />
        </Reveal>
      </section>

      <section className="grain bg-ink py-22.5 text-ivory">
        <Reveal className="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-10">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-2 text-[30px] sm:text-[46px]">Joining the Co-op</h2>
          <div className="mt-12.5 grid grid-cols-1 gap-8.5 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.index}>
                <span className="font-display text-[44px] text-brass-light">{step.index}</span>
                <h3 className="font-body mt-3.5 mb-2.5 text-[19px] font-medium normal-case">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.65] font-light text-ivory/72">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-stretch gap-4.5 sm:flex-row">
            <Button href={business.inquiryEmailHref}>Inquire About a Suite</Button>
          </div>
          <ContactAlt />
        </Reveal>
      </section>
    </>
  )
}
