# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for MSR Sellerie (upholstery/repair services for professionals: medical, auto, sport equipment, plus plastification). French-language content throughout. React + Vite + Tailwind CSS v4, client-side routed with react-router-dom, no backend/API.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run oxlint (config in `.oxlintrc.json`)

There is no test suite configured.

## Architecture

- `src/main.jsx` mounts `App` into `#root`.
- `src/App.jsx` wraps everything in `BrowserRouter` and defines all routes; `Navbar` and `Footer` are rendered once outside `<Routes>` so they're shared across every page.
- `src/pages/` — one file per route (`Accueil`, `SellerieMedicale`, `SellerieAuto`, `SellerieSport`, `Plastification`, `Contact`). Adding a page means adding both a file here and a `<Route>` in `App.jsx`, plus a link entry in `src/components/Navbar.jsx`.
- `src/components/` — shared building blocks reused across pages:
  - `PageHero` — standard eyebrow/title/description header used by every service page (Accueil has its own custom hero instead).
  - `ServiceCard` — title/description card, used in grids of prestations on service pages.
  - `TricolorBar` — thin blue/white/red bar used in the Navbar and Footer.
  - `StitchDivider` — decorative divider (`.stitch` styling).
  - `ClientsCloud` — animated floating grid of client logos read from `public/clients/logoN.png`; sizes/offsets/float timing are driven by parallel arrays indexed by position, not per-logo config.
- Data (prestations lists, etc.) is defined inline as local arrays at the top of each page component — there is no shared content/data layer or CMS.

## Styling

- Tailwind v4 is configured via the `@tailwindcss/vite` plugin (no `tailwind.config.js`); theme tokens are declared directly in `src/index.css` under `@theme`.
- Custom design tokens (use these instead of raw Tailwind colors): `ink`, `ink-light`, `leather`, `leather-light`, `thread`, `bone`, `bone-dim`, `steel`. Fonts: `font-display` (Playfair Display), `font-body` (Work Sans), `font-mono` (IBM Plex Mono).
- Dark theme by default: body background is `ink`, text is `bone`.
- The `animate-float` utility + `--float-x/-y/-duration/-delay` CSS custom properties (defined in `index.css`) drive the floating logo animation in `ClientsCloud`.
