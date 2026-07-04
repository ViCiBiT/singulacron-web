import { Factory, UtensilsCrossed, Truck, Layers, Wrench, Sprout } from "lucide-react";
import { industries } from "@/constants/industries";
import { Reveal } from "@/components/shared/reveal";

const iconMap = { Factory, UtensilsCrossed, Truck, Layers, Wrench, Sprout } as const;
type IconName = keyof typeof iconMap;

export function IndustriesGrid() {
  return (
    <section className="border-y border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Built for operations that run on complexity
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Off-the-shelf tools add complexity. We build for how your industry actually works.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon as IconName] ?? Factory;
              return (
                <div
                  key={industry.slug}
                  className="group flex flex-col gap-3 bg-background p-7 transition-colors duration-300 hover:bg-card"
                >
                  <Icon className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-violet-300" />
                  <h3 className="font-medium text-foreground">{industry.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{industry.pain}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
