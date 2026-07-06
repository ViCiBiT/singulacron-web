import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { SpotlightCard } from "@/components/cards/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Practical writing on industrial automation, ERP integration, factory-floor software, and operational data for manufacturers.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <PageHero
        title="Practical thinking on industrial software"
        description="No hype. Writing grounded in factory-floor problems, integration constraints, and operational reality."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-16 text-center">
            <p className="text-muted-foreground">Articles coming soon.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i}>
                <SpotlightCard className="h-full">
                  <Link href={`/blog/${post.slug}`} className="flex h-full flex-col gap-4 p-7">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-semibold text-balance text-foreground">
                        {post.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span aria-hidden>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CtaSection
        title="Building something similar?"
        description="Tell us about your operation. We scope fast and commit to clear deliverables."
        secondaryLabel="View our work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
