"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowUpRight,
  Loader2,
  AlertCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey.trim() === "" || accessKey === "your_access_key_here") {
      setStatusError(
        "Web3Forms Access Key is not configured yet. Please add your key to .env.local to receive live emails."
      );
      return;
    }

    setIsSubmitting(true);
    setStatusError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Contact Message from ${formData.name} (Portfolio)`,
          message: formData.message,
          from_name: `${formData.name} (Portfolio)`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6366f1", "#06b6d4", "#a855f7", "#ffffff"],
        });

        setFormSubmitted(true);
        setStatusError(null);
      } else {
        setStatusError(data.message || "Something went wrong. Please try again or email me directly.");
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setStatusError("Network error. Unable to reach the email service. Please check your connection or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s Connect & Collaborate
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-neutral-400 mt-4 text-sm sm:text-base">
          I am currently open to internship opportunities, entry-level engineering roles, and collaborative projects.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Left Column: Direct Connect & Details (2 cols) */}
        <ScrollReveal className="lg:col-span-2 space-y-4" delay={0.08}>
          {/* Quick Copy Email Card */}
          <div className="bento-card p-6">
            <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-2 font-semibold">Direct Email</span>
            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-100/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
              <span className="text-sm font-medium text-slate-900 dark:text-white truncate">{personal.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-indigo-600/10 hover:bg-indigo-600/20 dark:bg-indigo-600/20 dark:hover:bg-indigo-600/40 text-indigo-600 dark:text-indigo-300 transition-colors shrink-0 cursor-pointer"
                title="Copy to clipboard"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-mono flex items-center gap-1.5 animate-in fade-in">
                <Check className="w-3.5 h-3.5" />
                Copied to clipboard!
              </p>
            )}
          </div>

          {/* Availability & Response Time */}
          <div className="bento-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Quick Response</h4>
                <p className="text-xs text-slate-600 dark:text-neutral-400">Available to connect via Email or LinkedIn</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Location</h4>
                <p className="text-xs text-slate-600 dark:text-neutral-400">{personal.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="bento-card p-6">
            <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider block mb-3 font-medium">Professional Profiles</span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-100/70 hover:bg-slate-200/70 dark:bg-white/[0.02] dark:hover:bg-white/[0.07] border border-slate-200 dark:border-white/5 flex flex-col items-center justify-center gap-2 text-slate-700 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-white transition-all group"
              >
                <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform text-slate-800 dark:text-neutral-200" />
                <span className="text-xs font-medium">GitHub Profile</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-100/70 hover:bg-slate-200/70 dark:bg-white/[0.02] dark:hover:bg-white/[0.07] border border-slate-200 dark:border-white/5 flex flex-col items-center justify-center gap-2 text-slate-700 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-white transition-all group"
              >
                <LinkedinIcon className="w-6 h-6 group-hover:scale-110 transition-transform text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-medium">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Contact Form (3 cols) */}
        <ScrollReveal className="lg:col-span-3 h-full" delay={0.16}>
          <div className="bento-card p-6 sm:p-8 h-full">
            {formSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 animate-in zoom-in">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-slate-600 dark:text-neutral-400 text-sm max-w-md mb-6 leading-relaxed">
                Thank you for reaching out, {formData.name || "friend"}. I will review your message and get back to you shortly at {formData.email}.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setStatusError(null);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-200/80 hover:bg-slate-300 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 text-xs font-semibold transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam prevention honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  disabled={isSubmitting}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship opportunity / Web development project"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Rashidali, we came across your projects..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none disabled:opacity-60"
                />
              </div>

              {statusError && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">{statusError}</div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
