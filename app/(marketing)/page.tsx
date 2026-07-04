import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/hero-section";
import { ServicesPreview } from "@/components/sections/services-preview";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { FloorVisuals } from "@/components/sections/floor-visuals";
import { StatsBar } from "@/components/sections/stats-bar";
import { CtaSection } from "@/components/sections/cta-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <IndustriesGrid />
      <FloorVisuals />
      <CtaSection />
    </>
  );
}
