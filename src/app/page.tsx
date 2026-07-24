import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { categories, featuredProjectSlugs, projects } from "@/data/projects";

export default function Home() {
  const featured = featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 pb-20 pt-20 sm:pt-28">
        <Reveal>
          <Image
            src="/brand/beurant-mark.png"
            alt="Beurant"
            width={64}
            height={64}
            className="h-14 w-auto"
            priority
          />
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
            Interiors and exhibition spaces, designed with intent.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Beurant is a design studio working across residential interiors,
            retail fit-outs, exhibition stalls and corporate installations —
            placeholder copy, replace with your own positioning.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border/70 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-2xl">What we do</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/projects?category=${c.slug}`}
                  className="group block h-full rounded-lg border border-border/70 p-5 transition-colors hover:border-accent"
                >
                  <div className="font-display text-lg leading-snug">
                    {c.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.description}
                  </p>
                  <div className="mt-4 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Explore →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl">Featured projects</h2>
            <Link
              href="/projects"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              View all →
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Tell us about it — we&apos;d love to help bring it to life.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
