import Link from "next/link";
import { asset } from "@/lib/asset";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      {/* Plain img (not next/image) so the base path prefix is applied
          reliably under static export / GitHub Pages. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/logo.png")}
        alt="NTA Group"
        width={48}
        height={48}
        className="h-9 w-auto md:h-10"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            variant === "light" ? "text-white" : "text-ink"
          }`}
        >
          NTA GROUP
        </span>
        <span
          className={`mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.2em] ${
            variant === "light" ? "text-white/60" : "text-charcoal-muted"
          }`}
        >
          Global Commodity Trading
        </span>
      </span>
    </Link>
  );
}
