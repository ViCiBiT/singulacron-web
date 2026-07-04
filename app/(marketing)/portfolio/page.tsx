import Link from "next/link";
import { getAllCaseStudies } from "@/lib/mdx";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { SpotlightCard } from "@/components/cards/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Portfolio",
  description:
    "Case studies: custom software built for manufacturers, food processing, logistics, and other niche industries. Real outcomes, real operations.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <PageHero
        title="Real problems. Specific solutions."
        description="Each case study is a build shaped around one operation's actual constraints."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {caseStudies.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-16 text-center">
            <p className="text-muted-foreground">Case studies coming soon.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i}>
                <SpotlightCard className="h-full">
                  <Link href={`/portfolio/${cs.slug}`} className="flex h-full flex-col gap-4 p-7">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{cs.industry}</Badge>
                      {cs.technologies.slice(0, 3).map((t) => (
                        <Badge key={t} variant="outline" className="font-mono text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-semibold text-balance text-foreground">
                        {cs.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {cs.description}
                      </p>
                    </div>
                    <p className="mt-auto border-t border-border pt-4 text-sm font-medium text-violet-300">
                      {cs.result}
                    </p>
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CtaSection
        title="Your operation could be next."
        description="We scope a build around your specific problem, not a generic solution."
      />
    </>
  );
}
