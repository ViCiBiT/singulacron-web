"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger step — multiplied by 60ms */
  delay?: number;
  className?: string;
  /** Animate immediately on mount instead of on scroll into view */
  immediate?: boolean;
};

export function Reveal({ children, delay = 0, className, immediate = false }: RevealProps) {
  const reduce = useReducedMotion();
  // Failsafe: never leave content hidden if the intersection observer
  // doesn't fire (headless capture, exotic scrolling containers).
  const [forced, setForced] = useState(false);

  useEffect(() => {
    if (immediate) return;
    const t = setTimeout(() => setForced(true), 2500);
    return () => clearTimeout(t);
  }, [immediate]);

  if (reduce) {
    return (
      <div data-reveal className={className}>
        {children}
      </div>
    );
  }

  const shared = {
    "data-reveal": true,
    initial: { opacity: 0, y: 20 },
    transition: { duration: 0.6, delay: delay * 0.06, ease: [0.16, 1, 0.3, 1] as const },
    className,
  };

  return immediate ? (
    <motion.div {...shared} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  ) : (
    <motion.div
      {...shared}
      whileInView={{ opacity: 1, y: 0 }}
      animate={forced ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}
