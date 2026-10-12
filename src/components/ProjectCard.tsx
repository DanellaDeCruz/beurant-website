import Image from "next/image";
import Link from "next/link";
import {
  coverImage,
  fullCoverImage,
  getCategory,
  projectKindLabel,
  type Project,
} from "@/data/projects";

export default function ProjectCard({
  project,
  feature = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  project: Project;
  /** Large lead card — uses the full-size image and a taller crop. */
  feature?: boolean;
  sizes?: string;
}) {
  const category = getCategory(project.category);

  return (
    <Link
      href={`/projects/${project.category}/${project.slug}`}
      className="group flex h-full flex-col rounded-lg"
    >
      <div
        className={`relative overflow-hidden rounded-lg bg-surface ${
          feature ? "aspect-[4/3] lg:aspect-auto lg:flex-1" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={feature ? fullCoverImage(project) : coverImage(project)}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />
        {project.kind && (
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {projectKindLabel[project.kind]}
          </span>
        )}
      </div>
      <div className="pt-4">
        {category && <div className="eyebrow">{category.title}</div>}
        <h3
          className={`mt-1.5 leading-snug text-foreground transition-colors duration-200 group-hover:text-accent ${
            feature ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        {project.location && (
          <p className="mt-1 text-sm text-muted">{project.location}</p>
        )}
      </div>
    </Link>
  );
}
