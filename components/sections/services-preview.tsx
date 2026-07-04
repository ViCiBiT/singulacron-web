import Link from "next/link";
import { ArrowUpRight, Zap, GitMerge, Activity, BarChart3 } from "lucide-react";
import { services } from "@/constants/services";
import { SpotlightCard } from "@/components/cards/spotlight-card";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const iconMap = { Zap, GitMerge, Activity, BarChart3 } as const;
type IconName = keyof typeof iconMap;

/* Bento spans: 7/5 then 5/7 — asymmetric two-row grid, one cell per service. */
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <Reveal>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Software shaped around your operation
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              We don&apos;t sell platforms. We build exactly what your workflow needs.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
          >
            All services
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-12">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon as IconName] ?? Zap;
          const washed = i === 0 || i === 3;
          return (
            <Reveal key={service.slug} delay={i} className={cn(spans[i])}>
              <SpotlightCard className="h-full">
                <Link
                  href={`/services#${service.slug}`}
                  className="flex h-full flex-col gap-4 p-7"
                >
                  {washed && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_0%,oklch(0.62_0.24_286/9%),transparent_70%)]"
                    />
                  )}
                  <div className="flex size-10 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-300">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{service.shortTitle}</h3>
                    <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <p className="mt-auto border-t border-border pt-4 text-sm font-medium text-violet-300">
                    {service.outcome}
                  </p>
                </Link>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
