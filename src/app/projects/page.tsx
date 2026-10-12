import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import ProjectsClient, { ProjectsView } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Residential, retail, exhibition and corporate projects by Beurant — browse the portfolio by category.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-28">
      <Reveal>
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-3 text-4xl sm:text-6xl">Projects</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {projects.length} projects across homes, retail, exhibitions and
          corporate spaces. Concept and branding work is labelled as such.
        </p>
      </Reveal>

      <div className="mt-12">
        {/* useSearchParams needs a Suspense boundary under static export;
            the fallback is the unfiltered portfolio, so the HTML is complete. */}
        <Suspense fallback={<ProjectsView active="all" />}>
          <ProjectsClient />
        </Suspense>
      </div>
    </div>
  );
}
