import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { MouseSpotlight } from "@/components/MouseSpotlight";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-neutral-100 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 transition-colors duration-300">
      {/* Interactive Background Particle & Spotlight Effects */}
      <ParticleCanvas />
      <MouseSpotlight />

      {/* Main App Content */}
      <div className="relative z-20">
        <Navbar />
        <main className="flex flex-col w-full overflow-hidden">
          <Hero />
          <BentoGrid />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
