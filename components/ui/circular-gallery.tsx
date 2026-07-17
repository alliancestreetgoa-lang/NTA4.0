"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  title: string;
  subtitle?: string;
  imageUrl: string;
  pos?: string;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  autoRotateSpeed?: number;
  className?: string;
}

// Adapted from 21st.dev "Circular Gallery" (@ravikatiyar) — the original drives
// rotation from global page scroll inside a 500vh sticky takeover. Re-worked
// into a self-contained element: continuous auto-rotate + drag-to-spin, paused
// on hover, and a click-to-enlarge lightbox (these cards are dense spec sheets,
// so their text is only readable full-size). Paused under prefers-reduced-motion.
export function CircularGallery({
  items,
  autoRotateSpeed = 0.03,
  className,
}: CircularGalleryProps) {
  const [rotation, setRotation] = useState(0);
  const [dims, setDims] = useState({ card: 280, radius: 500, height: 560 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const movedRef = useRef(false);
  const reduceRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  // Responsive card / ring sizing from the container width.
  useEffect(() => {
    reduceRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const measure = () => {
      const w = containerRef.current?.clientWidth ?? 1000;
      if (w < 520) setDims({ card: 220, radius: 360, height: 440 });
      else if (w < 1024) setDims({ card: 260, radius: 460, height: 520 });
      else setDims({ card: 300, radius: 560, height: 600 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Continuous auto-rotate (skipped while dragging, hovering, or reduced motion).
  useEffect(() => {
    const tick = () => {
      if (!draggingRef.current && !pausedRef.current && !reduceRef.current) {
        setRotation((r) => r + autoRotateSpeed);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [autoRotateSpeed]);

  // Lightbox: lock scroll + keyboard (Esc close, arrows navigate).
  useEffect(() => {
    if (openIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      else if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
      else if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + items.length) % items.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, items.length]);

  const onPointerDown = () => {
    draggingRef.current = true;
    movedRef.current = false;
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current && e.movementX !== 0) {
      if (Math.abs(e.movementX) > 2) movedRef.current = true;
      setRotation((r) => r + e.movementX * 0.25);
    }
  };
  const endDrag = () => {
    draggingRef.current = false;
  };

  const anglePerItem = 360 / items.length;
  const cardH = Math.round((dims.card * 4) / 3);
  const open = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div
        ref={containerRef}
        role="region"
        aria-label="Circular gallery"
        className={cn(
          "relative w-full cursor-grab touch-pan-y select-none active:cursor-grabbing",
          className
        )}
        style={{ height: dims.height, perspective: "2000px" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={() => {
          endDrag();
          pausedRef.current = false;
        }}
        onMouseEnter={() => (pausedRef.current = true)}
      >
        <div
          className="relative h-full w-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const rel = (itemAngle + (rotation % 360) + 360) % 360;
            const norm = Math.abs(rel > 180 ? 360 - rel : rel);
            const opacity = Math.max(0.2, 1 - norm / 180);
            return (
              <button
                key={i}
                type="button"
                aria-label={`Enlarge ${item.title}`}
                onClick={() => {
                  if (!movedRef.current) setOpenIndex(i);
                }}
                className="group absolute left-1/2 top-1/2 cursor-zoom-in"
                style={{
                  width: dims.card,
                  height: cardH,
                  marginLeft: -dims.card / 2,
                  marginTop: -cardH / 2,
                  transform: `rotateY(${itemAngle}deg) translateZ(${dims.radius}px)`,
                  opacity,
                  transition: "opacity 0.3s linear",
                }}
              >
                <span className="relative block h-full w-full overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: item.pos || "center" }}
                  />
                  <span className="pointer-events-none absolute right-3 top-3 grid h-8 w-8 place-content-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 block bg-gradient-to-t from-ink via-ink/55 to-transparent p-4 pt-14 text-left">
                    <span className="block font-display text-base font-semibold leading-tight text-white">
                      {item.title}
                    </span>
                    {item.subtitle && (
                      <span className="mt-1 block font-mono text-xs text-accent">
                        {item.subtitle}
                      </span>
                    )}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={`${open.title} specification sheet`}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
                onClick={() => setOpenIndex(null)}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpenIndex(null)}
                  className="absolute right-4 top-4 grid h-11 w-11 place-content-center rounded-full border border-white/15 bg-ink/70 text-white transition-colors hover:bg-white hover:text-ink"
                >
                  <X className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  aria-label="Previous"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) =>
                      i === null ? i : (i - 1 + items.length) % items.length
                    );
                  }}
                  className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-content-center rounded-full border border-white/15 bg-ink/70 text-white transition-colors hover:bg-white hover:text-ink sm:left-6"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) =>
                      i === null ? i : (i + 1) % items.length
                    );
                  }}
                  className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-content-center rounded-full border border-white/15 bg-ink/70 text-white transition-colors hover:bg-white hover:text-ink sm:right-6"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <motion.figure
                  className="flex max-h-full flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={open.imageUrl}
                    alt={`${open.title} specification sheet`}
                    className="max-h-[86vh] w-auto max-w-full rounded-xl border border-white/10 shadow-2xl"
                  />
                  <figcaption className="mt-4 text-center">
                    <span className="font-display text-lg font-semibold text-white">
                      {open.title}
                    </span>
                    {open.subtitle && (
                      <span className="ml-3 font-mono text-sm text-accent">
                        {open.subtitle}
                      </span>
                    )}
                  </figcaption>
                </motion.figure>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
