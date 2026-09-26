"use client";

import React, { useState } from "react";
import {
  FileText,
  Users,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  GitPullRequest,
  Building,
  ShieldAlert,
} from "lucide-react";

export interface RfpOption {
  title: string;
  badge: string;
  pros: string[];
  cons: string[];
  diagramFlow: string[];
}

export interface RfpProcessItem {
  id: string;
  client: string;
  rfpNumber: string;
  title: string;
  bidManager: string;
  bidTeam: { role: string; name: string }[];
  status: "Won" | "Submitted" | "In Review";
  addendaCount: number;
  addendaLog: { id: string; details: string; impact: string }[];
  solutionOptions: RfpOption[];
}

interface RfpCardProps {
  rfp: RfpProcessItem;
}

export function RfpCard({ rfp }: RfpCardProps) {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:border-slate-700">
      {/* Header & Meta */}
      <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
              {rfp.rfpNumber}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Building className="h-3.5 w-3.5 text-slate-500" />
              {rfp.client}
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-white tracking-tight">
            {rfp.title}
          </h2>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {rfp.status}
          </span>
        </div>
      </div>

      {/* Bid Governance & Team Squad */}
      <div className="mt-6 rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
          <Users className="h-4 w-4 text-blue-400" />
          <span>Bid Team Structure & Governance</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <span className="text-[11px] font-medium text-blue-400 block uppercase">
              Bid Manager (Owner)
            </span>
            <p className="text-sm font-semibold text-white mt-0.5">
              {rfp.bidManager}
            </p>
          </div>
          {rfp.bidTeam.map((member, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-800 bg-slate-900/50 p-3"
            >
              <span className="text-[11px] font-medium text-slate-400 block uppercase">
                {member.role}
              </span>
              <p className="text-sm font-medium text-slate-200 mt-0.5">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Addenda Tracking Section */}
      <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-300">
            <GitPullRequest className="h-4 w-4" />
            <span>Addenda & Clarifications Management</span>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            {rfp.addendaCount} Addenda Ingested
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {rfp.addendaLog.map((item, idx) => (
            <div
              key={idx}
              className="text-xs text-slate-300 flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800"
            >
              <span className="font-semibold text-amber-400 whitespace-nowrap">
                {item.id}:
              </span>
              <span>{item.details}</span>
              <span className="ml-auto text-slate-400 whitespace-nowrap pl-2 text-[11px]">
                Impact: {item.impact}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Options & Architectural Visuals */}
      <div className="mt-6 border-t border-slate-800 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Layers className="h-4 w-4 text-blue-400" />
            <span>Architectural Options Presented</span>
          </div>
          {/* Option Selector Pills */}
          <div className="flex gap-2">
            {rfp.solutionOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedOption(i)}
                className={`px-3 py-1 text-xs rounded-lg transition-all ${
                  selectedOption === i
                    ? "bg-blue-600 text-white font-medium"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {opt.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Option Detail */}
        {rfp.solutionOptions[selectedOption] && (
          <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 space-y-4">
            <h3 className="text-base font-semibold text-white">
              {rfp.solutionOptions[selectedOption].title}
            </h3>

            {/* Architecture Flow Diagram */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                High-Level Topology Pipeline
              </p>
              <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-900 rounded-lg border border-slate-800 overflow-x-auto">
                {rfp.solutionOptions[selectedOption].diagramFlow.map(
                  (step, idx, arr) => (
                    <React.Fragment key={idx}>
                      <span className="rounded-md bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 text-xs font-medium text-blue-300 whitespace-nowrap">
                        {step}
                      </span>
                      {idx < arr.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
                      )}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>

            {/* Trade-off Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-3">
                <span className="text-xs font-semibold text-emerald-400 block mb-1.5">
                  Advantages / Pros
                </span>
                <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  {rfp.solutionOptions[selectedOption].pros.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-rose-500/5 border border-rose-500/20 p-3">
                <span className="text-xs font-semibold text-rose-400 block mb-1.5">
                  Trade-offs / Constraints
                </span>
                <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  {rfp.solutionOptions[selectedOption].cons.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}