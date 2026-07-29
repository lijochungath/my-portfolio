"use client";


import {
  Target,
  FlaskConical,
  Briefcase,
  Search,
  Lightbulb,
  Workflow,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Database,
  Cloud,
} from "lucide-react";

export default function ExecutionPage() {
  const projectTypes = [
    {
      title: "Greenfield Development",
      icon: <Lightbulb className="h-10 w-10 text-emerald-400" />,
      description:
        "Design and build a completely new enterprise platform using modern architecture and cloud-native services.",
      items: [
        "No legacy constraints",
        "Modern cloud architecture",
        "Scalable foundation",
        "Best practices from day one",
      ],
    },
    {
      title: "Transformation & Modernization",
      icon: <Cloud className="h-10 w-10 text-sky-400" />,
      description:
        "Modernize existing enterprise applications while reducing business risk and preserving operational continuity.",
      items: [
        "Legacy modernization",
        "Cloud migration",
        "Microsoft Fabric",
        "Hybrid architecture",
      ],
    },
    {
      title: "Optimization",
      icon: <TrendingUp className="h-10 w-10 text-orange-400" />,
      description:
        "Improve performance, governance, security, and operational efficiency of existing enterprise systems.",
      items: [
        "Performance tuning",
        "Cost optimization",
        "Governance",
        "Security improvements",
      ],
    },
  ];

  const discoverySteps = [
    {
      icon: <Briefcase className="h-8 w-8 text-blue-400" />,
      title: "Understand Business Objectives",
      description:
        "Meet with executives and stakeholders to understand strategic goals, business priorities, compliance, and success criteria.",
    },
    {
      icon: <Search className="h-8 w-8 text-purple-400" />,
      title: "Identify Pain Points",
      description:
        "Capture operational challenges, reporting gaps, technical debt, scalability issues, and business risks.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-red-400" />,
      title: "Gap and Risk Assessment",
      description:
        "Evaluate business continuity, disaster recovery, cybersecurity, operational risks, and migration complexity.",
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-green-400" />,
      title: "Technical Feasibility",
      description:
       "Rapid Prototyping ,Feasibility Study,Technology Stack,Architecture Validation,MVP Development,Integration, Migration Strategy,Analytics,AI Readiness",  
    },
   
    {
      icon: <Workflow className="h-8 w-8 text-green-400" />,
      title: "Cost and Licensing",
      description:
        "Cloud Consumption,Licensing Strategy,.Total Cost of Ownership,ROI Analysis,Investment Planning",
    },

    {
      icon: <Target className="h-8 w-8 text-yellow-400" />,
      title: "Future State Vision",
      description:
        "Define the target architecture, transformation roadmap, implementation phases, and measurable business outcomes.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

       {/* ================= DISCOVERY ================= */}

      <section id="discovery" className="py-24">

        <div  id ="divdisvovery"className="mx-auto max-w-7xl px-6">

  <div className="mb-16 border-l-4 border-sky-500 pl-6">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
    Discovery
  </p>
<p className="mt-5 max-w-4xl text-lg leading-8 text-slate-100">
  Evaluate the current business and technical landscape to identify
  opportunities, mitigate risks, and establish a transformation strategy
  aligned with organizational goals.
</p>

</div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {discoverySteps.map((step) => (

              <div
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
              >

                {step.icon}

                <h3 className="mt-5 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-8">
                  {step.description}
                </p>

              </div>

            ))}

          </div>
          </div>
        <div className="h-8" />
        <div id="options" className="mx-auto max-w-7xl px-6">
            <div className="mb-16 border-l-4 border-sky-500 pl-6">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
    Options
  </p>
<p className="mt-5 max-w-4xl text-lg leading-8 text-slate-100">
   Give options for enterprise modernization with pros and cons for each approach.
</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

<div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

<h3 className="text-3xl font-bold text-sky-400">
Option A
</h3>

<h4 className="mt-3 text-xl">
Optimize Existing Platform
</h4>

<ul className="mt-6 space-y-3 text-slate-300">

<li>✔ Lowest Cost</li>
<li>✔ Quick Delivery</li>
<li>✔ Minimal Business Change</li>

</ul>
<div  className="mt-8 rounded-xl bg-red-500/10 p-5">
<h5 className="font-semibold text-red-400">
Considerations
</h5>

<p className="mt-3 text-slate-300">
Technical debt remains. Limited long-term scalability.
</p>

</div>

</div>

<div className="rounded-3xl border-2 border-sky-500 bg-slate-900 p-8 shadow-xl shadow-sky-500/10">

<div className="inline-block rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold">
Recommended
</div>

<h3 className="mt-6 text-3xl font-bold text-sky-300">
Option B
</h3>

<h4 className="mt-3 text-xl">
Hybrid Transformation
</h4>

<ul className="mt-6 space-y-3 text-slate-300">

<li>✔ Balanced Investment</li>
<li>✔ Lower Risk</li>
<li>✔ Business Continuity</li>
<li>✔ Cloud Ready</li>

</ul>

<div className="mt-8 rounded-xl bg-green-500/10 p-5">

<h5 className="font-semibold text-green-400">
Best Choice
</h5>

<p className="mt-3 text-slate-300">
Suitable for most enterprise modernization initiatives.
</p>

</div>

</div>

<div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

<h3 className="text-3xl font-bold text-emerald-400">
Option C
</h3>

<h4 className="mt-3 text-xl">
Full Modernization
</h4>

<ul className="mt-6 space-y-3 text-slate-300">

<li>✔ Cloud Native</li>
<li>✔ AI Ready</li>
<li>✔ Maximum Scalability</li>

</ul>

<div className="mt-8 rounded-xl bg-yellow-500/10 p-5">

<h5 className="font-semibold text-yellow-400">
Investment
</h5>

<p className="mt-3 text-slate-300">
Higher cost but delivers the greatest long-term strategic value.
</p>

</div>

</div>

</div>

</div>
<div className="h-8" />
   <div id="framework" className="mx-auto max-w-7xl px-6">
  <div className="mb-16 border-l-4 border-sky-500 pl-6">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
    Framework
  </p>
<p className="mt-5 max-w-4xl text-lg leading-8 text-slate-100">
 Always start with a solid foundation. Stabilize, Standardize, Optimize, then Modernize.
</p>

</div>
    <div  className="mt-20 grid gap-8 lg:grid-cols-4">

      <div className="rounded-3xl border border-red-500/30 bg-red-500/5 p-8">

        <div className="text-5xl font-bold text-red-400">
          01
        </div>

        <h3 className="mt-6 text-3xl font-bold">
          Stabilize
        </h3>

        <p className="mt-5 text-slate-300">
          Establish a reliable and secure operational foundation before any
          modernization activities begin.
        </p>

        <ul className="mt-6 space-y-3 text-slate-400">

          <li>✓ Resolve Critical Issues</li>
          <li>✓ Backup Validation</li>
          <li>✓ Disaster Recovery</li>
          <li>✓ Business Continuity</li>
          <li>✓ Security Assessment</li>

        </ul>

      </div>

      <div className="rounded-3xl border border-blue-500/30 bg-blue-500/5 p-8">

        <div className="text-5xl font-bold text-blue-400">
          02
        </div>

        <h3 className="mt-6 text-3xl font-bold">
          Standardize
        </h3>

        <p className="mt-5 text-slate-300">
          Introduce governance, standards, automation and repeatable enterprise
          processes.
        </p>

        <ul className="mt-6 space-y-3 text-slate-400">

          <li>✓ Naming Standards</li>
          <li>✓ Governance</li>
          <li>✓ Security Policies</li>
          <li>✓ Automation</li>
          <li>✓ Documentation</li>

        </ul>

      </div>

      <div className="rounded-3xl border border-orange-500/30 bg-orange-500/5 p-8">

        <div className="text-5xl font-bold text-orange-400">
          03
        </div>

        <h3 className="mt-6 text-3xl font-bold">
          Optimize
        </h3>

        <p className="mt-5 text-slate-300">
          Improve efficiency, reduce operational costs and maximize existing
          investments.
        </p>

        <ul className="mt-6 space-y-3 text-slate-400">

          <li>✓ Performance Tuning</li>
          <li>✓ Cost Optimization</li>
          <li>✓ Licensing Review</li>
          <li>✓ Monitoring</li>
          <li>✓ Capacity Planning</li>

        </ul>

      </div>

      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8">

        <div className="text-5xl font-bold text-emerald-400">
          04
        </div>

        <h3 className="mt-6 text-3xl font-bold">
          Modernize
        </h3>

        <p className="mt-5 text-slate-300">
          Transform the enterprise using cloud-native architecture, AI and
          modern analytics platforms.
        </p>

        <ul className="mt-6 space-y-3 text-slate-400">

          <li>✓ Cloud Migration</li>
          <li>✓ Microsoft Fabric</li>
          <li>✓ AI Readiness</li>
          <li>✓ DevOps</li>
          <li>✓ Lakehouse Architecture</li>

        </ul>

      </div>

    </div>

  </div>
  <div className="h-8" />
<div id="project-types" className="mx-auto max-w-7xl px-6">
  <div className="mb-16 border-l-4 border-sky-500 pl-6">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
    Project Types
  </p>
<p className="mt-5 max-w-4xl text-lg leading-8 text-slate-100">
  Different approaches for enterprise modernization.
</p>

</div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {projectTypes.map((project) => (

              <div
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-sky-500 transition"
              >

                {project.icon}

                <h3 className="mt-6 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-3">

                  {project.items.map((item) => (

                    <li key={item} className="flex items-center gap-3">

                      <ArrowRight className="h-4 w-4 text-sky-400" />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>
<div className="h-8" />
<div id="roadmap" className="mx-auto max-w-7xl px-6">
  <div className="mb-16 border-l-4 border-sky-500 pl-6">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
    Phases
  </p>
<p className="mt-5 max-w-4xl text-lg leading-8 text-slate-100">
  Divide the Project into phases,Activites,Task to reduce risk, improve delivery, and achieve measurable business outcomes.
</p>

</div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          phase: "Phase 1",
          title: "Discovery",
          color: "text-blue-400",
          items: [
            "Stakeholder Workshops",
            "Business Objectives",
            "Current State Review",
            "Pain Point Analysis",
          ],
        },
        {
          phase: "Phase 2",
          title: "Architecture",
          color: "text-purple-400",
          items: [
            "Future State Design",
            "Technology Evaluation",
            "Roadmap",
            "Risk Assessment",
          ],
        },
        {
          phase: "Phase 3",
          title: "Implementation",
          color: "text-orange-400",
          items: [
            "Migration",
            "Testing",
            "Knowledge Transfer",
            "Go-Live",
          ],
        },
        {
          phase: "Phase 4",
          title: "Continuous Improvement",
          color: "text-emerald-400",
          items: [
            "Optimization",
            "Governance",
            "Monitoring",
            "AI Roadmap",
          ],
        },
      ].map((phase) => (
        <div
          key={phase.phase}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <p className={`font-semibold ${phase.color}`}>
            {phase.phase}
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            {phase.title}
          </h3>

          <ul className="mt-6 space-y-3 text-slate-300">
            {phase.items.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>
      ))}

    </div>

</div>
</section>

</main>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function Card({ icon, title, items }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      {icon}
      <h3 className="mt-6 text-2xl font-semibold">{title}</h3>

      <ul className="mt-6 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}