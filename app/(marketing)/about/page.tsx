import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { technologies } from "@/constants/technologies";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Singulacron builds custom AI-powered software for manufacturers and niche industries. No off-the-shelf. No bloat. Software shaped around how your operation actually runs.",
  path: "/about",
});

const process = [
  {
    step: "01",
    title: "Map",
    description: "We spend time on your floor, in your system, with your people. No assumptions.",
  },
  {
    step: "02",
    title: "Scope",
    description: "A clear spec with deliverables, timeline, and cost before we write a line of code.",
  },
  {
    step: "03",
    title: "Build",
    description: "Iterative delivery. You see progress early and often, not at the end.",
  },
  {
    step: "04",
    title: "Hand over",
    description: "You own the code. We document everything and offer ongoing support if you want it.",
  },
];

export default function AboutPage() {
  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <>
      <PageHero
        title="We build what the off-the-shelf can't."
        description="Generic tools add configuration, workarounds, and middleware. We build software shaped precisely around how your business runs."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Why custom?
            </h2>
            <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
              <p>
                Off-the-shelf ERP add-ons, MES modules, and SaaS tools are designed for the median
                operation. If your business runs differently, and most manufacturers do, you spend
                years bending the software to fit, adding middleware, and maintaining workarounds.
              </p>
              <p>
                We start by mapping how your operation actually runs. The software we build follows
                that map exactly. No unused features. No configuration overhead. No bolt-on
                integrations.
              </p>
              <p>
                The result is software that operators actually use because it fits the way they
                think and work.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              How we work
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i}>
                <div className="flex flex-col gap-3 border-t border-border pt-5">
                  <span className="font-mono text-sm text-violet-300/70">{item.step}</span>
                  <p className="text-lg font-medium text-foreground">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass rounded-2xl p-8 sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Technology we work with
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => (
                <div key={cat}>
                  <p className="mb-3 text-sm font-medium text-foreground">{cat}</p>
                  <div className="flex flex-wrap gap-2">
                    {technologies
                      .filter((t) => t.category === cat)
                      .map((t) => (
                        <span
                          key={t.name}
                          className="rounded-md border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {t.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CtaSection
        title="Let's map your operation."
        description="A 30-minute call is enough to understand whether we can help and what a build would look like."
        secondaryLabel="See our work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
