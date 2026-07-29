"use client";

import { useMemo, useState } from "react";
import { dqmCases } from "./data";

const categoryColors: Record<string, string> = {
  "Master Data":
    "bg-blue-500/15 text-blue-300 border border-blue-500/40",
  Validation:
    "bg-green-500/15 text-green-300 border border-green-500/40",
  Finance:
    "bg-amber-500/15 text-amber-300 border border-amber-500/40",
  "Spatial Data":
    "bg-purple-500/15 text-purple-300 border border-purple-500/40",
};

export default function DQMPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(dqmCases.map((c) => c.category))],
    []
  );

  const filteredCases =
    selectedCategory === "All"
      ? dqmCases
      : dqmCases.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Header */}

        <div className="mb-10">

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Enterprise Knowledge Repository
          </span>

          <h1 className="mt-5 text-5xl font-bold tracking-tight">
            Enterprise Data Quality Management
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
            Real-world enterprise data quality patterns,
            business rules, implementation strategies,
            governance practices and lessons learned from
            large-scale consulting engagements.
          </p>

        </div>

        {/* Category Filter */}

        <div className="mb-10 flex flex-wrap gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300

              ${
                selectedCategory === category
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/20"
                  : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-500 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Cards */}

        <div className="space-y-12">

          {filteredCases.map((item) => (

            <article
              key={item.id}
              className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-500
              hover:shadow-2xl
              hover:shadow-cyan-500/10
              "
            >

              {/* Header */}

              <div className="border-b border-slate-800 p-8">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                  <div>

                    <h2 className="text-3xl font-bold">
                      {item.title}
                    </h2>

                    <div className="mt-5 flex flex-wrap gap-3">

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-medium ${
                          categoryColors[item.category]
                        }`}
                      >
                        {item.category}
                      </span>

                      <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                        🏢 {item.project}
                      </span>

                      <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                        📂 {item.domain}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Summary */}

                <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

                  <h3 className="mb-3 font-semibold text-cyan-300">
                    Executive Summary
                  </h3>

                  <p className="leading-8 text-slate-300">
                    {item.summary}
                  </p>

                </div>

              </div>

              {/* Body */}

              <div className="grid gap-10 p-8 lg:grid-cols-2">

                {/* LEFT COLUMN */}

                <div className="space-y-10">

                  {/* Challenge */}

                  <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

                    <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-red-300">
                      <span className="h-3 w-3 rounded-full bg-red-500"></span>
                      Business Challenge
                    </h3>

                    <p className="leading-8 text-slate-300">
                      {item.challenge}
                    </p>

                  </section>

                  {/* Root Causes */}

                  <section className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">

                    <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-orange-300">
                      <span className="h-3 w-3 rounded-full bg-orange-500"></span>
                      Root Causes
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {item.rootCauses.map((cause) => (

                        <span
                          key={cause}
                          className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm"
                        >
                          {cause}
                        </span>

                      ))}

                    </div>

                  </section>

                  {/* Solution */}

                  <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

                    <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-emerald-300">
                      <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                      Solution
                    </h3>

                    <div className="space-y-3">

                      {item.solution.map((solution) => (

                        <div
                          key={solution}
                          className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4"
                        >
                          ✓ {solution}
                        </div>

                      ))}

                    </div>

                  </section>

                </div>

         {/* RIGHT COLUMN STARTS HERE */}

<div className="space-y-10">

                    {/* Business Rules */}

                  <section className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

                    <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-blue-300">
                      <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                      Business Rules
                    </h3>

                    <div className="space-y-3">

                      {item.businessRules.map((rule) => (

                        <div
                          key={rule}
                          className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4"
                        >
                          {rule}
                        </div>

                      ))}

                    </div>

                  </section>

                  {/* Implementation */}

                  <section className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6">

                    <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-indigo-300">
                      <span className="h-3 w-3 rounded-full bg-indigo-500"></span>
                      Implementation
                    </h3>

                    <div className="grid gap-3">

                      {item.implementation.map((step) => (

                        <div
                          key={step}
                          className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-4"
                        >
                          {step}
                        </div>

                      ))}

                    </div>

                  </section>

                  {/* Technologies */}

                  <section className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6">

                    <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-sky-300">
                      <span className="h-3 w-3 rounded-full bg-sky-500"></span>
                      Technologies
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {item.technologies.map((tech) => (

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

              {/* Lessons Learned */}

              <div className="border-t border-slate-800 p-8">

                <h3 className="mb-6 text-2xl font-semibold text-yellow-300">
                  Lessons Learned
                </h3>

                <div className="grid gap-5 md:grid-cols-2">

                  {item.lessonsLearned.map((lesson) => (

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

              {/* Business Outcomes */}

              <div className="border-t border-slate-800 p-8">

                <h3 className="mb-6 text-2xl font-semibold text-emerald-300">
                  Business Outcomes
                </h3>

                <div className="grid gap-5 md:grid-cols-2">

                  {item.outcomes.map((outcome) => (

                    <div
                      key={outcome}
                      className="rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 to-green-500/10 p-5"
                    >
                      <div className="mb-3 text-2xl">✅</div>

                      <p className="leading-7 text-slate-300">
                        {outcome}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* Metrics */}

              {item.metrics && (

                <div className="border-t border-slate-800 p-8">

                  <h3 className="mb-6 text-2xl font-semibold">
                    Key Metrics
                  </h3>

                  <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

                    {item.metrics.map((metric) => (

                      <div
                        key={metric.label}
                        className="rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-6 text-center shadow-xl"
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