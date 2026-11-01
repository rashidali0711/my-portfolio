"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Mail, ExternalLink, Code2, Briefcase, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { TypewriterRole } from "@/components/TypewriterRole";
import { HeroCodeWindow } from "@/components/HeroCodeWindow";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="radial-glow top-20 left-1/4 w-[450px] h-[450px] bg-indigo-500/15 dark:bg-indigo-600/20 animate-pulse duration-1000" />
      <div className="radial-glow top-40 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 dark:bg-cyan-600/15" />
      <div className="radial-glow -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-violet-500/10 dark:bg-violet-600/15" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-6 backdrop-blur-md shadow-lg shadow-emerald-500/5 hover:scale-105 transition-transform">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personal.availability}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.15]">
          Hello, I&apos;m{" "}
          <span className="gradient-accent inline-block pb-1">{personal.name}</span>
        </h1>

        {/* Dynamic Animated Typewriter Role */}
        <div className="mb-6">
          <TypewriterRole />
        </div>

        {/* Tagline / Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-neutral-400 mb-8 leading-relaxed font-normal">
          {personal.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <Code2 className="w-4 h-4" />
            <span>Explore My Projects</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-800 hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-white border border-slate-300 dark:border-white/10 font-semibold text-sm transition-all backdrop-blur-md hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 shadow-sm hover:border-indigo-400 dark:hover:border-white/20 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Get in Touch</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] text-slate-700 hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-white border border-slate-300 dark:border-white/10 font-medium text-sm transition-all flex items-center gap-1.5 hover:-translate-y-1 shadow-sm hover:border-indigo-400 dark:hover:border-white/20 cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-3 mb-10">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white transition-all hover:scale-110 hover:border-indigo-400 dark:hover:border-cyan-400/40 shadow-sm"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white transition-all hover:scale-110 hover:border-indigo-400 dark:hover:border-cyan-400/40 shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white transition-all hover:scale-110 hover:border-indigo-400 dark:hover:border-cyan-400/40 shadow-sm"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
          </a>
        </div>

        {/* Hero Interactive Code Window */}
        <ScrollReveal delay={0.1}>
          <HeroCodeWindow />
        </ScrollReveal>

        {/* Quick Numbers / Metrics Bar */}
        <ScrollReveal delay={0.2} className="w-full max-w-3xl">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel mt-12">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {personal.projectsCompleted}
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-400 uppercase tracking-wider mt-1 font-medium">
                Real Projects
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-l border-slate-200 dark:border-white/5 md:border-l">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-cyan-400 tracking-tight">
                {personal.internshipDuration}
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-400 uppercase tracking-wider mt-1 font-medium">
                Industry Internship
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/5">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                {personal.certificationsCount}
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-400 uppercase tracking-wider mt-1 font-medium">
                Certifications
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-t md:border-t-0 border-l border-slate-200 dark:border-white/5">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
                Sem VI
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-400 uppercase tracking-wider mt-1 font-medium">
                IT Engineering
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="mt-14 flex justify-center">
        <a
          href="#about"
          className="text-slate-400 dark:text-neutral-500 hover:text-slate-700 dark:hover:text-neutral-300 transition-colors animate-bounce p-2"
          aria-label="Scroll to About"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
