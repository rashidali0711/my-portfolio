"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 flex items-center justify-between px-5 sm:px-6 py-3 ${
          scrolled
            ? "glass-panel shadow-xl shadow-slate-900/5 dark:shadow-black/40 border border-slate-200/80 dark:border-white/10"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Monogram / Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25">
            <div className="w-full h-full bg-white dark:bg-[#0d0d12] rounded-[11px] flex items-center justify-center font-mono font-bold text-sm tracking-wider text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {portfolioData.personal.initials}
            </div>
          </div>
          <span className="font-semibold text-slate-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
            {portfolioData.personal.name}
            <span className="text-cyan-600 dark:text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white rounded-full transition-all hover:bg-slate-100 dark:hover:bg-white/[0.08]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-600 text-white hover:from-indigo-500 hover:to-cyan-600 transition-all shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu trigger + theme toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 rounded-2xl glass-panel p-6 shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/[0.06] rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/25"
            >
              <Sparkles className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
