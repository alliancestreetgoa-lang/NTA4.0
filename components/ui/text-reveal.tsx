"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export type TextRevealPreset =
  | "blur"
  | "fade-in-blur"
  | "scale"
  | "fade"
  | "slide";
export type TextRevealPer = "word" | "char" | "line";

export type TextRevealProps = {
  /**
   * Plain strings are split + revealed segment-by-segment. Anything else
   * (e.g. a heading with an accent <span>) is rendered as-is and simply
   * fades in as one block — never dropped, never crashed on.
   */
  children: React.ReactNode;
  per?: TextRevealPer;
  as?: keyof React.JSX.IntrinsicElements;
  variants?: { container?: Variants; item?: Variants };
  className?: string;
  preset?: TextRevealPreset;
  delay?: number;
  speedReveal?: number;
  speedSegment?: number;
  /** Extra gate ANDed with scroll-visibility. Defaults to true. */
  trigger?: boolean;
  onAnimationComplete?: () => void;
  onAnimationStart?: () => void;
  segmentWrapperClassName?: string;
  containerTransition?: Transition;
  segmentTransition?: Transition;
  style?: React.CSSProperties;
};

const defaultStaggerTimes: Record<TextRevealPer, number> = {
  char: 0.03,
  line: 0.1,
  word: 0.05,
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<
  TextRevealPreset,
  { container: Variants; item: Variants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { filter: "blur(12px)", opacity: 0 },
      visible: { filter: "blur(0px)", opacity: 1 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  "fade-in-blur": {
    container: defaultContainerVariants,
    item: {
      hidden: { filter: "blur(12px)", opacity: 0, y: 20 },
      visible: { filter: "blur(0px)", opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
};

function splitText(text: string, per: TextRevealPer) {
  if (per === "line") return text.split("\n");
  return text.split(/(\s+)/);
}

function SegmentItem({
  segment,
  variants,
  per,
  wrapperClassName,
}: {
  segment: string;
  variants: Variants;
  per: TextRevealPer;
  wrapperClassName?: string;
}) {
  const content =
    per === "line" ? (
      <motion.span className="block" variants={variants}>
        {segment}
      </motion.span>
    ) : per === "word" ? (
      <motion.span
        aria-hidden="true"
        className="inline-block whitespace-pre"
        variants={variants}
      >
        {segment}
      </motion.span>
    ) : (
      <motion.span className="inline-block whitespace-pre">
        {segment.split("").map((char, i) => (
          <motion.span
            aria-hidden="true"
            className="inline-block whitespace-pre"
            key={i}
            variants={variants}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );

  if (!wrapperClassName) return content;
  return (
    <span
      className={cn(per === "line" ? "block" : "inline-block", wrapperClassName)}
    >
      {content}
    </span>
  );
}

export function TextReveal({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset = "fade",
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName,
  containerTransition,
  segmentTransition,
  style,
}: TextRevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  // Fire on SCROLL, not on mount. once:true — headings reveal a single time.
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  const Tag = as as React.ElementType;
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  // Reduced motion: final/static state in the same element. No transform,
  // no opacity animation, no split (so no sr-only duplicate needed).
  if (reduce) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const base = presetVariants[preset] ?? {
    container: defaultContainerVariants,
    item: defaultItemVariants,
  };
  const stagger = defaultStaggerTimes[per] / speedReveal;
  const baseDuration = 0.3 / speedSegment;

  const containerVars: Variants = {
    ...base.container,
    visible: {
      ...(base.container.visible as object),
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
        ...containerTransition,
      },
    },
  };

  const itemVars: Variants = {
    ...base.item,
    visible: {
      ...(base.item.visible as object),
      transition: { duration: baseDuration, ...segmentTransition },
    },
  };

  const computedVariants = variants
    ? {
        container: { ...containerVars, ...variants.container },
        item: { ...itemVars, ...variants.item },
      }
    : { container: containerVars, item: itemVars };

  const active = inView && trigger;

  // Non-string content (e.g. a heading carrying an accent <span>) can't be
  // split — render it untouched and let the container fade it in.
  const isPlainString = typeof children === "string";
  const segments = isPlainString ? splitText(children, per) : null;

  return (
    <MotionTag
      animate={active ? "visible" : "hidden"}
      className={className}
      initial="hidden"
      onAnimationComplete={onAnimationComplete}
      onAnimationStart={onAnimationStart}
      ref={ref as React.Ref<HTMLDivElement>}
      style={style}
      variants={computedVariants.container}
    >
      {segments ? (
        <>
          {per !== "line" ? <span className="sr-only">{children}</span> : null}
          {segments.map((segment, index) => (
            <SegmentItem
              key={`${per}-${index}-${segment}`}
              per={per}
              segment={segment}
              variants={computedVariants.item}
              wrapperClassName={segmentWrapperClassName}
            />
          ))}
        </>
      ) : (
        children
      )}
    </MotionTag>
  );
}

export default TextReveal;
