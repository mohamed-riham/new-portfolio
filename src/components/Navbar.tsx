"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Projects",   href: "#projects" },
  { name: "Skills",     href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [open, setOpen]               = useState(false);
  const [active, setActive]           = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--nav-h)",
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 var(--section-px)",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
          background: scrolled ? "rgba(6,6,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.06)" : "transparent"}`,
        }}
      >
        {/* Brand */}
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            background: "var(--grad-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          MR
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                transition: "color 0.18s",
                position: "relative",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: "0.45rem 1.2rem", fontSize: "0.82rem" }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text-primary)",
                borderRadius: "2px",
                transition: "transform 0.3s, opacity 0.3s",
                transform:
                  open
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                    : "none"
                    : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </header>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: "var(--nav-h)",
              left: 0,
              right: 0,
              zIndex: 199,
              background: "rgba(6,6,10,0.96)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid var(--border)",
              padding: "var(--sp-6) var(--section-px) var(--sp-8)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--sp-2)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  padding: "var(--sp-3) 0",
                  borderBottom: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: "var(--sp-4)", alignSelf: "flex-start" }}
            >
              Hire Me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
