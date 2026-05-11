const pillars = [
  {
    k: "Sub-second",
    t: "Latency",
    d: "Alerts fire from trade to inbox in under 200ms — fast enough to act on, not just review.",
  },
  {
    k: "Exchange-grade",
    t: "Throughput",
    d: "Engineered to ingest the full firehose of every major prediction market, simultaneously.",
  },
  {
    k: "Multi-source",
    t: "Identity Graph",
    d: "Trades, wallets, social, and corporate signals fused into one continuously-updating graph.",
  },
];

export function Stack() {
  return (
    <section id="graph-engine" className="border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">// scale</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Built on infra that scales with the markets.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Prediction markets don't sleep — and neither does our pipeline. The system is designed
            to grow with volume without giving up on real-time precision.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="bg-surface p-7">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{p.k}</div>
              <div className="mt-2 font-display text-xl font-semibold">{p.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
