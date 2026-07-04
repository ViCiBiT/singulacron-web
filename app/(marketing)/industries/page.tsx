import Link from "next/link";
import { Factory, UtensilsCrossed, Truck, Layers, Wrench, Sprout, ArrowRight } from "lucide-react";
import { industries } from "@/constants/industries";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Industries",
  description:
    "Custom software for manufacturing, food & beverage, logistics, plastics, metal fabrication, and agri-processing. Built for how your industry actually runs.",
  path: "/industries",
});

const iconMap = { Factory, UtensilsCrossed, Truck, Layers, Wrench, Sprout } as const;
type IconName = keyof typeof iconMap;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Built for operations that run on complexity"
        description="The problems we solve are specific. The software we build has to be too."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon as IconName] ?? Factory;
              return (
                <div
                  key={industry.slug}
                  className="group flex flex-col gap-3 bg-background p-8 transition-colors duration-300 hover:bg-card"
                >
                  <Icon className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-violet-300" />
                  <h2 className="text-lg font-medium text-foreground">{industry.name}</h2>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                  <p className="mt-1 border-l-2 border-violet-400/40 pl-3 text-sm leading-relaxed text-foreground/80">
                    {industry.pain}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div className="glass mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Your industry isn&apos;t on the list?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                We build for any operation with repeatable processes, connected equipment, or data
                scattered across systems. If your workflow has a bottleneck, we can build around it.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              Describe your operation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaSection
        title="Recognise the pain?"
        description="Tell us which workflows are costing you time, accuracy, or visibility. We scope the fix."
      />
    </>
  );
}
