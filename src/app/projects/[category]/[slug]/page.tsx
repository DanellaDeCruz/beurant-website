import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import {
  adjacentProjects,
  coverImage,
  galleryImages,
  getCategory,
  getProject,
  projectKindLabel,
  projects,
  type Project,
} from "@/data/projects";
import { imageSize } from "@/lib/image-size";
import ProjectGallery from "./ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const project = getProject(category, slug);
  if (!project) return {};
  return {
    title: project.title,
    description:
      project.description ??
      `${project.title} — ${getCategory(project.category)?.title ?? "a project"} by Beurant.`,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const project = getProject(categorySlug, slug);
  if (!project) notFound();

  const category = getCategory(project.category);
  const images = await Promise.all(
    galleryImages(project).map(async (img) => ({
      ...img,
      ...(await imageSize(img.thumb)),
    }))
  );
  const { prev, next } = adjacentProjects(project);

  // Only facts the studio has filled in are shown — see Project in
  // data/projects.ts.
  const facts = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Scope", value: project.scope },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value));

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-28">
      <Reveal>
        {category && (
          <Link
            href={`/projects?category=${category.slug}`}
            className="link-arrow text-muted hover:text-foreground"
          >
            <span aria-hidden="true">←</span> {category.title}
          </Link>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          {category && <span className="eyebrow">{category.title}</span>}
          {project.kind && (
            <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
              {projectKindLabel[project.kind]}
            </span>
          )}
        </div>
        <h1 className="mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-6xl">
          {project.title}
        </h1>
        {project.description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {project.description}
          </p>
        )}
        {facts.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-6 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-1.5 text-sm">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Reveal>

      <div className="mt-12">
        <ProjectGallery images={images} alt={project.title} />
      </div>

      <nav
        aria-label="More projects"
        className="mt-24 grid gap-6 border-t border-border pt-10 sm:grid-cols-2"
      >
        <AdjacentLink project={prev} direction="Previous" />
        <AdjacentLink project={next} direction="Next" />
      </nav>
    </div>
  );
}

function AdjacentLink({
  project,
  direction,
}: {
  project: Project;
  direction: "Previous" | "Next";
}) {
  return (
    <Link
      href={`/projects/${project.category}/${project.slug}`}
      className={`group flex items-center gap-5 rounded-lg ${
        direction === "Next" ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-md bg-surface sm:w-36">
        <Image
          src={coverImage(project)}
          alt=""
          fill
          sizes="144px"
          className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="min-w-0">
        <div className="eyebrow">{direction} project</div>
        <div className="mt-1.5 text-lg leading-snug transition-colors duration-200 group-hover:text-accent">
          {project.title}
        </div>
      </div>
    </Link>
  );
}
