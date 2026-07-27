import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import HeroSlideshow from "@/components/HeroSlideshow";
import {
  categories,
  categoryColors,
  featuredProjectSlugs,
  projects,
  withAlpha,
} from "@/data/projects";

const slideshowSlugs = [
  "aarawild-luxury-villas-kandalama",
  "hardware-store",
  "pod-designs",
  "world-health-organisation",
  "beurant-identity-cw-mackie",
];

export default function Home() {
  const featured = featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const slides = slideshowSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const stats = [
    { value: `${projects.length}+`, label: "Projects delivered" },
    { value: `${categories.length}`, label: "Areas of practice" },
    { value: "Sri Lanka", label: "Based & working across" },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start gap-7">
            <Reveal>
              <span className="inline-block rounded-lg bg-white p-2">
                <Image
                  src="/brand/beurant-mark.png"
                  alt="Beurant"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-xl font-display text-4xl leading-tight sm:text-6xl">
                Interiors and exhibition spaces, designed with intent.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-lg text-lg leading-relaxed text-muted">
                Beurant is a design studio working across residential
                interiors, retail fit-outs, exhibition stalls and corporate
                installations — placeholder copy, replace with your own
                positioning.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground hover:text-background"
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
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-6 rounded-xl border border-border bg-surface px-6 py-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={i > 0 ? "border-l border-border pl-6" : ""}
                  >
                    <div className="font-display text-2xl text-accent">
                      {s.value}
                    </div>
                    <div className="text-xs text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative hidden h-[460px] lg:block">
            <div
              className="absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${categoryColors["residential-interiors"].solid}, transparent 70%)`,
              }}
            />
            <div
              className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full opacity-25 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${categoryColors["branding-graphic-design"].solid}, transparent 70%)`,
              }}
            />
            <Reveal delay={0.15} className="relative h-full w-full">
              <HeroSlideshow slides={slides} />
            </Reveal>
          </div>

          <div className="-mt-4 block lg:hidden">
            <Reveal delay={0.1} className="h-72 w-full">
              <HeroSlideshow slides={slides} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-2xl">What we do</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((c, i) => {
              const color = categoryColors[c.slug];
              return (
                <Reveal key={c.slug} delay={i * 0.05} className="h-full">
                  <Link
                    href={`/projects?category=${c.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-border transition-colors hover:border-accent"
                  >
                    <div
                      className="h-1.5 w-full"
                      style={{ backgroundColor: color?.solid }}
                    />
                    <div
                      className="flex flex-1 flex-col p-5"
                      style={{
                        backgroundColor: color
                          ? withAlpha(color.solid, 0.1)
                          : undefined,
                      }}
                    >
                      <div
                        className="font-display text-lg leading-snug"
                        style={{ color: color?.solid }}
                      >
                        {c.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {c.description}
                      </p>
                      <div
                        className="mt-auto pt-4 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ color: color?.solid }}
                      >
                        Explore →
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
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

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Tell us about it — we&apos;d love to help bring it to life.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground"
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
