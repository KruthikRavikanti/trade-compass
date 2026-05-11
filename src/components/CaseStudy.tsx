export function CaseStudy() {
  return (
    <section className="relative border-b border-border/50 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-destructive">// case file · 02.09.25</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
              The Super Bowl streaker trade.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Minutes before kickoff, a flurry of YES bets hit the "will there be a streaker" market.
              The streaker turned out to be a personal acquaintance of several traders. Today
              there's no system to catch this. We're building it.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-border bg-background font-mono text-sm">
              <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="ml-3 text-xs uppercase tracking-widest text-muted-foreground">tradetrain · alert.log</span>
              </div>
              <div className="space-y-2 p-5 text-xs leading-relaxed sm:text-sm">
                <p><span className="text-muted-foreground">[02:09:43]</span> <span className="text-primary">stream</span> kalshi.market:streaker_sb59 → 14 new YES @ &gt;$0.40</p>
                <p><span className="text-muted-foreground">[02:09:44]</span> <span className="text-accent">resolve</span> 14 wallets → 11 distinct identities</p>
                <p><span className="text-muted-foreground">[02:09:45]</span> <span className="text-accent">graph</span> traversing 2-hop neighborhood…</p>
                <p><span className="text-muted-foreground">[02:09:46]</span> <span className="text-warning">match</span> 6 of 11 identities follow @streaker_irl on IG</p>
                <p><span className="text-muted-foreground">[02:09:47]</span> <span className="text-warning">match</span> 4 of 11 attended same college 2018–2022</p>
                <p className="rounded border border-destructive/40 bg-destructive/10 p-3 text-destructive">
                  [02:09:48] FLAG · cluster_a91 · confidence 0.94<br/>
                  reason: pre-event coordinated entry + irl proximity to outcome subject<br/>
                  → notified: kalshi.compliance@
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
