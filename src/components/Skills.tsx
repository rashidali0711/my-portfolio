"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Terminal, 
  Globe, 
  Database, 
  Cpu, 
  Sparkles, 
  FolderGit2, 
  CheckCircle2 
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface SkillItem {
  name: string;
  level: "Proficient" | "Working Knowledge" | "Foundations";
  experience: string;
  appliedIn: string;
  iconBg: string;
  accentColor: string;
}

interface SkillGroup {
  id: string;
  title: string;
  shortTitle?: string;
  icon: React.ReactNode;
  description: string;
  badge: string;
  skills: SkillItem[];
}

const SCRAMBLE_GLYPHS = "01#$_&*<>[]!/{}+~?%ABCDEF";

function DecryptedSkillRow({ skill, index }: { skill: SkillItem; index: number }) {
  const [displayText, setDisplayText] = useState("");
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const targetText = skill.name;

  useEffect(() => {
    const el = rowRef.current;
    if (!el || hasAnimated) return;

    // Trigger ONLY ONCE when the user scrolls and sees the skill row for the first time
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          // Stagger by item index so skills cascade downward
          const staggerDelay = (index % 5) * 85;

          setTimeout(() => {
            let iteration = 0;
            const maxIterations = targetText.length * 3;
            const intervalTime = 25;

            const interval = setInterval(() => {
              setDisplayText(() => {
                return targetText
                  .split("")
                  .map((char, charIdx) => {
                    if (
                      char === " " || 
                      char === "&" || 
                      char === "/" || 
                      char === "-" || 
                      char === "(" || 
                      char === ")" || 
                      char === "."
                    ) {
                      return char;
                    }
                    if (charIdx < Math.floor(iteration / 3)) {
                      return char;
                    }
                    return SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)];
                  })
                  .join("");
              });

              iteration++;

              if (iteration > maxIterations) {
                clearInterval(interval);
                setDisplayText(targetText);
                setIsDecrypted(true);
              }
            }, intervalTime);
          }, staggerDelay);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated, index, targetText]);

  return (
    <div
      ref={rowRef}
      className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-slate-200/80 dark:border-white/5 transition-colors duration-200 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
        <div className="flex items-center gap-2">
          {/* Decrypting Technology Name */}
          <span
            className={`text-sm tracking-tight transition-colors ${
              isDecrypted
                ? "font-semibold text-slate-900 dark:text-white"
                : "font-mono font-medium text-indigo-600 dark:text-cyan-400"
            }`}
          >
            {isDecrypted ? targetText : displayText || "••••••"}
            {hasAnimated && !isDecrypted && (
              <span className="inline-block w-1.5 h-3.5 ml-1 bg-indigo-500 dark:bg-cyan-400 animate-pulse align-middle" />
            )}
          </span>

          {/* Level Badge - Appears smoothly once decrypted */}
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${skill.iconBg} transition-all duration-500 ${
              isDecrypted ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {skill.level}
          </span>
        </div>

        {/* Experience - Appears smoothly once decrypted */}
        <span
          className={`text-[11px] font-mono text-slate-500 dark:text-neutral-400 transition-all duration-500 ${
            isDecrypted ? "opacity-100" : "opacity-0"
          }`}
        >
          {skill.experience}
        </span>
      </div>

      {/* Little Description (Applied In) - Appears smoothly AFTER name is fully decrypted */}
      <div
        className={`flex items-center gap-1.5 text-xs text-cyan-700 dark:text-cyan-400 font-mono mt-1 transition-all duration-500 ease-out ${
          isDecrypted
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-1 pointer-events-none"
        }`}
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
        <span className="truncate">Applied in: {skill.appliedIn}</span>
      </div>
    </div>
  );
}

