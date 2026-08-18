import { Helmet } from 'react-helmet-async'
import { business } from '../data/business.js'

const SITE_URL = 'https://www.thebeautecoop.com'

/**
 * Person structured data for an individual artist page, linked to the
 * BeautySalon via worksFor so search engines understand the relationship
 * between the specialist and The Beaute Co-op.
 */
export default function ArtistPersonSchema({ category }) {
  const { artist } = category

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/artists/${artist.artistSlug}#person`,
    name: artist.name,
    jobTitle: artist.specialtyTag ?? category.name,
    description: artist.heroSub,
    image: `${SITE_URL}${artist.photo}`,
    url: `${SITE_URL}/artists/${artist.artistSlug}`,
    worksFor: {
      '@type': 'BeautySalon',
      '@id': `${SITE_URL}/#business`,
      name: business.name,
    },
    sameAs: [artist.instagram, artist.website].filter(Boolean),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
