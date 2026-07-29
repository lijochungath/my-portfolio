"use client";

import { useState } from "react";


import ProjectCard from "./components/projectcard";
import ArchitectureModal from "./components/architecturemodal";

import { projects } from "./projects";
import { Project } from "./types";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  if (!projects.length) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h1 className="text-2xl font-semibold">
          No projects found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">


      {/* Remaining Projects */}

      <section className="mx-auto max-w-7xl px-8 pb-20">


  <div className="space-y-12">

  {projects.map((project) => (

    <ProjectCard
      key={project.id}
      project={project}
      onViewDiagram={setSelectedProject}
    />

  ))}

</div>

      </section>

      {/* Architecture Modal */}

      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </main>
  );
}