export function Skills() {
  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  const skillGroups: SkillGroup[] = [
    {
      id: "languages",
      title: "Core Programming Languages",
      shortTitle: "Languages",
      icon: <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      description: "Languages I write for software development, system tools, and web backends.",
      badge: "5 Languages",
      skills: [
        {
          name: "Python",
          level: "Proficient",
          experience: "Core language",
          appliedIn: "NSMFS Simulator & EduPortal AI",
          iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20",
          accentColor: "from-amber-400 to-yellow-500",
        },
        {
          name: "Java",
          level: "Proficient",
          experience: "OOP & Desktop GUI",
          appliedIn: "TaskFlow Todo Manager (1,758 LOC)",
          iconBg: "bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20",
          accentColor: "from-rose-400 to-red-500",
        },
        {
          name: "PHP",
          level: "Proficient",
          experience: "Backend & Web APIs",
          appliedIn: "Infomatica Labs Attendance System",
          iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20",
          accentColor: "from-indigo-400 to-violet-500",
        },
        {
          name: "JavaScript",
          level: "Proficient",
          experience: "ES6+, DOM & Events",
          appliedIn: "Reactra Hackathon & Web apps",
          iconBg: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-300 border-yellow-500/20",
          accentColor: "from-yellow-400 to-amber-500",
        },
        {
          name: "C Language",
          level: "Foundations",
          experience: "Data Structures & Memory",
          appliedIn: "Academic Curriculum & Algorithms",
          iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
          accentColor: "from-blue-400 to-cyan-500",
        },
      ],
    },
    {
      id: "web",
      title: "Web & Frontend Engineering",
      shortTitle: "Frontend",
      icon: <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      description: "Building responsive, modern, user-friendly digital interfaces and client logic.",
      badge: "Modern Web",
      skills: [
        {
          name: "HTML5 & Semantic Markup",
          level: "Proficient",
          experience: "Accessible structure",
          appliedIn: "Infomatica & EduPortal interfaces",
          iconBg: "bg-orange-500/10 text-orange-600 dark:text-orange-300 border-orange-500/20",
          accentColor: "from-orange-400 to-red-500",
        },
        {
          name: "CSS3 & Modern Layouts",
          level: "Proficient",
          experience: "Flexbox, Grid, Animations",
          appliedIn: "Custom SaaS Design (~4.5k CSS lines)",
          iconBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/20",
          accentColor: "from-cyan-400 to-blue-500",
        },
        {
          name: "React.js",
          level: "Working Knowledge",
          experience: "Hooks, State, Components",
          appliedIn: "Reactra Hackathon 2.0 Skill Showcase",
          iconBg: "bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20",
          accentColor: "from-sky-400 to-indigo-500",
        },
        {
          name: "Node.js",
          level: "Working Knowledge",
          experience: "Runtime & Backend Scripts",
          appliedIn: "Full-Stack Web Foundations",
          iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20",
          accentColor: "from-emerald-400 to-green-500",
        },
        {
          name: "JavaScript DOM Programming",
          level: "Proficient",
          experience: "Packt Certified",
          appliedIn: "Interactive UI & Dynamic Rendering",
          iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20",
          accentColor: "from-amber-400 to-yellow-500",
        },
      ],
    },
    {
      id: "databases",
      title: "Databases & Data Modeling",
      shortTitle: "Databases",
      icon: <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description: "Architecting normalized relational schemas, queries, and persistent storage.",
      badge: "Relational & Embedded",
      skills: [
        {
          name: "MySQL",
          level: "Proficient",
          experience: "Relational DB Design",
          appliedIn: "17 tables at Infomatica, 33 in EduPortal",
          iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
          accentColor: "from-blue-500 to-indigo-500",
        },
        {
          name: "Schema Normalization & ERD",
          level: "Proficient",
          experience: "3NF, Foreign Keys & Checks",
          appliedIn: "Multi-Role Educational Schema",
          iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20",
          accentColor: "from-indigo-400 to-cyan-500",
        },
        {
          name: "SQLite",
          level: "Proficient",
          experience: "Embedded Local Storage",
          appliedIn: "NSMFS Firewall Repository Pattern",
          iconBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/20",
          accentColor: "from-cyan-400 to-teal-500",
        },
        {
          name: "Java Object Serialization",
          level: "Proficient",
          experience: "Binary File Persistence",
          appliedIn: "TaskFlow tasks.dat Storage Engine",
          iconBg: "bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20",
          accentColor: "from-rose-400 to-pink-500",
        },
      ],
    },
    {
      id: "tools-specialized",
      title: "Tools, Security & Emerging Tech",
      shortTitle: "Tools",
      icon: <Cpu className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      description: "Development workflows, version control, cybersecurity concepts, and AI integration.",
      badge: "Security & AI",
      skills: [
        {
          name: "Git & GitHub",
          level: "Proficient",
          experience: "Version Control & Commits",
          appliedIn: "All project repositories & workflows",
          iconBg: "bg-slate-500/10 text-slate-700 dark:text-neutral-300 border-slate-500/20",
          accentColor: "from-slate-400 to-slate-200",
        },
        {
          name: "Network Security & Firewalls",
          level: "Proficient",
          experience: "Google Certified",
          appliedIn: "Rule evaluation & Threat detection",
          iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20",
          accentColor: "from-emerald-400 to-teal-500",
        },
        {
          name: "AI & Vector Search (RAG)",
          level: "Working Knowledge",
          experience: "FAISS & Sentence Transformers",
          appliedIn: "EduPortal Document Q&A Assistant",
          iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/20",
          accentColor: "from-violet-400 to-fuchsia-500",
        },
        {
          name: "VS Code & XAMPP Stack",
          level: "Proficient",
          experience: "Full Local Dev Environment",
          appliedIn: "PHP, Python & Java workflows",
          iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
          accentColor: "from-blue-400 to-indigo-500",
        },
      ],
    },
  ];

  const visibleGroups = selectedGroup === "all" 
    ? skillGroups 
    : skillGroups.filter((g) => g.id === selectedGroup);

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Skills Backed by Real Projects
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-neutral-400 mt-4 text-sm sm:text-base">
          No buzzwords. Every technology listed here was actively utilized in my production internship at Infomatica Labs or my academic engineering systems.
        </p>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 backdrop-blur-md">
          <button
            onClick={() => setSelectedGroup("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedGroup === "all"
                ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/25 scale-105"
                : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.05]"
            }`}
          >
            All Disciplines
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedGroup === group.id
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/25 scale-105"
                  : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.05]"
              }`}
            >
              {group.shortTitle || group.title.split(" ")[0].replace(/,/g, "")}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Modern Grid of Skill Pods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleGroups.map((group, gIdx) => (
          <ScrollReveal key={group.id} delay={0.08 * (gIdx + 1)}>
            <div
              className="bento-card p-6 sm:p-8 h-full flex flex-col justify-between group hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-neutral-400 mt-0.5">{group.description}</p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] text-[11px] font-mono text-slate-600 dark:text-neutral-400 border border-slate-200 dark:border-white/5 shrink-0">
                    {group.badge}
                  </span>
                </div>

                {/* Skills List inside this Pod */}
                <div className="space-y-3 mt-6">
                  {group.skills.map((skill, sIdx) => (
                    <DecryptedSkillRow
                      key={skill.name}
                      skill={skill}
                      index={sIdx}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-xs text-slate-500 dark:text-neutral-500 font-mono">
                <span>Hands-on implementation</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">100% Verified</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom Proof Strip */}
      <ScrollReveal delay={0.15}>
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Want to see these skills in actual source code?</h4>
              <p className="text-xs text-slate-600 dark:text-neutral-400">Check out the 5 featured projects below with database schemas and full project documentation.</p>
            </div>
          </div>

          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shrink-0 shadow-md shadow-indigo-600/20 hover:scale-105"
          >
            Jump to Projects Showcase
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
