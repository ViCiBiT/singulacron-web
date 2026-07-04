import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaSection({
  title = "Ready to remove the workarounds?",
  description = "Tell us what's broken, slow, or manual. We'll scope a build that fits.",
  primaryLabel = "Talk to us",
  primaryHref = "/contact",
  secondaryLabel = "View case studies",
  secondaryHref = "/portfolio",
}: CtaSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <Reveal>
        <div className="gradient-border relative isolate overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,oklch(0.62_0.24_286/12%),transparent_70%)]" />

          <div className="relative flex flex-col items-center gap-6 px-6 py-20 text-center sm:px-12 lg:py-24">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-xl text-lg text-pretty text-muted-foreground">{description}</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className={cn(
                  buttonVariants(),
                  "h-11 gap-2 px-6 text-sm shadow-accent transition-transform hover:-translate-y-0.5"
                )}
              >
                {primaryLabel} <ArrowRight className="size-4" />
              </Link>
              <Link
                href={secondaryHref}
                className={cn(buttonVariants({ variant: "outline" }), "h-11 px-6 text-sm")}
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
