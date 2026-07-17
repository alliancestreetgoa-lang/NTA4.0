import type { Metadata } from "next";
import { Building2, Globe2, Sprout, TrendingUp, Factory, Ship } from "lucide-react";
import { PageHero21 } from "@/components/blocks/page-hero";
import { FeatureBento } from "@/components/blocks/feature-bento";
import { StatLedger } from "@/components/blocks/stat-ledger";
import { CTASection } from "@/components/blocks/cta-section";
import { GlobalMap } from "@/components/GlobalMap";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { markets } from "@/lib/data";
import { asset } from "@/lib/asset";

// Representative trade corridors (art-directed, labelled as such — not a claim
// of specific booked cargoes; confirm real lanes with NTA before publishing).
const corridors = [
  { from: "Middle East", to: "South Asia", cargo: "Urea · DAP", mode: "Bulk vessel" },
  { from: "Black Sea", to: "East Africa", cargo: "Wheat · Grains", mode: "Bulk vessel" },
  { from: "Arabian Gulf", to: "Far East", cargo: "Gasoil · LPG", mode: "Tanker" },
  { from: "Caspian", to: "South Asia", cargo: "MoP · Potash", mode: "Bulk vessel" },
  { from: "North Africa", to: "Europe", cargo: "Petrochemicals", mode: "Container" },
  { from: "GCC", to: "India", cargo: "Fertilizers · Energy", mode: "Multi-modal" },
];

export const metadata: Metadata = {
  title: "Global Markets",
  description:
    "NTA Group trades across the UAE, GCC, Africa, India, Southeast Asia and Europe — connected by global trade routes and shipping lanes from our Dubai trading hub.",
};

const marketIcons = [Building2, Globe2, Sprout, TrendingUp, Factory, Ship];

// One region-evocative image per market (vendored locally).
const marketImages = [
  "/images/vendor/dubai-skyline-night.jpg", // UAE — Dubai skyline / port
  "/images/vendor/energy-lng.jpg", // GCC — Gulf energy / LNG terminal
  "/images/vendor/grains-harvest.jpg", // Africa — grain / farmland
  "/images/vendor/india-paddy.jpg", // India — rice paddy / agriculture
  "/images/vendor/rice-terraces.jpg", // Southeast Asia — rice terraces
  "/images/vendor/container-port.jpg", // Europe — container port / corridors
];

export default function GlobalMarketsPage() {
  return (
    <>
      <PageHero21
        eyebrow="Global Markets"
        title={
          <>
            One connected <span className="text-accent-deep">global network</span>
          </>
        }
        subtitle="From our hub in the UAE, we move commodities along the world's most important trade routes — reliably, and at scale."
        primary={{ text: "Contact Trading Team", href: "/contact" }}
      />

      {/* Scale band */}
      <StatLedger
        eyebrow="Reach"
        items={[
          { value: "40+", label: "Destination markets" },
          { value: "6", label: "Regions served" },
          { value: "24/7", label: "Desk coverage" },
        ]}
      />

      <section className="border-t">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold md:text-5xl">
              Six key regions. One connected network.
            </h2>
          </Reveal>
          <Reveal delay={1} className="mt-12">
            <GlobalMap />
          </Reveal>
        </div>
      </section>

      <FeatureBento
        title="Markets we serve worldwide"
        items={markets.map((m, i) => ({
          title: m.region,
          description: `${m.role} — ${m.blurb}`,
          icon: marketIcons[i] ?? Globe2,
          image: asset(marketImages[i % marketImages.length]),
          wide: i === 0,
        }))}
      />

      {/* Trade corridors — sharp manifest ledger */}
      <section className="bg-sand-50">
        <div className="container-px py-24 md:py-32">
          <Reveal>
            <span className="eyebrow block">Trade corridors</span>
            <h2 className="mt-5 max-w-2xl text-display-md font-display font-semibold text-balance text-ink">
              The lanes we run, origin to destination.
            </h2>
          </Reveal>
          <div className="mt-12 overflow-x-auto">
            <RevealGroup className="min-w-[640px]">
              <RevealItem className="grid grid-cols-[1.2fr_1.2fr_1.4fr_1fr] gap-4 border-b border-ink/12 pb-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sand-500">
                <span>Origin</span>
                <span>Destination</span>
                <span>Commodities</span>
                <span>Mode</span>
              </RevealItem>
              {corridors.map((c, i) => (
                <RevealItem
                  key={`${c.from}-${c.to}`}
                  className="group grid grid-cols-[1.2fr_1.2fr_1.4fr_1fr] items-center gap-4 border-b border-ink/10 py-5 transition-colors duration-300 hover:border-accent/40 hover:bg-ink/[0.04]"
                >
                  <span className="font-mono text-xs text-sand-500 transition-colors duration-300 group-hover:text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                    <span className="ml-3 font-display text-base font-semibold text-ink">
                      {c.from}
                    </span>
                  </span>
                  <span className="font-display text-base font-semibold text-ink">
                    <span className="mr-2 inline-block text-accent-deep transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                    {c.to}
                  </span>
                  <span className="text-sm text-sand-500">{c.cargo}</span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink/70">
                    {c.mode}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-sand-500">
            Representative corridors
          </p>
        </div>
      </section>

      <CTASection
        badge={{ text: "40+ markets" }}
        title="Trade across every corridor."
        action={{ text: "Contact Trading Team", href: "/contact" }}
      />
    </>
  );
}
