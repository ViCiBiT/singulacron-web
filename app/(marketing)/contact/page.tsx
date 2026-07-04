import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { FaqSection } from "@/components/sections/faq-section";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Check, Mail, MessageCircle } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Talk to Singulacron about custom software for your operation. We scope fast — describe the problem and we respond within 24 hours.",
  path: "/contact",
});

const checklist = [
  "What your current process looks like",
  "Where it breaks down or costs time",
  "What systems are involved (ERP, machines, etc.)",
  "Your rough timeline if you have one",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Tell us what's broken."
        description="Describe the workflow, the bottleneck, or the data problem. We'll respond within 24 hours with an honest assessment."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={2}>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-violet-400/25"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-300">
                  <Mail className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                </div>
              </a>

              {siteConfig.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-violet-400/25"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-300">
                    <MessageCircle className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat directly on WhatsApp</p>
                  </div>
                </a>
              )}

              <div className="glass rounded-2xl p-6">
                <h2 className="mb-4 text-sm font-semibold text-foreground">What to include</h2>
                <ul className="flex flex-col gap-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-violet-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
