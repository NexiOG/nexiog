"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  fillColor?: string;
  inverted?: boolean;
}

export function SectionDivider({ className = "", fillColor = "#05020a", inverted = false }: SectionDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none z-10 relative h-[100px] md:h-[150px] ${inverted ? 'rotate-180' : ''} ${className}`}>
      <motion.svg 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 w-full h-full text-primary" 
        preserveAspectRatio="none" 
        viewBox="0 0 1200 120" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path 
          animate={{ 
            d: [
              "M0,0 C150,60 300,120 600,120 C900,120 1050,60 1200,0 L1200,120 L0,120 Z",
              "M0,40 C150,100 300,0 600,0 C900,0 1050,100 1200,40 L1200,120 L0,120 Z",
              "M0,80 C150,0 300,60 600,60 C900,60 1050,0 1200,80 L1200,120 L0,120 Z",
              "M0,0 C150,60 300,120 600,120 C900,120 1050,60 1200,0 L1200,120 L0,120 Z"
            ] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          d="M0,0 C150,60 300,120 600,120 C900,120 1050,60 1200,0 L1200,120 L0,120 Z" 
          fill="url(#gradient)" 
          className="opacity-20"
        />
        <motion.path 
          animate={{ 
            d: [
              "M0,40 C150,100 300,0 600,0 C900,0 1050,100 1200,40 L1200,120 L0,120 Z",
              "M0,80 C150,0 300,60 600,60 C900,60 1050,0 1200,80 L1200,120 L0,120 Z",
              "M0,0 C150,60 300,120 600,120 C900,120 1050,60 1200,0 L1200,120 L0,120 Z",
              "M0,40 C150,100 300,0 600,0 C900,0 1050,100 1200,40 L1200,120 L0,120 Z"
            ] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          d="M0,40 C150,100 300,0 600,0 C900,0 1050,100 1200,40 L1200,120 L0,120 Z" 
          fill="url(#gradient)" 
          className="opacity-40"
        />
        <path 
          d="M0,80 C300,120 400,0 600,0 C800,0 900,120 1200,80 L1200,120 L0,120 Z" 
          fill={fillColor} 
        />
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#814ac8" />
            <stop offset="50%" stopColor="#df7afe" />
            <stop offset="100%" stopColor="#814ac8" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
