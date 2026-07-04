import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 bg-aurora" />
      <div className="relative flex flex-col items-center">
        <p className="mb-4 font-mono text-sm text-violet-300">404</p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mb-8 max-w-sm text-muted-foreground">
          This page doesn&apos;t exist. Probably the right outcome: you don&apos;t want unnecessary
          pages.
        </p>
        <Link href="/" className={cn(buttonVariants(), "h-10 px-5")}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
