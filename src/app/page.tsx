"use client";

import dynamic from "next/dynamic";
import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Projects     from "@/components/Projects";
import Skills       from "@/components/Skills";
import Experience   from "@/components/Experience";
import Research     from "@/components/Research";
import Achievements from "@/components/Achievements";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

const CanvasContainer  = dynamic(() => import("@/components/CanvasContainer"),  { ssr: false });
const FloatingOrbs     = dynamic(() => import("@/components/FloatingOrbs"),     { ssr: false });
const CursorSpotlight  = dynamic(() => import("@/components/CursorSpotlight"),  { ssr: false });

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      {/* Layer 0 — 3D particle background */}
      <CanvasContainer />

      {/* Layer 1 — floating ambient orbs */}
      <FloatingOrbs />

      {/* Layer 2 — cinematic gradient overlay */}
      <div className="cinematic-bg" />

      {/* Layer 3 — cursor spotlight */}
      <CursorSpotlight />

      {/* Layer 4 — grain texture */}
      <div className="grain" />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Research />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
