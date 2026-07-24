import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import {
  categories,
  categoryColors,
  featuredProjectSlugs,
  fullCoverImage,
  getCategory,
  projects,
  type Project,
} from "@/data/projects";

const heroProject = projects.find(
  (p) => p.slug === "aarawild-luxury-villas-kandalama"
)!;

const bentoSlugs = [
  "dehiwala-residence",
  "sense-lk",
  "jat-holdings-stall",
  "world-health-organisation",
];

function BentoTile({
  project,
  className,
  sizes,
}: {
  project: Project;
  className: string;
  sizes: string;
}) {
  const category = getCategory(project.category);
  const color = categoryColors[project.category];

  return (
    <Link
      href={`/projects/${project.category}/${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        src={fullCoverImage(project)}
        alt={project.title}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: color?.solid }}
          />
          <span className="text-xs uppercase tracking-wide text-white/80">
            {category?.title}
          </span>
        </div>
        <div className="mt-1 font-display text-lg text-white">
          {project.title}
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const featured = featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const bento = bentoSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const stats = [
    { value: `${projects.length}+`, label: "Projects delivered" },
    { value: `${categories.length}`, label: "Areas of practice" },
    { value: "Sri Lanka", label: "Based & working across" },
  ];

  return (
    <>
      <section className="relative h-[560px] w-full overflow-hidden sm:h-[640px] lg:h-[720px]">
        <Image
          src={fullCoverImage(heroProject)}
          alt={heroProject.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 sm:pb-14">
            <Reveal>
              <span className="inline-block rounded-lg bg-white/95 p-2 shadow-sm">
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
              <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-white sm:text-6xl">
                Interiors and exhibition spaces, designed with intent.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
                Beurant is a design studio working across residential
                interiors, retail fit-outs, exhibition stalls and corporate
                installations — placeholder copy, replace with your own
                positioning.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-white"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Get in touch
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 inline-flex flex-wrap gap-6 rounded-xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={
                      i > 0 ? "border-l border-white/20 pl-6" : ""
                    }
                  >
                    <div className="font-display text-2xl text-white">
                      {s.value}
                    </div>
                    <div className="text-xs text-white/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-2xl">Selected work</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 hidden gap-4 sm:grid sm:h-[520px] sm:grid-cols-4 sm:grid-rows-2">
            {bento[0] && (
              <BentoTile
                project={bento[0]}
                className="col-span-2 row-span-2"
                sizes="(min-width: 640px) 38vw, 100vw"
              />
            )}
            {bento[1] && (
              <BentoTile
                project={bento[1]}
                className="col-span-2 row-span-1"
                sizes="(min-width: 640px) 38vw, 100vw"
              />
            )}
            {bento[2] && (
              <BentoTile
                project={bento[2]}
                className="col-span-1 row-span-1"
                sizes="(min-width: 640px) 19vw, 100vw"
              />
            )}
            {bento[3] && (
              <BentoTile
                project={bento[3]}
                className="col-span-1 row-span-1"
                sizes="(min-width: 640px) 19vw, 100vw"
              />
            )}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:hidden">
            {bento.map((p) => (
              <BentoTile
                key={p.slug}
                project={p}
                className="aspect-[4/3]"
                sizes="100vw"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border/70 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-2xl">What we do</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((c, i) => {
              const color = categoryColors[c.slug];
              return (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    href={`/projects?category=${c.slug}`}
                    className="group block h-full overflow-hidden rounded-lg border border-border/70 transition-shadow hover:shadow-md"
                  >
                    <div
                      className="h-1.5 w-full"
                      style={{ backgroundColor: color?.solid }}
                    />
                    <div
                      className="p-5"
                      style={{ backgroundColor: color?.tint }}
                    >
                      <div
                        className="font-display text-lg leading-snug"
                        style={{ color: color?.text }}
                      >
                        {c.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                        {c.description}
                      </p>
                      <div
                        className="mt-4 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ color: color?.text }}
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

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Tell us about it — we&apos;d love to help bring it to life.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-foreground"
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
