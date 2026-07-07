"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useScrollReveal } from "@/components/ui/scroll-reveal";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { bangladeshFertilizers, type Fertilizer } from "@/lib/data";
import { asset } from "@/lib/asset";

// Tier dot colour — the one accent marks the primary (Major) grades.
const tierDot: Record<string, string> = {
  Major: "bg-accent",
  Secondary: "bg-sand-300",
  Micronutrient: "bg-white/40",
};

const tierOrder: Record<string, number> = {
  Major: 0,
  Secondary: 1,
  Micronutrient: 2,
};

// Grouped, scannable spec table beats 21 identical image cards: it surfaces the
// formula / grade / tier / crop data (previously hidden behind the posters) and
// keeps every spec-sheet poster one click away per row.
const rows: Fertilizer[] = [...bangladeshFertilizers].sort(
  (a, b) => tierOrder[a.tier] - tierOrder[b.tier]
);

// Featured fan-deck (21st.dev CardStack): the flagship grades, using their
// full-bleed spec-sheet poster art as the card imagery.
const deckItems: CardStackItem[] = rows
  .filter((f) => f.poster)
  .slice(0, 7)
  .map((f) => ({
    id: f.name,
    title: f.name,
    description: `${f.grade} · ${f.crops.slice(0, 3).join(", ")}`,
    imageSrc: asset(f.poster as string),
    href: asset(f.poster as string),
    tag: `${f.tier} grade`,
  }));

export function BangladeshFertilizers() {
  // 21st.dev "Reading Text Reveal" — scroll-linked: rows brighten in reading
  // order as the table scrolls through the viewport's eye-level band.
  const reveal = useScrollReveal(rows.length);
  return (
    <section
      id="bangladesh-fertilizers"
      className="scroll-mt-28 border-y border-white/10 bg-ink-900"
    >
      <div className="container-px py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            title="The complete range of chemical fertilizers we supply."
          />
          <Reveal delay={2}>
            <p className="max-w-sm text-base leading-relaxed text-white/80">
              From the major nitrogen, phosphate and potash grades to essential
              micronutrients — each with a downloadable specification sheet.
            </p>
          </Reveal>
        </div>

        {/* Featured fan-deck of flagship spec-sheet posters (21st.dev CardStack) */}
        <CardStack
          items={deckItems}
          className="mt-12"
          cardWidth={300}
          cardHeight={420}
          maxVisible={7}
          spreadDeg={42}
          overlap={0.52}
          autoAdvance
          intervalMs={3400}
          showDots
          loop
        />

        {/* Tier legend */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" /> Major grade
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sand-300" /> Secondary
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/40" /> Micronutrient
          </span>
        </div>

        <div className="mt-6 overflow-x-auto rounded-sm border border-white/10">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">
                Chemical fertilizers supplied by NTA Group, with chemical
                formula, nutrient grade, tier and primary crops.
              </caption>
              <thead>
                <tr className="border-b border-white/15 bg-white/[0.03] text-[0.68rem] uppercase tracking-[0.14em] text-white/60">
                  <th scope="col" className="px-5 py-4 font-medium">Product</th>
                  <th scope="col" className="px-5 py-4 font-medium">Formula</th>
                  <th scope="col" className="px-5 py-4 font-medium">Grade</th>
                  <th scope="col" className="px-5 py-4 font-medium">Primary crops</th>
                  <th scope="col" className="px-5 py-4 text-right font-medium">Spec sheet</th>
                </tr>
              </thead>
              <tbody ref={(el) => { reveal.containerRef.current = el; }}>
                {rows.map((f, i) => (
                  <tr
                    key={f.name}
                    style={{
                      opacity: reveal.active ? (reveal.isRevealed(i) ? 1 : 0.26) : 1,
                      transform: reveal.active
                        ? reveal.isRevealed(i)
                          ? "translateY(0)"
                          : "translateY(6px)"
                        : undefined,
                      filter: reveal.active
                        ? reveal.isRevealed(i)
                          ? "none"
                          : "blur(0.5px)"
                        : undefined,
                      transition:
                        "opacity 450ms ease, transform 450ms cubic-bezier(0.16,1,0.3,1), filter 450ms ease, background-color 200ms ease",
                    }}
                    className="border-b border-white/10 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]"
                  >
                    <th scope="row" className="px-5 py-4 text-left align-top font-normal">
                      <span className="flex items-start gap-2.5">
                        <span
                          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${tierDot[f.tier]}`}
                          aria-hidden
                        />
                        <span>
                          <span className="block font-display text-sm font-semibold text-white">
                            {f.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-white/50">
                            {f.tier} grade
                          </span>
                        </span>
                      </span>
                    </th>
                    <td className="whitespace-nowrap px-5 py-4 align-top font-mono text-xs text-white/70">
                      {f.formula}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 align-top text-sm text-white/85">
                      {f.grade}
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-white/65">
                      {f.crops.join(", ")}
                    </td>
                    <td className="px-5 py-4 text-right align-top">
                      {f.poster ? (
                        <a
                          href={asset(f.poster)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-soft focus-visible:underline"
                          aria-label={`View ${f.name} specification sheet (opens in a new tab)`}
                        >
                          View
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="text-sm text-white/30">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </section>
  );
}
