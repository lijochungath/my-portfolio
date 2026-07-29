"use client";

import { useMemo, useState } from "react";
import { architecturePatterns } from "./data";

const categoryColors: Record<string, string> = {
  "Data Platform":
    "bg-blue-500/15 text-blue-300 border border-blue-500/30",

  "Data Integration":
    "bg-green-500/15 text-green-300 border border-green-500/30",

  "Data Quality":
    "bg-purple-500/15 text-purple-300 border border-purple-500/30",

  Reporting:
    "bg-orange-500/15 text-orange-300 border border-orange-500/30",

  Security:
    "bg-red-500/15 text-red-300 border border-red-500/30",
};

export default function ArchitecturePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...new Set(architecturePatterns.map((p) => p.category)),
    ],
    []
  );

  const filteredPatterns =
    selectedCategory === "All"
      ? architecturePatterns
      : architecturePatterns.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Page Title */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Enterprise Architecture Patterns
          </h1>

          <p className="mt-3 max-w-3xl text-slate-400">
            Reusable enterprise architecture solutions,
            implementation strategies, design decisions,
            and lessons learned from Microsoft Fabric,
            SQL Server, Azure and Power BI projects.
          </p>

        </div>

        {/* Categories */}

        <div className="mb-10 flex flex-wrap gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 transition-all

              ${
                selectedCategory === category
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/20"
                  : "border border-slate-700 bg-slate-900 hover:border-cyan-500"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Pattern Cards */}

        <div className="space-y-10">

          {filteredPatterns.map((pattern) => (

            <article
              key={pattern.id}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              {/* Header */}

              <div className="border-b border-slate-800 p-8">

                <div className="flex flex-wrap justify-between gap-6">

                  <div>

                    <h2 className="text-3xl font-bold">
                      {pattern.title}
                    </h2>

                    <p className="mt-4 text-slate-400 leading-7">
                      {pattern.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-medium ${
                          categoryColors[pattern.category]
                        }`}
                      >
                        {pattern.category}
                      </span>

                      <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                        🏢 {pattern.project}
                      </span>

                      <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                        📂 {pattern.domain}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Main Content */}

              <div className="grid gap-8 p-8 lg:grid-cols-2">

                {/* LEFT */}

                <div className="space-y-8">

                  {/* Business Problem */}

                  <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

                    <h3 className="mb-4 text-xl font-semibold text-red-300">
                      Business Problem
                    </h3>

                    <p className="leading-8 text-slate-300">
                      {pattern.businessProblem}
                    </p>

                  </section>

                  {/* Why This Pattern */}

                  <section className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

                    <h3 className="mb-5 text-xl font-semibold text-green-300">
                      Why This Pattern?
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {pattern.whyThisPattern.map((item) => (

                        <span
                          key={item}
                          className="rounded-xl border border-green-500/30 bg-green-500/15 px-4 py-2"
                        >
                          {item}
                        </span>

                      ))}

                    </div>

                  </section>

                  {/* Components */}

                  <section className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">

                    <h3 className="mb-5 text-xl font-semibold text-purple-300">
                      Architecture Components
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {pattern.components.map((component) => (

                        <span
                          key={component}
                          className="rounded-full border border-purple-500/30 bg-purple-500/15 px-4 py-2"
                        >
                          {component}
                        </span>

                      ))}

                    </div>

                  </section>

                </div>

                {/* RIGHT COLUMN STARTS HERE */}

                <div className="space-y-8">

                                  {/* Implementation */}

                  <section className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6">

                    <h3 className="mb-5 text-xl font-semibold text-indigo-300">
                      Implementation
                    </h3>

                    <div className="space-y-3">

                      {pattern.implementation.map((step) => (

                        <div
                          key={step}
                          className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-4"
                        >
                          {step}
                        </div>

                      ))}

                    </div>

                  </section>

                  {/* Design Decisions */}

                  <section className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

                    <h3 className="mb-5 text-xl font-semibold text-cyan-300">
                      Design Decisions
                    </h3>

                    <div className="space-y-3">

                      {pattern.designDecisions.map((decision) => (

                        <div
                          key={decision}
                          className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4"
                        >
                          {decision}
                        </div>

                      ))}

                    </div>

                  </section>

                  {/* Technologies */}

                  <section className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6">

                    <h3 className="mb-5 text-xl font-semibold text-sky-300">
                      Technologies
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {pattern.technologies.map((tech) => (

                        <span
                          key={tech}
                          className="rounded-full border border-sky-500/30 bg-sky-500/15 px-4 py-2 text-sm font-medium text-sky-200"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </section>

                </div>

              </div>

              {/* Advantages & Trade-offs */}

              <div className="grid gap-8 border-t border-slate-800 p-8 lg:grid-cols-2">

                <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

                  <h3 className="mb-5 text-xl font-semibold text-emerald-300">
                    Advantages
                  </h3>

                  <div className="space-y-3">

                    {pattern.advantages.map((item) => (

                      <div
                        key={item}
                        className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4"
                      >
                        ✅ {item}
                      </div>

                    ))}

                  </div>

                </section>

                <section className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">

                  <h3 className="mb-5 text-xl font-semibold text-orange-300">
                    Trade-offs
                  </h3>

                  <div className="space-y-3">

                    {pattern.disadvantages.map((item) => (

                      <div
                        key={item}
                        className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-4"
                      >
                        ⚠️ {item}
                      </div>

                    ))}

                  </div>

                </section>

              </div>

              {/* Lessons Learned */}

              <div className="border-t border-slate-800 p-8">

                <h3 className="mb-6 text-2xl font-semibold text-yellow-300">
                  Lessons Learned
                </h3>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {pattern.lessonsLearned.map((lesson) => (

                    <div
                      key={lesson}
                      className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5"
                    >
                      <div className="mb-3 text-2xl">💡</div>

                      <p className="leading-7 text-slate-300">
                        {lesson}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* Business Value */}

              <div className="border-t border-slate-800 p-8">

                <h3 className="mb-6 text-2xl font-semibold text-emerald-300">
                  Business Value
                </h3>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {pattern.businessValue.map((value) => (

                    <div
                      key={value}
                      className="rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 to-green-500/10 p-5 text-center font-medium"
                    >
                      {value}
                    </div>

                  ))}

                </div>

              </div>

              {/* Metrics */}

              {pattern.metrics && (

                <div className="border-t border-slate-800 p-8">

                  <h3 className="mb-6 text-2xl font-semibold">
                    Key Metrics
                  </h3>

                  <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

                    {pattern.metrics.map((metric) => (

                      <div
                        key={metric.label}
                        className="rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-6 text-center shadow-lg"
                      >
                        <div className="text-3xl font-bold">
                          {metric.value}
                        </div>

                        <div className="mt-3 text-sm text-cyan-100">
                          {metric.label}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              )}

            </article>

          ))}

        </div>

      </div>

    </main>
  );
}
                