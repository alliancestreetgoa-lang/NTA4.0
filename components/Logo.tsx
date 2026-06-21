import Link from "next/link";
import { asset } from "@/lib/asset";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  // variant retained for API compatibility; logo image works on light/dark.
  void variant;
  return (
    <Link href="/" className={`group flex items-center ${className}`}>
      {/* Plain img (not next/image) so the base path prefix is applied
          reliably under static export / GitHub Pages. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/logo.png")}
        alt="NTA Group"
        width={48}
        height={48}
        className="h-10 w-auto md:h-11"
      />
    </Link>
  );
}
