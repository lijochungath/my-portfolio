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
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
      
      {/* ================= HEADER ================= */}
      <div className="border-b border-slate-800 bg-slate-950 px-8 py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          
          {/* Left Side: Client & Title */}
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

          {/* Right Side: Badges & Architecture Button */}
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
                {project.role}
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2 text-sm text-slate-300">
                {project.industry}
              </span>
            </div>

            {/* Architecture Button Moved to Top */}
            <button
              onClick={() => onViewDiagram(project)}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-6 py-2.5 font-semibold text-indigo-400 transition hover:bg-indigo-500 hover:text-white"
            >
              <Network className="h-5 w-5" />
              View Architecture
            </button>
          </div>
        </div>
      </div>

      {/* ================= FULL WIDTH BODY ================= */}
      <div className="flex flex-col gap-6 p-8">
        
        {/* 1. Business Challenge */}
        <div className="rounded-[2rem] border border-red-500/20 bg-slate-950 p-8">
          <div className="mb-6 flex items-center gap-3">
            <CircleHelp className="h-7 w-7 text-red-400" />
            <h3 className="text-2xl font-semibold text-white">
              Business Challenge
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {project.businessChallenge.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-slate-900/50 p-4 transition hover:bg-slate-800/50"
              >
                <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-400" />
                <span className="leading-7 text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Solution */}
        <div className="rounded-[2rem] border border-cyan-500/20 bg-slate-950 p-8">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb className="h-7 w-7 text-cyan-400" />
            <h3 className="text-2xl font-semibold text-white">
              Execution & Solution
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {project.solution.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-slate-900/50 p-4 transition hover:bg-slate-800/50"
              >
                <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />
                <span className="leading-7 text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Business Outcomes */}
        <div className="rounded-[2rem] border border-emerald-500/20 bg-slate-950 p-8">
          <div className="mb-6 flex items-center gap-3">
            <Trophy className="h-7 w-7 text-emerald-400" />
            <h3 className="text-2xl font-semibold text-white">
              Business Outcomes
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {project.businessOutcomes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-slate-900/50 p-4 transition hover:bg-slate-800/50"
              >
                <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                <span className="leading-7 text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}