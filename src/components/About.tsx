"use client";

import { motion } from "framer-motion";

const TRAITS = [
  { icon: "⚡", title: "Fast Learner",   desc: "Rapidly grasps and ships new technologies." },
  { icon: "🎯", title: "Problem Solver", desc: "Builds for real accessibility and usability needs." },
  { icon: "🤝", title: "Team Player",    desc: "Proven leadership as batch representative." },
  { icon: "☁️", title: "Cloud Minded",   desc: "Passionate about automation and cloud systems." },
];

const MARQUEE_ITEMS = [
  "Python", "TensorFlow", "YOLOv8", "OpenCV", "Next.js", "FastAPI",
  "Docker", "Scikit-Learn", "React", "Unity", "Streamlit", "AWS",
];

export default function About() {
  return (
    <section id="about" className="section" style={{ zIndex: 10, paddingTop: "var(--sp-24)", paddingBottom: "var(--sp-24)" }}>

      {/* Header */}
      <div className="section-header">
        <span className="section-label">// Who I Am</span>
        <h2 className="section-title">About Me</h2>
      </div>

      {/* Main Grid */}
      <div className="about-grid">

        {/* Left: Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass" style={{ padding: "var(--sp-8)", marginBottom: "var(--sp-6)" }}>
            <h3 style={{ color: "var(--primary)", marginBottom: "var(--sp-5)" }}>My Story</h3>
            <p style={{ lineHeight: 1.8, marginBottom: "var(--sp-4)" }}>
              Hi, I&apos;m <strong style={{ color: "var(--text-primary)" }}>Mohamed Riham</strong> — a Sri Lankan developer
              completing my <strong style={{ color: "var(--primary)" }}>BSc (Hons) in Data Science</strong> at ICBT Campus.
              With an HND in Software Engineering, I bridge robust software architecture with cutting-edge AI.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: "var(--sp-4)" }}>
              My philosophy: <em style={{ color: "var(--accent)" }}>&ldquo;learning by doing.&rdquo;</em> Instead of wading
              through docs, I build, prototype, and iterate fast.
            </p>
            <p style={{ lineHeight: 1.8, color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Off-screen: exploring cloud automation, engineering Unity mechanics, tinkering with Raspberry Pi —
              or sipping Sri Lankan tea during late-night refactoring sessions. 🍵
            </p>
          </div>

          {/* CV Download card */}
          <div
            className="glass"
            style={{
              padding: "var(--sp-6)",
              background: "linear-gradient(135deg, rgba(8,8,20,0.9), rgba(15,8,30,0.85))",
              borderColor: "rgba(var(--secondary-rgb),0.18)",
            }}
          >
            <h4 style={{ color: "var(--secondary)", marginBottom: "var(--sp-2)", fontSize: "1rem" }}>
              Professional Credentials
            </h4>
            <p style={{ fontSize: "0.9rem", marginBottom: "var(--sp-5)" }}>
              My academic background, technical competencies, and project deliverables — all in one document.
            </p>
            <a href="/resume.pdf" download className="btn btn-outline" style={{ fontSize: "0.85rem" }}>
              📥 Download CV
            </a>
          </div>
        </motion.div>

        {/* Right: Trait cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: "var(--sp-4)" }}
        >
          {TRAITS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass"
              style={{
                padding: "var(--sp-5) var(--sp-6)",
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--sp-4)",
              }}
            >
              <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{t.icon}</span>
              <div>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-display)" }}>
                  {t.title}
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {t.desc}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Location / availability badge */}
          <div className="glass" style={{ padding: "var(--sp-5) var(--sp-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-3)", marginBottom: "var(--sp-2)" }}>
              <span
                style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 8px var(--accent)",
                  animation: "pulse-dot 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontWeight: 700, color: "var(--accent)", fontSize: "0.88rem", fontFamily: "var(--font-mono)" }}>
                Available for Opportunities
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              📍 Colombo, Sri Lanka · Open to remote & on-site roles
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Tech Marquee ── */}
      <div style={{ marginTop: "var(--sp-16)" }}>
        <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "var(--sp-4)", textAlign: "center" }}>
          Technologies I work with
        </p>
        <div className="marquee-track" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <div className="marquee-inner">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="tag"
                style={{
                  fontSize: "0.8rem",
                  padding: "6px 16px",
                  borderRadius: "999px",
                  flexShrink: 0,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--accent); }
          50%       { opacity: 0.6; box-shadow: 0 0 16px var(--accent); }
        }
      `}</style>
    </section>
  );
}
