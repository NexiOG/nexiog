"use client";

import React, { useEffect, useRef } from "react";

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; radius: number; color: string }[] = [];
    const numStars = 400; // Adjust for density
    
    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const width = canvas.width;
      const height = canvas.height;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width * 2, // 3D x-coordinate
          y: (Math.random() - 0.5) * height * 2, // 3D y-coordinate
          z: Math.random() * width, // 3D z-coordinate (depth)
          radius: Math.random() * 1.5 + 0.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`, // Some variation in brightness
        });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawStars = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // Dark deep space background
      ctx.fillStyle = "#05020a"; 
      ctx.fillRect(0, 0, width, height);
      
      // Slight radial gradient overlay to make center pop
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, width);
      gradient.addColorStop(0, "rgba(129, 74, 200, 0.15)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Move and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star closer (decrease z)
        star.z -= 0.5;

        // Reset star if it goes past the screen
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
        }

        // Calculate 2D coordinates from 3D points
        const perspective = width / 2;
        const x = centerX + (star.x / star.z) * perspective;
        const y = centerY + (star.y / star.z) * perspective;

        // Calculate size based on depth
        const radius = star.radius * (perspective / star.z);

        // Only draw if within screen bounds
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(drawStars);
    };

    drawStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none w-full h-full"
    />
  );
}
