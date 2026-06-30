"use client";

import { motion } from "framer-motion";

const CERTS = [
  { title: "AWS Academy – Cloud Foundations",       issuer: "Amazon Web Services", date: "2024", icon: "☁️", color: "#f0a500" },
  { title: "AWS Academy – Machine Learning",        issuer: "Amazon Web Services", date: "2025", icon: "🧠", color: "#9933ff" },
  { title: "Generative AI Fundamentals",            issuer: "Udacity",             date: "2025", icon: "🚀", color: "#00e6e6" },
  { title: "AWS Educate Graduate",                  issuer: "Amazon Web Services", date: "2024", icon: "🎓", color: "#1bc961" },
];

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ zIndex: 10 }}>
      <div className="section-header">
        <span className="section-label">// Recognition</span>
        <h2 className="section-title">Achievements & Certifications</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "var(--sp-5)",
        }}
      >
        {CERTS.map((cert, i) => {
          const rgb = hexToRgb(cert.color);
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass"
              style={{
                padding: "var(--sp-6)",
                display: "flex",
                alignItems: "center",
                gap: "var(--sp-4)",
                borderColor: `rgba(${rgb}, 0.18)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow corner */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, height: "2px",
                  background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                }}
              />

              {/* Icon badge */}
              <div
                style={{
                  width: 52, height: 52, flexShrink: 0,
                  borderRadius: "14px",
                  background: `rgba(${rgb}, 0.12)`,
                  border: `1px solid rgba(${rgb}, 0.25)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  boxShadow: `0 0 16px rgba(${rgb}, 0.12)`,
                }}
              >
                {cert.icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: "0.92rem", lineHeight: 1.35, marginBottom: "4px" }}>{cert.title}</h3>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 500 }}>{cert.issuer}</div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: cert.color,
                    fontFamily: "var(--font-mono)",
                    marginTop: "4px",
                    fontWeight: 600,
                  }}
                >
                  Issued {cert.date}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
