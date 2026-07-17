import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { HeroBlocks } from "@/components/home/HeroBlocks";
import { Marquee } from "@/components/home/Marquee";
import { TradeIndex } from "@/components/home/TradeIndex";
import { FlagshipCarousel } from "@/components/home/FlagshipCarousel";
import { HowWeWork } from "@/components/home/HowWeWork";
import { StatLedger } from "@/components/blocks/stat-ledger";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { aboutPoints } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroBlocks />
      <Marquee />

      {/* ABOUT PREVIEW */}
      <section className="container-px py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              title="A global commodity trading company, rooted in the UAE."
              direction="left"
            />
            <Reveal delay={2} direction="left">
              <p className="mt-6 text-lg leading-relaxed text-sand-500">
                From our headquarters in the United Arab Emirates, NTA Group
                connects the world&apos;s producers, suppliers and
                manufacturers with the markets that need them — across energy,
                fertilizers and agricultural commodities.
              </p>
            </Reveal>
            <Reveal delay={3} direction="left">
              <Link href="/about" className="mt-9 inline-flex">
                <span className="btn-outline group">
                  Discover our story
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <RevealGroup className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {aboutPoints.slice(0, 4).map((p) => (
                <Reveal key={p.title} direction="right">
                  <div className="border-t border-ink/12 pt-5">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-accent-deep" />
                      <h3 className="font-display text-base font-semibold text-ink">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-sand-500">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* PROOF BY NUMBERS — count-up ledger (21st Count Animation, re-themed) */}
      <StatLedger
        eyebrow="By the numbers"
        items={[
          { value: "6", label: "Trading divisions" },
          { value: "40+", label: "Destination markets" },
          { value: "20+", label: "Fertilizer grades" },
          { value: "24/7", label: "Desk coverage" },
        ]}
      />

      {/* WHAT WE TRADE — flagship + division index */}
      <TradeIndex />

      {/* FLAGSHIP FERTILIZER PORTFOLIO — 21st.dev feature carousel */}
      <FlagshipCarousel />

      {/* WHY NTA + SERVICES — credibility ledger on paper */}
      <HowWeWork />

      <CTABand />
    </>
  );
}
