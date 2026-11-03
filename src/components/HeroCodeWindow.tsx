"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

export function HeroCodeWindow() {
  const [copied, setCopied] = useState(false);

  const codeString = `// Rashidali Sunasara — Developer Snapshot
const developer = {
  name: "Rashidali Sunasara",
  education: "LJ Polytechnic (Information Technology, Sem VI)",
  location: "Ahmedabad, Gujarat, India",
  languages: ["Python", "Java", "PHP", "JavaScript", "TypeScript"],
  activeProjects: [
    "VoxelCraft (3D Sandbox with Three.js & AI)",
    "EduPortal AI (College Capstone Project)"
  ],
  internship: "Infomatica Labs (Web Development)",
  certifications: "10 Verified (Google, IBM, UPenn, CU Boulder, BITS Pilani...)",
  seeking: "Internship & Junior Developer Opportunities",
  isReadyToBuild: true
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 rounded-2xl overflow-hidden glass-panel border border-slate-300 dark:border-white/10 shadow-2xl text-left font-mono text-xs sm:text-[13px] leading-relaxed group">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-white/[0.04] border-b border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-600 dark:text-neutral-400 font-sans flex items-center gap-1.5 font-medium">
            <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>rashidali.config.ts</span>
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white px-2.5 py-1 rounded-lg bg-slate-200/70 hover:bg-slate-300/70 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] transition-colors"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-5 overflow-x-auto bg-[#0d0d14] text-neutral-100">
        <div className="text-neutral-500 select-none mb-1">
          <span className="text-emerald-400">// Verified Developer Profile</span>
        </div>
        <p>
          <span className="text-indigo-400 font-semibold">const</span>{" "}
          <span className="text-cyan-300">developer</span> = &#123;
        </p>
        <div className="pl-4 sm:pl-6 space-y-1">
          <p>
            <span className="text-neutral-400">name:</span>{" "}
            <span className="text-amber-300">&quot;Rashidali Sunasara&quot;</span>,
          </p>
          <p>
            <span className="text-neutral-400">role:</span>{" "}
            <span className="text-amber-300">&quot;Aspiring FullStack Developer&quot;</span>,
          </p>
          <p>
            <span className="text-neutral-400">education:</span>{" "}
            <span className="text-amber-300">&quot;LJ Polytechnic (IT, Sem VI)&quot;</span>,
          </p>
          <p>
            <span className="text-neutral-400">coreLanguages:</span> [
            <span className="text-emerald-300">&quot;Python&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Java&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;PHP&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;JavaScript&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;TypeScript&quot;</span>],
          </p>
          <p>
            <span className="text-neutral-400">currentlyBuilding:</span> [
            <span className="text-cyan-300">&quot;VoxelCraft (3D AI Sandbox)&quot;</span>,{" "}
            <span className="text-cyan-300">&quot;EduPortal AI (College)&quot;</span>],
          </p>
          <p>
            <span className="text-neutral-400">recentInternship:</span>{" "}
            <span className="text-amber-300">&quot;Infomatica Labs (2 Months)&quot;</span>,
          </p>
          <p>
            <span className="text-neutral-400">certifications:</span>{" "}
            <span className="text-amber-300">&quot;10 Verified (Google, IBM, UPenn, BITS...)&quot;</span>,
          </p>
          <p>
            <span className="text-neutral-400">availableForHire:</span>{" "}
            <span className="text-indigo-400 font-bold">true</span>
          </p>
        </div>
        <p>&#125;;</p>
      </div>
    </div>
  );
}
