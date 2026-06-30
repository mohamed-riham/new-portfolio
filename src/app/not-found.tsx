"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at center, #0a0a0f 0%, #030305 100%)",
        color: "var(--text-primary)",
        padding: "var(--space-8)",
        textAlign: "center"
      }}
    >
      <div className="glass-panel" style={{ padding: "var(--space-12) var(--space-8)", maxWidth: "450px" }}>
        {/* Animated 404 Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: "6rem",
            fontWeight: 800,
            fontFamily: "var(--font-display)",
            lineHeight: 1,
            color: "var(--primary)",
            textShadow: "0 0 30px rgba(0, 230, 230, 0.4)",
            marginBottom: "var(--space-4)"
          }}
        >
          404
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: "1.5rem", marginBottom: "var(--space-2)" }}
        >
          Path Out of Bounds
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "var(--space-8)" }}
        >
          The requested coordinate or portfolio page could not be located in this directory.
        </motion.p>

        {/* Go Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            href="/"
            className="interactive"
            style={{
              display: "inline-block",
              padding: "var(--space-3) var(--space-6)",
              borderRadius: "30px",
              background: "var(--gradient-cinematic)",
              color: "var(--bg-base)",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: "0 4px 15px rgba(0, 230, 230, 0.3)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 230, 230, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 230, 230, 0.3)";
            }}
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
