"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="projects" className="bg-[#0a0a0a] min-h-screen py-32 px-6 md:px-24 rounded-t-[3rem] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[70vh]">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Selected Work
            </h2>
            <p className="text-white/60 text-xl font-light max-w-xl">
              A showcase of end-to-end production AI systems, distributed backend microservices, and high-performance infrastructure.
            </p>
          </div>
          
          <div className="flex flex-col md:text-right gap-2">
            <p className="text-white/80 font-medium tracking-wide">Let's connect:</p>
            <a href="mailto:rahool2306@gmail.com" className="text-white text-xl hover:text-emerald-400 transition-colors">rahool2306@gmail.com</a>
            
            <div className="flex flex-wrap gap-4 md:justify-end mt-2 items-center">
              <Link href="/blog" className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all border border-emerald-500/20">
                Read the Blog &rarr;
              </Link>
              <a href="https://linkedin.com/in/rahul-chandani" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/rahoolch" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </motion.div>

        <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-filter backdrop-blur-md group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title} 
                fill
                className="object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              
              <Link href={`/projects/${projects[currentIndex].id}`} className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end group/link cursor-pointer">
                <p className="text-emerald-400 text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-3">
                  {projects[currentIndex].category}
                </p>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/0 group-hover/link:border-white/20 pb-4 transition-all duration-300">
                  <h3 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-0">
                    {projects[currentIndex].title}
                  </h3>
                  <span className="flex items-center gap-2 text-white/50 group-hover/link:text-white uppercase tracking-widest text-sm font-semibold transition-colors duration-300">
                    Read Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === currentIndex ? "w-12 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
