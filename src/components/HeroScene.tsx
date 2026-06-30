"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// ── Neural Network Node Cloud ─────────────────────────────────────────────
function NeuralNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const { nodePositions, linePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    // Place nodes in a brain-like ellipsoid cluster
    for (let i = 0; i < 40; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.6 + Math.random() * 0.8;
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta) * 1.3,
          r * Math.sin(phi) * Math.sin(theta) * 0.9,
          r * Math.cos(phi)
        )
      );
    }

    const nodePositions = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      nodePositions[i * 3] = n.x;
      nodePositions[i * 3 + 1] = n.y;
      nodePositions[i * 3 + 2] = n.z;
    });

    // Connect nearby nodes with lines
    const lines: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.5) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return { nodePositions, linePositions: new Float32Array(lines) };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    // Subtle mouse parallax
    groupRef.current.rotation.z +=
      (state.pointer.x * 0.15 - groupRef.current.rotation.z) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Connection Lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#00e6e6" transparent opacity={0.2} />
      </lineSegments>

      {/* Node Spheres */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.07} color="#00e6e6" sizeAttenuation />
      </points>
    </group>
  );
}

// ── Distorted Glowing Core ────────────────────────────────────────────────
function GlowingCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.z = t * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 64, 64]}>
      <MeshDistortMaterial
        color="#9933ff"
        emissive="#4400aa"
        emissiveIntensity={1.5}
        distort={0.5}
        speed={3}
        roughness={0}
        metalness={0.2}
        transparent
        opacity={0.85}
      />
    </Sphere>
  );
}

// ── Orbiting Rings ────────────────────────────────────────────────────────
function OrbitRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * speed;
  });

  return (
    <mesh ref={meshRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 6, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}

// ── Hero Scene Export ────────────────────────────────────────────────────
export default function HeroScene() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} color="#00e6e6" intensity={4} />
      <pointLight position={[-4, -4, 4]} color="#9933ff" intensity={3} />

      <GlowingCore />
      <NeuralNodes />
      <OrbitRing radius={2.0} color="#00e6e6" speed={0.4} tilt={0.3} />
      <OrbitRing radius={2.5} color="#9933ff" speed={-0.25} tilt={1.1} />
      <OrbitRing radius={3.0} color="#1bc961" speed={0.18} tilt={0.7} />
    </Canvas>
  );
}
