"use client";

import { useState, type FormEvent } from "react";
import { categories } from "@/data/projects";
import { site, WEB3FORMS_KEY } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-surface/50 px-3.5 text-base text-foreground placeholder:text-muted/60 transition-colors duration-200 hover:border-white/25 focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `New project inquiry from ${name || "website visitor"}`;

    // No Web3Forms key yet: fall back to a pre-filled email (static export
    // has no server of its own to receive the form).
    if (!WEB3FORMS_KEY) {
      const typeLine = projectType ? `Type of project: ${projectType}\n\n` : "";
      const body = `${typeLine}${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "Beurant website",
          name,
          email,
          project_type: projectType || "Not specified",
          message,
          botcheck: data.get("botcheck") ? true : "",
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!json.success) throw new Error("Submission rejected");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-border p-8">
        <h2 className="text-2xl">Thank you — message sent.</h2>
        <p className="mt-3 leading-relaxed text-muted">
          We’ll get back to you shortly at the email address you gave.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-secondary mt-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name…"
            className={`${fieldClass} h-11`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
            placeholder="you@example.com"
            className={`${fieldClass} h-11`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="text-sm font-medium">
          Type of project
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          className={`${fieldClass} h-11 bg-surface`}
        >
          <option value="" className="bg-surface text-foreground">
            Select an option
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.title} className="bg-surface text-foreground">
              {c.title}
            </option>
          ))}
          <option value="Other" className="bg-surface text-foreground">
            Other
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="The space, your budget, your time-frame…"
          className={`${fieldClass} resize-y py-3 leading-relaxed`}
        />
      </div>

      {/* Honeypot for Web3Forms spam filtering — hidden from people. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        <p aria-live="polite" className="text-sm text-muted">
          {status === "error" ? (
            <span className="text-foreground">
              Couldn’t send. Please try again, or email{" "}
              <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                {site.email}
              </a>
              .
            </span>
          ) : !WEB3FORMS_KEY ? (
            "Opens your email app with the message ready to send."
          ) : null}
        </p>
      </div>
    </form>
  );
}
