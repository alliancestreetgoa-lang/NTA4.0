"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Global route transition. Mounted from app/template.tsx, which Next's App
 * Router re-mounts on every navigation — so the enter animation replays per
 * page without any exit choreography (and without AnimatePresence, which
 * cannot see the outgoing route here).
 *
 * Deliberately short and shallow: 0.35s, 8px of travel. A long page fade reads
 * as a broken navigation, not as polish.
 *
 * Scope notes:
 * - The sticky/fixed navbar is rendered in app/layout.tsx OUTSIDE {children},
 *   so it is never inside this transform and never becomes its containing block.
 * - Once the transform settles at its defaults, framer-motion writes
 *   `transform: none` and clears `will-change`, so `position: fixed` descendants
 *   (e.g. the CircularGallery lightbox) behave normally after ~0.35s.
 * - No scroll or overflow properties are touched, so Next's scroll restoration
 *   is unaffected.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  // Reduced motion: final state only, no wrapper animation at all.
  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease }}
    >
      {children}
    </motion.div>
  );
}
