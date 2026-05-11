export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Run a prediction market?<br />
          <span className="text-primary text-glow">Let's plug in.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          We're partnering with a small number of platforms to ship the first version.
          Get early access and shape the roadmap.
        </p>
        <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            required
            placeholder="you@platform.com"
            className="flex-1 rounded-md border border-border bg-surface/80 px-4 py-3 font-mono text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 backdrop-blur"
          />
          <button className="rounded-md bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90 glow-primary">
            Request access
          </button>
        </form>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Based in New York · Backed by domain expertise
        </p>
      </div>
    </section>
  );
}
