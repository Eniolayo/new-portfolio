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
import { useToast } from "@/hooks/use-toast";

const projects = [
  {
    title: "Myhives",
    description:
      "Engineered a comprehensive fintech admin dashboard for managing digital savings, user accounts and transaction monitoring.",
    image: "/myhives-dashboard.png",
    link: "#",
    hasNDA: true,
  },
  {
    title: "Fullgap",
    description:
      "Project management platform for freelancers to handle contracts, track milestones and manage client documents.",
    image: "/fullgap-dashboard.png",
    link: "https://app.fullgap.co/login",
    hasNDA: false,
  },
  {
    title: "Ascend",
    description:
      "Created an intuitive School software system for managing students, grades, attendance and parent communications.",
    image: "/ascend-website.png",
    link: "https://ascend-africa.vercel.app/",
    hasNDA: false,
  },
  {
    title: "Vinifai",
    description:
      "VIN checking platform providing comprehensive vehicle history to help buyers avoid scams and make informed decisions.",
    image: "/vinifai-website.png",
    link: "https://www.vinifai.com/",
    hasNDA: false,
  },
  {
    title: "Sampleswamp",
    description:
      "Premium marketplace for music producers featuring high-quality sample packs with intuitive audio previews and downloads.",
    image: "/sampleswamp-website.png",
    link: "https://www.sampleswamp.com/",
    hasNDA: false,
  },
  {
    title: "Decorindex",
    description:
      "AI-powered interior design platform that matches furniture from photos and connects users with professional designers.",
    image: "/decorindex-website.png",
    link: "https://www.decorindex.store/",
    hasNDA: false,
  },
];

export default function Projects() {
  const { toast } = useToast();

  const handleProjectClick = (project: {
    title: string;
    description: string;
    image: string;
    link: string;
    hasNDA: boolean;
  }) => {
    if (project.hasNDA && project.link === "#") {
      toast({
        title: "NDA Protected Project",
        description:
          "Details of this project cannot be disclosed due to NDA restrictions.",
        variant: "destructive",
      });
    } else if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-10">
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
                  className="w-full h-48 object-cover object-top"
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
                  <Button
                    variant="outline"
                    onClick={() => handleProjectClick(project)}
                  >
                    View Project
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
