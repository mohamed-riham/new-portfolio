"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "Sri Lankan Currency Detector",
    description: "Assistive technology for visually impaired users. YOLOv8 + ESP32-CAM for offline currency recognition with instant auditory feedback.",
    stack: ["YOLOv8", "Python", "ESP32-CAM", "Edge AI"],
    type: "AI / Assistive Tech",
    link: "https://github.com/mohamedriham93/offline-currency-detector",
    span: true,
    accent: "#00e6e6",
    icon: "🤖",
  },
  {
    title: "Face Recognition Attendance",
    description: "Biometric system with 98% accuracy, SQLite records, and automated admin notifications.",
    stack: ["Python", "OpenCV", "SQLite", "Tkinter"],
    type: "Computer Vision",
    link: "https://github.com/mohamedriham93/face-recognition-attendance",
    span: false,
    accent: "#9933ff",
    icon: "👁️",
  },
  {
    title: "EDITH – Voice Assistant",
    description: "Iron Man-inspired offline AI assistant. Local scripts, privacy-first, speech recognition engines.",
    stack: ["Python", "SpeechRecognition", "Pyttsx3"],
    type: "AI Assistant",
    link: "https://github.com/mohamedriham93/EDITH-voice-assistant",
    span: false,
    accent: "#1bc961",
    icon: "🎙️",
  },
  {
    title: "Azirah – 3D Horror Game",
    description: "Atmospheric Unity horror game: real-time lighting, spatial audio, state-machine AI.",
    stack: ["Unity", "C#", "Blender"],
    type: "Game Engineering",
    link: "https://github.com/mohamedriham93/azirah-game",
    span: false,
    accent: "#ff6b9d",
    icon: "👻",
  },
  {
    title: "Axis Academy Website",
    description: "Full-stack responsive portal with SEO, secure domain config, and optimised DB queries.",
    stack: ["PHP", "MySQL", "JavaScript"],
    type: "Web Development",
    link: "https://github.com/mohamedriham93/axis-academy",
    span: false,
    accent: "#f0a500",
    icon: "🌐",
  },
];

// Hex → r,g,b
function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function TiltCard({ proj, idx }: { proj: (typeof PROJECTS)[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 180, damping: 22 });
  const rotY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 180, damping: 22 });
  const gX   = useTransform(mx, [0, 1], [0, 100]);
  const gY   = useTransform(my, [0, 1], [0, 100]);
  const rgb  = hexToRgb(proj.accent);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={proj.span ? "proj-span-2" : ""}
      style={{ perspective: "900px" }}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
          height: "100%",
          minHeight: proj.span ? "220px" : "260px",
          borderRadius: "16px",
          background: "rgba(6,6,10,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid rgba(${rgb}, 0.18)`,
          boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(${rgb}, 0.04)`,
          padding: "var(--sp-6)",
          display: "flex",
          flexDirection: proj.span ? "row" : "column",
          gap: "var(--sp-6)",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          cursor: "default",
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - rect.left) / rect.width);
          my.set((e.clientY - rect.top) / rect.height);
        }}
        onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
      >
        {/* Cursor spotlight */}
        <motion.div
          style={{
            position: "absolute", inset: 0, borderRadius: "16px", pointerEvents: "none",
            background: `radial-gradient(circle at ${gX}% ${gY}%, rgba(${rgb}, 0.12) 0%, transparent 55%)`,
          }}
        />

        {/* Corner accent line */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: `linear-gradient(90deg, ${proj.accent}, transparent)`,
            borderRadius: "16px 16px 0 0",
          }}
        />

        {/* Left / Top content */}
        <div style={{ flex: 1, transform: "translateZ(20px)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--sp-3)", marginBottom: "var(--sp-4)" }}>
            <span style={{ fontSize: proj.span ? "2.4rem" : "1.8rem", lineHeight: 1 }}>{proj.icon}</span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                  textTransform: "uppercase", letterSpacing: "0.15em",
                  color: proj.accent, marginBottom: "4px",
                }}
              >
                {proj.type}
              </div>
              <h3 style={{ fontSize: proj.span ? "1.4rem" : "1.15rem", lineHeight: 1.25 }}>{proj.title}</h3>
            </div>
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>{proj.description}</p>
        </div>

        {/* Bottom / Right content */}
        <div style={{ transform: "translateZ(12px)", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "var(--sp-4)", flexShrink: 0 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {proj.stack.map((t) => (
              <span
                key={t}
                style={{
                  background: `rgba(${rgb}, 0.1)`,
                  border: `1px solid rgba(${rgb}, 0.25)`,
                  color: proj.accent,
                  padding: "3px 10px",
                  borderRadius: "999px",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              fontSize: "0.83rem", fontWeight: 700, color: proj.accent,
            }}
          >
            View Repository ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ zIndex: 10 }}>
      <div className="section-header">
        <span className="section-label">// What I&apos;ve Built</span>
        <h2 className="section-title">Featured Projects</h2>
        <p style={{ marginTop: "var(--sp-5)", maxWidth: "520px" }}>
          A selection spanning AI, computer vision, game development, and full-stack web.
          <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}> Hover to interact.</span>
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((proj, idx) => (
          <TiltCard key={proj.title} proj={proj} idx={idx} />
        ))}
      </div>
    </section>
  );
}
