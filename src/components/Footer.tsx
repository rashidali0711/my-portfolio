"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Footer() {
  const { personal } = portfolioData;
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About Me", href: "#about" },
    { label: "Technical Skills", href: "#skills" },
    { label: "Featured Projects", href: "#projects" },
    { label: "Experience & Journey", href: "#experience" },
    { label: "Services & Capabilities", href: "#services" },
    { label: "Contact & Collaboration", href: "#contact" },
  ];

  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/90 dark:bg-[#070709] pt-16 pb-12 px-4 mt-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80 dark:border-white/[0.08]">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-white dark:bg-[#0c0f17] rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-slate-900 dark:text-white">
                  {personal.initials}
                </div>
              </div>
              <span className="text-lg tracking-tight font-extrabold">{personal.name}</span>
            </div>

            <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              {personal.title} from {personal.location}. Focused on building real-world software, full-stack systems, and exploring AI &amp; cybersecurity.
            </p>

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{personal.location} (UTC+5:30)</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Professional Connect & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Connect
            </h4>
            <p className="text-xs text-slate-600 dark:text-neutral-400">
              Feel free to reach out for entry-level opportunities, internships, or engineering discussions.
            </p>

            <div className="space-y-2.5">
              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white transition-all text-xs group shadow-sm"
              >
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate font-mono">{personal.email}</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white transition-all text-xs group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white transition-all text-xs group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-slate-200/60 dark:bg-white/[0.05] text-slate-800 dark:text-neutral-200">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">GitHub Repositories</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-neutral-500 text-center sm:text-left">
            &copy; {year} {personal.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500 dark:text-neutral-400 font-mono text-[11px]">
              LJ Polytechnic &bull; IT Sem VI
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="px-3.5 py-2 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-600 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white transition-all group flex items-center gap-1.5 text-xs cursor-pointer shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
