"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "Myhives",
    description:
      "Engineered a comprehensive fintech admin dashboard for managing digital savings, user accounts and transaction monitoring.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Fullgap",
    description:
      "Project management platform for freelancers to handle contracts, track milestones and manage client documents.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Ascend",
    description:
      "Created an intuitive School software system for managing students, grades, attendance and parent communications.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-purple-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-gray-800 border-purple-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-purple-400">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
