import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, ShieldCheck, Globe2, Sparkles } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { DivisionCard } from "@/components/DivisionCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { divisions, whyNta, aboutPoints, services } from "@/lib/data";

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
              eyebrow="About NTA Group"
              title="A global commodity trading company, rooted in the UAE."
            />
            <Reveal delay={2}>
              <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
                From our headquarters in the United Arab Emirates, NTA Group
                connects the world&apos;s producers, suppliers and
                manufacturers with the markets that need them — across energy,
                fertilizers and agricultural commodities.
              </p>
            </Reveal>
            <Reveal delay={3}>
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
              {aboutPoints.map((p) => (
                <Reveal key={p.title}>
                  <div className="border-t border-line pt-5">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-sand-500" />
                      <h3 className="font-display text-base font-semibold text-ink">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-charcoal-light">
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
      <section className="border-y border-line bg-sand-50/60">
        <div className="container-px py-24 md:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Core Business Divisions"
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
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-px py-24 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <span className="eyebrow text-white/60 [&::before]:bg-sand-400">
                  Primary Focus · Flagship Division
                </span>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-6 text-display-md font-display font-semibold text-balance">
                  Chemical Fertilizers Trading
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
                  {fertilizer.description}
                </p>
              </Reveal>

              <Reveal delay={3}>
                <div className="mt-9 flex flex-wrap gap-2.5">
                  {[
                    "Urea 46%",
                    "DAP",
                    "MAP",
                    "NPK",
                    "Potash (MOP)",
                    "SOP",
                    "CAN",
                    "Ammonium Sulphate",
                    "Sulphur",
                    "TSP",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={4}>
                <Link
                  href="/commodities#chemical-fertilizers"
                  className="mt-10 inline-flex"
                >
                  <span className="btn-light group">
                    Explore fertilizer portfolio
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={fertilizer.image}
                  alt="Chemical fertilizers trading"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-px border-t border-white/15 bg-white/10">
                  <div className="bg-ink/60 px-6 py-5 backdrop-blur">
                    <div className="font-display text-2xl font-semibold">
                      20+
                    </div>
                    <div className="mt-1 text-xs text-white/60">
                      Fertilizer grades supplied
                    </div>
                  </div>
                  <div className="bg-ink/60 px-6 py-5 backdrop-blur">
                    <div className="font-display text-2xl font-semibold">
                      Global
                    </div>
                    <div className="mt-1 text-xs text-white/60">
                      Vessel & container reach
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY NTA */}
      <section className="container-px py-24 md:py-32">
        <SectionHeading
          eyebrow="Why NTA Group"
          title="The advantages of a trusted global trading partner."
          align="center"
        />
        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whyNta.map((item, i) => {
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
      </section>

      {/* COMMODITY SOLUTIONS / SERVICES */}
      <section className="border-y border-line bg-sand-50/60">
        <div className="container-px py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Global Commodity Solutions"
                title="End-to-end services across the value chain."
              />
              <Reveal delay={2}>
                <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
                  Beyond physical trading, we deliver the sourcing, logistics
                  and risk management capabilities that make global commodity
                  flows reliable.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <RevealGroup className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {services.map((s) => (
                  <Reveal key={s.title}>
                    <div className="flex gap-4 border-t border-line pt-5">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-ink">
                          {s.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-charcoal-light">
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
