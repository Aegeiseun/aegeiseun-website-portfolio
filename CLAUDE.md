# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository is currently empty of application code — no package.json, source tree, or build tooling exists yet. It contains only reference skill documents (below). The project is JP's interactive portfolio site, to be scaffolded from a brief the user provides in-session.

Once a framework/build system is chosen and scaffolded, update this file with actual build/lint/test/dev commands and the real architecture — do not guess at them now.

## Reference skill documents in this repo

These `*-skill.md` files at the repo root are reference material for building this portfolio, not wired into `.claude/skills/`. Read the relevant one(s) before doing related work:

- `front-end-design-skill.md` — design-lead approach to distinctive visual identity: brainstorm a token system (color/type/layout/signature) before building, critique it against generic-AI defaults, then build.
- `taste-skill.md` — anti-slop frontend skill for landing pages/portfolios: infer page kind, vibe, and audience from the brief before generating; explicitly avoid LLM-default aesthetics (AI-purple gradients, centered hero over dark mesh, three equal feature cards, Inter + slate-900, etc.).
- `apple-design-skill.md` — Apple-style fluid interaction design (spring animations, 1:1 direct manipulation, momentum/interruptible motion) translated to web (CSS, Pointer Events, rAF, Motion/Framer Motion).
- `frontend-design-review-skill.md` — visual design QA pass (layout/spacing, typography, color, hierarchy, responsive behavior) distinct from a UX audit; use before calling a build done.
- `vercel-react-best-practices-skill.md` — Vercel's React/Next.js performance rules (waterfalls, bundle size, server/client data fetching, re-renders), prioritized by impact; apply once the stack is React/Next.
- `SEO-audit-skill.md` — technical/on-page SEO audit framework; relevant once pages exist to audit.
- `analytics-tracking-skill.md` — principles for setting up tracking (GA4/GTM, event naming, conversion tracking) tied to actual decisions, not vanity metrics.

When starting implementation, prefer `taste-skill.md` and `front-end-design-skill.md` for overall direction, then layer in `apple-design-skill.md` for interaction polish and `vercel-react-best-practices-skill.md` once there's React code to optimize.
