"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        minHeight: "100vh",
        padding: "0 var(--space-8)",
        position: "relative",
        zIndex: 10,
        gap: "var(--space-8)",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
      }}
    >
      {/* Left: Text Content */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            color: "var(--accent)",
            marginBottom: "var(--space-4)",
            textTransform: "uppercase",
          }}
        >
          {"// Hello, World —"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="glow-text"
          style={{ marginBottom: "var(--space-2)", lineHeight: 1.1 }}
        >
          Mohamed
          <br />
          <span style={{ color: "var(--primary)" }}>Riham</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            color: "var(--secondary)",
            fontWeight: 700,
            letterSpacing: "0.05em",
            marginBottom: "var(--space-6)",
          }}
        >
          AI Developer & Data Scientist
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.0 }}
          style={{ marginBottom: "var(--space-8)", maxWidth: "480px" }}
        >
          I design and build practical, user-focused AI solutions. Specializing in computer vision,
          automated ML pipelines, and cloud systems — driven by the philosophy of{" "}
          <em>learning by doing</em>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            className="interactive"
            style={{
              padding: "var(--space-3) var(--space-6)",
              borderRadius: "30px",
              background: "var(--gradient-cinematic)",
              color: "var(--bg-base)",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: "0 4px 20px rgba(0,230,230,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,230,230,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,230,230,0.35)";
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="interactive"
            style={{
              padding: "var(--space-3) var(--space-6)",
              borderRadius: "30px",
              background: "transparent",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "background 0.2s, border-color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--secondary)";
              e.currentTarget.style.background = "rgba(153,51,255,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            display: "flex",
            gap: "var(--space-8)",
            marginTop: "var(--space-10)",
          }}
        >
          {[
            { value: "5+", label: "Projects" },
            { value: "3+", label: "Years Coding" },
            { value: "AI/ML", label: "Specialization" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-display)",
                  color: "var(--primary)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: 3D Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        style={{ height: "520px", position: "relative" }}
      >
        <HeroScene />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        style={{
          position: "absolute",
          bottom: "var(--space-8)",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.5,
          gridColumn: "1 / -1",
        }}
      >
        <a href="#about" style={{ color: "var(--text-muted)", fontSize: "1.5rem" }}>↓</a>
      </motion.div>
    </section>
  );
}
