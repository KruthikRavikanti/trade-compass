export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-7 w-7">
        <svg viewBox="0 0 32 32" className="h-full w-full">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary opacity-40" />
          <circle cx="16" cy="16" r="3" fill="currentColor" className="text-primary" />
          <circle cx="6" cy="10" r="2" fill="currentColor" className="text-primary/70" />
          <circle cx="26" cy="8" r="2" fill="currentColor" className="text-accent" />
          <circle cx="24" cy="24" r="2" fill="currentColor" className="text-destructive" />
          <circle cx="8" cy="24" r="2" fill="currentColor" className="text-primary/70" />
          <line x1="16" y1="16" x2="6" y2="10" stroke="currentColor" strokeWidth="1" className="text-primary/50" />
          <line x1="16" y1="16" x2="26" y2="8" stroke="currentColor" strokeWidth="1" className="text-accent/50" />
          <line x1="16" y1="16" x2="24" y2="24" stroke="currentColor" strokeWidth="1" className="text-destructive/60" />
          <line x1="16" y1="16" x2="8" y2="24" stroke="currentColor" strokeWidth="1" className="text-primary/50" />
        </svg>
      </div>
      <span className="font-display text-lg font-bold tracking-tight">
        Trade<span className="text-primary">Train</span>
      </span>
    </div>
  );
}
