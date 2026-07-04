import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  className?: string;
};

/** Shared top-of-page header for subpages: left-aligned, quiet grid backdrop. */
export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden border-b border-border", className)}>
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-14 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
