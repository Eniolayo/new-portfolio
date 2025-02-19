"use client";

import type React from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Sphere, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import type * as THREE from "three";
import { Suspense } from "react";

function AnimatedSphere({ scale }: { scale: number }) {
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

function ResponsiveCanvas({ children }: { children: React.ReactNode }) {
  const { size } = useThree();
  const aspectRatio = size.width / size.height;

  let scale = 2.5; // Default scale for desktop

  // if (aspectRatio < 1) {
  //   // Portrait mode (likely mobile)
  //   scale = 2;
  // } else if (aspectRatio < 1.5) {
  //   // Landscape mode but not wide (likely tablet)
  //   scale = 2;
  // }

  return <AnimatedSphere scale={scale} />;
}

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [canvasSize, setCanvasSize] = useState({
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    const checkDeviceAndSize = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);

      if (window.innerWidth <= 640) {
        // Mobile
        setCanvasSize({ width: "500px", height: "500px" });
      } else if (window.innerWidth <= 1024) {
        // Tablet
        setCanvasSize({ width: "700px", height: "700px" });
      } else {
        // Desktop
        setCanvasSize({ width: "100%", height: "100%" });
      }
    };

    checkDeviceAndSize();
    window.addEventListener("resize", checkDeviceAndSize);

    return () => {
      window.removeEventListener("resize", checkDeviceAndSize);
    };
  }, []);

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
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: canvasSize.width,
            height: canvasSize.height,
          }}
        >
          <Canvas className={isTouchDevice ? "pointer-events-none" : ""}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ResponsiveCanvas>
              <AnimatedSphere scale={2.5} />
            </ResponsiveCanvas>
            {!isTouchDevice && <OrbitControls enableZoom={false} />}
          </Canvas>
        </div>
      </Suspense>
      <div className="relative z-10 text-center">
        <motion.h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
          Ayodeji Ikujuni
        </motion.h1>
        <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
          Frontend Developer
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-purple-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  );
}
