"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-sand-500 backdrop-blur-xl transition-all duration-500 ease-premium"
      >
        <div className="container-px flex h-20 items-center justify-between">
          <Logo variant="dark" />

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    active ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-white"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-light group">
              Contact Trading Team
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden"
          >
            <div className="container-px flex h-20 items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-ink" />
              </button>
            </div>
            <nav className="container-px mt-8 flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-line py-5 font-display text-2xl font-semibold text-ink"
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 text-charcoal-muted" />
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="btn-primary mt-8">
                Contact Trading Team
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
