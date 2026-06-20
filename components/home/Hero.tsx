"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>

      <div className="container-px relative w-full pb-20 pt-32 md:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="eyebrow text-white/70 [&::before]:bg-sand-400"
        >
          UAE-Based Global Commodity Trading
        </motion.span>

        <h1 className="mt-7 max-w-5xl text-display-xl font-display font-semibold text-white text-balance">
          {["Powering Global Trade", "Through Energy &", "Agri Commodities"].map(
            (line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}
                >
                  {line}
                </motion.span>
              </span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/70"
        >
          Connecting producers, suppliers, manufacturers and global markets
          through reliable commodity trading solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/commodities" className="btn-light group">
            Explore Commodities
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link href="/contact" className="btn-ghost-light">
            Contact Trading Team
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-4"
        >
          {site.stats.map((s) => (
            <div key={s.label} className="bg-ink/40 px-5 py-6 backdrop-blur-sm">
              <div className="font-display text-3xl font-semibold text-white">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs leading-snug text-white/55">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-6 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 md:flex lg:right-16"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
