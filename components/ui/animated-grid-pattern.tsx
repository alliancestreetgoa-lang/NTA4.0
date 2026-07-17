"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps
  extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

type Square = { id: number; pos: [number, number] };

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Squares start EMPTY so the server-rendered markup and the first client
  // render are byte-identical (static export = no hydration mismatch).
  // Positions are only ever generated after mount, inside effects/callbacks.
  const [squares, setSquares] = useState<Square[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const getPos = useCallback((): [number, number] => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }, [dimensions.width, dimensions.height, width, height]);

  const updateSquarePosition = useCallback(
    (squareId: number) => {
      setSquares((current) =>
        current.map((sq) =>
          sq.id === squareId ? { ...sq, pos: getPos() } : sq,
        ),
      );
    },
    [getPos],
  );

  // Generate (post-mount only) once we know the container size.
  useEffect(() => {
    if (prefersReducedMotion) {
      setSquares([]);
      return;
    }
    if (dimensions.width && dimensions.height) {
      setSquares(
        Array.from({ length: numSquares }, (_, i) => ({
          id: i,
          pos: getPos(),
        })),
      );
    }
  }, [dimensions, numSquares, prefersReducedMotion, getPos]);

  // Measure the container. ResizeObserver is only touched after mount.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-accent/10 stroke-ink/[0.07]",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {/* Reduced motion → grid lines only, no animating squares. */}
      {!prefersReducedMotion && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(({ pos: [sx, sy], id: squareId }, index) => (
            <motion.rect
              initial={{ opacity: 0 }}
              animate={{ opacity: maxOpacity }}
              transition={{
                duration,
                repeat: 1,
                delay: index * 0.1,
                repeatType: "reverse",
                repeatDelay,
              }}
              onAnimationComplete={() => updateSquarePosition(squareId)}
              key={`${sx}-${sy}-${index}`}
              width={width - 1}
              height={height - 1}
              x={sx * width + 1}
              y={sy * height + 1}
              strokeWidth="0"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
