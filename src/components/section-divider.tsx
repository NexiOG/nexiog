"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  inverted?: boolean; // Controls whether the crossing is mirrored
}

export function SectionDivider({ className = "", inverted = false }: SectionDividerProps) {
  const text1 = "NEXIOG TECHNOLOGIES • DIGITAL INNOVATION • WE BUILD THE FUTURE • ";
  const text2 = "WEB DEVELOPMENT • APP DESIGN • DIGITAL MARKETING • IT SOLUTIONS • ";
  
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center relative h-[150px] md:h-[200px] z-20 -my-10 md:-my-16 ${className}`}>
      
      {/* Ribbon 1: Angled up, flowing left */}
      <div 
        className={`absolute w-[120vw] left-[-10vw] py-3 md:py-4 z-10 shadow-[0_0_30px_rgba(129,74,200,0.4)] border-y border-white/20 backdrop-blur-md ${inverted ? 'bg-[#df7afe] rotate-[-4deg]' : 'bg-[#814ac8] rotate-[-4deg]'}`}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className={`text-lg md:text-xl font-black uppercase tracking-[0.2em] px-2 ${inverted ? 'text-black' : 'text-white'}`}>
            {text1.repeat(15)}
          </span>
        </motion.div>
      </div>

      {/* Ribbon 2: Angled down, flowing right */}
      <div 
        className={`absolute w-[120vw] left-[-10vw] py-3 md:py-4 z-20 shadow-[0_0_30px_rgba(223,122,254,0.4)] border-y border-white/20 backdrop-blur-md ${inverted ? 'bg-[#814ac8] rotate-[4deg]' : 'bg-[#df7afe] rotate-[4deg]'}`}
      >
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className={`text-lg md:text-xl font-black uppercase tracking-[0.2em] px-2 ${inverted ? 'text-white' : 'text-black'}`}>
            {text2.repeat(15)}
          </span>
        </motion.div>
      </div>

    </div>
  );
}
