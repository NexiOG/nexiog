"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep loader for 1.8 seconds, then fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Animated Background Glow */}
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="flex items-center gap-4">
              <motion.img 
                src="/video/image-removebg-preview.png" 
                alt="NexiOG Icon" 
                className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img 
                src="/video/image-removebg-preview%20(1).png" 
                alt="NexiOG Technologies" 
                className="h-12 w-auto object-contain"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
            </div>
            
            {/* Loading Progress Bar */}
            <div className="w-56 h-1 bg-white/10 rounded-full overflow-hidden mt-4 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-purple-400 to-secondary rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
