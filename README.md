# #jointhegrid

Digital workplace solutions website and AI Credits client portal for **Global Resilient Infrastructure & Digitalisation Ltd.**

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Recharts (portal usage charts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:43123](http://localhost:43123) (or the port configured in `package.json`).

## Project Structure

```
app/
  (marketing)/     Public website pages
  portal/          AI Credits client portal
components/
  brand/           GRID logo, wordmark, visuals
  marketing/       Site header, footer, sections
  portal/          Portal shell, charts, tables
  ui/              Shared UI primitives
data/
  mock-portal-data.ts   Demo portal data (replace with API)
lib/
  pricing.ts       Credit pricing placeholders
public/brand/      Logo SVG assets
```

## Brand Assets

Logo SVGs live in `/public/brand/`. Replace with final exported assets from the design team when available. See `/public/brand/README.md`.

## Portal

The client portal at `/portal` uses mock data from `data/mock-portal-data.ts`. Authentication and payment are frontend placeholders ready for backend integration.

Portal pages are configured with `noindex, nofollow`.

## Build

```bash
npm run build
npm start
```
