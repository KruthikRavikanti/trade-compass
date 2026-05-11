const team = [
  { name: "Erik", role: "Co-founder", bio: "Previously SWE at Amazon and Block." },
  { name: "Kevin", role: "Co-founder", bio: "Previously at Snowflake and Coinbase." },
  { name: "Kruthik", role: "Co-founder", bio: "ML researcher at Georgia Tech. Create-X alum." },
];

export function Team() {
  return (
    <section id="team" className="border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">// team</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">Three engineers from fintech, infra & ML.</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="bg-surface p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background font-display text-2xl font-bold text-primary">
                {m.name[0]}
              </div>
              <div className="font-display text-xl font-semibold">{m.name}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{m.role}</div>
              <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
