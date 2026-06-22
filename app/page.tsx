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

const fImg = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&q=70`;

// Flagship fertilizer line-up (circular product chips with grades)
const flagshipGrades = [
  { name: "Urea 46%", grade: "46-0-0 · 46% N", img: fImg("photo-1710223221719-6251cb1b5c5b") },
  { name: "DAP", grade: "18-46-0 · N + P", img: fImg("photo-1656581417767-5eb8ecd8bf3c") },
  { name: "MAP", grade: "11-52-0 · 52% P₂O₅", img: fImg("photo-1774351922689-896a9340aa7b") },
  { name: "NPK", grade: "Various grades", img: fImg("photo-1537155023352-cda15844e56d") },
  { name: "Potash (MOP)", grade: "60% K₂O", img: fImg("photo-1641543764196-f5e42a65a0db") },
  { name: "SOP", grade: "50% K₂O · 18% S", img: fImg("photo-1559924632-fff3ee79c1dc") },
  { name: "CAN", grade: "27% N", img: fImg("photo-1632858918575-f865ab926cc0") },
  { name: "Ammonium Sulphate", grade: "21% N · 24% S", img: fImg("photo-1612708015264-5f13c037c9cd") },
  { name: "Sulphur", grade: "90% S (min.)", img: fImg("photo-1537870148480-ed9ff56a8148") },
  { name: "TSP", grade: "0-46-0 · 46% P₂O₅", img: fImg("photo-1542308744-011fa9a309f7") },
];

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
              eyebrow="About NTA Group"
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
              {aboutPoints.map((p) => (
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
      <section className="border-y border-white/15 bg-sand-600">
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
              <span className="eyebrow text-white/60 [&::before]:bg-lime-400">
                Primary Focus · Flagship Division
              </span>
            </Reveal>
            <Reveal delay={1} direction="left">
              <h2 className="mt-6 text-display-md font-display font-semibold text-balance">
                Chemical Fertilizers Trading
              </h2>
            </Reveal>
            <Reveal delay={2} direction="left">
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                Chemical fertilizers are the cornerstone of NTA Group. We{" "}
                <span className="font-medium text-lime-400">source</span>,{" "}
                <span className="font-medium text-lime-400">supply</span> and{" "}
                <span className="font-medium text-lime-400">distribute</span> the
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

          {/* Product chips + capability features */}
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <RevealGroup className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 md:grid-cols-5 lg:col-span-8">
              {flagshipGrades.map((p) => (
                <Reveal key={p.name}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/15 ring-1 ring-white/5 transition-transform duration-500 hover:scale-105">
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="mt-3 font-display text-sm font-semibold leading-tight [text-shadow:0_1px_8px_rgba(10,10,11,0.85)]">
                      {p.name}
                    </div>
                    <div className="mt-1 text-[0.7rem] leading-tight text-sand-300 [text-shadow:0_1px_8px_rgba(10,10,11,0.85)]">
                      {p.grade}
                    </div>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>

            <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-12">
              <RevealGroup className="space-y-6">
                {flagshipFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <Reveal key={f.title}>
                      <div className="flex gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                        <Icon
                          className="h-6 w-6 shrink-0 text-white"
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
            </div>
          </div>

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
      <section className="border-y border-white/15 bg-sand-600">
        <div className="container-px py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Global Commodity Solutions"
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
            </div>

            <div className="lg:col-span-8">
              <RevealGroup className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {services.map((s) => (
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
