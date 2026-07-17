"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Sprout,
  Layers,
  FlaskConical,
  Atom,
  Droplet,
  Hexagon,
  Wheat,
  CircleDot,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

// Adapted from 21st.dev "Feature Carousel" (@0xUrvish) — re-themed to the
// trading-desk palette and driven by real flagship fertilizer grades. Left: a
// rotating list of grades; right: a coverflow of their spec-sheet posters.
type Grade = {
  id: string;
  label: string;
  grade: string;
  icon: LucideIcon;
  image: string;
  blurb: string;
};

const GRADES: Grade[] = [
  {
    id: "urea",
    label: "Urea",
    grade: "46-0-0",
    icon: Sprout,
    image: "/fertilizers/urea.png",
    blurb:
      "The world's most-used nitrogen source — vigorous vegetative growth across rice, wheat and maize.",
  },
  {
    id: "guti-urea",
    label: "Guti Urea",
    grade: "46-0-0 · deep-placed",
    icon: Layers,
    image: "/fertilizers/guti-urea.png",
    blurb:
      "Deep-placed super granules that raise nitrogen efficiency in transplanted and wetland rice.",
  },
  {
    id: "dap",
    label: "DAP",
    grade: "18-46-0",
    icon: FlaskConical,
    image: "/fertilizers/dap.png",
    blurb:
      "Nitrogen and phosphate in one granule — strong early rooting for rice, maize and vegetables.",
  },
  {
    id: "tsp",
    label: "TSP",
    grade: "0-46-0",
    icon: Atom,
    image: "/fertilizers/tsp.png",
    blurb:
      "High-analysis phosphate for root development in rice, potato, oilseeds and pulses.",
  },
  {
    id: "mop",
    label: "MoP",
    grade: "0-0-60",
    icon: Droplet,
    image: "/fertilizers/mop.png",
    blurb:
      "Potash that drives quality and yield in potato, banana, rice and sugarcane.",
  },
  {
    id: "sop",
    label: "SOP",
    grade: "0-0-50 · +18% S",
    icon: Hexagon,
    image: "/fertilizers/sop.png",
    blurb:
      "Chloride-free potash with sulphur for tobacco, fruit and quality vegetables.",
  },
  {
    id: "npks",
    label: "NPKS",
    grade: "15-15-15 · +S",
    icon: Wheat,
    image: "/fertilizers/npks.png",
    blurb:
      "Balanced compound nutrition with sulphur for rice, vegetables and horticulture.",
  },
  {
    id: "can",
    label: "CAN",
    grade: "26-0-0 · +Ca",
    icon: CircleDot,
    image: "/fertilizers/can.png",
    blurb:
      "Fast-acting nitrogen with calcium for vegetables, maize, tea and fruit.",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 60;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function Carousel() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % GRADES.length) + GRADES.length) % GRADES.length;
  const active = GRADES[currentIndex];

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + GRADES.length) % GRADES.length;
    // shortest direction, either way
    const signed = diff > GRADES.length / 2 ? diff - GRADES.length : diff;
    if (signed !== 0) setStep((s) => s + signed);
  };

  useEffect(() => {
    if (isPaused || reduce) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused, reduce]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = GRADES.length;
    let n = diff;
    if (diff > len / 2) n -= len;
    if (diff < -len / 2) n += len;
    if (n === 0) return "active";
    if (n === -1) return "prev";
    if (n === 1) return "next";
    return "hidden";
  };

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 240, damping: 26, mass: 0.8 };

  return (
    <div className="w-full">
      <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-xl border border-ink/10 lg:min-h-[660px] lg:flex-row">
        {/* LEFT — rotating grade list */}
        <div className="relative z-30 flex min-h-[300px] w-full flex-col items-start justify-center overflow-hidden bg-sand-50 px-8 md:px-14 lg:h-full lg:w-[40%] lg:pl-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-16 bg-gradient-to-b from-sand-50 via-sand-50/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-16 bg-gradient-to-t from-sand-50 via-sand-50/80 to-transparent" />
          <p className="absolute left-8 top-8 z-40 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-sand-500 md:left-14">
            Flagship grades
          </p>
          <div className="relative z-20 flex h-full w-full items-center justify-center lg:justify-start">
            {GRADES.map((g, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wd = wrap(-(GRADES.length / 2), GRADES.length / 2, distance);
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wd * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wd) * 0.28,
                  }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 90, damping: 22, mass: 1 }
                  }
                  className="absolute flex items-center justify-start"
                >
                  <button
                    type="button"
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    aria-label={`Show ${g.label}`}
                    className={cn(
                      "group flex items-center gap-3.5 rounded-full border px-6 py-3 text-left transition-all duration-500 md:px-7 md:py-3.5",
                      isActive
                        ? "z-10 border-accent bg-accent text-ink"
                        : "border-ink/12 bg-transparent text-ink/55 hover:border-ink/20 hover:text-ink"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 shrink-0 transition-colors duration-500",
                        isActive ? "text-ink" : "text-ink/35"
                      )}
                      strokeWidth={1.75}
                    />
                    <span className="whitespace-nowrap font-display text-sm font-semibold tracking-tight">
                      {g.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — coverflow of full spec-sheet posters, caption below */}
        <div className="relative flex min-h-[480px] flex-1 flex-col items-center justify-center gap-7 overflow-hidden border-t border-white/10 bg-ink px-6 py-12 md:px-12 lg:h-full lg:border-l lg:border-t-0 lg:py-10">
          {/* The whole 3:4 poster is shown (object-contain, no crop) */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] md:max-w-[340px]">
            {GRADES.map((g, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";
              return (
                <motion.div
                  key={g.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -84 : isNext ? 84 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                  }}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                  transition={spring}
                  className="absolute inset-0 origin-center overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-2xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(g.image)}
                    alt={`${g.label} specification sheet`}
                    className={cn(
                      "h-full w-full object-contain transition-all duration-700",
                      isActive ? "grayscale-0 blur-0" : "blur-[1.5px] grayscale brightness-75"
                    )}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Caption below the poster so the full image stays visible */}
          <div className="relative h-16 w-full max-w-sm text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={reduce ? { duration: 0 } : { duration: 0.3 }}
                className="absolute inset-x-0"
              >
                <span className="inline-flex items-center gap-2 font-mono text-xs tracking-tight text-white">
                  {active.label}
                  <span className="text-accent">{active.grade}</span>
                </span>
                <p className="mx-auto mt-2 max-w-sm text-balance text-sm leading-snug text-white/70">
                  {active.blurb}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FlagshipCarousel() {
  return (
    <section id="fertilizer-portfolio" className="scroll-mt-28 bg-white">
      <div className="container-px py-24 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Flagship portfolio</span>
            <h2 className="mt-5 text-display-md font-display font-semibold text-balance text-ink">
              The grades that move global agriculture.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sand-500">
              We source, supply and distribute the major nitrogen, phosphate and
              potash grades — each shipped with full documentation and a
              specification sheet.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-4">
            <Link
              href="/commodities#chemical-fertilizers"
              className="btn-outline group"
            >
              View the full range
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-sand-500">
              20 products · 3 nutrient tiers
            </p>
          </div>
        </div>

        <div className="mt-14">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
