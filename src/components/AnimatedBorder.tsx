"use client";

import { useEffect, useRef } from "react";

// Animated conic-gradient border that rotates continuously
export default function AnimatedBorder({
  children,
  borderWidth = 1.5,
  borderRadius = 16,
  speed = 4,
  colors = ["#00e6e6", "#9933ff", "#1bc961", "#00e6e6"],
  className,
  style,
}: {
  children: React.ReactNode;
  borderWidth?: number;
  borderRadius?: number;
  speed?: number;
  colors?: string[];
  className?: string;
  style?: React.CSSProperties;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      angleRef.current = (angleRef.current + speed / 60) % 360;
      if (wrapRef.current) {
        wrapRef.current.style.setProperty(
          "--border-angle",
          `${angleRef.current}deg`
        );
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  const gradient = colors.join(", ");

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        position: "relative",
        borderRadius,
        padding: borderWidth,
        background: `conic-gradient(from var(--border-angle, 0deg), ${gradient})`,
        ...style,
      }}
    >
      <div
        style={{
          borderRadius: borderRadius - borderWidth,
          background: "var(--bg-surface)",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
