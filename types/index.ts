export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  coverImage: string;
  readingTime: string;
  content?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  coverImage: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  content?: string;
};

export type NavItem = {
  label: string;
  href: string;
};
