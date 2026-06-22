import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

// Official NTA Group logo (mark + wordmark on a transparent background).
// Recolored per surface via a CSS filter: pure white on the dark header,
// pure black on light surfaces (the white mobile menu).
export function Logo({
  variant = "light",
  className = "h-10 md:h-12",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="NTA Group — home"
      className="group inline-flex items-center"
    >
      <span className={`inline-flex ${className}`}>
        <Image
          src={asset("/logo.png")}
          alt="NTA Group"
          width={1080}
          height={720}
          priority
          className={`h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] ${
            variant === "dark"
              ? "[filter:brightness(0)_invert(1)]"
              : "[filter:brightness(0)]"
          }`}
        />
      </span>
    </Link>
  );
}
