"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * From 21st.dev (@dillionverma / MagicUI) — "Interactive Hover Button".
 * Re-themed to the NTA brass system: brass fill + ink label at rest, an ink
 * sweep that reveals the label + arrow in white on hover, SHARP corners
 * (the upstream demo is rounded-full) and no fixed width.
 */

type BaseProps = {
  text?: string;
  className?: string;
};

type Props = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    /** When set, renders a next/link anchor instead of a <button>. */
    href?: string;
  };

const surface =
  "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-none bg-accent px-7 py-4 text-center text-sm font-medium text-ink";

export const InteractiveHoverButton = React.forwardRef<
  HTMLElement,
  Props
>(({ text = "Button", className, href, ...props }, ref) => {
  // `useReducedMotion` can resolve to `true` on the very first client render,
  // which would not match the prerendered (static export) HTML. Gate it behind
  // a mounted flag so hydration always agrees, then settle to the real value.
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const isReduced = mounted && !!prefersReduced;

  const content = isReduced ? (
    // Reduced motion: no slide, no scaling sweep — a plain colour transition
    // with the arrow permanently visible.
    <span className="inline-flex items-center gap-2">
      <span>{text}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </span>
  ) : (
    <>
      <span className="relative z-20 inline-block transition-all duration-300 ease-premium group-hover:translate-x-8 group-hover:opacity-0">
        {text}
      </span>
      <span className="absolute inset-0 z-20 flex translate-x-8 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 ease-premium group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
      {/* The ink dot that expands to flood the button on hover. */}
      <span
        aria-hidden="true"
        className="absolute left-[20%] top-[40%] z-10 h-2 w-2 scale-100 rounded-full bg-ink transition-all duration-300 ease-premium group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:rounded-none"
      />
    </>
  );

  const classes = cn(
    surface,
    isReduced
      ? "transition-colors duration-300 hover:bg-accent-soft"
      : "transition-none",
    className,
  );

  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
