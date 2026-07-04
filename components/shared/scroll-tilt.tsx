"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollTiltProps = {
  children: React.ReactNode;
  className?: string;
  /** Starting X rotation in degrees — flattens to 0 as the element scrolls in */
  from?: number;
};

/**
 * Scroll-linked 3D tilt: element enters rotated back in perspective and
 * settles flat as it reaches mid-viewport. Transform/opacity only (GPU
 * compositing, no layout work); scroll values come from framer-motion's
 * rAF-batched useScroll, never a raw scroll listener.
 */
export function ScrollTilt({ children, className, from = 14 }: ScrollTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center 60%"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [from, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("[perspective:1200px]", className)}>
      <motion.div
        style={{ rotateX, y, scale, opacity, transformStyle: "preserve-3d" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
