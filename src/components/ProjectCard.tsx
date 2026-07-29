"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { coverImage, getCategory, type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const category = getCategory(project.category);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.category}/${project.slug}`}
        className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-lg"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-accent-soft">
          <Image
            src={coverImage(project)}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-4">
          {category && (
            <div className="flex min-h-[2rem] items-start">
              <span className="glass-tag inline-block w-fit rounded-md px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-muted">
                {category.title}
              </span>
            </div>
          )}
          <div className="mt-2 font-display text-lg leading-snug text-foreground">
            {project.title}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
