import { PageHero } from "@/components/shared/page-hero";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "How Singulacron handles the limited personal data collected on this website: analytics, contact details, and your rights.",
  path: "/privacy",
});

const sections = [
  {
    heading: "What we collect",
    body: [
      "Contact details you choose to send us. The contact form on this site opens a draft in your own email client; we only receive what you send. Emails typically include your name, email address, company, and the problem you describe.",
      "Usage analytics. We use PostHog to understand how visitors use the site: pages viewed, buttons clicked, approximate location derived from IP, browser and device type. This helps us improve the site. Analytics data is pseudonymous; we do not use it to identify you personally.",
    ],
  },
  {
    heading: "What we don't do",
    body: [
      "We don't sell or rent your data. We don't run third-party advertising or share your details with advertisers. There are no user accounts on this site, and we don't ask for payment information.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "Contact details are used to respond to your inquiry and, where it leads to an engagement, to deliver the work. Analytics are used in aggregate to improve site content and performance.",
    ],
  },
  {
    heading: "Service providers",
    body: [
      "The site is hosted on Vercel and served through Cloudflare. Analytics are processed by PostHog. Each provider processes only the data needed to perform its function and is bound by its own privacy commitments.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "Inquiry emails are kept for as long as needed to handle the conversation and any resulting engagement. Analytics data is retained under PostHog's standard retention settings and reviewed periodically.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Depending on where you are, these rights are backed by laws such as POPIA (South Africa) and the GDPR (EU). To exercise any of them, email us and we will respond within a reasonable time.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Privacy questions or requests: ${siteConfig.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy policy"
        description="The short version: we collect very little, we don't sell any of it, and you can ask us to delete what we have."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">Last updated: 4 July 2026</p>
        <div className="mt-10 flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-semibold text-foreground">{s.heading}</h2>
              <div className="mt-3 flex flex-col gap-3">
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
