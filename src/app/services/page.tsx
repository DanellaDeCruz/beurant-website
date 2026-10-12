import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  categories,
  categoryShowcaseSlug,
  coverImage,
  getProjectsByCategory,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, retail, exhibition and corporate interiors — and how Beurant takes a project from first brief to final handover.",
};

// DRAFT — written from what the site already states (requirements, budget
// and time-frame; drawings and 3D visuals; furniture and fittings produced;
// every project handled through to completion). Confirm with the studio.
const PROCESS = [
  {
    title: "Brief",
    body: "We start with your requirements, budget and time-frame — and with the site itself.",
  },
  {
    title: "Concept",
    body: "A design direction for the space: layout, materials and mood, shown in drawings and 3D visuals.",
  },
  {
    title: "Design development",
    body: "Detailed drawings for joinery, furniture, lighting and finishes, refined with you until every detail is agreed.",
  },
  {
    title: "Build",
    body: "Construction and fit-out on site, alongside the furniture, fittings and products we produce.",
  },
  {
    title: "Handover",
    body: "The finished space, handed over complete — and we stay in touch well beyond it.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-28">
      <Reveal>
        <p className="eyebrow">Services</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">
          From first sketch to final handover.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          One studio for the design and the delivery — across homes, retail,
          exhibitions and corporate spaces.
        </p>
      </Reveal>

      <div className="mt-20 flex flex-col">
        {categories.map((category, i) => {
          const catProjects = getProjectsByCategory(category.slug);
          const cover =
            catProjects.find(
              (p) => p.slug === categoryShowcaseSlug[category.slug]
            ) ?? catProjects[0];
          return (
            <Reveal
              key={category.slug}
              className="grid items-center gap-8 border-t border-border py-12 sm:grid-cols-2 sm:gap-14"
            >
              <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                <span className="text-sm tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl">{category.title}</h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  {category.description}
                </p>
                <Link
                  href={`/projects?category=${category.slug}`}
                  className="link-arrow mt-6 text-accent"
                >
                  View {catProjects.length} Project
                  {catProjects.length === 1 ? "" : "s"}
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
              {cover && (
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-surface ${
                    i % 2 === 1 ? "sm:order-1" : ""
                  }`}
                >
                  <Image
                    src={coverImage(cover)}
                    alt={`${cover.title} — ${category.title}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      <section className="mt-16 border-t border-border pt-20">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Five stages, one team throughout.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step, i) => (
            <li key={step.title}>
              <Reveal
                delay={i * 60}
                className="flex h-full flex-col border-t border-border py-6"
              >
                <span className="text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <Reveal className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <h2 className="text-2xl">Ready to start?</h2>
          <p className="mt-2 text-muted">
            Tell us about your space and we’ll get back to you.
          </p>
        </div>
        <Link href="/contact" className="btn btn-primary">
          Start a Project
        </Link>
      </Reveal>
    </div>
  );
}
