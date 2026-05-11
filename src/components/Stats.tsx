const stats = [
  { v: "4.2×", l: "Prediction market volume growth YoY" },
  { v: "$0", l: "Purpose-built surveillance tools today" },
  { v: "<200ms", l: "Target flag latency from trade to alert" },
  { v: "9", l: "Data sources fused into one identity graph" },
];

export function Stats() {
  return (
    <section id="coverage" className="border-b border-border/50 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl font-bold tracking-tight text-primary text-glow">{s.v}</div>
              <div className="mt-2 max-w-[200px] text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
