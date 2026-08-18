// Post-build prerender step.
//
// This app is a client-rendered React SPA: every route ships the same
// dist/index.html, with per-page <title>/meta/canonical/OG/JSON-LD only
// injected client-side (via react-helmet-async) after JS runs. Crawlers
// and tools that don't execute JS — most social link-preview scrapers,
// and some search engines — see Home's metadata for every URL.
//
// This script serves the built dist/ output locally, visits each known
// route in a real headless browser, waits for React (and Helmet) to
// finish rendering, and writes the fully-rendered HTML to a matching
// dist/<route>/index.html. Vercel serves a real file at that path
// directly instead of falling back to the SPA rewrite in vercel.json, so
// crawlers get real per-page content without executing JS — while the
// same JS bundle reference stays in that HTML, so the page still
// hydrates into a normal interactive SPA for real visitors.
//
// No framework migration — this only touches the build step.

import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

// Some sandboxed dev environments pin a pre-installed Chromium build at a
// fixed path (see PLAYWRIGHT_BROWSERS_PATH) that can be a different
// revision than the one this project's Playwright version expects. Use it
// only when present; otherwise fall back to Playwright's normal resolution
// (the standard behavior real build environments like Vercel rely on).
const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium'
const launchOptions = existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {}

const PORT = 4321
const BASE_URL = `http://localhost:${PORT}`
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

function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    const tryFetch = async () => {
      try {
        const res = await fetch(url)
        if (res.ok) return resolve()
      } catch {
        // server not ready yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error('vite preview server did not start in time'))
      setTimeout(tryFetch, 200)
    }
    tryFetch()
  })
}

async function main() {
  // Spawn the local vite binary directly (not via npx) so `server.kill()`
  // terminates the actual preview server instead of an npx wrapper process,
  // which can leave the real child running as an orphan.
  const viteBin = path.join(process.cwd(), 'node_modules', '.bin', 'vite')
  const server = spawn(viteBin, ['preview', '--port', String(PORT), '--strictPort'], {
    stdio: 'inherit',
  })

  const cleanup = () => server.kill('SIGTERM')
  process.on('exit', cleanup)

  try {
    await waitForServer(BASE_URL)

    const browser = await chromium.launch(launchOptions)

    // Capture every route's HTML before writing any of it to disk. The
    // preview server's SPA fallback serves dist/index.html for any route
    // that doesn't yet have its own file — if we wrote dist/index.html
    // (route "/") to disk mid-loop, every later route's fallback navigation
    // would load that already-prerendered, metadata-rich HTML instead of
    // the clean vite-built shell, and Helmet would append its tags on top
    // of the static ones already baked in rather than replacing them.
    const results = []
    for (const route of ROUTES) {
      // A fresh context+page per route guarantees no state (Helmet's tag
      // stack included) leaks over from the previous navigation.
      const context = await browser.newContext()
      const page = await context.newPage()

      const url = `${BASE_URL}${route}`
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
      // React/Helmet render synchronously on mount; this is just a safety margin.
      await page.waitForTimeout(150)

      const html = `<!doctype html>\n${await page.content()}`
      results.push({ route, html })

      await context.close()
    }

    await browser.close()

    for (const { route, html } of results) {
      const outDir = route === '/' ? 'dist' : path.join('dist', route.replace(/^\//, ''))
      mkdirSync(outDir, { recursive: true })
      writeFileSync(path.join(outDir, 'index.html'), html)
      console.log(`Prerendered ${route} -> ${path.join(outDir, 'index.html')}`)
    }
  } finally {
    cleanup()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
