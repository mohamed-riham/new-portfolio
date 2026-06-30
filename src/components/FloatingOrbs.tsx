"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Orb({
  position,
  color,
  speed,
  distort,
  size,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const offset = Math.random() * Math.PI * 2;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t * speed + offset) * 1.5;
    meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.6 + offset) * 1.0;
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        distort={distort}
        speed={2}
        transparent
        opacity={0.12}
        roughness={0}
        metalness={0.1}
      />
    </Sphere>
  );
}

export default function FloatingOrbs() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={80} />
        <ambientLight intensity={0.1} />
        <Orb position={[-6, 2, -2]} color="#00e6e6" speed={0.3} distort={0.4} size={4} />
        <Orb position={[7, -3, -3]} color="#9933ff" speed={0.2} distort={0.3} size={5} />
        <Orb position={[0, -6, -4]} color="#1bc961" speed={0.25} distort={0.5} size={3} />
        <Orb position={[-4, 5, -3]} color="#ff6b9d" speed={0.18} distort={0.35} size={2.5} />
      </Canvas>
    </div>
  );
}
