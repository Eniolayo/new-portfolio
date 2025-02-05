"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-purple-500">About Me</h2>
          <p className="text-xl mb-8 leading-relaxed">
            I'm a web developer with a passion for building intuitive,
            high-performing websites and apps. My focus is on creating seamless
            user experiences while solving complex technical challenges. I work
            closely with teams to align development with business goals,
            ensuring that the solutions I create drive real impact. With
            expertise in modern frontend technologies like React and Next.js,
            I'm committed to staying ahead of industry trends and delivering
            quality, scalable results.
          </p>
          <Button
            size="lg"
            variant={"outline"}
            className="bg-purple-600 text-white px-8 py-3 rounded-full  font-medium hover:bg-purple-700 transition-colors"
          >
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
