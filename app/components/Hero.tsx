"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Suspense } from "react";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center relative overflow-hidden"
      id="hero"
    >
      <Suspense
        fallback={
          <div className="absolute pointer-events-none inset-0 bg-black" />
        }
      >
        <Canvas className="!absolute inset-0 pointer-events-none">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>
      <div className="relative z-10 text-center">
        <motion.h1 className="text-6xl md:text-8xl font-bold mb-4">
          Ayodeji Ikujuni
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-gray-300 mb-8">
          Frontend Developer
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  );
}
