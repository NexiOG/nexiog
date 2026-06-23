"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  inverted?: boolean; 
}

export function SectionDivider({ className = "", inverted = false }: SectionDividerProps) {
  return (
    <div className={`w-full relative h-[80px] md:h-[150px] -my-10 md:-my-16 z-20 pointer-events-none ${inverted ? 'scale-x-[-1] scale-y-[-1]' : ''} ${className}`}>
      
      <motion.svg 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        preserveAspectRatio="none" 
        viewBox="0 0 1440 100" 
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(10, 5, 20, 0.4)" />
            <stop offset="100%" stopColor="rgba(10, 5, 20, 0.95)" />
          </linearGradient>
          <linearGradient id="edge-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#814ac8" />
            <stop offset="70%" stopColor="#df7afe" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* The solid overlapping block providing depth */}
        <polygon points="0,100 1440,0 1440,100" fill="url(#glass-gradient)" className="backdrop-blur-md" />
        
        {/* The clean, glowing angled cut edge */}
        <line 
          x1="0" y1="100" 
          x2="1440" y2="0" 
          stroke="url(#edge-gradient)" 
          strokeWidth="2" 
          style={{ filter: "drop-shadow(0px 0px 8px rgba(223,122,254,0.6))" }} 
        />
        
        {/* A subtle secondary line for a premium tech feel */}
        <line 
          x1="0" y1="100" 
          x2="1440" y2="0" 
          stroke="#ffffff" 
          strokeWidth="0.5" 
          strokeOpacity="0.2"
          transform="translate(0, 3)"
        />
      </motion.svg>
    </div>
  );
}
