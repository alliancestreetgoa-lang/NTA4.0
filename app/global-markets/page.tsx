import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { GlobalMap } from "@/components/GlobalMap";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { markets } from "@/lib/data";

export const metadata: Metadata = {
  title: "Global Markets",
  description:
    "NTA Group trades across the UAE, GCC, Africa, India, Southeast Asia and Europe — connected by global trade routes and shipping lanes from our Dubai trading hub.",
};

export default function GlobalMarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Markets"
        title="A trading network connecting continents."
        intro="From our hub in the UAE, we move commodities along the world's most important trade routes — reliably, and at scale."
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Map */}
      <section className="bg-ink">
        <div className="container-px py-20 md:py-28">
          <div className="mb-12 max-w-2xl">
            <Reveal>
              <span className="eyebrow text-white/60 [&::before]:bg-sand-400">
                Trade routes & shipping lanes
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-5 text-display-md font-display font-semibold text-white">
                Six key regions. One connected network.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <GlobalMap />
          </Reveal>
        </div>
      </section>

      {/* Region cards */}
      <section className="container-px py-24 md:py-32">
        <SectionHeading
          eyebrow="Where we operate"
          title="Markets we serve worldwide."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m, i) => (
            <Reveal key={m.region}>
              <div className="group flex h-full flex-col border border-line bg-white p-8 card-hover hover:border-ink/20 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
                <span className="font-display text-xs font-semibold tabular-nums text-sand-400">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                  {m.region}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-sand-500">
                  {m.role}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-light">
                  {m.blurb}
                </p>
                <ArrowUpRight className="mt-6 h-5 w-5 text-charcoal-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <CTABand />
    </>
  );
}
