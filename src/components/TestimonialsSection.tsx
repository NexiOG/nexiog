"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/config/testimonials";
import { MotionDiv, MotionH2 } from "@/components/Motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ParallaxDivider } from "@/components/parallax-divider";
import { AnimatePresence, motion } from "framer-motion";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
        rotateY: direction > 0 ? 45 : -45,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
        rotateY: direction < 0 ? 45 : -45,
      };
    }
  };

  return (
    <>
      <ParallaxDivider imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" />
      
      <section id="testimonials" className="py-24 relative z-10 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 px-6 relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2.5 rounded-full border border-[#4b3375] bg-[#150a24]/50 text-[#a78bfa] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm"
          >
            Client Testimonials
          </MotionDiv>

          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,4vw,4rem)] md:text-[clamp(3.5rem,5vw,5rem)] font-extrabold text-white leading-[1] tracking-tighter mb-6"
          >
            What our clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2e8f0] via-[#7e57c2] to-[#ce93d8]">are saying</span>
          </MotionH2>
          <p className="max-w-2xl text-muted-foreground text-sm leading-relaxed">
            We take pride in building strong relationships and delivering exceptional results for our clients. Their feedback reflects our commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full max-w-4xl mx-auto h-[450px] md:h-[400px] flex items-center justify-center px-4 z-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ perspective: 1000 }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                rotateY: { duration: 0.5 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full max-w-2xl bg-gradient-to-br from-[#180d2b]/90 to-[#11091e]/95 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(129,74,200,0.15)] flex flex-col md:flex-row items-center gap-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Avatar Side */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="relative w-32 h-32 mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-[-8px] rounded-full border-[3px] border-dashed border-[#a78bfa]/40 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-[-3px] rounded-full border-2 border-[#e34a2e] animate-[pulse_2s_ease-in-out_infinite]" />
                  <div className={`w-full h-full rounded-full overflow-hidden relative flex items-center justify-center shadow-[inset_0_4px_10px_rgba(255,255,255,0.3),inset_0_-6px_15px_rgba(0,0,0,0.8),0_0_20px_rgba(129,74,200,0.4)] bg-gradient-to-br ${
                    ["from-[#f43f5e] to-[#9f1239]", "from-[#8b5cf6] to-[#4c1d95]", "from-[#0ea5e9] to-[#0369a1]", "from-[#10b981] to-[#047857]", "from-[#f59e0b] to-[#b45309]"][activeIndex % 5]
                  }`}>
                    <span 
                      className="text-5xl font-black text-white tracking-tighter"
                      style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5), 0 2px 2px rgba(255,255,255,0.2)" }}
                    >
                      {TESTIMONIALS[activeIndex].name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                </div>
                <h4 className="text-white font-bold text-xl text-center">{TESTIMONIALS[activeIndex].name}</h4>
                <p className="text-[#a78bfa] text-xs font-bold text-center uppercase tracking-wider mt-1">{TESTIMONIALS[activeIndex].role}</p>
              </div>
              
              {/* Content Side */}
              <div className="flex flex-col relative w-full text-center md:text-left">
                {/* Large Quote Mark */}
                <div className="absolute -top-6 -left-4 text-7xl text-white/5 font-serif leading-none select-none pointer-events-none">"</div>
                
                <div className="flex justify-center md:justify-start gap-1 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e34a2e" stroke="#e34a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                
                <p className="text-white/80 text-base md:text-lg leading-relaxed italic relative z-10">
                  "{TESTIMONIALS[activeIndex].content}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            className="absolute left-2 md:left-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[#180d2b]/80 border border-white/10 text-white/70 hover:text-white hover:bg-primary/50 transition-all hover:scale-110 shadow-lg"
            onClick={() => paginate(-1)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <button 
            className="absolute right-2 md:right-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[#180d2b]/80 border border-white/10 text-white/70 hover:text-white hover:bg-primary/50 transition-all hover:scale-110 shadow-lg"
            onClick={() => paginate(1)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8 relative z-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-2 transition-all duration-300 rounded-full ${activeIndex === idx ? "w-8 bg-[#e34a2e]" : "w-2 bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-12 gap-4 px-6 text-center relative z-10">
          <p className="text-sm font-medium text-white/80">
            From initial planning to long-term support — <span className="text-[#e34a2e]">We Build Digital Solutions You Can Trust.</span>
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-white">
            <span className="text-base">4.9</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#e34a2e" stroke="#e34a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <span className="text-white/60 font-medium ml-1">Over 2000 Reviews</span>
          </div>
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full mt-10 relative z-10"
        >
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "group relative overflow-hidden px-12" })}>
            <span className="relative flex items-center gap-2 drop-shadow-md tracking-wide">
              Contact Us Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </Link>
        </MotionDiv>
      </section>
    </>
  );
}
