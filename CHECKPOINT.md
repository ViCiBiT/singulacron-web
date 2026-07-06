# Singulacron - Session Checkpoint

**Last updated:** 2026-07-06
**Build:** PASSING - lint clean, prod build green
**Git:** github.com/ViCiBiT/singulacron-web, main pushed (f68939f)
**Live:** https://singulacron.com (custom domain, READY)

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
| Typography plugin | @plugin "@tailwindcss/typography" wired in app/globals.css - prose on blog/portfolio detail pages styled |
| Custom domain | Live on singulacron.com, Vercel env NEXT_PUBLIC_SITE_URL updated to match |
| OG/Twitter image (home) | app/layout.tsx openGraph + twitter now include og-default.png (was missing - only inner pages via generatePageMetadata had it) |
| Locale fix | openGraph.locale en_ZA -> id_ID (matches WhatsApp +62 Indonesia number) |
| site.ts fallback domain | Fallback URL synced vercel.app -> singulacron.com |

---

## OUTSTANDING

None currently open. Site live on custom domain, build/lint green.

## .env.local Current State (local only, gitignored)

  NEXT_PUBLIC_SITE_URL=http://localhost:3000              <- local dev only, prod uses Vercel env var
  NEXT_PUBLIC_POSTHOG_KEY=phc_AsC77Eg...                   <- SET
  NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com        <- SET
  NEXT_PUBLIC_SENTRY_DSN=https://ea458a...ingest.us.sentry.io/... <- SET
  NEXT_PUBLIC_WHATSAPP_NUMBER=6281386001526                <- SET

## Vercel env vars (production) - all set

  NEXT_PUBLIC_SITE_URL=https://singulacron.com
  NEXT_PUBLIC_WHATSAPP_NUMBER=6281386001526
  NEXT_PUBLIC_POSTHOG_KEY=phc_AsC77Eg...
  NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
  NEXT_PUBLIC_SENTRY_DSN=https://ea458a...ingest.us.sentry.io/...
