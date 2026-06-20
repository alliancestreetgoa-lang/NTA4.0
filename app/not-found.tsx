import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-white">
      <div className="container-px text-center">
        <span className="font-display text-[7rem] font-semibold leading-none text-sand-200 md:text-[10rem]">
          404
        </span>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-charcoal-light">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary group mt-9">
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
