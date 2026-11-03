"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Terminal, 
  MapPin, 
  Clock, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  FileCode2,
  Briefcase,
  CheckCircle2
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function BentoGrid() {
  const { personal, about, certifications } = portfolioData;
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Profile & Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About Rashidali Sunasara
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-neutral-400 mt-4 text-sm sm:text-base">
          Information Technology student with practical web engineering internship experience and strong programming foundations.
        </p>
      </ScrollReveal>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Bento 1: Real Bio & Background (Spans 2 columns) */}
        <ScrollReveal className="md:col-span-2 h-full" delay={0.05}>
          <div className="bento-card p-6 md:p-8 h-full flex flex-col justify-between hover:shadow-indigo-500/10 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Engineering Philosophy</span>
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-mono">
                  LJ Polytechnic • Sem VI
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                {about.headline}
              </h3>

              <div className="space-y-3 text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx} className="font-normal">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.06]">
              {about.quickFacts.map((fact, i) => (
                <div key={i} className="flex flex-col p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200/80 dark:border-transparent">
                  <span className="text-[11px] text-slate-500 dark:text-neutral-500 uppercase font-mono">{fact.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-neutral-200 mt-0.5">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bento 2: Location & Availability (1 col) */}
        <ScrollReveal className="h-full" delay={0.15}>
          <div className="bento-card p-6 h-full flex flex-col justify-between hover:shadow-cyan-500/10 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4" />
                <span>Location & Status</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Based in {personal.location}</h3>
              <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                Open to on-site software roles in Gujarat and remote developer internships across India.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-100/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-neutral-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                    <span>Local Time</span>
                  </span>
                  <span className="text-indigo-600 dark:text-cyan-300 font-semibold tracking-wide">
                    {currentTime || personal.timezone}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-neutral-400">Opportunity</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    Internship Ready
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>Contact Rashidali</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento 3: Industry Internship Snapshot (2 cols) */}
        <ScrollReveal className="md:col-span-2 h-full" delay={0.1}>
          <div className="bento-card p-6 md:p-8 h-full flex flex-col justify-between hover:shadow-indigo-500/10 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Industry Internship Highlight</span>
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-mono">
                  Infomatica Labs
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Full-Stack Attendance & Leave Management System
              </h3>
              <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed mb-4">
                During my 6-week summer internship, I architected and coded a complete web portal in vanilla PHP 8 and MySQL with ~10,400 lines of code, replacing paper registers and manual spreadsheets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Office device digital certificate (HttpOnly cookie verification)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>17 MySQL tables with automated leave balance ledger</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Chart.js interactive activity graphs & FullCalendar views</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Printable A4 compliance reports & RBAC for 3 user roles</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-xs text-slate-500 dark:text-neutral-500">
              <span>Sidhpur, Gujarat • Mentor: Hasan Sunasara</span>
              <a href="#projects" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium">
                View Project Documentation →
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento 4: Certifications & Recognition (1 col) */}
        <ScrollReveal className="h-full" delay={0.2}>
          <div className="bento-card p-6 h-full flex flex-col justify-between hover:shadow-amber-500/10 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-4">
                <Award className="w-4 h-4" />
                <span>Official Credentials</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Certifications</h3>

              <div className="space-y-3">
                {certifications.slice(0, 3).map((cert, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-1 hover:border-amber-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      {cert.issuer === "Google" ? (
                        <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <FileCode2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      )}
                      <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{cert.title}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-neutral-400">
                      <span>{cert.issuer}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-500 dark:text-neutral-500 font-mono">
                10 Verified Credentials
              </span>
              <a
                href="#certifications"
                className="text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-medium inline-flex items-center gap-1 group"
              >
                <span>View All</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
