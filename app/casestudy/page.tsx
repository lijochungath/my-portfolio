import Link from "next/link";
import { ArrowRight, Building2, Calendar } from "lucide-react";

const caseStudies = [
  {
    title: "Enterprise Data Warehouse Modernization",
    client: "Manitoba Agricultural Services Corporation (MASC)",
    duration: "24 Months",
    href: "/casestudy/masc",
    description:
      "Designed and implemented an enterprise-scale Azure Synapse and Microsoft Fabric Lakehouse integrating AS400, Great Plains and Dynamics 365 Business Central.",
    technologies: [
      "Microsoft Fabric",
      "Azure Synapse",
      "Azure Data Factory",
      "Power BI",
      "OneLake",
    ],
  },
  {
    title: "5-Year Strategic Database & Infrastructure Roadmap",
    client: "Niagara Region",
    duration: "16 Months",
    href: "/casestudy/niagara",
    description:
      "Enterprise assessment and modernization roadmap for 53 Windows Servers and 678 SQL Server databases focusing on Azure, Microsoft Fabric and AI readiness.",
    technologies: [
      "SQL Server",
      "Microsoft Fabric",
      "Azure SQL",
      "Microsoft Purview",
      "Power BI",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            Portfolio
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Enterprise Case Studies
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-8">
            A collection of enterprise architecture, Microsoft Fabric,
            Azure Data Engineering, cloud modernization, governance,
            analytics, and digital transformation engagements.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500 hover:shadow-xl"
            >
              <div className="flex items-center gap-2 text-blue-400">
                <Building2 size={18} />
                <span>{study.client}</span>
              </div>

              <h2 className="mt-5 text-3xl font-bold">
                {study.title}
              </h2>

              <div className="mt-4 flex items-center gap-2 text-slate-400">
                <Calendar size={18} />
                {study.duration}
              </div>

              <p className="mt-6 leading-8 text-slate-300">
                {study.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-600 bg-blue-600/10 px-3 py-1 text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={study.href}
                className="mt-10 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
              >
                Read Full Case Study
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Building Enterprise Data Platforms That Scale
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            These case studies demonstrate practical experience in enterprise
            architecture, cloud migration, Microsoft Fabric, Azure Data
            Engineering, governance, analytics, and AI readiness.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-lg bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Lets Connect
          </Link>
        </div>
      </section>
    </main>
  );
}