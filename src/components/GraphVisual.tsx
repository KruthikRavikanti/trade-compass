type Node = { id: string; x: number; y: number; label: string; type: "trader" | "company" | "social" | "wallet"; flagged?: boolean };

const nodes: Node[] = [
  { id: "t1", x: 50, y: 50, label: "@trader_jay", type: "trader", flagged: true },
  { id: "c1", x: 18, y: 25, label: "Goldman OTC", type: "company" },
  { id: "s1", x: 82, y: 22, label: "LinkedIn", type: "social" },
  { id: "w1", x: 85, y: 70, label: "0x4a..f2", type: "wallet", flagged: true },
  { id: "t2", x: 22, y: 78, label: "@quant_kim", type: "trader" },
  { id: "s2", x: 50, y: 92, label: "IG cluster", type: "social", flagged: true },
  { id: "c2", x: 65, y: 8, label: "Hedge LP", type: "company" },
];

const edges = [
  ["t1", "c1"], ["t1", "s1"], ["t1", "w1"], ["t1", "t2"],
  ["t2", "s2"], ["t1", "c2"], ["w1", "s2"], ["c1", "c2"],
];

const typeColor: Record<Node["type"], string> = {
  trader: "var(--primary)",
  company: "var(--accent)",
  social: "oklch(0.65 0.20 295)",
  wallet: "var(--warning)",
};

export function GraphVisual() {
  const find = (id: string) => nodes.find((n) => n.id === id)!;
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-background">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 scan-line animate-scan" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {edges.map(([a, b], i) => {
          const na = find(a), nb = find(b);
          const flagged = na.flagged && nb.flagged;
          return (
            <line
              key={i}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke={flagged ? "var(--destructive)" : "var(--border)"}
              strokeWidth={flagged ? "0.4" : "0.25"}
              strokeDasharray={flagged ? "1 1" : "none"}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div className="relative flex flex-col items-center gap-1.5">
            <div
              className={`relative h-3 w-3 rounded-full ${n.flagged ? "pulse-dot" : ""}`}
              style={{ background: n.flagged ? "var(--destructive)" : typeColor[n.type], boxShadow: `0 0 12px ${n.flagged ? "var(--destructive)" : typeColor[n.type]}` }}
            />
            <span className="whitespace-nowrap rounded border border-border bg-background/90 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground backdrop-blur">
              {n.label}
            </span>
          </div>
        </div>
      ))}

      <div className="absolute right-3 top-3 rounded border border-destructive/40 bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-destructive backdrop-blur">
        ● Flagged cluster
      </div>
      <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        graph.engine v0.1 · 7 nodes · 8 edges
      </div>
    </div>
  );
}
