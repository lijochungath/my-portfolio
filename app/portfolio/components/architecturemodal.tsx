"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "../types";

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ArchitectureModal({
  project,
  onClose,
}: ArchitectureModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative h-[95vh] w-[98vw] max-w-[1900px] overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/95 px-8 py-5 backdrop-blur">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                Enterprise Architecture
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                {project.client}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-700 px-5 py-2 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              ✕ Close
            </button>

          </div>

          {/* Project Summary */}


        </div>

        {/* Diagram Area */}
        

        <div className="h-[calc(95vh-140px)] p-6">

          <div className="flex h-full items-center justify-center overflow-auto rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <Image
              src={project.architectureImage}
              alt={`${project.client} Architecture`}
              width={2600}
              height={1800}
              priority
              className="h-auto max-h-full w-auto rounded-xl object-contain"
            />

          </div>

        </div>

      </div>

    </div>
  );
}