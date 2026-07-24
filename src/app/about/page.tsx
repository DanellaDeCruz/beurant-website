import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { categories, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "About — Beurant",
  description: "About Beurant, an interior and exhibition design studio.",
};

const stats = [
  { value: `${projects.length}+`, label: "Projects delivered" },
  { value: `${categories.length}`, label: "Areas of practice" },
  { value: "Sri Lanka", label: "Based & working across" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">About Beurant</h1>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Placeholder — replace with your studio&apos;s story: how it
            started, the philosophy behind the work, and what clients can
            expect from working with you.
          </p>
          <p>
            Placeholder — a second paragraph on the range of work, from
            intimate residential interiors to large-scale corporate and
            institutional installations, and what ties it all together.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 grid gap-8 border-t border-border/70 pt-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl text-accent">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
