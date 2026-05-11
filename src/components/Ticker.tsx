const events = [
  { tag: "FLAG", text: "Wallet 0x4a..f2 → @trader_jay → Goldman OTC desk", level: "danger" },
  { tag: "RISK", text: "Cluster of 14 accounts share Brooklyn IP block", level: "warning" },
  { tag: "FLAG", text: "Super Bowl streaker market · streaker IRL acquaintance", level: "danger" },
  { tag: "OK", text: "Identity resolved · Polymarket whale · public quant", level: "ok" },
  { tag: "FLAG", text: "Election market · 3 traders linked to campaign staffer", level: "danger" },
  { tag: "RISK", text: "Wash-trading pattern across 6 wallets · Kalshi", level: "warning" },
];

const levelColor: Record<string, string> = {
  danger: "text-destructive border-destructive/40",
  warning: "text-warning border-warning/40",
  ok: "text-primary border-primary/40",
};

export function Ticker() {
  const items = [...events, ...events];
  return (
    <div className="overflow-hidden border-y border-border bg-surface/40 py-3">
      <div className="flex w-max animate-ticker gap-4">
        {items.map((e, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3 font-mono text-xs">
            <span className={`rounded border px-2 py-0.5 uppercase tracking-widest ${levelColor[e.level]}`}>{e.tag}</span>
            <span className="text-muted-foreground">{e.text}</span>
            <span className="text-border">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}
