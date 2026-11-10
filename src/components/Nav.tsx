"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PAGES, isActivePath } from "@/lib/nav";

// Contact is the call to action on the right, so it's left out of the text
// links on desktop.
const LINKS = PAGES.filter((page) => page.href !== "/contact");

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Background and hairline only once content scrolls beneath the header —
  // at the top it stays clear, so the home hero photo runs full-bleed and a
  // permanent border doesn't read as a hard divider on every page.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () => {
      header.dataset.scrolled = window.scrollY > 4 ? "true" : "false";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => isActivePath(pathname, href);

  return (
    <header
      ref={headerRef}
      data-scrolled="false"
      className="sticky top-0 z-50 border-b border-transparent transition-[background-color,border-color] duration-300 data-[scrolled=true]:border-border/70 data-[scrolled=true]:bg-background/75 data-[scrolled=true]:backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="-ml-1 flex items-center gap-2.5 rounded-md px-1"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/beurant-mark-white.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span translate="no" className="text-lg font-medium tracking-tight">
            Beurant
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="rounded-sm text-sm text-muted transition-colors duration-200 hover:text-foreground aria-[current=page]:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className="btn btn-secondary h-9 px-4"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2.5 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
        >
          <span
            aria-hidden="true"
            className={`block h-px w-5 bg-foreground transition-transform duration-200 ease-out ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-px w-5 bg-foreground transition-transform duration-200 ease-out ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        data-open={open}
        className="invisible absolute inset-x-0 top-full -translate-y-2 border-b border-border/70 bg-background/95 opacity-0 backdrop-blur-md transition-[opacity,translate,visibility] duration-200 ease-out data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:opacity-100 md:hidden"
      >
        <ul className="flex flex-col px-6 py-3">
          {PAGES.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center text-base text-muted transition-colors hover:text-foreground aria-[current=page]:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
