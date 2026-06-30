"use client";

import { motion } from "framer-motion";

const CERTIFICATIONS = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    badge: "☁️"
  },
  {
    title: "AWS Academy Graduate - Machine Learning",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    badge: "🧠"
  },
  {
    title: "Generative AI Fundamentals Certificate",
    issuer: "Udacity",
    date: "2025",
    badge: "🚀"
  },
  {
    title: "AWS Educate Graduate",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    badge: "🎓"
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements & Certifications
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

      {/* Grid wrapper */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "var(--space-6)"
        }}
      >
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-panel"
            style={{
              padding: "var(--space-5)",
              display: "flex",
              alignItems: "center",
              gap: "var(--space-4)"
            }}
          >
            {/* Visual Badge Icon */}
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.02)",
                flexShrink: 0
              }}
            >
              {cert.badge}
            </div>

            {/* Info details */}
            <div>
              <h3 style={{ fontSize: "0.95rem", marginBottom: "2px", lineHeight: 1.3 }}>
                {cert.title}
              </h3>
              <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                {cert.issuer}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: "4px" }}>
                Issued {cert.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
