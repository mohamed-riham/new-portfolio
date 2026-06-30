"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the 3D Scene with SSR disabled to prevent hydration mismatch errors
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255, 255, 255, 0.4)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.85rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase"
      }}
    >
      Initializing WebGL Canvas...
    </div>
  )
});

export default function CanvasContainer() {
  const [mounted, setMounted] = useState(false);

  // Ensure mounting on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div id="canvas-container-root">
      <Scene />
    </div>
  );
}
