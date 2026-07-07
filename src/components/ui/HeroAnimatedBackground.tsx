"use client";

import { motion } from "framer-motion";
import React from "react";

export default function HeroAnimatedBackground() {
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#05020a] z-0 pointer-events-none"
      style={{ 
        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", 
        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" 
      }}
    >
      {/* Top Left Blob - Deep Purple */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-900/30 blur-[100px] md:blur-[140px]"
      />

      {/* Center Blob - Vibrant Purple */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#a855f7]/25 blur-[120px] md:blur-[160px]"
      />

      {/* Bottom Right Blob - Deep Blue/Indigo */}
      <motion.div
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/30 blur-[100px] md:blur-[140px]"
      />

      {/* Grid Overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Subtle overlay to fade out the bottom to match the site background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05020a]/30 to-[#05020a]" />
    </div>
  );
}
