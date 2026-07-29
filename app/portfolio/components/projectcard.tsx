"use client";

import { Project } from "../types";
import {
  Building2,
  CircleHelp,
  Lightbulb,
  BriefcaseBusiness,
  Trophy,
  Cpu,
  Network,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onViewDiagram: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onViewDiagram,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* ================= HEADER ================= */}

      <div className="border-b border-slate-800 bg-slate-950 px-8 py-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-cyan-500/10 p-4">
              <Building2 className="h-8 w-8 text-cyan-400" />
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                {project.client}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                {project.title}
              </h2>

            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              {project.role}
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2 text-sm">
              {project.industry}
            </span>

          </div>

        </div>

      </div>

      {/* ================= BODY ================= */}

      <div className="grid gap-8 p-8 lg:grid-cols-2">

        {/* ================= LEFT COLUMN ================= */}

        <div className="space-y-6">

          {/* Business Challenge */}

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

            <div className="mb-5 flex items-center gap-3">

              <CircleHelp className="h-6 w-6 text-red-400" />

              <h3 className="text-xl font-semibold">
                Business Challenge
              </h3>

            </div>

            <p className="leading-8 text-slate-300">
              {project.businessChallenge}
            </p>

          </div>

          {/* Solution */}

          <div className="rounded-2xl border border-cyan-500/20 bg-slate-950 p-6">

            <div className="mb-5 flex items-center gap-3">

              <Lightbulb className="h-6 w-6 text-green-400" />

              <h3 className="text-xl font-semibold">
                Solution
              </h3>

            </div>

            <div className="space-y-4">

              {project.solution.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="leading-7 text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Responsibilities */}
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-950 p-6">

            <div className="mb-5 flex items-center gap-3">

              <BriefcaseBusiness className="h-6 w-6 text-yellow-400" />

              <h3 className="text-xl font-semibold">
                Responsibilities
              </h3>

            </div>

            <div className="space-y-4">

              {project.responsibilities.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="leading-7 text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN STARTS HERE ================= */}

        <div className="space-y-6">

                    {/* Business Outcomes */}

          <div className="rounded-2xl border border-emerald-500/20 bg-slate-950 p-6">

            <div className="mb-5 flex items-center gap-3">

              <Trophy className="h-6 w-6 text-emerald-400" />

              <h3 className="text-xl font-semibold">
                Business Outcomes
              </h3>

            </div>

            <div className="space-y-4">

              {project.businessOutcomes.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <div className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="leading-7 text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Technology Stack */}

          <div className="rounded-2xl border border-cyan-500/20 bg-slate-950 p-6">

            <div className="mb-5 flex items-center gap-3">

              <Cpu className="h-6 w-6 text-cyan-400" />

              <h3 className="text-xl font-semibold">
                Technology Stack
              </h3>

            </div>

            <div className="flex flex-wrap gap-3">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* Enterprise Architecture */}

          <div className="rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-indigo-600/10 p-6 shadow-lg">

            <div className="mb-5 flex items-center gap-3">

              <Network className="h-6 w-6 text-cyan-400" />

              <h3 className="text-xl font-semibold">
                Enterprise Architecture
              </h3>

            </div>

            <p className="mb-6 leading-7 text-slate-300">
              View the high-level enterprise architecture, Azure services,
              integrations, security boundaries, cloud components, and overall
              solution design.
            </p>

            <button
              onClick={() => onViewDiagram(project)}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
            >
              <Network className="h-5 w-5" />
              View Architecture Diagram
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
