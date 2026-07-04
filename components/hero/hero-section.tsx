import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { HeroConsole } from "@/components/hero/hero-console";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-20 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="flex max-w-2xl flex-col items-start gap-6">
          <Reveal immediate delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/8 px-3 py-1 text-xs font-medium text-violet-300">
              Custom software for manufacturers
            </span>
          </Reveal>

          <Reveal immediate delay={1}>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Precision-fit software.{" "}
              <span className="gradient-text">No bloat, no compromise.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={2}>
            <p className="max-w-xl text-lg text-pretty text-muted-foreground">
              Custom AI software built around how your operation runs: automate the repetitive,
              connect the disconnected, act on floor data.
            </p>
          </Reveal>

          <Reveal immediate delay={3}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants(),
                  "h-11 gap-2 px-6 text-sm shadow-accent transition-transform hover:-translate-y-0.5"
                )}
              >
                Talk to us <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/portfolio"
                className={cn(buttonVariants({ variant: "outline" }), "h-11 px-6 text-sm")}
              >
                See our work
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={4} className="hidden justify-self-end lg:flex">
          <HeroConsole />
        </Reveal>
      </div>
    </section>
  );
}
