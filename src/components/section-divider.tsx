"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  inverted?: boolean; // Kept for prop compatibility, but not strictly needed for this symmetric design
}

export function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`w-full flex justify-center items-center py-24 relative z-10 ${className}`}>
      
      {/* Ambient background glow behind the pill */}
      <div className="absolute w-64 h-32 bg-[#814ac8]/10 blur-[60px] rounded-full pointer-events-none" />

      {/* The Glassmorphic Pill */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-48 md:w-64 h-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden flex items-center shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
      >
        {/* The glowing orb inside the pill */}
        <motion.div 
          animate={{ left: ["0%", "100%", "0%"], x: ["0%", "-100%", "0%"] }} 
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-full w-16 md:w-20 rounded-full bg-gradient-to-r from-transparent via-[#df7afe] to-transparent opacity-90"
          style={{
            boxShadow: "0 0 20px 4px rgba(223,122,254,0.9)"
          }}
        />
      </motion.div>
      
      {/* Tiny framing dots */}
      <div className="absolute left-[calc(50%-100px)] md:left-[calc(50%-140px)] w-1 h-1 rounded-full bg-white/20" />
      <div className="absolute right-[calc(50%-100px)] md:right-[calc(50%-140px)] w-1 h-1 rounded-full bg-white/20" />
      
    </div>
  );
}
