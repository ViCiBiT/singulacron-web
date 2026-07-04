# CLAUDE.md

Project guidance for Claude Code working in this repository.

## Project

**Singulacron** — corporate marketing website. We build custom AI-powered software for manufacturers and niche industries: automating repetitive tasks, connecting systems that don't talk, streaming data from factory floor to executive desk, turning scattered data into actionable decisions.

This repo is the **public marketing site** (corporate website + blog + portfolio). No client portal, no backend, no auth — yet. The architecture is intentionally extensible so those can be added later without a rewrite. Do not build them now.

## Stack

- **Next.js 15** — App Router only (no Pages Router)
- **React** + **TypeScript** (strict)
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **Framer Motion** — animation
- **MDX** — blog + case studies
- **next/image**, **next/font** — assets
- **Metadata API** — SEO (no react-helmet or manual `<head>`)
- **PostHog** — analytics
- **Sentry** — error monitoring
- **ESLint** + **Prettier**

Hosting: **Vercel** (auto-deploy from GitHub). Edge/DNS/SSL/WAF: **Cloudflare**.

## Commands

> Assumes **pnpm** + **Node 20 LTS**. Swap to npm/yarn if the lockfile differs.

```bash
pnpm dev                          # local dev server
pnpm build                        # production build
pnpm start                        # serve production build
pnpm lint                         # ESLint
pnpm format                       # Prettier write
pnpm dlx shadcn@latest add <name> # add a shadcn/ui component
```

Run `pnpm lint` and `pnpm build` before considering any change done.

## Structure

```
app/
  (marketing)/        # all public pages: home, about, services, industries, portfolio, blog, contact
  api/                # route handlers (keep minimal)
  sitemap.ts          # generated sitemap — keep in sync with routes
  robots.ts
  layout.tsx          # root layout: fonts, providers, analytics

components/
  ui/                 # shadcn primitives — do not hand-edit generated files unless extending
  layout/ navigation/ footer/ hero/ sections/ cards/ shared/

content/
  blog/ case-studies/ portfolio/   # MDX source

config/
  site.ts navigation.ts social.ts  # single source of truth — no hardcoded site data in components

constants/
  services.ts industries.ts faq.ts technologies.ts  # page data lives here, not inline

lib/
  mdx.ts seo.ts metadata.ts utils.ts analytics.ts

hooks/  public/  styles/globals.css  types/
```

## Conventions

- **Server Components by default.** Add `'use client'` only when you need state, effects, or browser APIs. Push client boundaries as low/leaf as possible.
- **Files:** kebab-case (`hero-section.tsx`). **Components/types:** PascalCase. **Vars/functions:** camelCase.
- **Imports:** absolute via `@/` alias. No deep relative chains (`../../../`).
- **Styling:** Tailwind utilities only. No inline `style={}`, no CSS modules, no styled-components. Shared variants via `cn()` in `lib/utils.ts` + `cva`.
- **Data:** static page content goes in `constants/`. Site-wide values (name, URL, nav, socials) go in `config/`. Never hardcode.
- **Images:** always `next/image`. **Fonts:** always `next/font`. Never raw `<img>` or `<link>` font tags.
- **Types:** no `any`. Define shared shapes in `types/`.
- **Deps:** minimal. Justify every new package. Prefer a small component over a library. Stay on free tiers.

## SEO

- Per-route metadata via the **Metadata API** (`export const metadata` or `generateMetadata`). Helper in `lib/metadata.ts`.
- Every public page: title, description, canonical, OpenGraph, Twitter card.
- Blog/case-study pages: **JSON-LD** structured data.
- Update `app/sitemap.ts` when adding routes. Target Lighthouse >95 and full a11y.

## Content (MDX)

- Blog → `content/blog/*.mdx`, case studies → `content/case-studies/*.mdx`.
- Frontmatter required: `title`, `description`, `date`, `tags`, `category`, `coverImage`. Case studies also: `client`, `problem`, `solution`, `result`, `technologies`.
- Parsing/reading-time/related logic stays in `lib/mdx.ts`. Don't scatter file reads through components.

## Env

Store in `.env.local` (never commit). Expected keys:

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

## Copy voice

The site sells precision, not hype. When writing or editing site copy:

- **Concrete over abstract.** "One dashboard replacing three manual reports." "A quality alert catching defects before they reach the line." Lead with the operational outcome.
- Speak to factory-floor and operations reality — disconnected systems, manual workarounds, tribal knowledge.
- Frame off-the-shelf tools as adding complexity; Singulacron as precision-fit, shaped around how the business actually runs.
- Short, declarative, technically credible. Tagline register: **"Precision-fit software — no bloat, no compromise."**
- **Banned:** generic AI buzzwords (revolutionary, cutting-edge, synergy, game-changer, unlock, supercharge, seamless). No filler adjectives.

## Don't

- Don't add a backend, database, auth, or CRM. Site is static/marketing only for now.
- Don't introduce a UI kit other than shadcn/ui, or a second animation/styling system.
- Don't bypass `config/` or `constants/` with hardcoded content.
- Don't add paid services or anything that breaks the free-tier model without flagging it.
- Don't bloat the CLAUDE.md or the codebase. Every addition needs a clear purpose today.
