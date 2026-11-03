"use client";

import { useState, useEffect } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { Sparkles, FolderGit2, ArrowUpRight, FileText, X, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Projects() {
  const { projects } = portfolioData;
  const categories = ["All", "WebGL & Game", "Python & AI", "Full Stack", "Cybersecurity", "Java & Desktop", "React"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Lock background scroll and support ESC key when modal is open
  useEffect(() => {
    if (activeModalProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveModalProject(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeModalProject]);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Real Project Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured Engineering Systems
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-neutral-400 mt-4 text-sm sm:text-base">
          Click any project card to inspect its system architecture, live demo, and technical implementation.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.05]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, pIdx) => (
          <ScrollReveal key={project.id} delay={0.07 * (pIdx + 1)}>
            <div
              className="bento-card p-6 sm:p-8 h-full flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-cyan-500/10 transition-all duration-300 relative cursor-pointer"
              onClick={() => setActiveModalProject(project)}
            >
            <div>
              {/* Top row: Category, Status & Ownership Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                    {project.category}
                  </span>

                  {project.status === "In Active Development" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 text-[11px] font-mono font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Active Development</span>
                    </span>
                  )}
                </div>

                {project.ownership && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-neutral-300 border border-slate-200 dark:border-white/10">
                    {project.ownership}
                  </span>
                )}
              </div>

              {/* Subtitle / Context */}
              {project.subtitle && (
                <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider block mb-1">
                  {project.subtitle}
                </span>
              )}

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/5 font-mono group-hover:border-slate-300 dark:group-hover:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-cyan-300 hover:text-indigo-800 dark:hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Architecture & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <span className="text-xs font-mono text-slate-400 dark:text-neutral-500">
                0{filteredProjects.indexOf(project) + 1}
              </span>
            </div>
          </div>
        </ScrollReveal>
      ))}
      </div>

      {/* Project Deep-Dive Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl bg-white dark:bg-[#0e0e14] border border-slate-300 dark:border-cyan-500/30 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Fixed Modal Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-200 dark:border-white/[0.08] relative shrink-0 bg-slate-50/90 dark:bg-white/[0.02]">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                    {activeModalProject.category}
                  </span>

                  {activeModalProject.status === "In Active Development" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 text-[11px] font-mono font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>In Active Development</span>
                    </span>
                  )}

                  {activeModalProject.ownership && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/10">
                      {activeModalProject.ownership}
                    </span>
                  )}

                  {activeModalProject.metrics && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                      {activeModalProject.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {activeModalProject.title}
                </h3>
                {activeModalProject.subtitle && (
                  <p className="text-xs sm:text-sm text-indigo-600 dark:text-cyan-400 font-medium mt-1">
                    {activeModalProject.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* 2. Scrollable Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain flex-1 space-y-5 text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider mb-2 font-medium">
                  System Architecture & Implementation
                </h4>
                <p>{activeModalProject.longDescription}</p>
              </div>

              {/* Tech Stack List */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider block mb-2.5 font-medium">
                  Technologies & Architecture Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-mono text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Documentation Reference */}
              {activeModalProject.reportFile && (
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white">Full Project Report Available</h5>
                      <p className="text-[11px] text-slate-600 dark:text-neutral-400 font-mono">{activeModalProject.reportFile}</p>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-700 dark:text-cyan-300 font-semibold shrink-0">Verified</span>
                </div>
              )}
            </div>

            {/* 3. Fixed Modal Footer Actions (Always 100% visible, never cut off) */}
            <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/95 dark:bg-[#0c0c12] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-200/70 hover:bg-slate-300/80 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-xs font-semibold text-slate-700 dark:text-neutral-200 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>

              <div className="flex items-center gap-2">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live Demo</span>
                  </a>
                )}

                <a
                  href={activeModalProject.githubUrl || portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Visit GitHub Repo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Callout */}
      <div className="mt-12 text-center">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white border border-slate-300/80 dark:border-white/10 text-xs sm:text-sm font-medium transition-all hover:scale-105"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Explore Rashidali&apos;s GitHub Repositories</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
