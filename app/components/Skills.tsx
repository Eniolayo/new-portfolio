"use client";

import { Canvas, Vector3 } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";

function Skill({
  name,
  position,
}: {
  name: string;
  position?: Vector3 | undefined;
}) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Text
        position={position}
        fontSize={0.5}
        color="#8B5CF6"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </Float>
  );
}

export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Three.js",
    "CSS",
    "Vue",
    "Nuxt",
    "GraphQL",
    "MongoDB",
    "Node.js",
    "Docker",
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-purple-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="h-[400px]">
          <Suspense fallback={<div className="h-[400px] bg-gray-800" />}>
            <Canvas camera={{ position: [0, 0, 10] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              {skills.map((skill, index) => (
                <Skill
                  key={skill}
                  name={skill}
                  position={[
                    Math.cos((index / skills.length) * Math.PI * 2) * 5,
                    Math.sin((index / skills.length) * Math.PI * 2) * 5,
                    0,
                  ]}
                />
              ))}
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
