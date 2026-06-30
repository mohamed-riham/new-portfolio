"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Sri Lankan Currency Detector",
    description: "An assistive technology solution designed for visually impaired users. Utilizes YOLOv8 and ESP32-CAM to perform offline currency recognition, complete with instant auditory feedback and custom system alerts.",
    stack: ["YOLOv8", "Python", "ESP32-CAM", "Edge AI"],
    type: "AI / Assistive Tech",
    link: "https://github.com/mohamedriham93/offline-currency-detector",
    size: "large"
  },
  {
    title: "Face Recognition Attendance System",
    description: "A secure, smart biometric application that automates class/office registry tracking. Improves record precision to 98% and notifies administrators of entry reports via custom triggers.",
    stack: ["Python", "OpenCV", "SQLite", "Tkinter"],
    type: "Computer Vision",
    link: "https://github.com/mohamedriham93/face-recognition-attendance",
    size: "medium"
  },
  {
    title: "EDITH – Offline Voice Assistant",
    description: "An offline AI voice assistant styled after Iron Man's smart HUD. Leverages speech recognition and offline dictionary engines to perform local scripts execution while guarding user data privacy.",
    stack: ["Python", "SpeechRecognition", "Pyttsx3", "Automation"],
    type: "AI Assistant",
    link: "https://github.com/mohamedriham93/EDITH-voice-assistant",
    size: "medium"
  },
  {
    title: "Azirah – 3D Horror Game",
    description: "An immersive, atmospheric horror game built in Unity, demonstrating creative design, spatial audio logic, state management, and real-time lighting physics.",
    stack: ["Unity", "C#", "Blender", "Game Dev"],
    type: "Game Engineering",
    link: "https://github.com/mohamedriham93/azirah-game",
    size: "small"
  },
  {
    title: "Axis Academy Website",
    description: "Developed a full-stack, fully responsive portal featuring secure domain configurations, optimized index queries, and targeted SEO practices to improve web traffic.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "Web Development",
    link: "https://github.com/mohamedriham93/axis-academy",
    size: "small"
  }
];

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
        zIndex: 10
      }}
    >
      {/* Section Header */}
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
              boxShadow: "0 0 10px var(--primary)"
            }}
          />
        </h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="bento-grid">
        {PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`glass-panel bento-card ${proj.size}`}
            style={{
              padding: "var(--space-6)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div>
              {/* Type / Tag */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  marginBottom: "var(--space-3)"
                }}
              >
                {proj.type}
              </div>

              {/* Title */}
              <h3 style={{ marginBottom: "var(--space-3)", fontSize: "1.35rem" }}>
                {proj.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "0.95rem", marginBottom: "var(--space-4)", lineHeight: 1.6 }}>
                {proj.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "var(--space-4)" }}>
                {proj.stack.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-color)",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-secondary)"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Repository Link */}
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
                  color: "var(--primary)"
                }}
              >
                Code Repository ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bento Layout Styling */}
      <style jsx global>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .bento-card.large {
          grid-column: span 2;
        }
        .bento-card.medium {
          grid-column: span 1.5;
        }
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-card.large, .bento-card.medium {
            grid-column: span 2;
          }
        }
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-card.large, .bento-card.medium {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
