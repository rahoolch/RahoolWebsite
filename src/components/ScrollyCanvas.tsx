"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

/**
 * Ensures canvas mimics CSS `object-fit: cover`
 */
function drawImageCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  const canvas = ctx.canvas;
  const w = canvas.width;
  const h = canvas.height;
  const iw = img.width;
  const ih = img.height;
  
  // Calculate aspect ratios
  const canvasRatio = w / h;
  const imageRatio = iw / ih;
  
  let renderW, renderH, x, y;

  if (canvasRatio > imageRatio) {
    // Canvas is wider than image (relative aspect ratio)
    renderW = w;
    renderH = w / imageRatio;
    x = 0;
    y = (h - renderH) / 2;
  } else {
    // Canvas is taller than image (relative aspect ratio)
    renderH = h;
    renderW = h * imageRatio;
    y = 0;
    x = (w - renderW) / 2;
  }

  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, iw, ih, x, y, renderW, renderH);
}

export default function ScrollyCanvas({ frameCount = 120 }: { frameCount?: number }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store preloaded Image objects
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        const src = `/sequence/frame_${frameIndex}_delay-0.066s.webp`;
        
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setImagesLoaded(true);
          }
        };
        // Always push to maintain order, even if loading fails
        loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, [frameCount]);

  // 2. Initial Draw & Resize handler
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = imagesRef.current[index];
    if (img && img.complete && img.naturalHeight !== 0) {
        // High DPI handling
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        
        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        }
        
        // Temporarily reset transform for drawing cover image
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        drawImageCover(ctx, img);
        ctx.restore();
    }
  };

  useEffect(() => {
    if (!imagesLoaded) return;
    drawFrame(0);
    
    const handleResize = () => drawFrame(Math.floor(scrollYProgress.get() * (frameCount - 1)));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagesLoaded, scrollYProgress, frameCount]);

  // 3. React to scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded) return;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );
    // Use requestAnimationFrame for smooth drawing
    requestAnimationFrame(() => {
      drawFrame(frameIndex);
    });
  });

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] bg-[#121212]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
            <span className="text-white text-sm font-light tracking-widest uppercase animate-pulse">Loading Sequence...</span>
          </div>
        )}

        {/* The Sequence Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text Overlays linked to the same scroll progress */}
        <Overlay scrollProgress={scrollYProgress} />
      </div>
    </section>
  );
}
