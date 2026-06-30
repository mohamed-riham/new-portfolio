"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        background: "var(--bg-surface)",
        padding: "var(--space-8) var(--space-8)",
        textAlign: "center",
        position: "relative",
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-4)"
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            color: "var(--primary)"
          }}
        >
          MR
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} Mohamed Riham. All rights reserved.
        </p>
        
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
          Built with Next.js, React Three Fiber, Framer Motion, and Custom CSS variables.
        </p>
      </div>
    </footer>
  );
}
