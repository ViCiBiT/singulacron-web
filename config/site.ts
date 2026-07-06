export const siteConfig = {
  name: "Singulacron",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://singulacron.com",
  tagline: "Precision-fit software — no bloat, no compromise.",
  description:
    "Custom AI-powered software for manufacturers and niche industries. Automate repetitive tasks, connect systems that don't talk, and turn scattered data into actionable decisions.",
  email: "vincent@singulacron.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  keywords: [
    "custom software",
    "manufacturing automation",
    "industrial AI",
    "factory floor software",
    "ERP integration",
    "data streaming",
    "process automation",
    "niche industry software",
  ],
} as const;
