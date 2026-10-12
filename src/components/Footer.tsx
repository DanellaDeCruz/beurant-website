import Link from "next/link";
import { categories } from "@/data/projects";
import { site } from "@/lib/site";

const linkClass = "text-muted transition-colors duration-200 hover:text-foreground";

export default function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div translate="no" className="text-lg font-medium tracking-tight">
            Beurant
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Interior &amp; exhibition design studio — residential, retail,
            corporate and exhibition spaces across Sri Lanka.
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Work</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/projects?category=${c.slug}`} className={linkClass}>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Contact</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className={`${linkClass} tabular-nums`}>
                {site.phone}
              </a>
            </li>
            <li className="text-muted">{site.location}</li>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} Beurant. All rights reserved.
          </span>
          <Link href="/contact" className={linkClass}>
            Start a Project →
          </Link>
        </div>
      </div>
    </footer>
  );
}
