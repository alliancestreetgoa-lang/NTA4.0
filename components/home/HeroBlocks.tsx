"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type Variants } from "framer-motion";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { divisions } from "@/lib/data";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

// Blur-in reveal, staggered by animationNum (see TimelineContent).
const reveal: Variants = {
  hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Blocks rise from below (used for the image grid).
const rise: Variants = {
  hidden: { y: 40, opacity: 0, filter: "blur(6px)" },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.09, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function HeroBlocks() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden border-b border-ink/10 bg-white"
    >
      {/* faint world-map wash */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[70%]">
        <Image
          src={asset("/world-trade-map.png")}
          alt=""
          fill
          priority
          className="object-cover object-top opacity-[0.05]"
          sizes="100vw"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 30%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-px relative pt-24 pb-16 md:pt-28 md:pb-20">
        {/* Headline block */}
        <div className="mx-auto max-w-3xl text-center">
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={heroRef}
            customVariants={reveal}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 py-1 pl-1.5 pr-3.5"
          >
            <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-ink">
              Dubai · JLT
            </span>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent-deep">
              Global commodity trading
            </span>
          </TimelineContent>

          <TimelineContent
            as="h1"
            animationNum={1}
            timelineRef={heroRef}
            customVariants={reveal}
            className="mt-7 text-display-lg font-display font-semibold text-balance text-ink"
          >
            Powering global trade in{" "}
            <span className="text-accent-deep">hard commodities</span>.
          </TimelineContent>

          <TimelineContent
            as="p"
            animationNum={2}
            timelineRef={heroRef}
            customVariants={reveal}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sand-500"
          >
            NTA Group sources, ships and delivers chemical fertilizers, energy,
            oil, petrochemicals and grains — connecting producers with the
            markets that depend on them.
          </TimelineContent>

          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={heroRef}
            customVariants={reveal}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary group">
              Contact the trading desk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="/commodities" className="btn-outline">
              Explore commodities
            </Link>
          </TimelineContent>
        </div>

        {/* Animated commodity blocks */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-3 md:gap-5">
          {divisions.map((d, index) => (
            <TimelineContent
              key={d.slug}
              as="div"
              animationNum={index + 4}
              timelineRef={heroRef}
              customVariants={rise}
            >
              <Link
                href={`/commodities#${d.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={asset(d.image)}
                  alt={d.title}
                  fill
                  className="object-cover grayscale-[0.35] brightness-90 transition-all duration-700 ease-premium group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                />
                {d.primary && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[0.55rem] font-medium uppercase tracking-[0.14em] text-ink">
                    Flagship
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                  <div>
                    <span className="font-mono text-[0.6rem] text-white/50">
                      0{index + 1}
                    </span>
                    <h3 className="mt-0.5 font-display text-sm font-semibold text-white md:text-base">
                      {d.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
              </Link>
            </TimelineContent>
          ))}
        </div>

        {/* Stats strip */}
        <TimelineContent
          as="div"
          animationNum={divisions.length + 4}
          timelineRef={heroRef}
          customVariants={reveal}
          className="mt-14 grid grid-cols-2 gap-px border-t border-ink/10 lg:grid-cols-4"
        >
          {site.stats.map((s) => (
            <div key={s.label} className="py-6 pr-6">
              <div className="font-mono text-2xl font-medium tabular-nums text-ink md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-[0.14em] text-sand-500">
                {s.label}
              </div>
            </div>
          ))}
        </TimelineContent>
      </div>
    </section>
  );
}
