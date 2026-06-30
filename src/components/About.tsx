"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
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
          About Me
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

      {/* Main Grid Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--space-8)",
          alignItems: "start"
        }}
      >
        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel"
          style={{ padding: "var(--space-8)" }}
        >
          <h3 style={{ marginBottom: "var(--space-4)", color: "var(--primary)" }}>My Story</h3>
          <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.7 }}>
            Hi, I'm Mohamed Riham. I am a Sri Lankan developer currently completing my **BSc (Hons) in Data Science** at ICBT Campus. Having previously completed a Higher National Diploma in Software Engineering, I bridge the gap between robust software architecture and cutting-edge artificial intelligence.
          </p>
          <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.7 }}>
            My development philosophy is anchored in **"learning by doing."** Rather than wading through endless documentation, I prefer to dive straight into building, prototyping, and testing solutions.
          </p>
          <p style={{ lineHeight: 1.7, color: "var(--text-secondary)" }}>
            When I'm not writing code, you'll probably find me exploring cloud automation tools, engineering new mechanics in Unity, tinkering with a Raspberry Pi, or sipping hot Sri Lankan tea during late-night refactoring sessions.
          </p>
        </motion.div>

        {/* Core Attributes & Action Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}
        >
          {/* Attributes Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "var(--space-4)"
            }}
          >
            {[
              { title: "Fast Learner", desc: "Rapidly grasps and implements new technologies and frameworks." },
              { title: "Problem Solver", desc: "Focuses on building products that address real accessibility needs." },
              { title: "Team Player", desc: "Proven leadership skills through serving as batch representative." }
            ].map((attr) => (
              <div
                key={attr.title}
                className="glass-panel"
                style={{
                  padding: "var(--space-4)",
                  textAlign: "center",
                  borderColor: "rgba(255,255,255,0.03)"
                }}
              >
                <div style={{ color: "var(--accent)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>
                  {attr.title}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {attr.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Action card / Resume */}
          <div
            className="glass-panel"
            style={{
              padding: "var(--space-6)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
              background: "linear-gradient(135deg, rgba(8,8,12,0.9) 0%, rgba(15,10,25,0.8) 100%)",
              borderColor: "rgba(127,0,255,0.15)"
            }}
          >
            <h4 style={{ color: "var(--secondary)" }}>Professional Credentials</h4>
            <p style={{ fontSize: "0.95rem" }}>
              Explore my academic background, technical competencies, and project deliverables formatted inside my curriculum vitae.
            </p>
            <div>
              <a
                href="/resume.pdf"
                download
                className="interactive"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "var(--space-2) var(--space-4)",
                  borderRadius: "20px",
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "background 0.2s, color 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(27,201,97,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                📥 Download CV (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
