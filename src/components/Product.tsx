import { GraphVisual } from "./GraphVisual";

const features = [
  { k: "01", t: "Identity Resolution", d: "Wallets, social handles, employers, and IPs collapsed into a single trader entity using Senzing + custom resolvers." },
  { k: "02", t: "Connection Graph", d: "AWS Neptune + GNNs surface non-obvious links between traders, insiders, and the entities they trade on." },
  { k: "03", t: "Real-time Ingestion", d: "AWS Kinesis streams exchange data; Alchemy ingests Polygon on-chain trades the moment they settle." },
  { k: "04", t: "Explainable Flags", d: "Every alert ships with the reasoning chain — the path through the graph that made it suspicious." },
];

export function Product() {
  return (
    <section id="product" className="relative border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">// product</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Trade surveillance, rebuilt for markets that bet on anything.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Legacy surveillance tools were built for order books. Prediction markets need something
            new — one that understands real-world relationships, not just trade tape.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <GraphVisual />
          </div>
          <div className="order-1 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:order-2">
            {features.map((f) => (
              <div key={f.k} className="bg-surface p-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-primary">{f.k}</span>
                  <h3 className="font-display text-lg font-semibold">{f.t}</h3>
                </div>
                <p className="mt-2 pl-10 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
