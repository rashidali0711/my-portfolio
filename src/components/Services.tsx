"use client";

import { portfolioData } from "@/data/portfolio";
import { Layers, Server, Cpu, Shield, Sparkles, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Services() {
  const { services } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-indigo-400" />,
    Server: <Server className="w-6 h-6 text-cyan-400" />,
    Cpu: <Cpu className="w-6 h-6 text-amber-400" />,
    Shield: <Shield className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="services" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Skills in Action</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          What I Can Build & Deliver
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-neutral-400 mt-4 text-sm sm:text-base">
          Proven capabilities demonstrated through real project implementations and industry internship.
        </p>
      </ScrollReveal>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, sIdx) => (
          <ScrollReveal key={service.id} delay={0.08 * (sIdx + 1)}>
            <div
              className="bento-card p-6 sm:p-8 h-full flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon] || <Sparkles className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
                <span className="text-xs font-mono text-slate-500 dark:text-neutral-500 block mb-2">Key Competencies:</span>
                <ul className="space-y-1.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
