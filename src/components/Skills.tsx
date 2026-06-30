"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SkillsGlobe = dynamic(() => import("./SkillsGlobe"), { ssr: false });

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    color: "#00e6e6",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "C#", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "AI / Machine Learning",
    color: "#9933ff",
    icon: "🧠",
    skills: [
      { name: "Scikit-Learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "OpenCV", level: 80 },
      { name: "YOLOv8", level: 80 },
      { name: "Data Analytics", level: 85 },
    ],
  },
  {
    title: "Web & Automation",
    color: "#1bc961",
    icon: "🌐",
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "FastAPI / Flask", level: 85 },
      { name: "Docker / Git", level: 75 },
      { name: "Streamlit", level: 90 },
      { name: "PHP / MySQL", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "var(--space-16) 0",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        paddingLeft: "var(--space-8)",
        paddingRight: "var(--space-8)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "var(--space-12)" }}>
        <h2 style={{ position: "relative", display: "inline-block" }}>
          Technical Skills
          <span
            style={{
              position: "absolute",
              bottom: "-8px",
              left: 0,
              width: "40px",
              height: "3px",
              background: "var(--primary)",
              boxShadow: "0 0 10px var(--primary)",
            }}
          />
        </h2>
        <p style={{ marginTop: "var(--space-6)", maxWidth: "480px" }}>
          Drag the globe to explore — each label orbits in 3D by category.
        </p>
      </div>

      {/* Two-column: globe + skill bars */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-12)",
          alignItems: "center",
        }}
      >
        {/* 3D Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            background: "rgba(0,0,0,0.2)",
            border: "1px solid var(--border-color)",
          }}
        >
          <SkillsGlobe />

          {/* Legend */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-6)",
              padding: "var(--space-4)",
              borderTop: "1px solid var(--border-color)",
            }}
          >
            {[
              { label: "Programming", color: "#00e6e6" },
              { label: "AI / ML", color: "#9933ff" },
              { label: "Web & Auto", color: "#1bc961" },
            ].map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: l.color,
                    boxShadow: `0 0 6px ${l.color}`,
                  }}
                />
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{l.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15, duration: 0.7 }}
              className="glass-panel"
              style={{ padding: "var(--space-6)" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "var(--space-5)",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
                <h3 style={{ fontSize: "1.1rem", color: cat.color }}>{cat.title}</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      <span>{skill.name}</span>
                      <span style={{ color: "var(--text-muted)" }}>{skill.level}%</span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "5px",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "3px",
                        overflow: "hidden",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{
                          height: "100%",
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                          boxShadow: `0 0 8px ${cat.color}66`,
                          borderRadius: "3px",
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

      {/* Responsive: stack on mobile */}
      <style jsx global>{`
        @media (max-width: 768px) {
          #skills > div:last-child {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
