import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.beautecoop.com' // PLACEHOLDER — replace with real domain once live

export default function SEO({ title, description, path = '/', image }) {
  const url = `${SITE_URL}${path}`
  const ogImage = image ?? `${SITE_URL}/og-image.jpg`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="The Beauté Co-op" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
