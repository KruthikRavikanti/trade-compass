import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Product } from "@/components/Product";
import { CaseStudy } from "@/components/CaseStudy";
import { Stack } from "@/components/Stack";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TradeTrain — Surveillance for prediction markets" },
      { name: "description", content: "TradeTrain detects insider trading and market manipulation across prediction markets using a foundational identity graph." },
      { property: "og:title", content: "TradeTrain — Surveillance for prediction markets" },
      { property: "og:description", content: "Real-time flagging of illegal trades on Polymarket, Kalshi, and beyond." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Product />
        <CaseStudy />
        <Stack />
        <Stats />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
