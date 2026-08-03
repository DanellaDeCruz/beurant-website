import Link from "next/link";
import { categories } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <div className="font-display text-lg tracking-wide">Beurant</div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Interior &amp; exhibition design studio — residential, retail,
            corporate and exhibition spaces.
          </p>
        </div>

        <div>
          <div className="text-sm font-medium text-foreground/80">
            Services
          </div>
          <ul className="mt-3 flex flex-col gap-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/projects?category=${c.slug}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-medium text-foreground/80">
            Get in touch
          </div>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
            <li>
              <a
                href="mailto:bevan@beurant.com"
                className="transition-colors hover:text-accent"
              >
                bevan@beurant.com
              </a>
            </li>
            <li>
              <a
                href="tel:+94 77 299 0570"
                className="transition-colors hover:text-accent"
              >
                +94 77 299 0570
              </a>
            </li>
            <li>Colombo, Sri Lanka</li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-accent"
              >
                Contact form →
              </Link>
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href="https://instagram.com/Beurant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beurant on Instagram"
              className="text-muted transition-colors hover:text-accent"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://facebook.com/Beurant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beurant on Facebook"
              className="text-muted transition-colors hover:text-accent"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M14 8.5h2.5V5H14c-2.2 0-4 1.8-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.3.2-.5.5-.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Beurant. All rights reserved.
      </div>
    </footer>
  );
}
