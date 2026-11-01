"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { Sparkles, FolderGit2, ArrowUpRight, FileText, X } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Projects() {
  const { projects } = portfolioData;
  const categories = ["All", "Full Stack", "Cybersecurity", "Python & AI", "Java & Desktop", "React"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

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
          Click any project card to inspect its system architecture, database schema, and technical implementation.
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
              {/* Top row: Category & Metrics */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                  {project.category}
                </span>

                {project.metrics && (
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    <span>{project.metrics}</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="bento-card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-white dark:bg-[#0e0e14] border border-slate-300 dark:border-cyan-500/30 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                  {activeModalProject.category}
                </span>
                {activeModalProject.metrics && (
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                    {activeModalProject.metrics}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {activeModalProject.title}
              </h3>
              {activeModalProject.subtitle && (
                <p className="text-sm text-indigo-600 dark:text-cyan-400 font-medium mt-1">
                  {activeModalProject.subtitle}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm text-slate-600 dark:text-neutral-300 mb-6 leading-relaxed">
              <p>{activeModalProject.longDescription}</p>
            </div>

            {/* Tech Stack List */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 mb-6">
              <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                Technologies & Tools Applied
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Documentation Reference */}
            {activeModalProject.reportFile && (
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between gap-3 mb-6">
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

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-xs font-medium text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Close Window
              </button>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Repo</span>
              </a>
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
