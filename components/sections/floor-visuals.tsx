import Image from "next/image";
import { floorVisuals, type FloorVisual } from "@/constants/visuals";
import { ScrollTilt } from "@/components/shared/scroll-tilt";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const barHeights = ["h-16", "h-24", "h-14", "h-20"];
const flowDots = [
  { cx: 24, cy: 96 },
  { cx: 140, cy: 64 },
  { cx: 256, cy: 88 },
];

/* Abstract brand compositions shown until real plant photography is provided
   via the `image` field in constants/visuals.ts. Layers sit at different
   translateZ depths, so the ScrollTilt rotation reads as real parallax. */
function Composition({ variant }: { variant: FloorVisual["variant"] }) {
  return (
    <div className="relative h-full w-full [transform-style:preserve-3d]">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_10%,oklch(0.62_0.24_286/10%),transparent_70%)]" />

      {variant === "floor" && (
        <div className="absolute inset-0 flex items-end justify-center gap-4 p-10 [transform:translateZ(36px)]">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className={cn(
                "w-8 rounded-t-md border border-violet-400/25 bg-gradient-to-t from-violet-400/5 to-violet-400/25",
                h
              )}
            />
          ))}
        </div>
      )}

      {variant === "flow" && (
        <svg
          viewBox="0 0 280 160"
          fill="none"
          className="absolute inset-0 m-auto h-auto w-4/5 [transform:translateZ(36px)]"
        >
          <path
            d="M24,96 C64,96 100,64 140,64 C180,64 216,88 256,88"
            stroke="oklch(0.68 0.2 286 / 55%)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          {flowDots.map((d) => (
            <g key={d.cx}>
              <circle {...d} r="10" fill="oklch(0.62 0.24 286 / 12%)" />
              <circle {...d} r="3.5" fill="oklch(0.72 0.18 286)" />
            </g>
          ))}
        </svg>
      )}

      {variant === "desk" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 [transform:translateZ(36px)]">
          <p className="font-mono text-4xl font-semibold tracking-tight text-foreground">98.2%</p>
          <p className="text-xs text-muted-foreground">on-time completion</p>
          <svg viewBox="0 0 160 36" fill="none" className="h-9 w-40">
            <path
              d="M2,28 L28,24 L54,26 L80,18 L106,20 L132,10 L158,6"
              stroke="oklch(0.68 0.2 286)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export function FloorVisuals() {
  return (
    <section className="mx-auto max-w-7xl overflow-x-clip px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <Reveal>
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            From floor to desk
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            One path for your data. No re-typing, no exports, no waiting.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-10 sm:grid-cols-3 sm:gap-5 lg:gap-6">
        {floorVisuals.map((visual, i) => (
          <ScrollTilt key={visual.key} className={cn(i === 1 && "sm:mt-12")}>
            <figure className="m-0">
              <div className="glass relative aspect-[4/5] overflow-hidden rounded-2xl [transform-style:preserve-3d]">
                {visual.image ? (
                  <>
                    <Image
                      src={visual.image}
                      alt={visual.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover grayscale brightness-[.68] contrast-[1.06]"
                    />
                    <div className="absolute inset-0 bg-violet-500/25 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-background/10" />
                  </>
                ) : (
                  <Composition variant={visual.variant} />
                )}
              </div>
              <figcaption className="mt-4">
                <p className="text-sm font-medium text-foreground">{visual.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {visual.caption}
                </p>
              </figcaption>
            </figure>
          </ScrollTilt>
        ))}
      </div>
    </section>
  );
}
