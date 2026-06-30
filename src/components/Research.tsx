"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./MotionUtils";

const STATS = [
  { value: "+10%", label: "Recall Improvement", desc: "XGBoost consistently outperformed Random Forest in detecting fraudulent transactions." },
  { value: "SMOTE", label: "Optimised Sampling", desc: "Tuned synthetic oversampling ratios to balance precision without inflating false-positives." },
  { value: "RT", label: "Real-time Ready", desc: "Inference pipeline designed to execute within low-latency production constraints." },
];

export default function Research() {
  return (
    <section id="research" className="section" style={{ zIndex: 10 }}>
      <SectionHeading label="// Academic Work" title="Research & Studies" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass"
        style={{
          padding: "var(--sp-8)",
          background: "linear-gradient(135deg, rgba(8,8,20,0.92), rgba(10,6,30,0.85))",
          borderColor: "rgba(var(--primary-rgb), 0.18)",
          maxWidth: "900px",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "var(--sp-4)",
            marginBottom: "var(--sp-6)",
          }}
        >
          <div>
            <span className="section-label" style={{ marginBottom: "var(--sp-2)" }}>
              Comparative Analysis
            </span>
            <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", lineHeight: 1.25 }}>
              Credit Card Fraud Detection Study
            </h3>
          </div>
          <span
            className="tag"
            style={{
              background: "rgba(var(--accent-rgb), 0.1)",
              borderColor: "rgba(var(--accent-rgb), 0.25)",
              color: "var(--accent)",
              padding: "5px 14px",
              borderRadius: "999px",
              flexShrink: 0,
            }}
          >
            Academic Study
          </span>
        </div>

        <p style={{ lineHeight: 1.8, marginBottom: "var(--sp-8)", maxWidth: "700px" }}>
          Conducted a comparative evaluation of ensemble algorithms on heavily imbalanced datasets to
          optimise fraud identification systems. Benchmarked{" "}
          <strong style={{ color: "var(--primary)" }}>XGBoost</strong> against{" "}
          <strong style={{ color: "var(--secondary)" }}>Random Forest</strong> under various SMOTE
          resampling ratios and thresholding limits.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--sp-4)",
            marginBottom: "var(--sp-8)",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "var(--sp-5)",
              }}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)", fontFamily: "var(--font-display)", marginBottom: "4px" }}>
                {s.value}
              </div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "6px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {s.label}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/mohamedriham93/fraud-detection-study"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ fontSize: "0.85rem" }}
        >
          Read Analysis & Notebooks ↗
        </a>
      </motion.div>
    </section>
  );
}
