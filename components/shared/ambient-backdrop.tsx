"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Site-wide ambient layer: faint grid + aurora that "breathe" with scroll.
 * Opacity and drift are keyed to document scroll progress, so the pattern is
 * still when the user is still. Fixed, pointer-events-none, transform/opacity
 * only. Sections with solid backgrounds paint over it.
 */
export function AmbientBackdrop() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Two slow "breaths" across the full page height.
  const gridOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.85, 0.3, 0.65, 0.25, 0.55]
  );
  const auroraOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 0.45, 0.8, 0.4]);
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  if (reduce) {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,black_45%,transparent)]" />
        <div className="absolute inset-0 bg-aurora opacity-60" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
      />
      <motion.div
        style={{ opacity: auroraOpacity, y: auroraY }}
        className="absolute inset-x-0 -top-[10%] h-[130%] bg-aurora will-change-transform"
      />
    </div>
  );
}
