"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "John Doe",
    position: "CTO, Tech Corp",
    content:
      "An exceptional developer who consistently delivers high-quality work.",
  },
  {
    name: "Jane Smith",
    position: "Project Manager, Innovate Inc",
    content:
      "Their technical skills and problem-solving abilities are truly impressive.",
  },
  {
    name: "Alex Johnson",
    position: "Lead Developer, StartUp Co",
    content:
      "A pleasure to work with, always bringing creative solutions to complex problems.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-purple-500">
                    <CardHeader>
                      <CardTitle className="text-purple-400">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-gray-400">
                        {testimonial.position}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-white">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white text-black hover:text-black border border-gray-200" />
          <CarouselNext className="bg-white text-black hover:text-black border border-gray-200" />
        </Carousel>
      </div>
    </section>
  );
}
