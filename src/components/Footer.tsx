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
        </div>
      </div>

      <div className="border-t border-border/70 px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Beurant. All rights reserved.
      </div>
    </footer>
  );
}
