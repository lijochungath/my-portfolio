import React from "react";
import type { CaseStudyData } from "@/data/types";

interface Props {
  study?: CaseStudyData;
}

export default function CaseStudyLayout({ study }: Props) {
  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <h2 className="text-2xl font-semibold">
          Case study not found.
        </h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            Enterprise Case Study
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {study.title}
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            {study.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-slate-300">
            {study.client && (
              <div>
                <span className="font-semibold">Client:</span> {study.client}
              </div>
            )}

         </div>

          {study.technologies && study.technologies.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">
                Technologies
              </h2>

              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-slate-800 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}