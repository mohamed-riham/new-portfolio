"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const posRef  = useRef({ x: -800, y: -800 });
  const rafRef  = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      if (spotRef.current) {
        spotRef.current.style.transform =
          `translate(${posRef.current.x - 300}px, ${posRef.current.y - 300}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        ref={spotRef}
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,230,230,0.055) 0%, rgba(153,51,255,0.025) 40%, transparent 70%)",
          willChange: "transform",
          transition: "none",
        }}
      />
    </div>
  );
}
