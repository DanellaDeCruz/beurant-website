import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Beurant — tell us about your space.",
};

export default function ContactPage() {
  const details = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phone, href: site.phoneHref },
    { label: "Studio", value: site.location },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-28">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl sm:text-6xl">Start a project.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Tell us about the space, your budget and your time-frame, and
          we’ll get back to you shortly.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 border-t border-border pt-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <dl className="flex flex-col gap-8">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="eyebrow">{d.label}</dt>
                <dd className="mt-2 text-lg">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="tabular-nums transition-colors duration-200 hover:text-accent"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
            <div>
              <dt className="eyebrow">Follow</dt>
              <dd className="mt-2 flex gap-5 text-lg">
                {site.socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={60} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
