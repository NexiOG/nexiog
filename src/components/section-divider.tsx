"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  inverted?: boolean; // Controls scroll direction
}

export function SectionDivider({ className = "", inverted = false }: SectionDividerProps) {
  const marqueeText = "NEXIOG TECHNOLOGIES • DIGITAL INNOVATION • WE BUILD THE FUTURE • ";
  
  return (
    <div className={`w-full overflow-hidden flex items-center relative h-[60px] md:h-[80px] z-10 border-y border-[#814ac8]/20 bg-[#0a0514]/40 backdrop-blur-sm -my-4 md:-my-8 ${className}`}>
      
      {/* Edge Gradients for smooth fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#05020a] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#05020a] to-transparent z-20 pointer-events-none" />

      {/* Scrolling Text Container */}
      <motion.div
        animate={{ x: inverted ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap"
      >
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-[#df7afe] to-white/40 uppercase tracking-[0.3em] px-2 select-none">
            {marqueeText.repeat(15)}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
