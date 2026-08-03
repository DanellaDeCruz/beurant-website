import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import HeroBackground from "@/components/HeroBackground";
import {
  categories,
  featuredProjectSlugs,
  fullImageAt,
  getProject,
  projects,
  siteStats,
} from "@/data/projects";

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

  const heroImages = heroBackgroundImages
    .filter(({ project }) => Boolean(project))
    .map(({ project, index, mobileBias }) => ({
      src: fullImageAt(project!, index),
      mobileBias,
    }));

  const stats = siteStats;

  return (
    <>
      <section className="relative flex min-h-dvh items-center overflow-hidden py-16">
        <HeroBackground images={heroImages} />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <h1 className="max-w-xl font-display text-4xl leading-tight sm:text-6xl">
              Interior spaces, designed with intent.
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/80">
              Every project we undertake, we believe in the challenge given
              to us. We believe in meeting the expectations of everyone
              through design. The way we achieve the challenge is by
              creating an appealing and unique space, based on one&apos;s
              requirements, budget &amp; time-frame. We just happen to
              handle every project all the way till completion — greetings,
              and beyond!
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium text-foreground"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium text-foreground"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass mt-8 inline-flex flex-wrap gap-6 rounded-xl px-6 py-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={i > 0 ? "border-l border-border pl-6" : ""}
                >
                  <div className="font-display text-2xl text-foreground">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-2xl">What we do</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05} className="h-full">
                <Link
                  href={`/projects?category=${c.slug}`}
                  className="glass glass-hover group flex h-full flex-col rounded-lg p-5"
                >
                  <div className="flex min-h-[4.5rem] items-start font-display text-lg leading-snug">
                    {c.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.description}
                  </p>
                  <div className="mt-auto pt-4 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05} className="h-full">
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
              className="glass-accent mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium"
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
