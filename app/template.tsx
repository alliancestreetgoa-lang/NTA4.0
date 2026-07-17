import { PageTransition } from "@/components/ui/page-transition";

/**
 * app/template.tsx re-mounts on every navigation (unlike layout.tsx, which
 * persists). That remount is what replays the enter transition per route.
 *
 * Kept as a server component that delegates to the "use client" PageTransition,
 * so no page is forced into the client bundle by this file.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
