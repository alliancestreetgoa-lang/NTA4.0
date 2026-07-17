import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { divisions } from "@/lib/data";
import { asset } from "@/lib/asset";

export function TradeIndex() {
  const fertilizer = divisions[0];
  const rest = divisions.slice(1);

  return (
    <section className="border-y border-ink/10 bg-sand-50">
      <div className="container-px py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we trade"
            title="Six trading divisions, one accountable counterparty."
          />
          <Reveal delay={2}>
            <Link href="/commodities" className="link-underline shrink-0 text-ink">
              View all commodities
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Flagship: chemical fertilizers, expanded row */}
        <Reveal className="mt-14">
          <Link
            href={`/commodities#${fertilizer.slug}`}
            className="group grid overflow-hidden rounded-xl border border-white/15 bg-ink-900 transition-colors duration-500 hover:border-accent/60 lg:grid-cols-12"
          >
            <div className="p-8 md:p-10 lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-white/60">01</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  Flagship division
                </span>
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold text-white md:text-4xl">
                {fertilizer.title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#A6A29A]">
                The cornerstone of NTA Group — nitrogen, phosphate, potash and
                specialty grades, sourced from reliable origins and delivered
                to farmers, blenders and distributors worldwide.
              </p>
              <ul
                className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2"
                aria-label="Fertilizer product groups"
              >
                {fertilizer.groups.map((g) => (
                  <li
                    key={g.heading}
                    className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[#A6A29A]"
                  >
                    <span aria-hidden className="h-px w-4 bg-accent" />
                    {g.heading}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
                <span className="link-underline">Explore the division</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="relative hidden min-h-[300px] lg:col-span-5 lg:block">
              <Image
                src={asset("/fertilizers/flagship-plant.png")}
                alt="Seedling growing in soil dressed with fertilizer granules"
                fill
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-ink-900 via-transparent to-transparent"
              />
            </div>
          </Link>
        </Reveal>

        {/* Index of the remaining divisions — cargo-manifest rows */}
        <RevealGroup className="mt-6 border-t border-ink/10">
          {rest.map((d, i) => (
            <Reveal key={d.slug} delay={i}>
              <Link
                href={`/commodities#${d.slug}`}
                className="group relative grid items-baseline gap-x-6 gap-y-1 border-b border-ink/10 py-5 transition-colors duration-300 hover:bg-accent/[0.06] sm:grid-cols-[3rem_minmax(0,18rem)_1fr_auto] sm:py-6"
              >
                {/* Ledger rule that draws down the row edge on hover. */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-px bg-accent opacity-0 transition-opacity duration-300 ease-premium group-hover:opacity-100 motion-reduce:transition-none"
                />
                <span className="font-mono text-xs text-ink/60 transition-colors duration-300 group-hover:text-accent-deep">
                  0{i + 2}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink md:text-xl">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-sand-500 sm:truncate">
                  {d.short}
                </p>
                <ArrowUpRight className="hidden h-4 w-4 text-ink/35 transition-all duration-300 group-hover:text-accent motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1 sm:block" />
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
