"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// ── Particle Field ──────────────────────────────────────────────────────────
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const COUNT = 400;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const palette = [
      new THREE.Color("#00e6e6"),
      new THREE.Color("#9933ff"),
      new THREE.Color("#1bc961"),
    ];
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.04;
    pointsRef.current.rotation.x = t * 0.015;
    // Drift toward mouse
    pointsRef.current.rotation.z +=
      (state.pointer.x * 0.1 - pointsRef.current.rotation.z) * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// ── Floating Geometric Shape ────────────────────────────────────────────────
function FloatingShape({
  position,
  geometry,
  color,
  speed,
  emissive,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus";
  color: string;
  emissive: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * speed * 0.5;
    meshRef.current.rotation.y = t * speed;
    meshRef.current.position.y =
      position[1] + Math.sin(t * speed + offset) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry === "icosahedron" && <icosahedronGeometry args={[0.6, 0]} />}
      {geometry === "octahedron" && <octahedronGeometry args={[0.5]} />}
      {geometry === "torus" && <torusGeometry args={[0.5, 0.18, 12, 40]} />}
      <meshPhysicalMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.15}
        clearcoat={1}
        wireframe={geometry === "icosahedron"}
      />
    </mesh>
  );
}

// ── Central Hero Knot ───────────────────────────────────────────────────────
function CentralKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.12;
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    // Mouse parallax
    meshRef.current.rotation.z +=
      (state.pointer.x * 0.3 - meshRef.current.rotation.z) * 0.03;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.4, 0.38, 180, 20]} />
      <meshPhysicalMaterial
        color="#00e6e6"
        emissive="#7f00ff"
        emissiveIntensity={0.35}
        roughness={0.05}
        metalness={0.95}
        clearcoat={1}
        clearcoatRoughness={0.05}
        wireframe
      />
    </mesh>
  );
}

// ── Moving Lights ───────────────────────────────────────────────────────────
function DynamicLights() {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.5) * 8;
      light1.current.position.y = Math.cos(t * 0.3) * 5;
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(t * 0.4) * 8;
      light2.current.position.y = Math.sin(t * 0.6) * 5;
    }
  });

  return (
    <>
      <pointLight ref={light1} color="#00e6e6" intensity={3} distance={20} />
      <pointLight ref={light2} color="#9933ff" intensity={3} distance={20} />
      <ambientLight intensity={0.2} />
    </>
  );
}

// ── Main Scene Export ────────────────────────────────────────────────────────
const SHAPES: Array<{
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus";
  color: string;
  emissive: string;
  speed: number;
}> = [
  { position: [-6, 2, -4], geometry: "icosahedron", color: "#00e6e6", emissive: "#004444", speed: 0.3 },
  { position: [6, -1, -5], geometry: "octahedron", color: "#9933ff", emissive: "#330066", speed: 0.25 },
  { position: [-4, -3, -3], geometry: "torus", color: "#1bc961", emissive: "#003311", speed: 0.4 },
  { position: [5, 3, -6], geometry: "icosahedron", color: "#7f00ff", emissive: "#220033", speed: 0.2 },
  { position: [0, 4, -7], geometry: "torus", color: "#00e6e6", emissive: "#003333", speed: 0.35 },
  { position: [-7, 0, -5], geometry: "octahedron", color: "#ff6b9d", emissive: "#440022", speed: 0.28 },
];

export default function Scene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={65} />
        <DynamicLights />
        <ParticleField />
        <CentralKnot />
        {SHAPES.map((s, i) => (
          <FloatingShape key={i} {...s} />
        ))}
      </Canvas>
    </div>
  );
}
