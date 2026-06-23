"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  inverted?: boolean; // Reverses direction if true
}

export function SectionDivider({ className = "", inverted = false }: SectionDividerProps) {
  // We create a tileable SVG path that loops perfectly.
  // One tile is 400px wide. We render enough tiles to cover any screen width + buffer for seamless infinite scrolling.
  // 10 repeats = 4000px wide, which is enough for ultra-wide monitors.
  const repeats = Array.from({ length: 10 });

  return (
    <div className={`w-full relative h-[80px] md:h-[120px] overflow-hidden flex items-center justify-center z-10 pointer-events-none ${className}`}>
      
      {/* Background ambient glow line */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#814ac8]/20 to-transparent" />

      {/* The scrolling container */}
      <motion.div
        animate={{ x: inverted ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 bottom-0 flex items-center"
        style={{ width: "8000px" }} // 20 repeats total across two identical divs
      >
        {/* Render two identical blocks for seamless looping */}
        {[0, 1].map((blockIdx) => (
          <div key={blockIdx} className="flex h-full items-center">
            {repeats.map((_, idx) => (
              <svg 
                key={idx}
                width="400" 
                height="100" 
                viewBox="0 0 400 100" 
                className="flex-shrink-0 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id={`gradient-1-${blockIdx}-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#814ac8" />
                    <stop offset="50%" stopColor="#df7afe" />
                    <stop offset="100%" stopColor="#814ac8" />
                  </linearGradient>
                  
                  <linearGradient id={`gradient-2-${blockIdx}-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#df7afe" />
                    <stop offset="50%" stopColor="#814ac8" />
                    <stop offset="100%" stopColor="#df7afe" />
                  </linearGradient>

                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Wave 1: Arching UP then DOWN */}
                <path 
                  d="M 0 50 Q 100 0, 200 50 T 400 50" 
                  fill="none" 
                  stroke={`url(#gradient-1-${blockIdx}-${idx})`} 
                  strokeWidth="2" 
                  filter="url(#glow)"
                />

                {/* Wave 2: Arching DOWN then UP (Criss-Cross) */}
                <path 
                  d="M 0 50 Q 100 100, 200 50 T 400 50" 
                  fill="none" 
                  stroke={`url(#gradient-2-${blockIdx}-${idx})`} 
                  strokeWidth="2" 
                  filter="url(#glow)"
                  className="opacity-80"
                />

                {/* Intersection glowing nodes */}
                <circle cx="0" cy="50" r="3" fill="#ffffff" filter="url(#glow)" className="opacity-50" />
                <circle cx="200" cy="50" r="4" fill="#df7afe" filter="url(#glow)" />
                <circle cx="400" cy="50" r="3" fill="#ffffff" filter="url(#glow)" className="opacity-50" />
              </svg>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
