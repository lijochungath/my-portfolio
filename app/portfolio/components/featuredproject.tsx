"use client";

import { Project } from "../types";

interface FeaturedProjectProps {
  project: Project;
  onViewDiagram: (project: Project) => void;
}

export default function FeaturedProject({
  project,
  onViewDiagram,
}: FeaturedProjectProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
                  <div className="mb-16 border-l-4 border-sky-500 pl-6">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
      {project.title}
  </p>
<p className="mt-5 max-w-4xl text-lg leading-8 text-slate-100">
      {project.client}
</p>

</div>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            {project.role}
          </span>

          <span className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2">
            {project.industry}
          </span>

          <span className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2">
            {project.duration}
          </span>

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-emerald-400">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT */}

        <div className="space-y-8">
          {/* Business Challenge */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-5">
              Business Challenge
            </h3>

            <p className="leading-8 text-slate-300">
              {project.businessChallenge}
            </p>
          </div>

          {/* Solution */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-5">Solution</h3>

            <div className="space-y-4">
              {project.solution.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-5">
              Responsibilities
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {project.responsibilities.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-700 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="space-y-8">
          {/* Business Outcomes */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-5">
              Business Outcomes
            </h3>

            <div className="space-y-4">
              {project.businessOutcomes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-5">
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture */}

          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8">
            <h3 className="text-2xl font-semibold mb-5">
              Enterprise Architecture
            </h3>

            <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950">
              <div className="text-center">
                <p className="mb-6 text-slate-400">
                  Enterprise Architecture Diagram
                </p>

                <button
                  onClick={() => onViewDiagram(project)}
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
                >
                  View Architecture Diagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}