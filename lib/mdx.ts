import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, CaseStudy } from "@/types";

const contentRoot = path.join(process.cwd(), "content");

/* Slugs come from the URL — restrict to filename-safe characters so they can
   never traverse outside the content directory. */
const SAFE_SLUG = /^[a-z0-9][a-z0-9-]*$/;

function getFiles(dir: string): string[] {
  const full = path.join(contentRoot, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith(".mdx"));
}

function parseFile<T>(
  dir: string,
  filename: string,
  transform: (data: Record<string, unknown>, slug: string, content: string) => T
): T {
  const full = path.join(contentRoot, dir, filename);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx$/, "");
  return transform(data as Record<string, unknown>, slug, content);
}

export function getAllBlogPosts(): BlogPost[] {
  return getFiles("blog")
    .map((f) =>
      parseFile<BlogPost>("blog", f, (data, slug, content) => ({
        slug,
        title: String(data.title ?? ""),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        category: String(data.category ?? ""),
        coverImage: String(data.coverImage ?? ""),
        readingTime: readingTime(content).text,
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  if (!SAFE_SLUG.test(slug)) return null;
  const filename = `${slug}.mdx`;
  const full = path.join(contentRoot, "blog", filename);
  if (!fs.existsSync(full)) return null;
  return parseFile<BlogPost>("blog", filename, (data, s, content) => ({
    slug: s,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    category: String(data.category ?? ""),
    coverImage: String(data.coverImage ?? ""),
    readingTime: readingTime(content).text,
    content,
  }));
}

export function getAllCaseStudies(): CaseStudy[] {
  return getFiles("case-studies")
    .map((f) =>
      parseFile<CaseStudy>("case-studies", f, (data, slug) => ({
        slug,
        title: String(data.title ?? ""),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        category: String(data.category ?? ""),
        coverImage: String(data.coverImage ?? ""),
        client: String(data.client ?? ""),
        industry: String(data.industry ?? ""),
        problem: String(data.problem ?? ""),
        solution: String(data.solution ?? ""),
        result: String(data.result ?? ""),
        technologies: Array.isArray(data.technologies)
          ? (data.technologies as string[])
          : [],
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudy(slug: string): CaseStudy | null {
  if (!SAFE_SLUG.test(slug)) return null;
  const filename = `${slug}.mdx`;
  const full = path.join(contentRoot, "case-studies", filename);
  if (!fs.existsSync(full)) return null;
  return parseFile<CaseStudy>("case-studies", filename, (data, s, content) => ({
    slug: s,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    category: String(data.category ?? ""),
    coverImage: String(data.coverImage ?? ""),
    client: String(data.client ?? ""),
    industry: String(data.industry ?? ""),
    problem: String(data.problem ?? ""),
    solution: String(data.solution ?? ""),
    result: String(data.result ?? ""),
    technologies: Array.isArray(data.technologies)
      ? (data.technologies as string[])
      : [],
    content,
  }));
}
