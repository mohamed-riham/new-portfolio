"use client";

const LINKS = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Projects",   href: "#projects" },
  { name: "Skills",     href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact",    href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "var(--sp-12) var(--section-px)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--sp-6)",
          textAlign: "center",
        }}
      >
        {/* Brand */}
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 800,
            background: "var(--grad-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0.1em",
          }}
        >
          MR
        </a>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "var(--sp-6)", flexWrap: "wrap", justifyContent: "center" }}>
          {LINKS.map((l) => (
            <a
              key={l.name}
              href={l.href}
              style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div style={{ height: "1px", width: "100%", maxWidth: "400px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />

        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Mohamed Riham · All rights reserved
        </p>
        <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
          Built with Next.js · Three.js · Framer Motion · Custom CSS
        </p>
      </div>
    </footer>
  );
}
