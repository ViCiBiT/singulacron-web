"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Card with a cursor-tracking radial highlight. Position is written straight
 * to a CSS variable on the DOM node — no React state, no re-renders.
 */
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card",
        "transition-colors duration-300 hover:border-violet-400/25",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(360px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),oklch(0.62_0.24_286/7%),transparent_65%)]"
      />
      {children}
    </div>
  );
}
