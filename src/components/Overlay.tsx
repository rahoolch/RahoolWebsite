"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollProgress: MotionValue<number>;
}

export default function Overlay({ scrollProgress }: OverlayProps) {
  // Section 1: "My Name. Creative Developer." (0 - 20%)
  const opacity1 = useTransform(scrollProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.2], [0, -100]);
  const scale1 = useTransform(scrollProgress, [0, 0.2], [1, 0.9]);

  // Section 2: "I build digital experiences." (30 - 50%)
  const opacity2 = useTransform(scrollProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const x2 = useTransform(scrollProgress, [0.25, 0.55], ["-50px", "50px"]);

  // Section 3: "Bridging design and engineering." (60 - 80%)
  const opacity3 = useTransform(scrollProgress, [0.55, 0.65, 0.75, 0.90], [0, 1, 1, 0]);
  const y3 = useTransform(scrollProgress, [0.55, 0.90], ["50px", "-50px"]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center px-6 md:px-24">
      {/* SECTION 1 - Centered */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">
          Rahul <span className="text-white/40">Chandani.</span>
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide uppercase text-white/80">
          Senior Software Engineer & AI Architect
        </p>
      </motion.div>

      {/* SECTION 2 - Left Aligned */}
      <motion.div 
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-y-0 left-6 md:left-24 flex flex-col justify-center text-white max-w-2xl"
      >
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
          I build <br/>
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">production-grade <br/> AI systems</span>.
        </h2>
      </motion.div>

      {/* SECTION 3 - Right Aligned */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-6 md:right-24 flex flex-col justify-center text-right text-white max-w-xl"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white/90">
           Bridging<br/>
           <span className="text-white">scalable architecture</span> &<br/>
           <span className="text-white">applied AI</span>.
        </h2>
        <div className="w-12 h-[2px] bg-white/50 ml-auto mt-6" />
      </motion.div>

      {/* Scroll indicator - Fades out naturally over scroll */}
      <motion.div 
        style={{ opacity: useTransform(scrollProgress, [0, 0.05], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
         <span className="text-white/50 text-xs font-medium uppercase tracking-[0.2em] mb-4">Scroll to explore</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent block" />
      </motion.div>
    </div>
  );
}
