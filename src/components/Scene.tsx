"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Dynamic floating mesh to verify WebGL rendering and animations
function CinematicBackgroundMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Smooth rotation and floating movement
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4) * 0.5;
    meshRef.current.rotation.y = time / 8;
    meshRef.current.position.y = Math.sin(time / 2) * 0.15;
    
    // Subtle reaction to mouse pointer coordinate
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.5, 0.4, 120, 16]} />
      <meshPhysicalMaterial
        color="#00f2fe"
        emissive="#7f00ff"
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.9}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        wireframe
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2fe" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#7f00ff" />
        <directionalLight position={[0, 5, 5]} intensity={1.0} />

        {/* Floating cinematic elements */}
        <CinematicBackgroundMesh />

        {/* Orbit Controls (disabled zoom/pan for background role, but allows subtle orbit interactions) */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
