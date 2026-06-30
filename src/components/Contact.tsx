"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Mock API call to simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
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
          Get In Touch
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--space-8)",
          alignItems: "start"
        }}
      >
        {/* Contact Info and Social links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}
        >
          <div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-3)", color: "var(--primary)" }}>
              Let's Collaborate!
            </h3>
            <p style={{ lineHeight: 1.7, marginBottom: "var(--space-4)" }}>
              Whether you want to discuss a new AI project, collaborate on computer vision solutions, or simply say hi over tea, my inbox is always open.
            </p>
            <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              📍 Colombo, Sri Lanka
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              ✉️ <a href="mailto:mohamedriham93@gmail.com">mohamedriham93@gmail.com</a>
            </div>
          </div>

          {/* Social Icons Grid */}
          <div>
            <h4 style={{ marginBottom: "var(--space-3)", fontSize: "1.05rem" }}>Find Me Online</h4>
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
              {[
                { name: "GitHub", url: "https://github.com/mohamedriham93" },
                { name: "LinkedIn", url: "https://linkedin.com/in/mohamedriham" },
                { name: "Dev.to", url: "https://dev.to/mohamedriham" },
                { name: "Medium", url: "https://medium.com/@mohamedriham" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive glass-panel"
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    borderColor: "var(--border-color)",
                    color: "var(--text-secondary)",
                    transition: "color var(--transition-fast), border-color var(--transition-fast)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-color)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{ padding: "var(--space-6)" }}
        >
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {/* Name Input */}
            <div>
              <label htmlFor="form-name" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px", color: "var(--text-secondary)" }}>
                Your Name
              </label>
              <input
                id="form-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === "sending" || status === "success"}
                style={{
                  width: "100%",
                  padding: "var(--space-3)",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "6px",
                  color: "var(--text-primary)",
                  outline: "none",
                  transition: "border-color var(--transition-fast)"
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="form-email" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px", color: "var(--text-secondary)" }}>
                Your Email
              </label>
              <input
                id="form-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === "sending" || status === "success"}
                style={{
                  width: "100%",
                  padding: "var(--space-3)",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "6px",
                  color: "var(--text-primary)",
                  outline: "none",
                  transition: "border-color var(--transition-fast)"
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="form-message" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px", color: "var(--text-secondary)" }}>
                Message
              </label>
              <textarea
                id="form-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={status === "sending" || status === "success"}
                style={{
                  width: "100%",
                  padding: "var(--space-3)",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "6px",
                  color: "var(--text-primary)",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color var(--transition-fast)"
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                style={{
                  width: "100%",
                  padding: "var(--space-3)",
                  background: status === "success" ? "var(--accent)" : "var(--gradient-cinematic)",
                  border: "none",
                  borderRadius: "6px",
                  color: "var(--bg-base)",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  transition: "opacity 0.2s"
                }}
              >
                {status === "sending" && "Transmitting Message..."}
                {status === "success" && "Message Delivered!"}
                {status === "idle" && "Send Message"}
                {status === "error" && "Error Sending!"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
