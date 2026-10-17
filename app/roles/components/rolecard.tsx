"use client";

import React from "react";
import { Briefcase, Building2, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface RoleItem {
  id: string;
  company: string;
  officialDesignation: string;
  functionalRole: string;
  period: string;
  scopeSummary: string;
  ownershipPillars: {
    category: string;
    responsibilities: string[];
  }[];
  keyDeliverables: string[];
  environment: string[];
}

interface RoleCardProps {
  role: RoleItem;
}

export default function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-slate-700">
      {/* Header & Alignment */}
      <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Building2 className="h-4 w-4 text-blue-400" />
              {role.company}
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-0.5 text-xs font-medium text-slate-300 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              {role.period}
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {role.functionalRole}
          </h2>
        </div>

        {/* Verification Transparency Badge */}
        <div className="flex flex-col items-start gap-1 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-2 md:items-end">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
            Official Designation
          </span>
          <span className="text-sm font-semibold text-blue-300">
            {role.officialDesignation}
          </span>
        </div>
      </div>

      {/* Scope Summary */}
      <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
        {role.scopeSummary}
      </p>

      {/* Structured Ownership Pillars */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {role.ownershipPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-4 w-4 text-blue-400" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                {pillar.category}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {pillar.responsibilities.map((resp, rIdx) => (
                <li
                  key={rIdx}
                  className="flex items-start gap-2 text-xs leading-relaxed text-slate-300 sm:text-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Major Deliverables / Key Milestones */}
      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3">
          <CheckCircle2 className="h-4 w-4" />
          Key Mandates & Delivered Outcomes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
          {role.keyDeliverables.map((item, dIdx) => (
            <div key={dIdx} className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Environment Badges */}
      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-2">
          Environment:
        </span>
        {role.environment.map((tech, tIdx) => (
          <span
            key={tIdx}
            className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500/40"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}