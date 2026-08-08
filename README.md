# The Beauté Co-op — Marketing Site

React + Vite + Tailwind CSS marketing site for The Beauté Co-op, a salon suite
in Arlington, VA.

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
  components/   Nav, Footer, Layout, Button, ImageSlot, BookingButton, SEO, ...
  data/
    business.js   Single source of truth for business info + per-category
                   artist data (name, bio, logo, Square booking link/embed).
                   Update this file to change contact info, hours, or an
                   artist's booking setup — components read from here.
  pages/        Home, About, Services, BookNow, Join, Contact
```

## Swapping in real content

- **Copy**: page copy is marked `PLACEHOLDER` inline in each page component —
  replace directly, no structural changes needed.
- **Photography**: every image slot uses `<ImageSlot src alt label>`. Pass a
  real `src` once photos are ready; until then it renders a labeled
  placeholder at the correct aspect ratio.
- **Business info**: edit `src/data/business.js` (address, phone, hours,
  socials, map embed URL).
- **Booking**: each artist in `src/data/business.js` has a `booking` object —
  `{ type: 'link', url }` for a Square booking page link, or
  `{ type: 'embed', embedCode }` for an inline Square widget snippet.
- **Domain**: `SITE_URL` placeholders in `src/components/SEO.jsx` and
  `src/components/LocalBusinessSchema.jsx`, plus `public/robots.txt` and
  `public/sitemap.xml`, currently point at `https://www.beautecoop.com` —
  update once the real domain is set.

## SEO notes

- Per-route `<title>`/meta description/canonical/OG tags via `<SEO />`.
- `BeautySalon` JSON-LD structured data rendered site-wide via
  `<LocalBusinessSchema />`, generated from `src/data/business.js`.
- `public/robots.txt` and `public/sitemap.xml` are static — update the
  sitemap if routes change.
- This is a client-rendered SPA. If pages aren't indexing well after launch,
  consider prerendering (e.g. `vite-plugin-prerender` or migrating to
  Astro/Next) so crawlers get fully-rendered HTML without executing JS.
