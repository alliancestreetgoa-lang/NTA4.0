"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { asset } from "@/lib/asset";

// Adapted from 21st.dev "Text Parallax Content (scroll)" (@uniquesonu) — kept
// only the useScroll/useTransform mechanics (sticky image scale/fade + a
// scroll-linked overlay statement), harvested for a SINGLE full-bleed break
// rather than the donor's repeated-instance pattern. Re-themed: ink scrim
// instead of neutral-950, brass mono subheading, Archivo heading, rounded-xl
// to match the site's media radius, react-icons dropped. No filler
// "ExampleContent" block underneath — this is a self-contained statement.
const PAD = 12;

export function StatementParallax({
  image,
  subheading,
  heading,
}: {
  image: string;
  subheading: string;
  heading: string;
}) {
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: imgProgress } = useScroll({
    target: imgRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(imgProgress, [0, 1], [1, 0.9]);
  const scrimOpacity = useTransform(imgProgress, [0, 1], [0.55, 0.15]);

  const { scrollYProgress: copyProgress } = useScroll({
    target: copyRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(copyProgress, [0, 1], [120, -120]);
  const opacity = useTransform(copyProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  if (reduce) {
    // Static equivalent: no sticky pin, no scroll-linked motion — a plain
    // full-bleed image with the statement centered on top.
    return (
      <section className="px-3 py-3">
        <div
          className="relative flex h-[70vh] items-center justify-center overflow-hidden rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${asset(image)})` }}
        >
          <div aria-hidden className="absolute inset-0 bg-ink/50" />
          <div className="relative flex flex-col items-center px-6 text-center text-white">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              {subheading}
            </span>
            <p className="mt-4 max-w-3xl font-display text-3xl font-semibold text-balance md:text-5xl">
              {heading}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ paddingLeft: PAD, paddingRight: PAD }} className="py-3">
      <div className="relative h-[130vh]">
        <motion.div
          ref={imgRef}
          style={{
            backgroundImage: `url(${asset(image)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: `calc(100vh - ${PAD * 2}px)`,
            top: PAD,
            scale,
          }}
          className="sticky z-0 overflow-hidden rounded-xl"
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-ink"
            style={{ opacity: scrimOpacity }}
          />
        </motion.div>

        <motion.div
          ref={copyRef}
          style={{ y, opacity }}
          className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-6 text-center text-white"
        >
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            {subheading}
          </span>
          <p className="mt-4 max-w-3xl font-display text-4xl font-semibold text-balance md:text-6xl">
            {heading}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
