// Build-time SSR entry used only by scripts/prerender.mjs.
//
// Renders each route to an HTML string with react-dom/server (no browser
// involved) so scripts/prerender.mjs can splice real per-route content and
// <head> tags into the built dist/index.html. This never runs in a real
// request — real visitors always get the client bundle from src/main.jsx.
//
// react-helmet-async's own static-context extraction API
// (HelmetProvider's `context` prop + reading `context.helmet` back after
// render) relies on class lifecycle methods that renderToString never
// calls, so it doesn't populate on React 19. Instead this renders a real
// <html><head></head><body>...</body></html> around the app: react-helmet-
// async detects React 19 and renders each <title>/<meta>/<link>/<script>
// as a real element in the tree, and React 19 natively hoists those into
// <head> during server rendering, regardless of how deep in the tree
// (inside Layout/page/SEO components) they were rendered from. The result
// is a real, empty-looking <head> that fills up with exactly the tags
// each route's <SEO>/<LocalBusinessSchema>/<ArtistPersonSchema>
// components rendered — no library-internal API required.

import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export function render(url) {
  const doc = renderToString(
    <HelmetProvider>
      <html lang="en">
        <head></head>
        <body>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </body>
      </html>
    </HelmetProvider>,
  )

  const head = doc.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? ''
  const body = doc.match(/<body>([\s\S]*?)<\/body>/)?.[1] ?? ''

  return { head, body }
}
