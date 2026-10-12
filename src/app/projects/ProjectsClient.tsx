"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { categories, getProjectsByCategory, projects } from "@/data/projects";

/** Reads the active category from `?category=` — the URL is the state. */
export default function ProjectsClient() {
  const fromUrl = useSearchParams().get("category");
  const active = categories.some((c) => c.slug === fromUrl) ? fromUrl! : "all";
  return <ProjectsView active={active} />;
}

/**
 * Filter bar + grid. Also rendered as the Suspense fallback with "all", so
 * the static HTML contains the full portfolio before hydration.
 */
export function ProjectsView({ active }: { active: string }) {
  const listRef = useRef<HTMLUListElement>(null);

  // On mobile the filters scroll sideways — keep the active one in view.
  useEffect(() => {
    const list = listRef.current;
    const current = list?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!list || !current) return;
    list.scrollTo({
      left: current.offsetLeft - (list.clientWidth - current.offsetWidth) / 2,
    });
  }, [active]);

  const filtered =
    active === "all" ? projects : getProjectsByCategory(active);

  const filters = [
    { slug: "all", title: "All", href: "/projects", count: projects.length },
    ...categories.map((c) => ({
      slug: c.slug,
      title: c.title,
      href: `/projects?category=${c.slug}`,
      count: getProjectsByCategory(c.slug).length,
    })),
  ];

  return (
    <div>
      <nav aria-label="Filter projects by category">
        <ul ref={listRef} className="relative -mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {filters.map((f) => (
            <li key={f.slug} className="shrink-0">
              <Link
                href={f.href}
                replace
                scroll={false}
                aria-current={active === f.slug ? "true" : undefined}
                className="btn btn-secondary h-10 gap-2 px-4 font-normal text-muted hover:text-foreground aria-[current=true]:border-foreground aria-[current=true]:bg-foreground aria-[current=true]:text-background"
              >
                {f.title}
                <span className="text-xs tabular-nums opacity-60">{f.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 60} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
