import { services } from "@/constants/services";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { generatePageMetadata } from "@/lib/metadata";
import { Zap, GitMerge, Activity, BarChart3 } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Services",
  description:
    "Custom software services for manufacturers: process automation, ERP integration, real-time data streaming, and analytics dashboards. Built around your operation.",
  path: "/services",
});

const iconMap = { Zap, GitMerge, Activity, BarChart3 } as const;
type IconName = keyof typeof iconMap;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Software built for how you work"
        description="Every engagement starts with mapping your workflow. We build exactly what solves the problem, no excess."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-border">
          {services.map((service) => {
            const Icon = iconMap[service.icon as IconName] ?? Zap;
            return (
              <Reveal key={service.slug}>
                <div
                  id={service.slug}
                  className="grid scroll-mt-24 gap-8 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20"
                >
                  <div className="lg:col-span-5">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-300">
                      <Icon className="size-5" />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-6 lg:col-span-7 lg:pt-1">
                    <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="glass w-fit rounded-xl px-5 py-4">
                      <p className="text-sm font-medium text-violet-300">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaSection
        title="Have a process that needs automating?"
        description="Describe what's manual, slow, or error-prone. We scope a build that solves it."
      />
    </>
  );
}
