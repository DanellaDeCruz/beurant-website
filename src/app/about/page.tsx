import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">About Beurant</h1>
      </Reveal>

      <div className="mt-10 grid gap-10 sm:grid-cols-5 sm:gap-14">
        <Reveal delay={0.05} className="sm:col-span-2">
          <div className="glass overflow-hidden rounded-2xl">
            <Image
              src="/brand/founder-portrait.webp"
              alt="Founder of Beurant"
              width={900}
              height={1461}
              className="w-full object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="sm:col-span-3">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Beurant is a one-person practice, and that&apos;s deliberate —
              every project on this site was designed, detailed and delivered
              personally, not handed off partway through. Placeholder —
              replace with your own story of how the studio started.
            </p>
            <p>
              Trained in design at AOD International Design Campus
              (Northumbria University), the practice has since worked across
              residential interiors, retail fit-outs, exhibition stalls and
              corporate installations — placeholder copy, refine to taste.
            </p>
            <p>
              Placeholder — a closing paragraph on what clients can expect:
              direct communication, hands-on execution, and a single point of
              accountability from concept to handover.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
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
