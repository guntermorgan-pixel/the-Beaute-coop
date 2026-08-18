import { Helmet } from 'react-helmet-async'
import { business } from '../data/business.js'

const SITE_URL = 'https://www.thebeautecoop.com'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${SITE_URL}/#business`,
    name: business.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/entryway.jpg`,
    telephone: business.textPhone,
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
    description: `${business.name} is a beauty salon in ${business.address.city}, ${business.address.state} offering nail artistry, lash extensions, brow design, and medical-grade skin care from independent specialists. ${business.hours}.`,
    sameAs: Object.values(business.social),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
