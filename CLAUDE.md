# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

One-page, scroll-driven portfolio for JP (Media Buyer & Software Developer, GitHub/username "Aegeiseun") — dark neon-HUD / retro-pixel-cartridge design direction. Static, no backend/database/auth. Deployed on Vercel, connected to GitHub for auto-deploy on push to `main`.

## Commands

```bash
npm install
npm run dev     # dev server, localhost:3000
npm run build   # production build (also what Vercel runs)
npm run lint    # eslint
npx tsc --noEmit  # typecheck (no separate script defined)
```

No test suite is configured.

## Architecture

- **Next.js 16 (App Router) + TypeScript + Tailwind v4.** Tailwind v4 uses CSS-based config — there is no `tailwind.config.js`; theme tokens live in `src/app/globals.css` under `:root` and `@theme inline`. `next.config.ts` is currently empty/default.
- **One page, assembled from sections.** `src/app/page.tsx` renders `<Nav />` followed by the section components in `src/components/sections/` (Hero, About, Skills, Projects, Experience, Testimonials, Contact) in that fixed order. Adding/reordering sections means editing both the section component and `src/lib/content.ts`'s `navItems`.
- **All copy lives in `src/lib/content.ts`.** Hero text, bio, skill groups, projects, experience, testimonials, and contact info (email/LinkedIn) are centralized there, most of it still marked `PLACEHOLDER`. Swap content there, not in the components.
- **Nav scroll-spy.** `src/components/Nav.tsx` is a client component using `IntersectionObserver` to track which section is in view and highlight the matching nav link; it also handles the mobile hamburger menu. Hero is intentionally excluded from `navItems` (not nav-linked per the brief) — the observer's initial `activeId` is `""` on purpose so nothing is highlighted while the user is still on the Hero.
- **Scroll-reveal animation.** `src/components/ScrollReveal.tsx` wraps content in a `motion.div` (via the `motion` package, i.e. Framer Motion's successor) with a `whileInView` fade/slide. Used throughout the sections; Hero and Projects also use `motion` directly for bespoke interactions (letter-stagger title, hover glows, locked/unlocked project card states).
- **Design tokens:** neon palette (cyan/magenta/violet/amber on near-black) and the three-font system (Pixelify Sans display, Space Grotesk body, Space Mono for HUD/data labels) are defined once in `globals.css` and `layout.tsx`'s `next/font/google` calls — change them there, not per-component.
- **Contact has no form yet.** By design (per the brief) — just mailto/LinkedIn links. The section has a comment marking where a future Resend-powered form should slot in without restructuring.
- **OG image is generated, not a static asset.** `src/app/opengraph-image.tsx` uses `next/og`'s `ImageResponse` to render the share-card image at build time from the same palette.
- **Vercel Analytics** is mounted once in the root layout (`<Analytics />` from `@vercel/analytics/next`).

## Content & security convention

- A local-only `/private/` folder (gitignored) is where sensitive source material — resume file, anything with personal contact/address info — should be dropped for reference. Never commit raw personal documents to this repo; it's **public**. Only the specific bullets/text actually meant for the public site should make it into `src/lib/content.ts`.
- If a downloadable resume PDF is ever added to `/public` for the site itself, it must be a sanitized copy (no home address/phone) since anything in `/public` is served to any visitor regardless of repo visibility.
