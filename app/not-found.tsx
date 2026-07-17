import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-7xl md:text-8xl font-extrabold tracking-tighter text-accent-deep">
          404
        </p>
        <h1 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
