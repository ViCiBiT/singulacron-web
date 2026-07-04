import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: PageMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? `${siteConfig.url}/og-default.png`;

  return {
    // Root layout template appends "| Singulacron"; keep the bare title here.
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

export function generateArticleMetadata(
  props: PageMetadataProps & { publishedTime: string; tags?: string[] }
): Metadata {
  const base = generatePageMetadata(props);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: props.publishedTime,
      tags: props.tags,
    },
  };
}
