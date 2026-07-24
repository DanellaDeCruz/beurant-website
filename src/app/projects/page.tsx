import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects — Beurant",
  description: "Browse the Beurant portfolio by category.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          The full portfolio, filterable by category.
        </p>
      </Reveal>

      <div className="mt-10">
        <ProjectsClient />
      </div>
    </div>
  );
}
