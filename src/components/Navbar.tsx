"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for glass background activation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 100 + "%",
        height: "var(--header-height)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 var(--space-8)",
        transition: "background var(--transition-normal), border-color var(--transition-normal)",
        background: scrolled ? "var(--glass-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(var(--glass-blur))" : "none",
        borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent"
      }}
    >
      {/* Brand Monogram */}
      <a
        href="#home"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          fontWeight: 800,
          color: scrolled ? "var(--primary)" : "var(--text-primary)",
          letterSpacing: "0.1em",
          transition: "color var(--transition-fast)"
        }}
      >
        MR
      </a>

      {/* Desktop Navigation */}
      <nav style={{ display: "flex", gap: "var(--space-6)" }} className="desktop-only">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
              transition: "color var(--transition-fast)",
              position: "relative"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-primary)",
          display: "none", // Will be toggled via media query styled classes in globals.css or inline rules
          flexDirection: "column",
          gap: "6px",
          zIndex: 101
        }}
        className="mobile-toggle"
      >
        <span
          style={{
            width: "24px",
            height: "2px",
            background: "var(--text-primary)",
            transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
            transition: "transform 0.3s"
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            background: "var(--text-primary)",
            opacity: mobileMenuOpen ? 0 : 1,
            transition: "opacity 0.3s"
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            background: "var(--text-primary)",
            transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none",
            transition: "transform 0.3s"
          }}
        />
      </button>

      {/* CSS overrides directly injected for desktop vs mobile nav styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "var(--header-height)",
              left: 0,
              width: "100%",
              background: "var(--bg-surface)",
              borderBottom: "1px solid var(--border-color)",
              padding: "var(--space-6) var(--space-8)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
              zIndex: 99
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  padding: "var(--space-2) 0"
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
