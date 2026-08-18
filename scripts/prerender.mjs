// Post-build prerender step.
//
// This app is a client-rendered React SPA: every route ships the same
// dist/index.html, with per-page <title>/meta/canonical/OG/JSON-LD only
// injected client-side (via react-helmet-async) after JS runs. Crawlers
// and tools that don't execute JS — most social link-preview scrapers,
// and some search engines — see Home's metadata for every URL.
//
// This script renders each known route to an HTML string with
// react-dom/server (via the SSR bundle built from src/entry-server.jsx —
// see the "build" script in package.json) and writes the result to a
// matching dist/<route>/index.html. Vercel serves a real file at that
// path directly instead of falling back to the SPA rewrite in
// vercel.json, so crawlers get real per-page content without executing
// JS — while the same JS bundle reference stays in that HTML, so the
// page still becomes a normal interactive SPA for real visitors once it
// loads (src/main.jsx does a plain client render into #root, so it just
// replaces this static markup rather than hydrating it).
//
// Deliberately no headless browser here: an earlier version of this
// script used Playwright, which needs its own Chromium binary. That
// broke the Vercel production build, because Vercel installs with
// NODE_ENV=production, which skips devDependencies entirely — Playwright
// was never even installed. Rendering with react-dom/server avoids that
// whole class of problem: no browser binary, no missing shared
// libraries, no separate download step, just the same React/Router/Helmet
// stack the app already depends on.
//
// No framework migration — this only touches the build step.

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'
import path from 'node:path'

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/book',
  '/join',
  '/contact',
  '/artists/autumn',
  '/artists/morgan',
  '/artists/simone',
  '/artists/anna',
]

function findSsrEntry() {
  const dir = path.resolve('dist-ssr')
  const file = readdirSync(dir).find((f) => f.endsWith('.js'))
  if (!file) throw new Error(`No SSR bundle found in ${dir} — did the SSR build run?`)
  return path.join(dir, file)
}

async function main() {
  const { render } = await import(path.resolve(findSsrEntry()))

  const template = readFileSync(path.resolve('dist/index.html'), 'utf-8')

  // Strip the static fallback <title>/<meta name="description"> — every
  // route below supplies its own via react-helmet-async's static output.
  const baseTemplate = template
    .replace(/<title>.*?<\/title>\s*/s, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/s, '')

  if (!baseTemplate.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in dist/index.html to inject into')
  }

  for (const route of ROUTES) {
    const { head, body } = render(route)

    const outHtml = baseTemplate
      .replace('</head>', `${head}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

    const outDir = route === '/' ? 'dist' : path.join('dist', route.replace(/^\//, ''))
    mkdirSync(outDir, { recursive: true })
    writeFileSync(path.join(outDir, 'index.html'), outHtml)
    console.log(`Prerendered ${route} -> ${path.join(outDir, 'index.html')}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
