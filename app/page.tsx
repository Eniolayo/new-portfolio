"use client";

import dynamic from "next/dynamic";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color, #fff)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color, #fff)",
        }}
      />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
