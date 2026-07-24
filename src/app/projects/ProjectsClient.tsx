"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects } from "@/data/projects";

export default function ProjectsClient() {
  const [active, setActive] = useState("all");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get(
      "category"
    );
    if (fromUrl) setActive(fromUrl);
  }, []);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
            active === "all"
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted hover:border-accent hover:text-accent"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setActive(c.slug)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === c.slug
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 6) * 0.04}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
