"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "Sri Lankan Currency Detector",
    description:
      "Assistive technology for visually impaired users. Uses YOLOv8 + ESP32-CAM for offline currency recognition with instant auditory feedback.",
    stack: ["YOLOv8", "Python", "ESP32-CAM", "Edge AI"],
    type: "AI / Assistive Tech",
    link: "https://github.com/mohamedriham93/offline-currency-detector",
    size: "large",
    accent: "#00e6e6",
    icon: "🤖",
  },
  {
    title: "Face Recognition Attendance",
    description:
      "Biometric attendance system with 98% accuracy, automated admin notifications, and SQLite-backed record keeping.",
    stack: ["Python", "OpenCV", "SQLite", "Tkinter"],
    type: "Computer Vision",
    link: "https://github.com/mohamedriham93/face-recognition-attendance",
    size: "medium",
    accent: "#9933ff",
    icon: "👁️",
  },
  {
    title: "EDITH – Offline Voice Assistant",
    description:
      "Iron Man-inspired offline AI assistant. Runs local scripts, guards privacy, leverages speech recognition engines.",
    stack: ["Python", "SpeechRecognition", "Pyttsx3", "Automation"],
    type: "AI Assistant",
    link: "https://github.com/mohamedriham93/EDITH-voice-assistant",
    size: "medium",
    accent: "#1bc961",
    icon: "🎙️",
  },
  {
    title: "Azirah – 3D Horror Game",
    description:
      "Atmospheric horror game in Unity with real-time lighting, spatial audio, and immersive state-machine driven gameplay.",
    stack: ["Unity", "C#", "Blender", "Game Dev"],
    type: "Game Engineering",
    link: "https://github.com/mohamedriham93/azirah-game",
    size: "small",
    accent: "#ff6b9d",
    icon: "👻",
  },
  {
    title: "Axis Academy Website",
    description:
      "Full-stack responsive portal with SEO optimization, secure domain configuration, and optimized database queries.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "Web Development",
    link: "https://github.com/mohamedriham93/axis-academy",
    size: "small",
    accent: "#f0a500",
    icon: "🌐",
  },
];

function TiltCard({
  proj,
  idx,
}: {
  proj: (typeof PROJECTS)[0];
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: idx * 0.1, duration: 0.7 }}
      style={{ perspective: 800 }}
      className={`bento-card ${proj.size}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          height: "100%",
          borderRadius: "12px",
          background: "var(--glass-bg)",
          border: `1px solid rgba(${proj.accent.replace("#", "").match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(",") ?? "255,255,255"}, 0.15)`,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "var(--glass-shadow)",
          padding: "var(--space-6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          cursor: "default",
        }}
      >
        {/* Cursor spotlight glow */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${proj.accent}18 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        {/* Floating icon — lifted in Z with translateZ */}
        <div
          style={{
            transform: "translateZ(30px)",
            fontSize: "2.5rem",
            marginBottom: "var(--space-3)",
          }}
        >
          {proj.icon}
        </div>

        <div style={{ transform: "translateZ(20px)" }}>
          {/* Type tag */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              color: proj.accent,
              letterSpacing: "0.12em",
              marginBottom: "var(--space-2)",
            }}
          >
            {proj.type}
          </div>

          {/* Title */}
          <h3
            style={{
              marginBottom: "var(--space-3)",
              fontSize: "1.25rem",
              color: "var(--text-primary)",
            }}
          >
            {proj.title}
          </h3>

          {/* Description */}
          <p style={{ fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "var(--space-4)" }}>
            {proj.description}
          </p>
        </div>

        <div style={{ transform: "translateZ(15px)" }}>
          {/* Stack tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "var(--space-4)" }}>
            {proj.stack.map((tag) => (
              <span
                key={tag}
                style={{
                  background: `${proj.accent}14`,
                  border: `1px solid ${proj.accent}33`,
                  padding: "3px 8px",
                  borderRadius: "4px",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                  color: proj.accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: proj.accent,
            }}
          >
            View Repository ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
          Featured Projects
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
        <p style={{ marginTop: "var(--space-6)", maxWidth: "500px" }}>
          A selection of work spanning AI, computer vision, game development, and full-stack web. Hover cards to explore.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {PROJECTS.map((proj, idx) => (
          <TiltCard key={proj.title} proj={proj} idx={idx} />
        ))}
      </div>

      <style jsx global>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .bento-card.large { grid-column: span 2; }
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-card.large { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-card.large { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
