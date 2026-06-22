import Image from "next/image";
import Link from "next/link";

// Official NTA Group logo — used exactly as supplied (white mark + wordmark on
// its original gray background). Colors are never altered; the artwork is only
// cropped to frame the logo and shown inside a rounded tile.
export function Logo({
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
      <span
        className={`inline-flex overflow-hidden rounded-lg ${className}`}
      >
        <Image
          src="/logo.png"
          alt="NTA Group"
          width={1110}
          height={761}
          priority
          className="h-full w-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </span>
    </Link>
  );
}
