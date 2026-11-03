"use client";

import { useState } from "react";
import { portfolioData, Certification } from "@/data/portfolio";
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap,
  Building2,
  Code2,
  Cpu
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Certifications() {
  const { certifications } = portfolioData;
  const categories = [
    "All Credentials",
    "AI & Security",
    "Programming & CS",
    "Web & Development",
    "Engineering & Professional",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Credentials");

  const filteredCertifications = selectedCategory === "All Credentials"
    ? certifications
    : certifications.filter((c) => c.category === selectedCategory);

  const getIssuerBadge = (issuer: string) => {
    switch (issuer) {
      case "Google":
        return {
          icon: <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          style: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
        };
      case "IBM":
        return {
          icon: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
          style: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
        };
      case "University of Pennsylvania":
        return {
          icon: <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
          style: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
        };
      case "University of Colorado Boulder":
        return {
          icon: <GraduationCap className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
          style: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
        };
      case "BITS Pilani":
        return {
          icon: <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
          style: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
        };
      case "HKUST":
        return {
          icon: <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
          style: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
        };
      case "Infomatica Labs":
        return {
          icon: <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          style: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
        };
      default:
        return {
          icon: <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
          style: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
        };
    }
  };

  return (
    <section id="certifications" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Accreditations & Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Verified Certifications
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-neutral-400 mt-4 text-sm sm:text-base">
          10 industry-recognized credentials verified through Coursera and Infomatica Labs, covering cybersecurity, generative AI, Python programming, relational databases, and engineering mathematics.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-amber-500 via-amber-600 to-indigo-600 text-white shadow-lg shadow-amber-500/20 scale-105"
                  : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.05]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map((cert, cIdx) => {
          const badge = getIssuerBadge(cert.issuer);

          return (
            <ScrollReveal key={cert.id} delay={0.05 * (cIdx + 1)}>
              <div className="bento-card p-6 h-full flex flex-col justify-between group hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                <div>
                  {/* Top Bar: Issuer Badge & Issue Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold ${badge.style}`}>
                      {badge.icon}
                      <span>{cert.issuer}</span>
                    </span>

                    <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug mb-1.5">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 dark:text-neutral-400 mb-3">
                    {cert.organization}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Covered Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between gap-2">
                  <a
                    href={cert.pdfFile}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>View PDF</span>
                  </a>

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verify Online</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Industry</span>
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
