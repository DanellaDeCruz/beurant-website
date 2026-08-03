"use client";

import { useState, type FormEvent } from "react";
import { categories } from "@/data/projects";

const CONTACT_EMAIL = "hello@beurant.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  // Static export has no server to receive a POST, so submission opens a
  // pre-filled mailto: — swap this handler for a form service (e.g.
  // Formspree) once one is connected.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${name || "website visitor"}`);
    const typeLine = projectType ? `Type of project: ${projectType}\n\n` : "";
    const body = encodeURIComponent(`${typeLine}${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="glass mt-1.5 w-full rounded-md px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="glass mt-1.5 w-full rounded-md px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="projectType" className="text-sm font-medium">
          Type of project
        </label>
        <select
          id="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          style={{ colorScheme: "dark", color: "var(--foreground)" }}
          className="glass mt-1.5 w-full rounded-md px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
        >
          <option
            value=""
            style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
          >
            Select an option
          </option>
          {categories.map((c) => (
            <option
              key={c.slug}
              value={c.title}
              style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
            >
              {c.title}
            </option>
          ))}
          <option
            value="Other"
            style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
          >
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
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="glass mt-1.5 w-full rounded-md px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="glass-accent mt-2 self-start rounded-full px-6 py-3 text-sm font-medium"
      >
        Send message
      </button>
    </form>
  );
}
