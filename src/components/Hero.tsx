export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-4 py-1.5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Live · 1,247 suspicious trades flagged this week
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Surveillance for the <br />
            <span className="text-primary text-glow">prediction market</span> era.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            TradeTrain detects insider trading and market manipulation across prediction markets
            using a foundational identity graph that links traders to their employers,
            social networks, and on-chain wallets in real time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90 glow-primary">
              Request a demo
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#product" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3 font-mono text-sm uppercase tracking-wider text-foreground backdrop-blur transition hover:bg-surface-elevated">
              See how it works
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
            <span>Built for</span>
            <span className="text-foreground/80">Polymarket</span>
            <span className="text-foreground/80">Kalshi</span>
            <span className="text-foreground/80">PredictIt</span>
            <span className="text-foreground/80">Manifold</span>
          </div>
        </div>
      </div>
    </section>
  );
}
