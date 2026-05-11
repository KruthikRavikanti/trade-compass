import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <Logo />
        <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          © 2026 TradeTrain Inc. · New York, NY
        </div>
        <div className="flex gap-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Security</a>
          <a href="mailto:hello@tradetrain.ai" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
