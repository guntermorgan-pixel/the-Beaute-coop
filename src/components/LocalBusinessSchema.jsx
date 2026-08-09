import { Helmet } from 'react-helmet-async'
import { business } from '../data/business.js'

const SITE_URL = 'https://www.thebeautecoop.com' // PLACEHOLDER — replace with real domain once live

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${SITE_URL}/#business`,
    name: business.name,
    url: SITE_URL,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    // "By appointment only" doesn't map to a structured opening-hours range,
    // so it's surfaced as a plain description rather than openingHoursSpecification.
    description: `${business.name} — a salon suite in ${business.address.city}, ${business.address.state} housing independent nail, lash extension, brow design, and medical-grade skincare specialists. ${business.hours}.`,
    sameAs: Object.values(business.social),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
