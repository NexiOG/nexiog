"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  fillColor?: string;
  inverted?: boolean;
}

export function SectionDivider({ className = "", inverted = false }: SectionDividerProps) {
  return (
    <div className={`w-full overflow-hidden flex justify-center items-center relative h-[80px] md:h-[120px] ${inverted ? 'scale-x-[-1]' : ''} ${className}`}>
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100" 
          className="absolute w-[120%] h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main bold diagonal slash */}
          <line x1="0" y1="100" x2="100" y2="0" stroke="url(#slash-gradient)" strokeWidth="0.5" className="opacity-80 drop-shadow-[0_0_15px_rgba(129,74,200,0.8)]" />
          {/* Secondary thin slashes for tech effect */}
          <line x1="0" y1="90" x2="100" y2="-10" stroke="url(#slash-gradient)" strokeWidth="0.1" className="opacity-40" />
          <line x1="0" y1="110" x2="100" y2="10" stroke="url(#slash-gradient)" strokeWidth="0.1" className="opacity-40" />
          
          <defs>
            <linearGradient id="slash-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="#814ac8" />
              <stop offset="50%" stopColor="#df7afe" />
              <stop offset="80%" stopColor="#814ac8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center glowing element */}
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-2 h-2 bg-[#df7afe] rotate-45 shadow-[0_0_20px_4px_rgba(223,122,254,0.6)]"
        />
      </motion.div>
    </div>
  );
}
