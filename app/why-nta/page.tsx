import type { Metadata } from "next";
import {
  Globe2,
  Truck,
  ShieldCheck,
  LineChart,
  Handshake,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { whyNta } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why NTA Group",
  description:
    "Global network, trusted supply chain, quality assurance, market expertise, strategic partnerships and sustainable growth — the reasons partners choose NTA Group.",
};

const icons: LucideIcon[] = [
  Globe2,
  Truck,
  ShieldCheck,
  LineChart,
  Handshake,
  Leaf,
];

export default function WhyNtaPage() {
  return (
    <>
      <PageHero
        eyebrow="Why NTA Group"
        title="The trusted choice for global commodity trade."
        intro="Six reasons producers, distributors and institutions partner with NTA Group for reliable, large-scale commodity supply."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="container-px py-24 md:py-32">
        <RevealGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyNta.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title}>
                <div className="group flex h-full flex-col border-t-2 border-line bg-white p-8 transition-colors duration-500 hover:border-sand-400">
                  <div className="flex h-14 w-14 items-center justify-center border border-line bg-sand-50 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal-light">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </RevealGroup>
      </section>

      {/* Process band */}
      <section className="border-y border-white/10 bg-ink-900">
        <div className="container-px py-24 md:py-32">
          <SectionHeading
            title="A disciplined approach to every trade."
            align="center"
          />
          <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
            {[
              { step: "01", title: "Source", desc: "Identify reliable origins and producers worldwide." },
              { step: "02", title: "Structure", desc: "Negotiate, contract and structure trade finance." },
              { step: "03", title: "Logistics", desc: "Coordinate freight, inspection and documentation." },
              { step: "04", title: "Deliver", desc: "On-time, quality-assured delivery to market." },
            ].map((s) => (
              <Reveal key={s.step} className="bg-white">
                <div className="h-full bg-white p-8">
                  <span className="font-display text-3xl font-semibold text-sand-300">
                    {s.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand />
    </>
  );
}
