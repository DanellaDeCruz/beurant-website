import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  categories,
  categoryColors,
  coverImage,
  getProjectsByCategory,
  withAlpha,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Services — Beurant",
  description: "What Beurant does — residential, retail, exhibition and corporate design.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Services</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Placeholder — replace with a short intro on how you scope and run
          projects across these areas.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-col gap-16">
        {categories.map((category, i) => {
          const catProjects = getProjectsByCategory(category.slug);
          const cover = catProjects[0];
          const color = categoryColors[category.slug];
          return (
            <Reveal key={category.slug} delay={i * 0.05}>
              <div className="grid items-center gap-8 sm:grid-cols-2">
                <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide text-background"
                    style={{ backgroundColor: color?.solid }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-2xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    {category.description}
                  </p>
                  <Link
                    href={`/projects?category=${category.slug}`}
                    className="mt-5 inline-block text-sm font-medium"
                    style={{ color: color?.solid }}
                  >
                    View {catProjects.length} project
                    {catProjects.length === 1 ? "" : "s"} →
                  </Link>
                </div>
                {cover && (
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-lg ${
                      i % 2 === 1 ? "sm:order-1" : ""
                    }`}
                    style={{
                      backgroundColor: color
                        ? withAlpha(color.solid, 0.12)
                        : undefined,
                    }}
                  >
                    <Image
                      src={coverImage(cover)}
                      alt={category.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
