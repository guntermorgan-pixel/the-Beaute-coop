import { Helmet } from 'react-helmet-async'
import { business } from '../data/business.js'

const SITE_URL = 'https://www.beautecoop.com' // PLACEHOLDER — replace with real domain once live

const DAY_MAP = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
}

// Best-effort parse of the human-readable hours in business.js into
// schema.org openingHoursSpecification. Ranges like "Tuesday – Friday" are
// expanded; "Closed" / "By appointment" entries are skipped.
function buildOpeningHours() {
  const dayNames = Object.keys(DAY_MAP)

  return business.hours.flatMap(({ days, hours }) => {
    if (/closed/i.test(hours)) return []

    const [open, close] = hours.split(/–|-/).map((s) => s?.trim())
    if (!open || !close) return []

    const to24h = (t) => {
      const match = t.match(/(\d+):(\d+)\s*(AM|PM)/i)
      if (!match) return null
      let [, h, m, meridiem] = match
      h = parseInt(h, 10)
      if (/PM/i.test(meridiem) && h !== 12) h += 12
      if (/AM/i.test(meridiem) && h === 12) h = 0
      return `${String(h).padStart(2, '0')}:${m}`
    }

    const opens = to24h(open)
    const closes = to24h(close)
    if (!opens || !closes) return []

    let dayOfWeek = [days]
    if (days.includes('–') || days.includes('-')) {
      const [start, end] = days.split(/–|-/).map((s) => s.trim())
      const startIdx = dayNames.indexOf(start)
      const endIdx = dayNames.indexOf(end)
      if (startIdx !== -1 && endIdx !== -1) {
        dayOfWeek = dayNames.slice(startIdx, endIdx + 1)
      }
    }

    return [{ '@type': 'OpeningHoursSpecification', dayOfWeek, opens, closes }]
  })
}

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${SITE_URL}/#business`,
    name: business.name,
    url: SITE_URL,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: buildOpeningHours(),
    sameAs: Object.values(business.social),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
