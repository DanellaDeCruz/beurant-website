"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { coverImage, getCategory, type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const category = getCategory(project.category);

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Link
        href={`/projects/${project.category}/${project.slug}`}
        className="group block overflow-hidden rounded-lg border border-border/70 bg-white"
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
        <div className="p-4">
          {category && (
            <div className="text-xs uppercase tracking-wide text-accent">
              {category.title}
            </div>
          )}
          <div className="mt-1 font-display text-lg leading-snug">
            {project.title}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
