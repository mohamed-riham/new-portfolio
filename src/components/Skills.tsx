"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { SectionHeading } from "./MotionUtils";

const SkillsGlobe = dynamic(() => import("./SkillsGlobe"), { ssr: false });

const CATEGORIES = [
  {
    title: "Programming",
    color: "#00e6e6",
    icon: "💻",
    skills: [
      { name: "Python",      level: 90 },
      { name: "JavaScript",  level: 85 },
      { name: "SQL",         level: 80 },
      { name: "Java",        level: 75 },
      { name: "C#",          level: 70 },
    ],
  },
  {
    title: "AI / Machine Learning",
    color: "#9933ff",
    icon: "🧠",
    skills: [
      { name: "Scikit-Learn",    level: 85 },
      { name: "Data Analytics",  level: 85 },
      { name: "OpenCV",          level: 80 },
      { name: "YOLOv8",          level: 80 },
      { name: "TensorFlow",      level: 75 },
    ],
  },
  {
    title: "Web & Automation",
    color: "#1bc961",
    icon: "🌐",
    skills: [
      { name: "Streamlit",       level: 90 },
      { name: "FastAPI / Flask", level: 85 },
      { name: "React / Next.js", level: 80 },
      { name: "PHP / MySQL",     level: 80 },
      { name: "Docker / Git",    level: 75 },
    ],
  },
];

const LEGEND = [
  { label: "Programming", color: "#00e6e6" },
  { label: "AI / ML",     color: "#9933ff" },
  { label: "Web & Auto",  color: "#1bc961" },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ zIndex: 10 }}>
      <SectionHeading
        label="// What I Know"
        title="Technical Skills"
        subtitle="Rotate the globe to explore — labels orbit in 3D, color-coded by category."
      />

      <div className="skills-grid">

        {/* ── Globe ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass"
          style={{ overflow: "hidden", padding: 0 }}
        >
          <SkillsGlobe />

          {/* Legend */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--sp-6)",
              padding: "var(--sp-4) var(--sp-6)",
              borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {LEGEND.map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: l.color,
                    boxShadow: `0 0 8px ${l.color}`,
                  }}
                />
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Bars ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-6)" }}>
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: ci * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass"
              style={{ padding: "var(--sp-6)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-3)", marginBottom: "var(--sp-5)" }}>
                <span style={{ fontSize: "1.3rem" }}>{cat.icon}</span>
                <h3 style={{ fontSize: "1rem", color: cat.color, margin: 0 }}>{cat.title}</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-4)" }}>
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px" }}>
                      <span>{s.name}</span>
                      <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{s.level}%</span>
                    </div>
                    <div
                      style={{
                        width: "100%", height: "5px",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "99px",
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          height: "100%",
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}77)`,
                          boxShadow: `0 0 10px ${cat.color}55`,
                          borderRadius: "99px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
