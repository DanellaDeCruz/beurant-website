import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SriLankaMap from "@/components/SriLankaMap";
import ClientAwardsSlideshow from "@/components/ClientAwardsSlideshow";
import { siteStats } from "@/data/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Beurant is an interior and exhibition design studio in Wattala (Greater Colombo), Sri Lanka, founded in 2018 by designer Bevan David.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-28">
      {/* Studio first */}
      <Reveal>
        <p className="eyebrow">About</p>
        <h1 className="mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-6xl">
          A design studio that sees every project through.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Beurant is an interior and exhibition design studio based in{" "}
          {site.location}. Founded in {site.founded} by designer{" "}
          {site.founder}, the studio designs homes, retail spaces,
          exhibitions and corporate interiors — and stays with each one all the
          way to completion.
        </p>
      </Reveal>

      <Reveal>
        <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
          {siteStats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl tabular-nums tracking-tight sm:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Founder */}
      <section className="mt-24 grid gap-10 border-t border-border pt-16 sm:grid-cols-5 sm:gap-14">
        <Reveal className="sm:col-span-2">
          <ClientAwardsSlideshow />
        </Reveal>

        <Reveal delay={60} className="sm:col-span-3">
          <p className="eyebrow">Founder</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{site.founder}</h2>
          <p className="mt-1 text-muted">Founder &amp; Interior Designer</p>

          <figure className="mt-10">
            <blockquote className="border-l border-accent/60 pl-6 text-xl leading-relaxed text-foreground/90">
              <p>
                “I always meant to follow my dad into banking. Then, in 2012,
                during a three-month break after O Levels, we started talking
                about rebuilding our home from scratch. My dad asked for my
                ideas — and when construction finished, it came out exactly
                as I had pictured it. That’s what brought me into
                architecture, interiors and construction.”
              </p>
            </blockquote>
            <figcaption className="mt-4 pl-6 text-sm text-muted">
              — {site.founder}
            </figcaption>
          </figure>

          <p className="mt-10 leading-relaxed text-muted">
            By graduation, {site.founder.split(" ")[0]} had completed a
            three-month internship and taken on 23 real projects for private
            clients — six of which were built — and set up the studio straight
            out of college.
          </p>
        </Reveal>
      </section>

      {/* Mission & vision */}
      <section className="mt-24 grid gap-10 border-t border-border pt-16 sm:grid-cols-2 sm:gap-14">
        <Reveal>
          <h2 className="eyebrow text-accent">Mission</h2>
          <p className="mt-4 text-2xl leading-snug">
            To break the norm of ordinary interiors by connecting people to a
            fresh, unique and extraordinary experience within a given space.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="eyebrow text-accent">Vision</h2>
          <p className="mt-4 text-2xl leading-snug">
            Every client has their own requirements, every site its own
            restrictions. We look at each from a different perspective —
            studying how the space is used day to day — and bring in a concept
            that makes it one of a kind.
          </p>
        </Reveal>
      </section>

      {/* Reach */}
      <section className="mt-24 grid gap-10 border-t border-border pt-16 sm:grid-cols-5 sm:gap-14">
        <Reveal className="sm:col-span-3">
          <p className="eyebrow">Reach</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Projects across the island.</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Many clients return with new projects and introduce the studio
              to their own networks — and Beurant returns the favour,
              connecting clients with one another.
            </p>
            <p>
              More than 30 projects, along with furniture, fittings and
              products, have been built, manufactured or produced. The studio
              hopes to keep growing — including beyond Sri Lanka.
            </p>
          </div>

          <aside className="mt-12 rounded-xl border border-border p-6">
            <h3 className="eyebrow">The name</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Beurant started as a “B” — the founder’s initial — in front of
              “vibrant”, for a love of vibrant colours and spaces. Writing
              “Bevrant” on paper for the first time, a “v” came out as a “u”.
              Said aloud, the mistake had a better ring to it, and it stuck.
              The studio launched on 19 January 2018 — {site.founder.split(" ")[0]}’s
              22nd birthday.
            </p>
          </aside>
        </Reveal>

        <Reveal delay={60} className="sm:col-span-2">
          <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-border bg-surface/40 p-6">
            <SriLankaMap />
          </div>
        </Reveal>
      </section>

      <Reveal className="mt-24 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <h2 className="text-2xl">Work with the studio</h2>
          <p className="mt-2 text-muted">
            Tell us about your space, budget and time-frame.
          </p>
        </div>
        <Link href="/contact" className="btn btn-primary">
          Start a Project
        </Link>
      </Reveal>
    </div>
  );
}
