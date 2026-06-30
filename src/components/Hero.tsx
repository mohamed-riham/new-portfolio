"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 var(--space-8)",
        textAlign: "center",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="glass-panel" style={{ padding: "var(--space-12) var(--space-8)", maxWidth: "650px" }}>
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 800,
            letterSpacing: "0.2em",
            color: "var(--primary)",
            marginBottom: "var(--space-4)"
          }}
        >
          MOHAMED RIHAM
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="glow-text"
          style={{
            marginBottom: "var(--space-2)",
            textTransform: "uppercase"
          }}
        >
          AI Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.95rem",
            color: "var(--accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "var(--space-6)"
          }}
        >
          & Data Science Undergraduate
        </motion.div>

        {/* Brand Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.0 }}
          style={{
            marginBottom: "var(--space-8)",
            fontSize: "1.1rem"
          }}
        >
          I design and build practical, user-focused AI solutions. Specializing in computer vision, automated ML pipelines, and cloud systems, driven by the philosophy of <em>learning by doing</em>.
        </motion.p>

        {/* Interactive CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            display: "flex",
            gap: "var(--space-4)",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
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
              boxShadow: "0 4px 15px rgba(0, 230, 230, 0.3)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 230, 230, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 230, 230, 0.3)";
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
              transition: "background var(--transition-fast), border-color var(--transition-fast)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--secondary)";
              e.currentTarget.style.background = "rgba(153, 51, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          position: "absolute",
          bottom: "var(--space-8)",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.6
        }}
      >
        <a href="#about" style={{ color: "var(--text-muted)", fontSize: "1.5rem" }}>↓</a>
      </motion.div>
    </section>
  );
}
