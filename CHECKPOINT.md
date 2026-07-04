# Singulacron - Session Checkpoint

**Last updated:** 2026-06-29
**Build:** PASSING - 16 static pages, lint clean
**Git:** NOT initialized

---

## DONE - Verified Complete

| Item | Detail |
|------|--------|
| All 7 marketing pages | /, /about, /services, /industries, /portfolio, /blog, /contact |
| Dynamic blog/[slug] | 2 posts seeded, SSG |
| Dynamic portfolio/[slug] | 2 case studies seeded, SSG |
| sitemap.xml + robots.txt | Auto-generated, includes dynamic slugs |
| SEO metadata + JSON-LD | All pages have full metadata. Blog/portfolio have Article JSON-LD |
| config/ constants/ lib/ types/ | All complete |
| Components | Header, footer, hero, sections, shadcn, PostHog provider |
| PostHog | phc_ key set, PHProvider in layout.tsx, proxy rewrites in next.config.ts |
| @tailwindcss/typography | Installed in package.json |
| Security deny list | .claude/settings.local.json configured |
| Contact form UI | Complete - validation + success state |


---

## OUTSTANDING - Next Session

### 1. Wire typography plugin - 2 MIN (Claude does this)
Status: @tailwindcss/typography in package.json but NOT in globals.css. Prose classes on blog/portfolio detail pages render unstyled.

Fix: add to app/globals.css after line 3 (after existing imports):
  @plugin "@tailwindcss/typography";

---

### 2. Contact form - NEEDS YOUR DECISION + KEY
Status: Form UI done. Submission FAKED - setTimeout mock, no email sent.

Option A - Resend (recommended, 3000 emails/month free):
  Sign up: resend.com > API Keys > Create
  Provide: RESEND_API_KEY=re_... and recipient email
  Claude builds /api/contact route handler

Option B - Formspree (no-code, 50/month free):
  Sign up: formspree.io > New Form
  Provide: endpoint URL e.g. formspree.io/f/abcdefgh
  Claude updates form POST target

---

### 3. Sentry - NEEDS DSN
Status: Package installed. DSN empty. sentry.client.config.ts and sentry.server.config.ts missing.

Steps:
  1. sentry.io > New Project > Next.js
  2. Copy DSN: https://abc@o123.ingest.sentry.io/789
  3. Paste to Claude
Claude creates config files and wires next.config.ts.


---

### 4. WhatsApp CTA - NEEDS NUMBER
Status: Button built, conditional. Hidden because env var empty.
Provide: international format, digits only, no + e.g. 601XXXXXXXX
Add to .env.local: NEXT_PUBLIC_WHATSAPP_NUMBER=601XXXXXXXX
No code change needed.

---

### 5. Git init + GitHub push
Status: No git repo initialized.

Commands:
  git init
  git add .
  git commit -m "Initial commit: Singulacron marketing site"

Create repo at github.com/new (name: singulacron, private).
  git remote add origin https://github.com/YOUR_USERNAME/singulacron.git
  git branch -M main
  git push -u origin main

WARNING: Run git status before pushing. If .env.local appears:
  git rm --cached .env.local

---

### 6. Vercel deploy - AFTER GIT PUSH
  1. vercel.com/new > Import GitHub repo
  2. Framework: Next.js (auto-detected)
  3. Add env vars in Vercel dashboard:
     NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
     NEXT_PUBLIC_POSTHOG_KEY=phc_... (copy from .env.local)
     NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
     NEXT_PUBLIC_SENTRY_DSN=https://... (when ready)
     NEXT_PUBLIC_WHATSAPP_NUMBER=601... (when ready)
     RESEND_API_KEY=re_... (if Resend)
  4. Deploy > copy .vercel.app URL
  5. Update NEXT_PUBLIC_SITE_URL to real URL > redeploy


---

## USER PROVIDES - Summary

| What | Format | Source | Urgency |
|------|--------|--------|---------|
| Contact form choice | Resend or Formspree | Your decision | HIGH |
| Resend API key | re_... | resend.com > API Keys | HIGH |
| Contact recipient email | you@example.com | Your email | HIGH |
| WhatsApp number | 601XXXXXXXX (no +) | Your phone | MEDIUM |
| Sentry DSN | https://...@...ingest.sentry.io/... | sentry.io > New Project | MEDIUM |
| GitHub username | your-username | github.com | HIGH |
| Production URL | https://singulacron.vercel.app | After Vercel deploy | HIGH |

---

## RECOMMENDED NEXT SESSION ORDER

1. Wire typography plugin - Claude edits app/globals.css (2 min)
2. Contact form - tell Claude Resend or Formspree + provide key/URL
3. WhatsApp - paste your number
4. Git init + push to GitHub
5. Vercel deploy - import repo, add env vars, deploy
6. Update NEXT_PUBLIC_SITE_URL to real vercel.app URL
7. Sentry - after deploy (needs prod URL for source maps)

---

## .env.local Current State

  NEXT_PUBLIC_SITE_URL=http://localhost:3000        <- update after deploy
  NEXT_PUBLIC_POSTHOG_KEY=phc_AsC77Eg...           <- SET
  NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com <- SET
  NEXT_PUBLIC_SENTRY_DSN=                           <- EMPTY
  NEXT_PUBLIC_WHATSAPP_NUMBER=                      <- EMPTY
