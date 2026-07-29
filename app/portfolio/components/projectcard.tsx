"use client";

import { Project } from "../types";
import {
  Building2,
  CircleHelp,
  Lightbulb,
  Trophy,
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
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <div className="border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-10 py-8">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-5">

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10">

              <Building2 className="h-10 w-10 text-cyan-400" />

            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">

                {project.client}

              </p>

              <h2 className="mt-2 text-4xl font-bold text-white">

                {project.title}

              </h2>

              <div className="mt-5 flex flex-wrap gap-3">

                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">

                  {project.role}

                </span>

                <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">

                  {project.industry}

                </span>

                <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">

                  {project.duration}

                </span>

                <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300">

                  {project.status}

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* CONTENT */}
      {/* ========================================================= */}

      <div className="p-8">

        <div className="grid gap-6 xl:grid-cols-3">

          {/* ===================================================== */}
          {/* BUSINESS CHALLENGE */}
          {/* ===================================================== */}

          <div className="flex flex-col rounded-3xl border border-red-500/20 bg-slate-950">

            <div className="border-b border-slate-800 p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15">

                  <CircleHelp className="h-7 w-7 text-red-400" />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-widest text-red-400">

                    Step 01

                  </p>

                  <h3 className="text-2xl font-bold">

                    Business Challenge

                  </h3>

                </div>

              </div>

            </div>

            <div className="h-[420px] overflow-y-auto p-6">

              <div className="space-y-5">

                {project.businessChallenge.map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-red-500/40"
                  >

                    <div className="flex items-start gap-4">

                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">

                        !

                      </div>

                      <p className="leading-7 text-slate-300">

                        {item}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* EXECUTION & SOLUTION */}
          {/* PART 2 STARTS HERE */}
          {/* ===================================================== */}

                    <div className="flex flex-col rounded-3xl border border-cyan-500/20 bg-slate-950">

            <div className="border-b border-slate-800 p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/15">

                  <Lightbulb className="h-7 w-7 text-cyan-400" />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-widest text-cyan-400">
                    Step 02
                  </p>

                  <h3 className="text-2xl font-bold">
                    Execution & Solution
                  </h3>

                </div>

              </div>

            </div>

            <div className="h-[420px] overflow-y-auto p-6">

              <div className="space-y-5">

                {project.solution.map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/40"
                  >

                    <div className="flex items-start gap-4">

                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">

                        ✓

                      </div>

                      <p className="leading-7 text-slate-300">
                        {item}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* BUSINESS OUTCOMES */}
          {/* ===================================================== */}

          <div className="flex flex-col rounded-3xl border border-emerald-500/20 bg-slate-950">

            <div className="border-b border-slate-800 p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">

                  <Trophy className="h-7 w-7 text-emerald-400" />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-widest text-emerald-400">
                    Step 03
                  </p>

                  <h3 className="text-2xl font-bold">
                    Business Outcomes
                  </h3>

                </div>

              </div>

            </div>

            <div className="h-[420px] overflow-y-auto p-6">

              <div className="space-y-5">

                {project.businessOutcomes.map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-emerald-500/40"
                  >

                    <div className="flex items-start gap-4">

                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">

                        ✓

                      </div>

                      <p className="leading-7 text-slate-300">
                        {item}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* FOOTER */}
        {/* ========================================================= */}

        <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-indigo-500/10 p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h3 className="text-2xl font-bold text-white">
                Enterprise Architecture
              </h3>

              <p className="mt-2 max-w-3xl text-slate-300">
                Review the complete solution architecture, integration landscape,
                cloud services, security boundaries, data flow, and enterprise
                design implemented for this engagement.
              </p>

            </div>

            <button
              onClick={() => onViewDiagram(project)}
              className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-400"
            >
              <Network className="h-6 w-6" />
              View Architecture Diagram
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}