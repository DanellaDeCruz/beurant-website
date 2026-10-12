import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import HeroBackground from "@/components/HeroBackground";
import {
  categories,
  featuredProjectSlugs,
  fullImageAt,
  getProject,
  getProjectsByCategory,
  projects,
  siteStats,
} from "@/data/projects";
import { site } from "@/lib/site";

// Real photography rather than the exhibition-stall renders — those carry
// large brand wordmarks (HUTCH, DEWALT, AOD) that compete with the headline.
// `mobileBias: "right"` shifts the crop on narrow/tall (mobile) viewports,
// where the visible window is much narrower than the source photo — plain
// center framing can land on empty wall/floor instead of the actual subject.
const heroBackgroundImages = [
  {
    project: getProject("residential-interiors", "aarawild-luxury-villas-kandalama"),
    index: 3,
    mobileBias: "right",
  },
  {
    project: getProject("residential-interiors", "aarawild-luxury-villas-kandalama"),
    index: 5,
    mobileBias: undefined,
  },
  {
    project: getProject("residential-interiors", "aarawild-luxury-villas-kandalama"),
    index: 6,
    mobileBias: undefined,
  },
  {
    project: getProject("corporate-institutional", "tata-flagship-showroom"),
    index: 3,
    mobileBias: "right",
  },
] as const;

export default function Home() {
  const featured = featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const [lead, ...rest] = featured;

  const heroImages = heroBackgroundImages
    .filter(({ project }) => Boolean(project))
    .map(({ project, index, mobileBias }) => ({
      src: fullImageAt(project!, index),
      mobileBias,
    }));

  return (
    <>
      <section className="relative -mt-16 flex min-h-dvh items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-20">
        <HeroBackground images={heroImages} />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <p className="eyebrow">
            Interior &amp; Exhibition Design Studio
            <span className="hidden sm:inline"> · Sri Lanka</span>
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl leading-[1.02] font-normal sm:text-7xl">
            Interior spaces, designed with intent.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/85">
            Residential, retail, exhibition and corporate interiors — designed
            and seen through to completion by one studio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn btn-glass">
              Start a Project
            </Link>
          </div>

          <dl className="glass mt-10 grid w-fit grid-cols-3 divide-x divide-white/15 rounded-xl py-4">
            {siteStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse px-5 sm:px-7">
                <dt className="mt-1 text-xs text-muted">{s.label}</dt>
                <dd className="text-2xl tabular-nums tracking-tight sm:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Four kinds of space, one studio.
            </h2>
          </div>
          <Link href="/services" className="link-arrow hidden text-muted hover:text-foreground sm:inline-flex">
            Our services <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => {
            const count = getProjectsByCategory(c.slug).length;
            return (
              <Reveal key={c.slug} delay={i * 60} className="h-full">
                <Link
                  href={`/projects?category=${c.slug}`}
                  className="group flex h-full flex-col border-t border-border py-6"
                >
                  <span className="text-sm tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl leading-snug transition-colors duration-200 group-hover:text-accent">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {c.description}
                  </p>
                  <span className="link-arrow mt-auto pt-6 text-foreground/80">
                    {count} projects <span className="arrow" aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Featured projects</h2>
            </div>
            <Link href="/projects" className="link-arrow text-muted hover:text-foreground">
              All projects <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {lead && (
              <Reveal className="h-full sm:col-span-2 lg:row-span-2">
                <ProjectCard
                  project={lead}
                  feature
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Reveal>
            )}
            {rest.map((project, i) => (
              <Reveal key={project.slug} delay={(i + 1) * 60} className="h-full">
                <ProjectCard
                  project={project}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70">
        <Reveal className="mx-auto max-w-6xl px-6 py-28 text-center">
          <h2 className="text-3xl sm:text-5xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted">
            Tell us about the space, your budget and your time-frame — we’ll
            take it from there.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <a href={`mailto:${site.email}`} className="btn btn-secondary">
              {site.email}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
