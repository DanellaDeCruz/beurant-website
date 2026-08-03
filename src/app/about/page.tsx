import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SriLankaMap from "@/components/SriLankaMap";
import ClientAwardsSlideshow from "@/components/ClientAwardsSlideshow";
import { siteStats } from "@/data/projects";

export const metadata: Metadata = {
  title: "Meet the Team — Beurant",
  description: "Meet the team behind Beurant, an interior and exhibition design studio.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Meet the Team</h1>
      </Reveal>

      <div className="mt-10 grid gap-10 sm:grid-cols-5 sm:gap-14">
        <Reveal delay={0.05} className="sm:col-span-2">
          <ClientAwardsSlideshow />
        </Reveal>

        <Reveal delay={0.1} className="sm:col-span-3">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              With a keen mindset to join the bank (since childhood) by
              following my dad&apos;s footsteps, the idea to become an
              interior designer came by accident! Back in 2012, with a 3
              month break after O Levels, we began to talk about
              reconstructing our home from scratch. My dad asked me to give
              my ideas, and once the construction had completed, I realised
              it came out exactly as how I visioned it! This motivated me to
              join the architectural, interior and construction industry
              and, here I am, an Interior Designer!
            </p>
            <h3 className="font-display text-xl text-foreground">
              The beginning of my entrepreneurial journey
            </h3>
            <p>
              With 3 months of compulsory internship during the degree and a
              count of 23 real life projects with my own personal clients at
              the time of graduation (out of which, 6 actually got
              constructed!), I was determined to start on my own straight
              out of college, despite all the challenges I had to face.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Our Plan */}
      <Reveal delay={0.05}>
        <div className="mt-20 border-t border-border pt-16">
          <h2 className="font-display text-3xl">Our Plan</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl text-accent">Mission</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">
                To break the norm of ordinary interiors by connecting people
                to a fresh, unique and extraordinary experience, within a
                given space.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl text-accent">Vision</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">
                Each client has their own regulations, each site has its own
                restrictions and each project has its own drawbacks. We
                overcome these by looking at it from a different
                perspective, studying the day-to-day use of typical spaces,
                and bringing in a concept to turn it into a one-of-a-kind
                area which one cannot get bored of!
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Birth of Beurant */}
      <Reveal delay={0.05}>
        <div className="mt-20 border-t border-border pt-16">
          <h2 className="font-display text-3xl">Birth of Beurant</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              A name was required to begin this journey. As my name starts
              with the letter &quot;B&quot;, I preferred my brand identity to
              start with the same letter.
            </p>
            <p>
              I was determined to come up with a completely unique word, as
              it is what will define my identity for my entire career, and
              common words are boring! My love for vibrant colours and
              vibrant spaces got me to brainstorm the word &quot;Vibrant&quot;
              itself and place the &quot;B&quot; in front. As of now, it
              reads &quot;B-rant&quot;. Then, I thought to simply use the
              first 3 letters of my name and have it as &quot;Bevrant&quot;.
              I wrote it on paper for the first time, but I had accidentally
              written &quot;u&quot; instead of &quot;v&quot;. After noticing
              the mistake, I pronounced it for the fun of it, but it
              actually had a better catch than &quot;Bevrant&quot;! Who would
              have thought a simple mistake could lead to the final, chosen
              name: &quot;Beurant&quot;?!
            </p>
            <p>
              Beurant was eventually launched on 19th January 2018, on my
              22nd birthday!
            </p>
          </div>
        </div>
      </Reveal>

      {/* How far have we come? */}
      <Reveal delay={0.05}>
        <div className="mt-20 border-t border-border pt-16">
          <div className="grid gap-10 sm:grid-cols-5 sm:gap-14">
            <div className="sm:col-span-3">
              <h2 className="font-display text-3xl">
                How far have we come?
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  We are proud to mention that we have worked on over 150
                  projects with over 75 different clients in just 8 years
                  since our inception! A lot of our clients continue to
                  support our growth by entrusting us with more and more
                  projects, while even sharing our contact with their own
                  customers and client base.
                </p>
                <p>
                  In return, we do our best to help our clients back, by
                  sharing their contacts with each other and through
                  relevant networking. Yes! Our clients have helped each
                  other out!
                </p>
                <p>
                  At least 30 projects, along with furniture, fittings and
                  products, have been constructed, manufactured or produced.
                  Beurant hopes to expand further and globally, to the best
                  of our ability!
                </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="glass flex h-full min-h-[360px] items-center justify-center rounded-2xl p-6">
                <SriLankaMap />
              </div>
              <p className="mt-3 text-center text-sm text-muted">
                Kandalama · Kurunegala · Batticaloa · Bentota · Galle ·
                Matara · Kandy · Colombo · Wattala
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-20 grid gap-8 border-t border-border pt-16 sm:grid-cols-3">
          {siteStats.map((s) => (
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
