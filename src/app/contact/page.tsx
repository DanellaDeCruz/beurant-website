import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Beurant",
  description: "Get in touch with Beurant about your next project.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Get in touch</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Got a project in mind? Tell us a bit about it and we&apos;ll get
          back to you shortly.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-5">
        <Reveal delay={0.05} className="sm:col-span-2">
          <div className="glass flex h-full flex-col gap-6 rounded-2xl p-6 text-sm">
            <div>
              <div className="font-medium text-foreground/80">Email</div>
              <a
                href="mailto:bevan@beurant.com"
                className="mt-1 block text-muted transition-colors hover:text-accent"
              >
                bevan@beurant.com
              </a>
            </div>
            <div>
              <div className="font-medium text-foreground/80">Phone</div>
              <div className="mt-1 text-muted">+94 77 299 0570</div>
            </div>
            <div>
              <div className="font-medium text-foreground/80">Studio</div>
              <div className="mt-1 text-muted">Wattala, Sri Lanka</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="sm:col-span-3">
          <div className="glass rounded-2xl p-6">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
