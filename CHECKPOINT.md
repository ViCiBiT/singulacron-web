# Singulacron - Session Checkpoint

**Last updated:** 2026-07-06
**Build:** PASSING - lint clean, prod build green
**Git:** github.com/ViCiBiT/singulacron-web, main pushed
**Live:** https://singulacron.vercel.app (aliased, READY)

---

## DONE - Verified Complete

| Item | Detail |
|------|--------|
| All marketing pages | /, /about, /services, /industries, /portfolio, /blog, /contact, /privacy |
| Dynamic blog/[slug] | 2 posts seeded, SSG |
| Dynamic portfolio/[slug] | 2 case studies seeded, SSG |
| sitemap.xml + robots.txt | Auto-generated, includes dynamic slugs |
| SEO metadata + JSON-LD | All pages have full metadata. Blog/portfolio have Article JSON-LD |
| config/ constants/ lib/ types/ | All complete |
| Components | Header, footer, hero, sections, shadcn, PostHog provider |
| PostHog | Wired, key set locally + on Vercel, proxy rewrites in next.config.ts |
| Sentry | Manually wired (client/server/edge config + instrumentation + global-error.tsx), DSN set locally + on Vercel, verified live via temp test route (removed after confirm) |
| Contact form | mailto: link submission (name/company/message -> prefilled email draft). No backend by design (CLAUDE.md: static site only) |
| WhatsApp CTA | Number set: 6281386001526 (local + Vercel) |
| Git + GitHub | Repo linked, pushed, tracking origin/main |
| Vercel deploy | Live, env vars set (site URL, WhatsApp, PostHog x2, Sentry DSN) |
| .gitignore / secrets | Verified - .env* ignored, never tracked, no leak in history |
| Security headers | .claude/settings.local.json + next.config.ts headers() configured |

---

## OUTSTANDING

### 1. Wire typography plugin - 2 MIN
Status: @tailwindcss/typography in package.json but still NOT in app/globals.css. Prose classes on blog/portfolio detail pages render unstyled.

Fix: add near top of app/globals.css (after existing @import lines):
  @plugin "@tailwindcss/typography";

---

### 2. Domain
Decision made: staying on singulacron.vercel.app, no custom domain purchase for now.

---

## .env.local Current State (local only, gitignored)

  NEXT_PUBLIC_SITE_URL=http://localhost:3000              <- local dev only, prod uses Vercel env var
  NEXT_PUBLIC_POSTHOG_KEY=phc_AsC77Eg...                   <- SET
  NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com        <- SET
  NEXT_PUBLIC_SENTRY_DSN=https://ea458a...ingest.us.sentry.io/... <- SET
  NEXT_PUBLIC_WHATSAPP_NUMBER=6281386001526                <- SET

## Vercel env vars (production) - all set

  NEXT_PUBLIC_SITE_URL=https://singulacron.vercel.app
  NEXT_PUBLIC_WHATSAPP_NUMBER=6281386001526
  NEXT_PUBLIC_POSTHOG_KEY=phc_AsC77Eg...
  NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
  NEXT_PUBLIC_SENTRY_DSN=https://ea458a...ingest.us.sentry.io/...
