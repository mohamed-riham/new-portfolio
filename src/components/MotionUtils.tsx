"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Jitter-style section heading: label + kinetic title + underline beam
export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  const chars = title.split("");

  return (
    <div style={{ marginBottom: "var(--sp-12)" }}>
      {/* Label */}
      <motion.span
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--primary)",
          marginBottom: "var(--sp-3)",
        }}
      >
        {label}
      </motion.span>

      {/* Kinetic title */}
      <h2
        style={{
          position: "relative",
          display: "inline-block",
          marginBottom: subtitle ? "var(--sp-4)" : 0,
          perspective: "600px",
          overflow: "visible",
        }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 48, rotateX: -72, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: 0.05 + i * 0.035,
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: "inline-block",
              transformStyle: "preserve-3d",
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

        {/* Animated underline beam */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + chars.length * 0.035, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            bottom: -10,
            left: 0,
            width: 56,
            height: 3,
            background: "linear-gradient(90deg, var(--primary), var(--secondary))",
            borderRadius: 2,
            boxShadow: "0 0 14px var(--primary)",
            transformOrigin: "left center",
            display: "block",
          }}
        />
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{ marginTop: "var(--sp-5)", maxWidth: "520px" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// Spring-physics card reveal
export function RevealCard({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}) {
  const initial =
    direction === "up"    ? { opacity: 0, y: 48, scale: 0.96 }
    : direction === "left"  ? { opacity: 0, x: -48, scale: 0.96 }
    : { opacity: 0, x: 48, scale: 0.96 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        scale: { type: "spring", stiffness: 200, damping: 20 },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Parallax scroll layer
export function ParallaxLayer({
  children,
  speed = 0.3,
  style,
}: {
  children: React.ReactNode;
  speed?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", ...style }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
