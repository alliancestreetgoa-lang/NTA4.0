import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Globe2,
  Sparkles,
  Warehouse,
  Leaf,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { BangladeshFertilizers } from "@/components/home/BangladeshFertilizers";
import { DivisionCard } from "@/components/DivisionCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { divisions, whyNta, aboutPoints, services } from "@/lib/data";
import { asset } from "@/lib/asset";

const flagshipFeatures = [
  { icon: Globe2, title: "Global sourcing network", desc: "Direct access to producers across continents." },
  { icon: Warehouse, title: "Reliable supply & logistics", desc: "Vessel and container shipments worldwide." },
  { icon: Leaf, title: "Quality you can trust", desc: "Partnerships built to grow, season after season." },
];

export default function HomePage() {
  const fertilizer = divisions[0];

  return (
    <>
      <Hero />
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
              <p className="mt-6 text-lg leading-relaxed text-white/70">
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
                  <div className="border-t border-white/15 pt-5">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-white" />
                      <h3 className="font-display text-base font-semibold text-white">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* BUSINESS DIVISIONS */}
      <section className="border-y border-white/10 bg-ink-900">
        <div className="container-px py-24 md:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              title="Six divisions. One trusted global trading partner."
            />
            <Reveal delay={2}>
              <Link href="/commodities" className="link-underline shrink-0">
                View all commodities
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d, i) => (
              <DivisionCard
                key={d.slug}
                slug={d.slug}
                title={d.title}
                short={d.short}
                primary={d.primary}
                index={i}
              />
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FERTILIZER FOCUS — flagship */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink text-white">
        {/* Plant image — top-right corner, edges blurred into the dark on all four sides */}
        <Parallax
          distance={40}
          className="pointer-events-none absolute right-0 top-0 hidden h-[66%] w-[52%] lg:block"
        >
          <Image
            src={asset("/fertilizers/flagship-plant.png")}
            alt="Seedling with fertilizer granules in soil"
            fill
            priority
            className="object-cover object-center"
            sizes="52vw"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, #000 16%, #000 84%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 16%, #000 84%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskImage:
                "linear-gradient(to right, transparent 0%, #000 16%, #000 84%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 16%, #000 84%, transparent 100%)",
              maskComposite: "intersect",
            }}
          />
        </Parallax>

        <div className="container-px relative z-10 py-16">
          {/* Header: title + intro */}
          <div className="max-w-2xl">
            <Reveal direction="left">
              <h2 className="text-display-md font-display font-semibold text-balance">
                Chemical Fertilizers Trading
              </h2>
            </Reveal>
            <Reveal delay={2} direction="left">
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                Chemical fertilizers are the cornerstone of NTA Group. We{" "}
                <span className="font-medium text-accent">source</span>,{" "}
                <span className="font-medium text-accent">supply</span> and{" "}
                <span className="font-medium text-accent">distribute</span> the
                full spectrum of nitrogen, phosphate, potash and specialty
                fertilizers to farmers, blenders and distributors across global
                agricultural markets.
              </p>
            </Reveal>
          </div>

          {/* Mobile image */}
          <Reveal className="mt-8 lg:hidden">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={asset("/fertilizers/flagship-plant.png")}
                alt="Seedling with fertilizer granules in soil"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </Reveal>

          {/* Capability features */}
          <RevealGroup className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            {flagshipFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title}>
                  <div className="flex gap-4">
                    <Icon
                      className="h-6 w-6 shrink-0 text-accent"
                      strokeWidth={1.5}
                    />
                    <div>
                      <div className="font-display text-base font-semibold [text-shadow:0_1px_8px_rgba(10,10,11,0.7)]">
                        {f.title}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-white/80 [text-shadow:0_1px_8px_rgba(10,10,11,0.7)]">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>

          {/* CTA + tagline */}
          <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <Link href="#bangladesh-fertilizers" className="inline-flex">
              <span className="btn-light group">
                Explore fertilizer portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
              <Leaf className="h-4 w-4 text-sand-400" strokeWidth={1.6} />
              Nourishing crops · Enriching lives · Growing together
            </p>
          </div>
        </div>
      </section>

      {/* BANGLADESH FERTILIZER REQUIREMENT */}
      <BangladeshFertilizers />

      {/* WHY NTA */}
      <section className="container-px py-24 md:py-32">
        <SectionHeading
          title="The advantages of a trusted global trading partner."
          align="center"
        />
        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whyNta.slice(0, 3).map((item, i) => {
            const icons = [Globe2, ShieldCheck, Check, Sparkles, ShieldCheck, Globe2];
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} className="bg-white">
                <div className="group h-full bg-white p-9 transition-colors duration-500 hover:bg-sand-50">
                  <Icon
                    className="h-7 w-7 text-ink"
                    strokeWidth={1.4}
                  />
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </RevealGroup>
        <Reveal className="mt-12 text-center">
          <Link href="/why-nta" className="link-underline mx-auto">
            See all six reasons to partner with NTA
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* COMMODITY SOLUTIONS / SERVICES */}
      <section className="border-y border-white/10 bg-ink-900">
        <div className="container-px py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                title="End-to-end services across the value chain."
                direction="left"
              />
              <Reveal delay={2} direction="left">
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  Beyond physical trading, we deliver the sourcing, logistics
                  and risk management capabilities that make global commodity
                  flows reliable.
                </p>
              </Reveal>
              <Reveal delay={3} direction="left">
                <Link href="/commodities" className="link-underline mt-8">
                  Explore the full commodity portfolio
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <RevealGroup className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {services.slice(0, 6).map((s) => (
                  <Reveal key={s.title} direction="right">
                    <div className="flex gap-4 border-t border-white/15 pt-5">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-white">
                          {s.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
