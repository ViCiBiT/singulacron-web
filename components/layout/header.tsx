"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function BrandMark() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
      <rect x="1" y="1" width="6" height="6" rx="1.5" className="fill-violet-400" />
      <rect x="9" y="1" width="6" height="6" rx="1.5" className="fill-foreground/25" />
      <rect x="1" y="9" width="6" height="6" rx="1.5" className="fill-foreground/25" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" className="fill-foreground/25" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
          <BrandMark />
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.main.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Link href={navigation.cta.href} className={cn(buttonVariants(), "px-4")}>
            {navigation.cta.label}
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 pt-3 pb-4">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3">
                <Link
                  href={navigation.cta.href}
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), "h-10 w-full")}
                >
                  {navigation.cta.label}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
