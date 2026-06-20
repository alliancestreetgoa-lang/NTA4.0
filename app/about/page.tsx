import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { aboutPoints } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "NTA Group is a UAE-based global commodity trading company with international market presence, a global sourcing network and a commitment to quality and sustainable partnerships.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NTA Group"
        title="Connecting global producers with the markets that need them."
        intro="A UAE-based commodity trading company built on trust, expertise and an unwavering commitment to reliable global supply."
        image="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Narrative */}
      <section className="container-px py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we are"
              title="A diversified global commodity trading company."
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal-light">
              <Reveal>
                <p>
                  NTA Group is headquartered in the United Arab Emirates — a
                  natural crossroads for global trade. From this strategic
                  position, we trade and supply across three pillars: chemical
                  fertilizers, energy, and agricultural commodities.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p>
                  Our flagship division, Chemical Fertilizers, supplies the full
                  spectrum of nitrogen, phosphate, potash and specialty
                  fertilizers to agricultural markets worldwide. Alongside it,
                  our energy, oil, petrochemicals and grains desks serve
                  industrial and food markets across continents.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p>
                  We exist to make global commodity flows dependable — matching
                  reliable producers with the buyers, distributors and
                  governments who depend on consistent, quality supply.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={1}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518434304314-1f6e0e8d39e2?auto=format&fit=crop&w=1400&q=80"
                  alt="Global trade and shipping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-ink text-white">
        <div className="container-px py-16">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} delay={i}>
                <div>
                  <div className="font-display text-4xl font-semibold md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-white/55">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What defines us */}
      <section className="container-px py-24 md:py-32">
        <SectionHeading
          eyebrow="What defines us"
          title="Principles that guide every transaction."
          align="center"
        />
        <RevealGroup className="mx-auto mt-16 grid max-w-5xl gap-x-12 gap-y-9 sm:grid-cols-2">
          {aboutPoints.map((p) => (
            <Reveal key={p.title}>
              <div className="flex gap-4 border-t border-line pt-6">
                <Check className="mt-1 h-5 w-5 shrink-0 text-sand-500" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <CTABand />
    </>
  );
}
