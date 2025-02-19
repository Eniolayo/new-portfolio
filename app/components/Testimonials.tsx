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
    name: "Sarah Chen",
    position: "Head of Product, MyHives",
    content:
      "Working with Ayodeji was an absolute game-changer for our fintech dashboard. His frontend expertise transformed a complex system into an intuitive and visually stunning interface. User management and transaction monitoring are now smoother than ever, thanks to his meticulous attention to detail and deep understanding of user experience design.",
  },
  {
    name: "Victor Fatanmi",
    position: "Founder, Fullgap",
    content:
      "Ayodeji is an exceptional frontend developer who truly understands how to bring a vision to life. He built our freelancer platform with such precision and creativity that it exceeded all our expectations. The platform is not only highly functional but also delivers a seamless and engaging user experience. His ability to balance aesthetics with performance is remarkable.",
  },
  {
    name: "Mr Femi Odetundun",
    position: "Principal, Adventist High School",
    content:
      "Ayodeji designed an intuitive and user-friendly system that has completely transformed how we manage student information and communicate with parents. His frontend solutions are not only visually appealing but also incredibly efficient, making daily operations a breeze. We couldn't be happier with his work.",
  },
  {
    name: "Ibrahim Abdullahi",
    position: "CTO, Vinifai",
    content:
      "Ayodeji's technical expertise in frontend development was instrumental in building our VIN checking platform. He created a clean, responsive interface that handles complex vehicle data with remarkable efficiency. His ability to simplify intricate processes into a seamless user experience is truly impressive.",
  },
  {
    name: "Alisha Patel",
    position: "Creative Director, SampleSwamp",
    content:
      "Ayodeji delivered a marketplace that perfectly balances technical performance with creative functionality. The frontend he built is not only visually stunning but also highly intuitive, making it a joy for our producers to use. His ability to merge design and functionality is second to none.",
  },
  {
    name: "Michael Akinola",
    position: "CEO, Decorindex",
    content:
      "The AI integration Ayodeji implemented for our interior design platform showcases his innovative approach to frontend development. He translated complex requirements into an elegant, user-friendly solution that has transformed how our users interact with the platform. His work is a perfect blend of creativity and technical excellence.",
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
        <Carousel className="w-[75%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
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
                    <CardHeader className="p-3 pt-4 md:p-6">
                      <CardTitle className="text-purple-400">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-gray-400">
                        {testimonial.position}
                      </p>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 md:pt-0 pb-4 md:pb-6 md:px-6">
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
