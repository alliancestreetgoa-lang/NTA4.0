"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ParallaxMedia } from "@/components/ui/parallax-media";
import { TransitionPanel } from "@/components/ui/transition-panel";
import { divisions } from "@/lib/data";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

// Adapted from 21st.dev "Feature 108" (@shadcnblocks) — the Radix Tabs are
// re-implemented with useState (no @radix-ui/react-tabs dependency) and
// re-themed to the trading-desk system, driven by the divisions data.
export function DivisionExplorer() {
  const [active, setActive] = useState(divisions[0]?.slug);
  const activeIndex = Math.max(
    0,
    divisions.findIndex((d) => d.slug === active)
  );

  return (
    <section className="bg-white">
      <div className="container-px py-24 md:py-32">
        <span className="eyebrow block">Our portfolio</span>
        <h2 className="mt-5 max-w-2xl text-display-md font-display font-semibold text-balance text-ink">
          Six divisions. One trusted partner.
        </h2>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {divisions.map((d) => {
            const Icon = d.icon;
            const isActive = d.slug === active;
            return (
              <button
                key={d.slug}
                type="button"
                onClick={() => setActive(d.slug)}
                aria-pressed={isActive}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors duration-300",
                  isActive
                    ? "border-accent bg-accent text-ink"
                    : "border-ink/12 text-ink/55 hover:border-ink/20 hover:text-ink"
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                {d.title}
              </button>
            );
          })}
        </div>

        {/* Active division panel — crossfades between divisions instead of
            an abrupt swap (21st.dev "Transition Panel", @ibelick). */}
        <TransitionPanel
          activeIndex={activeIndex}
          className="mt-8"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          variants={{
            enter: { opacity: 0, y: 14 },
            center: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -14 },
          }}
        >
          {divisions.map((d) => {
            const chips = d.groups
              .flatMap((g) => g.products.map((p) => p.name))
              .slice(0, 8);
            return (
              <div
                key={d.slug}
                className="grid gap-10 rounded-xl border border-ink/10 bg-sand-50 p-6 md:grid-cols-2 md:items-center md:gap-12 md:p-10 lg:p-12"
              >
                <div className="flex flex-col">
                  {d.primary && (
                    <span className="w-fit rounded-full bg-accent px-2.5 py-1 font-mono text-[0.55rem] font-medium uppercase tracking-[0.14em] text-ink">
                      Flagship division
                    </span>
                  )}
                  <h3 className="mt-5 font-display text-3xl font-semibold text-ink md:text-4xl">
                    {d.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-sand-500">
                    {d.short}
                  </p>
                  {chips.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {chips.map((name) => (
                        <span
                          key={name}
                          className="rounded-full border border-ink/12 px-3 py-1 text-xs text-ink/70"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/commodities#${d.slug}`}
                    className="btn-outline group mt-9 w-fit"
                  >
                    View full catalog
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                <ParallaxMedia className="aspect-[4/3] border border-white/10">
                  <Image
                    src={asset(d.image)}
                    alt={d.title}
                    fill
                    className="object-cover grayscale-[0.3] transition-transform duration-700"
                    sizes="(min-width: 768px) 45vw, 90vw"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
                  />
                </ParallaxMedia>
              </div>
            );
          })}
        </TransitionPanel>
      </div>
    </section>
  );
}
