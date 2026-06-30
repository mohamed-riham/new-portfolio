"use client";

import { motion } from "framer-motion";

export default function Research() {
  return (
    <section
      id="research"
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
          Research & Studies
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel"
        style={{
          padding: "var(--space-8)",
          background: "linear-gradient(135deg, rgba(8,8,12,0.9) 0%, rgba(10,15,30,0.8) 100%)",
          borderColor: "rgba(0,230,230,0.15)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "var(--space-4)"
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}
            >
              Comparative Analysis
            </span>
            <h3 style={{ fontSize: "1.4rem", marginTop: "4px" }}>
              Credit Card Fraud Detection Study
            </h3>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              background: "rgba(27,201,97,0.1)",
              color: "var(--accent)",
              border: "1px solid rgba(27,201,97,0.2)",
              padding: "4px 8px",
              borderRadius: "4px"
            }}
          >
            Academic Study
          </span>
        </div>

        <p style={{ lineHeight: 1.7, marginBottom: "var(--space-6)" }}>
          Conducted a comparative evaluation of ensemble algorithms on heavily imbalanced datasets to optimize fraud identification systems. The study benchmarked **XGBoost** against **Random Forest** under various SMOTE resampling ratios and thresholding limits.
        </p>

        {/* Highlight Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-4)",
            marginBottom: "var(--space-6)"
          }}
        >
          {[
            { stat: "+10% Recall", desc: "XGBoost consistently outperformed Random Forest in identifying fraudulent transactions." },
            { stat: "SMOTE Tuned", desc: "Optimized synthetic oversampling ratios to maintain precision without bloating false-positives." },
            { stat: "Real-time Ready", desc: "Designed the inference engine pipeline to execute within low latency constraints." }
          ].map((item) => (
            <div
              key={item.stat}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                padding: "var(--space-4)"
              }}
            >
              <div style={{ color: "var(--primary)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "4px" }}>
                {item.stat}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div>
          <a
            href="https://github.com/mohamedriham93/fraud-detection-study"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--primary)"
            }}
          >
            Read Analysis & Dataset Notebooks ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
