"use client";

import CanvasContainer from "@/components/CanvasContainer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      {/* Dynamic 3D background */}
      <CanvasContainer />

      {/* Ambient gradient overlay */}
      <div className="cinematic-bg" />

      {/* Sticky navigation header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Research />
        <Achievements />
        <Contact />
      </div>

      {/* Page Footer */}
      <Footer />
    </main>
  );
}
