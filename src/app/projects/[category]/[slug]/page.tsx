import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import {
  galleryImages,
  getCategory,
  getProject,
  projects,
} from "@/data/projects";
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
    title: `${project.title} — Beurant`,
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
  const images = galleryImages(project);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        {category && (
          <Link
            href={`/projects?category=${category.slug}`}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← {category.title}
          </Link>
        )}
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          {project.title}
        </h1>
        {project.location && (
          <p className="mt-2 text-sm text-muted">{project.location}</p>
        )}
      </Reveal>

      <div className="mt-12">
        <ProjectGallery images={images} alt={project.title} />
      </div>
    </div>
  );
}
