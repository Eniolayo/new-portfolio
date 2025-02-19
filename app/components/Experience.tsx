"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    company: "Zarttech",
    position: "Senior React Developer",
    period: "12/2023 - Present",
    description:
      "Developed automated tools, improved operational efficiency, and mentored junior developers.",
  },
  {
    company: "Fullgap",
    position: "React Developer",
    period: "08/2023 - 08/2024",
    description:
      "Developed a centralized dashboard for freelancers and implemented comprehensive security measures.",
  },
  {
    company: "Cyberroot International Limited",
    position: "React Developer",
    period: "01/2022 - 12/2023",
    description:
      "Integrated advanced data visualization libraries and implemented real-time data transmission solutions.",
  },
  {
    company: "RapidMVP",
    position: "Frontend Developer",
    period: "08/2020 - 04/2022",
    description:
      "Developed key frontend features, optimized performance, and contributed to application migration.",
  },
  {
    company: "FitzzyTech Institute",
    position: "Frontend Developer",
    period: "12/2019 - 12/2020",
    description:
      "Developed responsive web applications and led workshops for aspiring frontend developers.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-gray-800 overflow-hidden border-purple-500">
                <div className="absolute left-0 top-0 h-full w-1 bg-purple-500"></div>
                <CardHeader>
                  <CardTitle className="text-purple-400">
                    {exp.position}
                  </CardTitle>
                  <CardDescription>
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white">
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
