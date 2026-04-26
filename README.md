# Taza Life Cleaning — Landing Page

Production-ready Next.js 14 landing page for **Taza Life Cleaning**, a professional
cleaning company based in Astana, Kazakhstan. Bilingual (Russian / Kazakh),
SEO-optimized, mobile-first.

## Tech stack

- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- next-intl (RU / KZ)
- Static Site Generation via `generateStaticParams`
- next-sitemap (sitemap.xml + robots.txt)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/ru`.

Available locales:

- `/ru` — Russian (default)
- `/kz` — Kazakh

## Build & start

```bash
npm run build   # also runs next-sitemap as postbuild
npm start
```

## Project structure

```
/app
  /[locale]
    layout.tsx        SEO metadata per locale + html lang attribute
    page.tsx          composes all sections
  globals.css         Tailwind base layers + custom utilities
/components
  Navbar.tsx          server component, sticky
  MobileMenu.tsx      client (hamburger menu)
  Hero.tsx            H1, CTAs, JSON-LD LocalBusiness
  Services.tsx        4 service cards
  WhyUs.tsx           3-col features on brand-blue
  HowItWorks.tsx      3-step timeline
  Reviews.tsx         3 hardcoded reviews (TODO: real)
  ContactCTA.tsx      tel / WhatsApp / Instagram
  Footer.tsx          logo, links, SEO footer
  LanguageSwitcher.tsx  RU | ҚЗ toggle (client)
  FloatingContacts.tsx  fixed mobile bottom bar (client)
/messages
  ru.json             Russian translations
  kz.json             Kazakh translations
i18n.ts               next-intl runtime config
middleware.ts         locale detection / redirect
next-sitemap.config.js
tailwind.config.ts    brand colors (brand-blue, brand-green, brand-sky)
```

## Brand colors

| Token         | Hex       | Tailwind            |
| ------------- | --------- | ------------------- |
| Primary blue  | `#3a6aad` | `brand-blue`        |
| Primary green | `#5a8f3c` | `brand-green`       |
| Sky blue      | `#7ab8d9` | `brand-sky`         |
| Light BG      | `#f7f9fc` | `bg-light`          |

## Replacing placeholders

- **Logo**: drop `logo.png` (or update references to your file) into `/public/`.
  A placeholder `logo.svg` ships with the project — replace it with the real asset.
- **Phone number**: edit `common.phone`, `common.phoneDisplay`, and `common.whatsapp`
  in `messages/ru.json` and `messages/kz.json` (both use `+7XXXXXXXXXX` format).
- **Instagram handle**: edit `common.instagram` in both `messages/*.json`.
- **OG image**: add `/public/og-image.jpg` (1200×630).
- **Reviews**: search `// TODO: replace with real reviews` in `components/Reviews.tsx`.

## SEO

- `generateMetadata` in `app/[locale]/layout.tsx` produces locale-specific title,
  description, canonical, hreflang alternates, and Open Graph / Twitter tags.
- `Hero.tsx` injects JSON-LD structured data (`@type: CleaningService`, Astana, KZ).
- `H2` in `ContactCTA` includes the city name for local SEO.
- Footer repeats the keyword phrase for SEO reinforcement.
- `next-sitemap` produces `/sitemap.xml` and `/robots.txt` covering both `/ru` and `/kz`.

## Deployment (Render)

Deploy as a **Node.js Web Service** (not static):

- Build command: `npm run build`
- Start command: `npm start`
- The `postbuild` script automatically runs `next-sitemap`.

Set `SITE_URL` if your production URL differs from `https://tazalife.kz`.
