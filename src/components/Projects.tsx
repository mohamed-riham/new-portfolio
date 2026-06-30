"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./MotionUtils";

const PROJECTS = [
  {
    title: "Sri Lankan Banknote Detector",
    description: "Edge-AI hardware assistant for the visually impaired. Custom YOLOv8n + ESP32-CAM detects LKR denominations offline and triggers Sinhala/Tamil/English vocal feedback. Dataset: 2,158 annotated images, 8.1 Kaggle usability rating.",
    stack: ["YOLOv8", "Python", "ESP32-CAM", "C++", "OpenCV", "DFPlayer Mini"],
    type: "IoT / Edge AI",
    link: "https://github.com/mohamed-riham/Sri-Lankan-Currency-Detector-YOLOv8",
    kaggle: "https://www.kaggle.com/datasets/mohamedriham/sri-lankan-currency-notes-dataset",
    span: true,
    accent: "#00e6e6",
    icon: "🤖",
    stat: "< $15 Hardware · 2,158 images · 8.1 Kaggle rating",
  },
  {
    title: "EDITH: Offline Voice Assistant",
    description: "Privacy-first offline AI assistant. Sub-200ms response, 96.4% intent match, 0% web reliance. Uses FuzzyWuzzy semantic matching and Edge-TTS.",
    stack: ["Python", "SpeechRecognition", "Edge-TTS", "FuzzyWuzzy"],
    type: "AI Assistant",
    link: "https://github.com/mohamed-riham",
    span: false,
    accent: "#9933ff",
    icon: "🎙️",
    stat: "96.4% intent · < 180ms latency",
  },
  {
    title: "Sampath Food City Dashboard",
    description: "Enterprise sales dashboard using Factory, Observer & Singleton patterns. Streamlit + Flask, SOLID architecture, zero runtime leaks.",
    stack: ["Flask", "Streamlit", "Pandas", "SOLID"],
    type: "Data Science",
    link: "https://github.com/mohamed-riham/Data-Science-Dashboard-python",
    span: false,
    accent: "#1bc961",
    icon: "📊",
    stat: "SOLID Core · 0.0% leak rate · 60fps",
  },
  {
    title: "Automated Attendance System",
    description: "dlib face-recognition attendance tracker with 99.2% match rate, auto-SMTP parent alerts in < 2.4s, PyQt5 admin dashboard.",
    stack: ["PyQt5", "OpenCV", "MySQL", "face_recognition", "SMTP"],
    type: "Computer Vision",
    link: "https://github.com/mohamed-riham/face_recognition_attendance_system",
    span: false,
    accent: "#f0a500",
    icon: "👁️",
    stat: "99.2% match · < 2.4s email delivery",
  },
  {
    title: "Azirah: Don't Let Her See You",
    description: "3D psychological survival game in Unity. FSM enemy AI, Blender low-poly assets, dynamic audio proximity triggers, baked lighting.",
    stack: ["Unity", "C#", "Blender", "FSM AI"],
    type: "Game Engineering",
    link: "https://github.com/mohamed-riham",
    span: false,
    accent: "#ff6b9d",
    icon: "👻",
    stat: "FSM AI · Custom Blender assets",
  },
];

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
  const gX = useTransform(mx, [0, 1], [0, 100]);
  const gY = useTransform(my, [0, 1], [0, 100]);
  const rgb = hexToRgb(proj.accent);

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
          rotateX: rotX, rotateY: rotY,
          transformStyle: "preserve-3d",
          height: "100%", minHeight: proj.span ? "220px" : "280px",
          borderRadius: "16px",
          background: "rgba(6,6,10,0.75)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          border: `1px solid rgba(${rgb}, 0.2)`,
          boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(${rgb}, 0.04)`,
          padding: "var(--sp-6)",
          display: "flex", flexDirection: proj.span ? "row" : "column",
          gap: "var(--sp-6)", justifyContent: "space-between",
          position: "relative", overflow: "hidden", cursor: "default",
        }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width);
          my.set((e.clientY - r.top) / r.height);
        }}
        onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
      >
        {/* Cursor spotlight */}
        <motion.div style={{ position: "absolute", inset: 0, borderRadius: "16px", pointerEvents: "none", background: `radial-gradient(circle at ${gX}% ${gY}%, rgba(${rgb}, 0.13) 0%, transparent 55%)` }} />

        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${proj.accent}, transparent)`, borderRadius: "16px 16px 0 0" }} />

        {/* Content */}
        <div style={{ flex: 1, transform: "translateZ(20px)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--sp-3)", marginBottom: "var(--sp-4)" }}>
            <span style={{ fontSize: proj.span ? "2.4rem" : "1.8rem", lineHeight: 1 }}>{proj.icon}</span>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: proj.accent, marginBottom: "4px" }}>
                {proj.type}
              </div>
              <h3 style={{ fontSize: proj.span ? "1.4rem" : "1.1rem", lineHeight: 1.25 }}>{proj.title}</h3>
            </div>
          </div>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>{proj.description}</p>
        </div>

        {/* Footer */}
        <div style={{ transform: "translateZ(12px)", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "var(--sp-3)", flexShrink: 0 }}>
          {proj.stat && (
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: proj.accent, opacity: 0.8 }}>
              ◆ {proj.stat}
            </div>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {proj.stack.map((t) => (
              <span key={t} style={{ background: `rgba(${rgb}, 0.1)`, border: `1px solid rgba(${rgb}, 0.25)`, color: proj.accent, padding: "2px 9px", borderRadius: "999px", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "var(--sp-4)", flexWrap: "wrap" }}>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", fontWeight: 700, color: proj.accent }}>
              GitHub ↗
            </a>
            {"kaggle" in proj && proj.kaggle && (
              <a href={proj.kaggle as string} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent)" }}>
                Kaggle ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ zIndex: 10 }}>
      <SectionHeading
        label="// What I've Built"
        title="Featured Projects"
        subtitle="Spanning Edge AI hardware, computer vision systems, game engineering, and enterprise dashboards. Hover to interact."
      />

      <div className="projects-grid">
        {PROJECTS.map((proj, idx) => (
          <TiltCard key={proj.title} proj={proj} idx={idx} />
        ))}
      </div>
    </section>
  );
}
