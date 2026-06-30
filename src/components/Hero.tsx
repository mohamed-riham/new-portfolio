"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import KineticText from "./KineticText";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const STATS = [
  { value: "5+",     label: "Projects Built" },
  { value: "3+",     label: "Years Coding" },
  { value: "Edge AI", label: "Specialization" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: `var(--nav-h) var(--section-px) 0`,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="hero-grid" style={{ width: "100%", maxWidth: "var(--max-w)", margin: "0 auto" }}>

        {/* ── Left ── */}
        <div>
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "var(--sp-4)",
            }}
          >
            // AI Developer &amp; Data Science Undergraduate
          </motion.span>

          {/* Kinetic Name */}
          <h1
            style={{
              marginBottom: "var(--sp-4)",
              lineHeight: 1.05,
              perspective: "600px",
            }}
          >
            <KineticText
              text="M.A. Mohamed"
              style={{ display: "block" }}
              delay={0.1}
            />
            <KineticText
              text="Riham"
              delay={0.35}
              style={{
                display: "block",
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "1.05rem", marginBottom: "var(--sp-8)", maxWidth: "480px" }}
          >
            Software Engineer specializing in privacy-first{" "}
            <strong style={{ color: "var(--primary)" }}>Edge AI</strong> devices,
            convolutional ML models, and SOLID-pattern software architectures. Based in{" "}
            <strong style={{ color: "var(--text-primary)" }}>Addalaichenai, Sri Lanka</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="hero-btns"
            style={{ display: "flex", gap: "var(--sp-4)", flexWrap: "wrap", marginBottom: "var(--sp-12)" }}
          >
            <a href="#projects" className="btn btn-primary">View Projects ↗</a>
            <a href="#contact" className="btn btn-outline">Let&apos;s Talk</a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="hero-stats"
            style={{ display: "flex", gap: "var(--sp-8)", flexWrap: "wrap" }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1, duration: 0.6 }}
              >
                <div style={{
                  fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text", lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: 3D Canvas ── */}
        <motion.div
          className="hero-canvas"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", borderRadius: "24px", overflow: "hidden" }}
        >
          {/* Spinning conic border */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: "24px", zIndex: 0,
            background: "conic-gradient(from var(--hero-border-angle, 0deg), #00e6e6, #9933ff, #1bc961, #00e6e6)",
            animation: "spin-border 6s linear infinite",
            padding: "1.5px",
          }} />
          <div style={{
            position: "relative", zIndex: 1, height: "100%",
            background: "rgba(6,6,10,0.5)", backdropFilter: "blur(4px)",
            borderRadius: "24px", border: "1px solid rgba(255,255,255,0.04)",
            margin: "1.5px",
          }}>
            <HeroScene />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute", bottom: "var(--sp-8)", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          color: "var(--text-muted)", fontSize: "0.7rem", fontFamily: "var(--font-mono)",
          letterSpacing: "0.15em", textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <span style={{ fontSize: "1.1rem" }}>↓</span>
      </motion.a>

      <style jsx global>{`
        @keyframes spin-border {
          from { --hero-border-angle: 0deg; }
          to   { --hero-border-angle: 360deg; }
        }
      `}</style>
    </section>
  );
}
