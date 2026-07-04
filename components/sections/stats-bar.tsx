import { StatCounter } from "@/components/shared/stat-counter";

const stats = [
  { value: 40, suffix: "+", label: "Systems integrated" },
  { value: 15, suffix: "+", label: "Clients served" },
  { value: 5, prefix: "< ", suffix: "s", label: "Sensor-to-dashboard latency" },
  { value: 100, suffix: "%", label: "Custom-built" },
];

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-border max-lg:gap-y-px lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 px-2 py-10 text-center lg:px-8">
              <StatCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="font-mono text-3xl font-semibold tracking-tight text-foreground tabular-nums sm:text-4xl"
              />
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
