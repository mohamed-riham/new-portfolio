"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SOCIALS = [
  { name: "GitHub",   url: "https://github.com/mohamedriham93",      icon: "⚡" },
  { name: "LinkedIn", url: "https://linkedin.com/in/mohamedriham",   icon: "💼" },
  { name: "Dev.to",   url: "https://dev.to/mohamedriham",            icon: "📝" },
  { name: "Medium",   url: "https://medium.com/@mohamedriham",       icon: "✍️" },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => { setStatus("done"); setForm({ name: "", email: "", message: "" }); }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ zIndex: 10 }}>
      <div className="section-header">
        <span className="section-label">// Say Hello</span>
        <h2 className="section-title">Get In Touch</h2>
        <p style={{ marginTop: "var(--sp-5)", maxWidth: "480px" }}>
          Open to collaborations, job opportunities, and interesting AI conversations.
        </p>
      </div>

      <div className="contact-grid">

        {/* ── Left: Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: "var(--sp-6)" }}
        >
          {/* Big intro */}
          <div className="glass" style={{ padding: "var(--sp-8)" }}>
            <h3 style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)", color: "var(--primary)", marginBottom: "var(--sp-4)", lineHeight: 1.2 }}>
              Let&apos;s Build Something<br />
              <span style={{ background: "var(--grad-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Amazing Together
              </span>
            </h3>
            <p style={{ lineHeight: 1.8, marginBottom: "var(--sp-5)" }}>
              Whether it&apos;s a new AI project, computer vision solution, or you just want to say hi
              over Sri Lankan tea — my inbox is always open. 🍵
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
              <a
                href="mailto:mohamedriham93@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <span style={{ fontSize: "1.1rem" }}>✉️</span>
                mohamedriham93@gmail.com
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                <span style={{ fontSize: "1.1rem" }}>📍</span>
                Colombo, Sri Lanka
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <p style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "var(--sp-4)" }}>
              Find me online
            </p>
            <div style={{ display: "flex", gap: "var(--sp-3)", flexWrap: "wrap" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "var(--sp-3) var(--sp-4)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    transition: "color 0.18s, border-color 0.18s",
                    borderRadius: "12px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.borderColor = "rgba(var(--primary-rgb), 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                  }}
                >
                  <span>{s.icon}</span>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass"
          style={{ padding: "var(--sp-8)" }}
        >
          <h3 style={{ marginBottom: "var(--sp-6)", fontSize: "1.1rem", color: "var(--text-primary)" }}>
            Send a Message
          </h3>

          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)" }}>
            {/* Name */}
            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "6px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Your Name
              </label>
              <input
                type="text" required placeholder="Mohamed Riham"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={status === "sending" || status === "done"}
                className="form-input"
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "6px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Email Address
              </label>
              <input
                type="email" required placeholder="hello@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={status === "sending" || status === "done"}
                className="form-input"
              />
            </div>

            {/* Message */}
            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "6px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Message
              </label>
              <textarea
                required rows={5} placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                disabled={status === "sending" || status === "done"}
                className="form-input"
                style={{ resize: "vertical" }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "done"}
              className="btn btn-primary"
              style={{
                width: "100%",
                background: status === "done" ? "var(--accent)" : undefined,
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "idle"    && "Send Message →"}
              {status === "sending" && "Transmitting..."}
              {status === "done"    && "✓ Message Delivered!"}
              {status === "error"   && "✗ Error — Try Again"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
