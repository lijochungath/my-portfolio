"use client";

import { useState } from "react";
import {
  Database,
  Building2,
  MonitorSmartphone,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import ProjectCard from "./components/projectcard";
import ArchitectureModal from "./components/architecturemodal";

import { projects } from "./projects";
import { Project } from "./types";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // State to track which sidebar menus are open (defaulting to true so they start open)
  const [openMenus, setOpenMenus] = useState({
    data: true,
    erp: true,
    application: true,
  });

  const toggleMenu = (menu: "data" | "erp" | "application") => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const dataProjects = projects.filter((p) => p.category === "Data");
  const erpProjects = projects.filter((p) => p.category === "ERP");
  const applicationProjects = projects.filter((p) => p.category === "application");

  return (
    <>
      <div className="flex min-h-screen bg-slate-950 text-white">
        
        {/* ================= Sidebar ================= */}
        <aside className="sticky top-0 h-screen w-72 overflow-y-auto border-r border-slate-800 bg-slate-900">
          <div className="border-b border-slate-800 p-8">
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-2 text-sm text-slate-400">
              Enterprise Solution Architecture
            </p>
          </div>

          <nav className="p-5">
            <div className="space-y-4">
              
              {/* Data Category Link & Project List */}
              <div>
                <a
                  href="#data"
                  onClick={() => toggleMenu("data")}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-cyan-400" />
                    <span className="font-semibold text-white">Data</span>
                  </div>
                  {openMenus.data ? (
                    <ChevronDown className="h-4 w-4 text-slate-400 transition-transform" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-slate-400 transition-transform" />
                  )}
                </a>
                
                {openMenus.data && dataProjects.length > 0 && (
                  <ul className="ml-6 mt-2 space-y-3 border-l-2 border-slate-800 pl-4 text-sm text-slate-400 animate-in fade-in slide-in-from-top-2 duration-300">
                    {dataProjects.map((p) => (
                      <li key={p.id}>
                        <a href={`#project-${p.id}`} className="block transition hover:text-cyan-400">
                          {p.menuname}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* ERP Category Link & Project List */}
              <div>
                <a
                  href="#erp"
                  onClick={() => toggleMenu("erp")}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-emerald-400" />
                    <span className="font-semibold text-white">ERP</span>
                  </div>
                  {openMenus.erp ? (
                    <ChevronDown className="h-4 w-4 text-slate-400 transition-transform" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-slate-400 transition-transform" />
                  )}
                </a>
                
                {openMenus.erp && erpProjects.length > 0 && (
                  <ul className="ml-6 mt-2 space-y-3 border-l-2 border-slate-800 pl-4 text-sm text-slate-400 animate-in fade-in slide-in-from-top-2 duration-300">
                    {erpProjects.map((p) => (
                      <li key={p.id}>
                        <a href={`#project-${p.id}`} className="block transition hover:text-emerald-400">
                          {p.menuname}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Applications Category Link & Project List */}
              <div>
                <a
                  href="#application"
                  onClick={() => toggleMenu("application")}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <MonitorSmartphone className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold text-white">Applications</span>
                  </div>
                  {openMenus.application ? (
                    <ChevronDown className="h-4 w-4 text-slate-400 transition-transform" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-slate-400 transition-transform" />
                  )}
                </a>
                
                {openMenus.application && applicationProjects.length > 0 && (
                  <ul className="ml-6 mt-2 space-y-3 border-l-2 border-slate-800 pl-4 text-sm text-slate-400 animate-in fade-in slide-in-from-top-2 duration-300">
                    {applicationProjects.map((p) => (
                      <li key={p.id}>
                        <a href={`#project-${p.id}`} className="block transition hover:text-yellow-400">
                          {p.menuname}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          </nav>
        </aside>

        {/* ================= Content ================= */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl p-10">
            
            {/* ================= DATA ================= */}
            <section id="data" className="scroll-mt-10">
              <div className="mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <Database className="h-8 w-8 text-cyan-400" />
                  <h2 className="text-4xl font-bold">Data</h2>
                </div>
                <p className="mt-2 text-slate-400">
                  {dataProjects.length} Projects
                </p>
              </div>

              <div className="space-y-10">
                {dataProjects.map((project) => (
                  <div key={project.id} id={`project-${project.id}`} className="scroll-mt-10">
                    <ProjectCard
                      project={project}
                      onViewDiagram={setSelectedProject}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* ================= ERP ================= */}
            <section id="erp" className="mt-20 scroll-mt-10">
              <div className="mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-emerald-400" />
                  <h2 className="text-4xl font-bold">ERP</h2>
                </div>
                <p className="mt-2 text-slate-400">
                  {erpProjects.length} Projects
                </p>
              </div>

              <div className="space-y-10">
                {erpProjects.map((project) => (
                  <div key={project.id} id={`project-${project.id}`} className="scroll-mt-10">
                    <ProjectCard
                      project={project}
                      onViewDiagram={setSelectedProject}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* ================= Applications ================= */}
            <section id="application" className="mt-20 scroll-mt-10">
              <div className="mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <MonitorSmartphone className="h-8 w-8 text-yellow-400" />
                  <h2 className="text-4xl font-bold">Applications</h2>
                </div>
                <p className="mt-2 text-slate-400">
                  {applicationProjects.length} Projects
                </p>
              </div>

              <div className="space-y-10">
                {applicationProjects.length > 0 ? (
                  applicationProjects.map((project) => (
                    <div key={project.id} id={`project-${project.id}`} className="scroll-mt-10">
                      <ProjectCard
                        project={project}
                        onViewDiagram={setSelectedProject}
                      />
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center text-slate-400">
                    Application projects will be added here.
                  </div>
                )}
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* ================= Architecture Modal ================= */}
      {selectedProject && (
        <ArchitectureModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}