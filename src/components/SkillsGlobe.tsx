"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const SKILLS = [
  { name: "Python", category: "prog" },
  { name: "JavaScript", category: "prog" },
  { name: "Java", category: "prog" },
  { name: "SQL", category: "prog" },
  { name: "C#", category: "prog" },
  { name: "TensorFlow", category: "ai" },
  { name: "YOLOv8", category: "ai" },
  { name: "OpenCV", category: "ai" },
  { name: "Scikit-Learn", category: "ai" },
  { name: "Next.js", category: "web" },
  { name: "FastAPI", category: "web" },
  { name: "Docker", category: "web" },
  { name: "Streamlit", category: "web" },
  { name: "React", category: "web" },
  { name: "Three.js", category: "web" },
];

const CATEGORY_COLORS: Record<string, string> = {
  prog: "#00e6e6",
  ai: "#9933ff",
  web: "#1bc961",
};

function SkillLabel({
  skill,
  index,
  total,
}: {
  skill: { name: string; category: string };
  index: number;
  total: number;
}) {
  const textRef = useRef<THREE.Mesh>(null);
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;
  const radius = 2.6;

  const basePos = useMemo(
    () =>
      new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ),
    [phi, theta]
  );

  useFrame((state) => {
    if (!textRef.current) return;
    // Billboard: always face camera
    textRef.current.lookAt(state.camera.position);
    // Pulse scale
    const t = state.clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 1.5 + index) * 0.05;
    textRef.current.scale.setScalar(pulse);
  });

  return (
    <Text
      ref={textRef}
      position={[basePos.x, basePos.y, basePos.z]}
      fontSize={0.18}
      color={CATEGORY_COLORS[skill.category]}
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.005}
      outlineColor="#000"
    >
      {skill.name}
    </Text>
  );
}

function GlobeCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshPhysicalMaterial
        color="#050510"
        emissive="#00e6e6"
        emissiveIntensity={0.08}
        metalness={0.6}
        roughness={0.4}
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

function SkillCloud() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    groupRef.current.rotation.x +=
      (state.pointer.y * 0.3 - groupRef.current.rotation.x) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <GlobeCore />
      {SKILLS.map((skill, i) => (
        <SkillLabel key={skill.name} skill={skill} index={i} total={SKILLS.length} />
      ))}
    </group>
  );
}

export default function SkillsGlobe() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ height: "420px" }}>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={55} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#00e6e6" intensity={3} />
      <pointLight position={[-5, -5, 5]} color="#9933ff" intensity={2} />
      <SkillCloud />
    </Canvas>
  );
}
