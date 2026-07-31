# Aegeiseun — Portfolio

One-page, scroll-driven portfolio for Aegeiseun (Media Buyer & Software Developer). Dark neon-HUD / retro-pixel design direction — see [CLAUDE.md](CLAUDE.md) for full details.

## Stack

Next.js (App Router) + TypeScript, Tailwind CSS v4, [motion](https://motion.dev) for animation, Vercel Analytics. Fully static, no backend.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Content

Placeholder copy lives in [src/lib/content.ts](src/lib/content.ts) — swap in real bio, project, experience, and testimonial content there. Real contact info (email/LinkedIn) also lives there until provided.

## Deploy

Connected to Vercel; pushes to `main` deploy automatically.
