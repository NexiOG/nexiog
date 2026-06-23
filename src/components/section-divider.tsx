"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  inverted?: boolean; 
}

export function SectionDivider({ className = "", inverted = false }: SectionDividerProps) {
  return (
    <div className={`w-full flex justify-center items-center relative h-[100px] md:h-[140px] overflow-hidden ${inverted ? 'scale-x-[-1]' : ''} ${className}`}>
      
      {/* 1. Broken Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#814ac8 1px, transparent 1px), linear-gradient(90deg, #814ac8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)"
        }}
      />

      {/* 2. Geometric Overlapping Shapes (The "Break") */}
      <div className="relative w-full max-w-2xl h-full flex items-center justify-center z-10 pointer-events-none">
        
        {/* Left angled shard */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-[20%] md:left-[30%] w-32 h-1 bg-gradient-to-r from-transparent to-[#df7afe] transform -skew-x-45 opacity-60"
          style={{ boxShadow: "0 0 15px 2px rgba(223,122,254,0.4)" }}
        />

        {/* Center Main Overlap Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-48 h-8 flex items-center justify-center"
        >
          {/* Glass background plate */}
          <div className="absolute inset-0 bg-[#150a24]/60 border border-[#814ac8]/30 backdrop-blur-md transform skew-x-12" />
          
          {/* Animated scanning line inside the block */}
          <motion.div 
            animate={{ x: ["-100%", "100%", "-100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#df7afe]/40 to-transparent skew-x-12"
          />

          {/* Central glowing node */}
          <div className="w-2 h-2 rounded-full bg-[#df7afe] shadow-[0_0_10px_2px_rgba(223,122,254,0.8)] z-20" />
        </motion.div>

        {/* Right angled shard */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute right-[20%] md:right-[30%] w-32 h-1 bg-gradient-to-l from-transparent to-[#814ac8] transform skew-x-45 opacity-60"
          style={{ boxShadow: "0 0 15px 2px rgba(129,74,200,0.4)" }}
        />
        
        {/* Decorative Grid Nodes */}
        <div className="absolute top-[20%] left-[40%] w-1 h-1 bg-white/40" />
        <div className="absolute bottom-[20%] right-[40%] w-1 h-1 bg-white/40" />
      </div>

      {/* 3. Subtle ambient light bleed to blend sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#814ac8]/5 to-transparent pointer-events-none" />

    </div>
  );
}
