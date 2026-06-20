"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-ink pt-20">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <div className="absolute inset-0 grain opacity-25" />
      </div>

      <div className="container-px relative w-full pb-16 pt-24 md:pb-20">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="eyebrow text-white/70 [&::before]:bg-sand-400"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-6 max-w-4xl text-display-lg font-display font-semibold text-white text-balance"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
