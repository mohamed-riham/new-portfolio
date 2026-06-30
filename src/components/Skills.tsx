"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "C#", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    title: "AI / Machine Learning",
    icon: "🧠",
    skills: [
      { name: "Scikit-Learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "OpenCV", level: 80 },
      { name: "YOLOv8", level: 80 },
      { name: "Data Analytics", level: 85 }
    ]
  },
  {
    title: "Web & Automation",
    icon: "🌐",
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "FastAPI / Flask", level: 85 },
      { name: "PHP / MySQL", level: 80 },
      { name: "Streamlit", level: 90 },
      { name: "Docker / Git", level: 75 }
    ]
  }
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
        zIndex: 10
      }}
    >
      {/* Section Header */}
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
              boxShadow: "0 0 10px var(--primary)"
            }}
          />
        </h2>
      </div>

      {/* Grid containing categories */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "var(--space-8)"
        }}
      >
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: catIdx * 0.1, duration: 0.6 }}
            className="glass-panel"
            style={{ padding: "var(--space-6)" }}
          >
            {/* Category header */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-6)" }}>
              <span style={{ fontSize: "1.5rem" }}>{category.icon}</span>
              <h3 style={{ fontSize: "1.25rem", color: "var(--primary)" }}>{category.title}</h3>
            </div>

            {/* Skills list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  {/* Skill text header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginBottom: "6px"
                    }}
                  >
                    <span>{skill.name}</span>
                    <span style={{ color: "var(--text-muted)" }}>{skill.level}%</span>
                  </div>

                  {/* Level bar container */}
                  <div
                    style={{
                      width: "100%",
                      height: "6px",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "3px",
                      overflow: "hidden",
                      border: "1px solid var(--border-color)"
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      style={{
                        height: "100%",
                        background: "var(--gradient-cinematic)",
                        boxShadow: "0 0 8px rgba(0,230,230,0.5)",
                        borderRadius: "3px"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
