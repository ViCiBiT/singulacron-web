import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogPosts, getBlogPost } from "@/lib/mdx";
import { generateArticleMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta-section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return generateArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    publishedTime: post.date,
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
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

      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="secondary">{post.category}</Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-border/50 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-ZA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="prose prose-invert prose-violet max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline prose-code:text-violet-300 prose-strong:text-foreground">
          <MDXRemote source={post.content ?? ""} />
        </div>
      </article>

      <CtaSection
        title="Found this useful?"
        description="We write about the problems we actually solve. If your operation has something similar, let's talk."
        secondaryLabel="View case studies"
        secondaryHref="/portfolio"
      />
    </>
  );
}