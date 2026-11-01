"use client";

import { useRef, useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function Experience() {
  const { experience, certifications } = portfolioData;
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll through the journey section for real navigation highlight
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const [activeStops, setActiveStops] = useState<boolean[]>([false, false]);

  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      setActiveStops([
        v > 0.08,  // Stop 1 reached
        v > 0.58,  // Stop 2 reached
      ]);
    });
  }, [smoothProgress]);

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Practical Experience & Education</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Internship & Academic Journey
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-neutral-400 mt-4 text-sm sm:text-base">
          Real industry work experience, team project leadership, and continuous learning.
        </p>
      </ScrollReveal>

      {/* Navigation Journey Timeline Track */}
      <div ref={timelineRef} className="relative space-y-12">
        {/* Base Inactive Route Track Line */}
        <div className="absolute left-3 sm:left-4 md:left-6 top-7 bottom-8 w-[2px] bg-slate-200 dark:bg-white/10 -translate-x-1/2 pointer-events-none rounded-full" />

        {/* Active Highlight Line (Real Navigation App Route Fill) */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-3 sm:left-4 md:left-6 top-7 w-[3px] bg-gradient-to-b from-indigo-500 via-cyan-400 to-emerald-400 -translate-x-1/2 shadow-[0_0_14px_rgba(6,182,212,0.8)] rounded-full pointer-events-none origin-top z-10"
        />

        {experience.map((exp, eIdx) => {
          const isStopActive = activeStops[eIdx] ?? false;

          return (
            <div key={exp.id} className="relative group">
              {/* Waypoint Stop Node (Strictly Anchored to Same Coordinate as Route Line) */}
              <div className="absolute left-3 sm:left-4 md:left-6 top-7 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div
                  className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                    isStopActive
                      ? "bg-white dark:bg-[#09090b] border-2 border-cyan-500 dark:border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.85)] scale-110"
                      : "bg-slate-100 dark:bg-[#121218] border-2 border-slate-300 dark:border-white/20"
                  }`}
                >
                  {isStopActive && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping pointer-events-none" />
                  )}
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isStopActive
                        ? "bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]"
                        : "bg-slate-400 dark:bg-neutral-600"
                    }`}
                  />
                </div>
              </div>

              <ScrollReveal delay={0.1 * (eIdx + 1)} className="ml-8 sm:ml-10 md:ml-14">
                <div className="bento-card p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/5 text-xs font-mono">
                        <Calendar className="w-3 h-3 text-slate-500 dark:text-neutral-400" />
                        {exp.period}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-neutral-400 mb-4 font-normal">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
                        <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-500 mr-2">Tech:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>

      {/* Education Card */}
      <div className="mt-16 ml-8 sm:ml-10 md:ml-14 space-y-6">
        <ScrollReveal delay={0.1}>
          <div className="bento-card p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold">Formal Education</span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Diploma in Information Technology</h4>
                <p className="text-xs text-slate-600 dark:text-neutral-300 mt-1">LJ Polytechnic, Ahmedabad • Gujarat Technological University (GTU) / LJ University</p>
                <p className="text-xs text-slate-500 dark:text-neutral-500 mt-0.5">3rd Year • Semester 6 (Enrolled: 2024 – 2027)</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs font-mono shrink-0">
              Current IT Student
            </span>
          </div>
        </ScrollReveal>

        {/* Certifications Row */}
        <ScrollReveal delay={0.15}>
          <div className="bento-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Professional Certifications</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase">{cert.issuer}</span>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{cert.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-neutral-400 mt-2">{cert.description}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 dark:border-white/5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    ✓ Certified Credential
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
