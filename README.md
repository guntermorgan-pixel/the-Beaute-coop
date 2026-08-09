# The Beaute Co-op — Marketing Site

React + Vite + Tailwind CSS marketing site for The Beaute Co-op, a salon suite
in Arlington, VA. Built to match the approved design mockups exactly.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router (client-side routing across 6 pages)
- react-helmet-async (per-route `<title>`/meta tags + JSON-LD)

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/   Nav, Footer, Layout, Button, Eyebrow, Reveal, Marquee,
                InstagramIcon, SEO, LocalBusinessSchema
  data/
    business.js   Single source of truth for business info + per-category
                   artist data (name, bio, Square booking link). Update this
                   file to change contact info, hours, or a booking link —
                   every component reads from here.
  pages/        Home, About, Services, BookNow, Join, Contact
public/
  images/       Real photography (logo, entryway, artist headshots)
```

## Editing content

- **Copy**: written directly into each page component, matching the approved
  mockups. Edit the JSX to change wording.
- **Photography**: `public/images/` holds the logo, entryway photo, and
  artist headshots (extracted from the design mockups). Swap files in place
  to update photography — filenames are referenced from `assets` and each
  artist's `photo` field in `src/data/business.js`.
- **Business info**: edit `src/data/business.js` (address, email, text
  number, hours, Instagram, map embed URL).
- **Booking**: each artist's `booking.url` in `src/data/business.js` points
  at their Square booking page (opens in a new tab). If an artist later
  provides an embeddable Square widget instead, that's a straightforward
  swap in `Button`/the relevant page — no other changes needed.
- **Artist bios**: currently short placeholder-style bios pulled from the
  design mockups — flagged as not-yet-final in the source copy doc, so
  double check these with each artist before launch.
- **Domain**: `SITE_URL` placeholders in `src/components/SEO.jsx` and
  `src/components/LocalBusinessSchema.jsx`, plus `public/robots.txt` and
  `public/sitemap.xml`, currently point at `https://www.thebeautecoop.com` —
  update once the real domain is confirmed, and keep it consistent with the
  Google Business Profile.

## Design system

- **Colors**: ink `#0f0d0a`, ink-soft `#221f19`, greige `#c9beab`,
  greige-deep `#b7a992`, ivory `#f6f2ea`, olive `#4f5738`,
  olive-light `#7c8459`, brass `#a67c4d`, brass-light `#dcc6a0` — all
  defined as Tailwind theme tokens in `src/index.css`.
- **Type**: Anton (headlines), Fraunces italic (pull-quotes/accent copy),
  Beau Rivage (script flourishes), Jost (body + UI labels).
- **Motifs**: `.grain` (SVG turbulence noise overlay on dark sections),
  `<Reveal>` (fade-up-on-scroll, respects `prefers-reduced-motion`),
  `<Marquee>` (infinite service ticker on Home).

## SEO notes

- Per-route `<title>`/meta description/canonical/OG tags via `<SEO />`.
- `BeautySalon` JSON-LD structured data rendered site-wide via
  `<LocalBusinessSchema />`, generated from `src/data/business.js`.
- `public/robots.txt` and `public/sitemap.xml` are static — update the
  sitemap if routes change.
- This is a client-rendered SPA. If pages aren't indexing well after launch,
  consider prerendering (e.g. `vite-plugin-prerender` or migrating to
  Astro/Next) so crawlers get fully-rendered HTML without executing JS.
