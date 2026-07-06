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
| Organization JSON-LD | Added to homepage (app/(marketing)/page.tsx) - was only Article schema on blog/portfolio before |
| FAQPage JSON-LD | Already wired in components/sections/faq-section.tsx (verified, not a gap) |
| manifest.webmanifest | app/manifest.ts - name/short_name/theme_color/icons (icon.svg), installable metadata |
| theme-color | app/layout.tsx viewport export, #0b0a14 |
| RSS feed | /rss.xml route (app/rss.xml/route.ts), reads lib/mdx.ts getAllBlogPosts |
| security.txt | public/.well-known/security.txt - contact + expiry per RFC 9116 |
| Web Vitals -> PostHog | components/shared/web-vitals-reporter.tsx, captures CLS/LCP/INP via next/web-vitals |
| Cookie consent banner | components/shared/cookie-consent.tsx - gates PostHog (opt_out_capturing_by_default: true until Accept clicked) |
| Blog date locale fix | en-ZA -> en-GB in blog list + detail pages (same leftover-template bug as openGraph locale) |

---

## OUTSTANDING

### 1. Search Console / Bing verification
Needs real verification token from Google Search Console / Bing Webmaster Tools (site owner must claim property first). Add to app/layout.tsx metadata.verification once obtained.

### 2. Testimonials section
No constants/testimonials.ts or component yet. Needs real client quotes - not fabricating placeholder/fake reviews (deceptive, against copy voice: concrete over hype).

### 3. Content volume
Only 2 blog posts + 2 case studies live. Biggest remaining SEO lever is content volume, not more schema/tooling.

### 4. Not committed yet
All changes above are in working tree, not committed/pushed.

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
