"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, ArrowDownRight, ArrowUpRight } from "lucide-react";

/* Illustrative product visual — sample display data, not live metrics. */
const throughput = [42, 48, 45, 52, 49, 58, 54, 62, 59, 66, 63, 71, 68, 74];
const rows = [
  { label: "Line 2 OEE", value: "87.4%", delta: "+2.1", up: true },
  { label: "Scrap rate", value: "1.8%", delta: "-0.4", up: false },
  { label: "Open work orders", value: "23", delta: "-6", up: false },
];
const sources = ["OPC-UA", "MQTT", "SAP", "Modbus"];

function sparklinePath(data: number[], w: number, h: number) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const step = w / (data.length - 1);
  return data
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / (max - min)) * (h - 6) - 3;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function HeroConsole() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const path = sparklinePath(throughput, 280, 80);

  // Depth cue on scroll: the panel tips back and recedes as it leaves the
  // viewport. Transform-only, driven by framer's rAF-batched scroll value.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 15%", "start -60%"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <div aria-hidden ref={ref} className="relative w-full max-w-md select-none [perspective:1200px]">
      {/* backdrop glow anchored to the panel, not the page */}
      <div className="absolute -inset-8 rounded-[2rem] bg-aurora blur-2xl" />

      <motion.div
        style={reduce ? undefined : { rotateX, y, scale }}
        className="glass-deep relative rounded-2xl p-5 will-change-transform"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Activity className="size-4 text-violet-400" />
            Production overview
          </div>
          <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2 py-0.5 font-mono text-[10px] text-violet-300">
            LIVE
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Throughput, units/hr</p>
            <p className="mt-1 font-mono text-3xl font-semibold tracking-tight text-foreground">
              74.2
            </p>
          </div>
          <p className="flex items-center gap-1 font-mono text-xs text-emerald-400">
            <ArrowUpRight className="size-3.5" /> +8.6%
          </p>
        </div>

        <svg viewBox="0 0 280 80" className="mt-3 h-20 w-full" fill="none">
          <defs>
            <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.62 0.24 286)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="oklch(0.62 0.24 286)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L280,80 L0,80 Z`} fill="url(#spark-fill)" />
          <motion.path
            d={path}
            stroke="oklch(0.68 0.2 286)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
          />
        </svg>

        <div className="mt-4 divide-y divide-border border-t border-border">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2.5">
              <span className="text-xs text-muted-foreground">{row.label}</span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs font-medium text-foreground">{row.value}</span>
                <span
                  className={`flex items-center font-mono text-[10px] ${
                    row.up ? "text-emerald-400" : "text-violet-300"
                  }`}
                >
                  {row.up ? (
                    <ArrowUpRight className="size-3" />
                  ) : (
                    <ArrowDownRight className="size-3" />
                  )}
                  {row.delta}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {sources.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {s}
            </span>
          ))}
          <span className="ml-auto text-[10px] text-muted-foreground">4 sources connected</span>
        </div>
      </motion.div>
    </div>
  );
}
