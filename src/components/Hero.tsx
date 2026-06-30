"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const STATS = [
  { value: "5+",   label: "Projects Built" },
  { value: "3+",   label: "Years Coding" },
  { value: "Edge AI", label: "Specialization" },
];

const TYPING_ROLES = ["AI Developer", "Data Scientist", "ML Engineer", "Web Developer"];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        paddingTop: "var(--nav-h)",
        display: "flex",
        alignItems: "center",
        padding: `var(--nav-h) var(--section-px) 0`,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="hero-grid" style={{ width: "100%", maxWidth: "var(--max-w)", margin: "0 auto" }}>

        {/* ── Left: Text ── */}
        <div>
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label"
            style={{ marginBottom: "var(--sp-4)" }}
          >
            {"// AI Developer & Data Science Undergraduate"}
          </motion.span>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glow-text"
            style={{ marginBottom: "var(--sp-4)", lineHeight: 1.05 }}
          >
            M.A. Mohamed
            <br />
            <span style={{ background: "var(--grad-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Riham
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontSize: "1.1rem", marginBottom: "var(--sp-8)", maxWidth: "480px" }}
          >
            Software Engineer and Data Science Undergraduate specializing in privacy-first
            Edge AI devices, convolutional ML models, and SOLID-pattern software architectures.
            Based in{" "}
            <em style={{ color: "var(--primary)", fontStyle: "normal", fontWeight: 600 }}>Addalaichenai, Sri Lanka</em>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="hero-btns"
            style={{ display: "flex", gap: "var(--sp-4)", flexWrap: "wrap", marginBottom: "var(--sp-12)" }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects ↗
            </a>
            <a href="#contact" className="btn btn-outline">
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="hero-stats"
            style={{ display: "flex", gap: "var(--sp-8)", flexWrap: "wrap" }}
          >
            {STATS.map((s, i) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-display)",
                    background: "var(--grad-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: 3D Canvas ── */}
        <motion.div
          className="hero-canvas"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", borderRadius: "24px", overflow: "hidden" }}
        >
          {/* Subtle glow frame behind canvas */}
          <div
            style={{
              position: "absolute",
              inset: "-1px",
              borderRadius: "24px",
              background: "var(--grad-primary)",
              opacity: 0.15,
              filter: "blur(1px)",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, height: "100%",
            background: "rgba(6,6,10,0.4)",
            backdropFilter: "blur(4px)",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.06)",
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
          position: "absolute",
          bottom: "var(--sp-8)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "var(--text-muted)",
          fontSize: "0.72rem",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <span style={{ fontSize: "1.1rem" }}>↓</span>
      </motion.a>
    </section>
  );
}
