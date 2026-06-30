"use client";

import { motion } from "framer-motion";

const TIMELINE_ITEMS = [
  {
    role: "BSc (Hons) in Data Science",
    company: "ICBT Campus",
    period: "2025 - Present (Ongoing)",
    type: "education",
    bullets: [
      "Specializing in Machine Learning modules, predictive analytics, and big data architectures.",
      "Developing projects to bridge automated software systems with advanced statistical inference."
    ]
  },
  {
    role: "Web Developer",
    company: "Axis Academy",
    period: "Jan - Jul 2025",
    type: "experience",
    bullets: [
      "Built a fully responsive, custom full-stack platform using PHP and MySQL, improving page load speed.",
      "Optimized query structures, set up domain records, configured secure server hosting, and established initial SEO audit compliance."
    ]
  },
  {
    role: "Batch Representative",
    company: "IT Society",
    period: "2024 - 2025",
    type: "leadership",
    bullets: [
      "Served as a bridge between academic faculty and the student body to address curriculum feedback.",
      "Supported organization of hackathons, gaming events, and coding meetups, developing soft communication skills."
    ]
  },
  {
    role: "Higher National Diploma (HND) in Software Engineering",
    company: "ICBT Campus",
    period: "2023 - 2024",
    type: "education",
    bullets: [
      "Learned fundamental software engineering, object-oriented concepts (Java, C#), clean database structure (SQL), and system designs.",
      "Built offline currency detection prototypes as part of final coursework deliverables."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "var(--space-16) 0",
        maxWidth: "800px",
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
          Experience & Education
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

      {/* Timeline Wrapper */}
      <div style={{ position: "relative", paddingLeft: "30px" }}>
        {/* Vertical line indicator */}
        <div
          style={{
            position: "absolute",
            left: "8px",
            top: "5px",
            bottom: "5px",
            width: "2px",
            background: "linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%)",
            opacity: 0.5
          }}
        />

        {TIMELINE_ITEMS.map((item, idx) => (
          <motion.div
            key={item.role + item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            style={{ position: "relative", marginBottom: "var(--space-8)" }}
          >
            {/* Timeline node dot indicator */}
            <div
              style={{
                position: "absolute",
                left: "-37px",
                top: "6px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: item.type === "experience" ? "var(--accent)" : "var(--primary)",
                border: "4px solid var(--bg-base)",
                boxShadow: item.type === "experience" ? "0 0 8px var(--accent)" : "0 0 8px var(--primary)",
                zIndex: 2
              }}
            />

            {/* Information Card */}
            <div
              className="glass-panel"
              style={{
                padding: "var(--space-6)",
                borderLeftWidth: "3px",
                borderLeftColor: item.type === "experience" ? "var(--accent)" : "var(--primary)"
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "var(--space-2)"
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "2px" }}>{item.role}</h3>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 600 }}>
                    {item.company}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    background: "rgba(255,255,255,0.03)",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-muted)"
                  }}
                >
                  {item.period}
                </span>
              </div>

              {/* Bullets */}
              <ul style={{ paddingLeft: "18px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                {item.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} style={{ marginBottom: "4px" }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
