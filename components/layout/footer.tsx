import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { social } from "@/config/social";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-fit text-[15px] font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-foreground">Site</p>
            <nav className="flex flex-col gap-2.5">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-foreground">Connect</p>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.{" "}
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">Precision-fit software for industry.</p>
        </div>
      </div>
    </footer>
  );
}
