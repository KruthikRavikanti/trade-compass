import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {["Product", "Graph Engine", "Coverage"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground sm:block">
            Sign in
          </a>
          <a href="#contact" className="rounded-md bg-primary px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90">
            Request demo
          </a>
        </div>
      </div>
    </header>
  );
}
