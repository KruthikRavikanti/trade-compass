const segments = [
  {
    tag: "Segment 01",
    title: "Prediction Market Platforms",
    desc: "Polymarket, Kalshi, PredictIt, Manifold and emerging exchanges. Plug TradeTrain into your settlement pipeline to flag insider activity before it hits the headlines.",
    bullets: ["Real-time trade surveillance", "Compliance-ready alert exports", "Per-flag pricing model"],
    accent: "primary",
  },
  {
    tag: "Segment 02",
    title: "Quant Desks & Hedge Funds",
    desc: "Prediction-market desks at quant firms and hedge funds running active strategies. Use the same identity graph defensively — vet counterparties, monitor crowded trades, and avoid markets contaminated by insiders.",
    bullets: ["Counterparty intelligence", "Crowded-trade detection", "Pre-trade signal feeds"],
    accent: "accent",
  },
];

export function Customers() {
  return (
    <section id="coverage" className="border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">// who it's for</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">Two sides of the same market.</h2>
          <p className="mt-5 text-muted-foreground">
            We sell to the platforms running the markets — and to the desks trading them.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {segments.map((s) => {
            const accentColor = s.accent === "primary" ? "text-primary" : "text-accent";
            const accentBorder = s.accent === "primary" ? "border-primary/40" : "border-accent/40";
            return (
              <div key={s.title} className="group relative overflow-hidden rounded-xl border border-border bg-surface p-8 transition hover:bg-surface-elevated">
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent ${accentColor}`} />
                <div className={`mb-5 inline-block rounded border ${accentBorder} px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${accentColor}`}>
                  {s.tag}
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 font-mono text-xs">
                      <span className={`h-1.5 w-1.5 rounded-full ${s.accent === "primary" ? "bg-primary" : "bg-accent"}`} />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
