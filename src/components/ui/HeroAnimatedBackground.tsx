"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroAnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: string;
      size: number;

      constructor(x: number, y: number, z: number, color: string) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.baseX = x;
        this.baseY = y;
        this.baseZ = z;
        this.color = color;
        this.size = Math.random() * 2.5 + 1;
      }

      update(t: number) {
        // Rotate around Y axis slowly
        const angle = t * 0.00015;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);

        // 3D rotation matrix
        const dx = this.baseX;
        const dz = this.baseZ;

        this.x = dx * cosA - dz * sinA;
        this.z = dz * cosA + dx * sinA;
        
        // Gentle vertical wave animation
        this.y = this.baseY + Math.sin(t * 0.001 + this.baseX * 0.005) * 60;
      }

      draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        // Simple perspective projection
        const fov = 600;
        const z = this.z + 600; // push into screen so camera is at z=-600
        
        if (z < 10) return null; // behind or too close to camera
        
        const scale = fov / z;
        const px = width / 2 + this.x * scale;
        const py = height / 2 + this.y * scale;

        // Depth fading (further away = more transparent)
        const alpha = Math.max(0.05, 1 - z / 1500);

        ctx.beginPath();
        ctx.arc(px, py, this.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
        ctx.fill();
        
        return { px, py, scale, alpha };
      }
    }

    const init = () => {
      particles = [];
      // Adjust particle count based on screen size for performance
      const numParticles = window.innerWidth < 768 ? 60 : 180;
      
      const colors = [
        'rgb(168, 85, 247)', // Purple
        'rgb(124, 58, 237)', // Violet
        'rgb(79, 70, 229)',  // Indigo
      ];

      for (let i = 0; i < numParticles; i++) {
        // Distribute points in a wide 3D cylinder
        const theta = Math.random() * Math.PI * 2;
        const y = (Math.random() - 0.5) * height * 1.5;
        const radius = Math.random() * (width * 0.8) + 150;
        
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, z, color));
      }
    };

    const render = (t: number) => {
      // Clear canvas (transparent background so image shows through)
      ctx.clearRect(0, 0, width, height);

      const projected: any[] = [];

      // Update and collect projected 2D coordinates
      particles.forEach((p) => {
        p.update(t);
        const proj = p.draw(ctx, width, height);
        if (proj) {
          projected.push({ ...proj, p });
        }
      });

      // Draw connecting lines for nearby particles (Network effect)
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const distSq = dx * dx + dy * dy;
          
          // Connect if points are close in 2D space
          const maxDist = 180;
          if (distSq < maxDist * maxDist) {
            const alpha = (1 - Math.sqrt(distSq) / maxDist) * 0.35 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            // Use purple gradient lines
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    init();
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      style={{ 
        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", 
        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" 
      }}
    >
      {/* High-res technical background image */}
      <Image 
        src="/images/tech-hero-bg.png" 
        alt="Technical Circuit Background" 
        fill 
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      
      {/* Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05020a] via-[#05020a]/40 to-transparent z-[1]" />

      {/* 3D Canvas layer (transparent, sits on top) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-[2]"
      />
    </div>
  );
}
