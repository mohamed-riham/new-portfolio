"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    role: "BSc (Hons) in Data Science",
    org: "ICBT Campus",
    period: "2025 – Present",
    type: "edu",
    color: "var(--primary)",
    icon: "🎓",
    bullets: [
      "Specializing in ML, predictive analytics, and big-data architectures.",
      "Bridging automated software systems with advanced statistical inference.",
    ],
  },
  {
    role: "Web Developer",
    org: "Axis Academy",
    period: "Jan – Jul 2025",
    type: "work",
    color: "var(--accent)",
    icon: "💼",
    bullets: [
      "Built a fully responsive full-stack platform with PHP & MySQL, improving page load speed.",
      "Configured domain records, secure hosting, and initial SEO audit compliance.",
    ],
  },
  {
    role: "Batch Representative",
    org: "IT Society",
    period: "2024 – 2025",
    type: "lead",
    color: "var(--secondary)",
    icon: "🏆",
    bullets: [
      "Bridge between faculty and student body, relaying curriculum feedback.",
      "Organised hackathons, gaming events, and coding meetups.",
    ],
  },
  {
    role: "HND in Software Engineering",
    org: "BCAS Campus",
    period: "2023 – 2024",
    type: "edu",
    color: "var(--primary)",
    icon: "🎓",
    bullets: [
      "OOP concepts (Java, C#), clean DB design (SQL), and system architecture with SOLID principles.",
      "Built offline LKR currency detection prototypes as final coursework deliverables.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ zIndex: 10 }}>
      <div className="section-header">
        <span className="section-label">// My Journey</span>
        <h2 className="section-title">Experience & Education</h2>
      </div>

      {/* Timeline container */}
      <div
        style={{
          position: "relative",
          maxWidth: "800px",
          paddingLeft: "clamp(28px, 5vw, 40px)",
        }}
      >
        {/* Vertical line */}
        <div className="timeline-line" />

        {ITEMS.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative", marginBottom: "var(--sp-8)" }}
          >
            {/* Dot */}
            <div
              className="timeline-dot"
              style={{
                background: item.color,
                boxShadow: `0 0 10px ${item.color}`,
              }}
            />

            {/* Card */}
            <div
              className="glass"
              style={{
                padding: "var(--sp-6)",
                borderLeft: `3px solid ${item.color}`,
                borderRadius: "0 16px 16px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "var(--sp-2)",
                  marginBottom: "var(--sp-3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-3)" }}>
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", lineHeight: 1.3, marginBottom: "2px" }}>{item.role}</h3>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem", fontWeight: 600 }}>{item.org}</span>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                  }}
                >
                  {item.period}
                </span>
              </div>

              <ul style={{ paddingLeft: "18px", color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                {item.bullets.map((b, bi) => (
                  <li key={bi} style={{ marginBottom: "3px" }}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
