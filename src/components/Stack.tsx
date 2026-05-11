const stack = [
  ["Graph DB", "AWS Neptune"],
  ["ML", "Neptune ML · PyTorch GNNs"],
  ["Backend", "Golang"],
  ["Streaming", "AWS Kinesis"],
  ["Identity", "Senzing"],
  ["On-chain", "Alchemy · Polygon"],
  ["Social", "Apify · Bright Data"],
  ["LLM", "Claude 3.5 Sonnet"],
  ["Viz", "Sigma.js"],
];

export function Stack() {
  return (
    <section id="graph-engine" className="border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">// stack</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">Built on infra that scales with the markets.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Engineered for sub-second flagging at exchange-grade volume.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {stack.map(([k, v]) => (
            <div key={k} className="group bg-surface p-5 transition hover:bg-surface-elevated">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="mt-1 font-display text-lg font-semibold">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
