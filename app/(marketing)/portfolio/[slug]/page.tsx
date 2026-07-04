import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCaseStudies, getCaseStudy } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta-section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return generatePageMetadata({
    title: cs.title,
    description: cs.description,
    path: `/portfolio/${cs.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/portfolio/${cs.slug}`,
    headline: cs.title,
    description: cs.description,
    datePublished: cs.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <Link
          href="/portfolio"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} /> Back to portfolio
        </Link>

        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="secondary">{cs.industry}</Badge>
            {cs.technologies.map((t) => (
              <Badge key={t} variant="outline" className="border-border/50 text-xs">
                {t}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {cs.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{cs.description}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Client:{" "}
            <span className="font-medium text-foreground">{cs.client}</span>
          </p>
        </header>

        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Problem</p>
            <p className="text-sm leading-relaxed text-foreground">{cs.problem}</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Solution</p>
            <p className="text-sm leading-relaxed text-foreground">{cs.solution}</p>
          </div>
          <div className="gradient-border rounded-2xl p-6">
            <p className="mb-2 text-xs font-medium text-violet-300">Result</p>
            <p className="text-sm font-medium leading-relaxed text-foreground">{cs.result}</p>
          </div>
        </div>

        {cs.content && (
          <article className="prose prose-invert prose-violet max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline prose-code:text-violet-300 prose-strong:text-foreground">
            <MDXRemote source={cs.content} />
          </article>
        )}
      </div>

      <CtaSection
        title="Your operation could be next."
        description="We scope a build around your specific problem, not a generic solution."
        secondaryLabel="Read our thinking"
        secondaryHref="/blog"
      />
    </>
  );
}