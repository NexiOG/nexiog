"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/config/testimonials";
import { MotionDiv, MotionH2 } from "@/components/Motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ParallaxDivider } from "@/components/parallax-divider";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;

    const scroll = () => {
      if (!isHovered) {
        container.scrollLeft += 1;
        // Infinite scroll effect logic
        // When we scrolled past the first set of items, jump back to start seamlessly
        // We render the list 3 times to ensure smooth looping
        const maxScroll = container.scrollWidth / 3;
        if (container.scrollLeft >= maxScroll * 2) {
          container.scrollLeft = maxScroll; // Jump to middle set
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Initially start from the middle set so we can scroll both ways
    if (container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 3;
    }

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <>
      <ParallaxDivider imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" />
      
      <section id="testimonials" className="py-24 relative z-10 overflow-hidden bg-slate-50 border-t border-slate-200">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 px-6 relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2.5 rounded-full border border-slate-200 bg-white text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8 font-space shadow-sm"
          >
            Client Testimonials
          </MotionDiv>

          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,4vw,4rem)] md:text-[clamp(3.5rem,5vw,5rem)] font-extrabold text-slate-900 leading-[1] tracking-tighter mb-6 font-syne"
          >
            What our clients <span className="text-primary">are saying</span>
          </MotionH2>
          <p className="max-w-2xl text-slate-600 text-sm leading-relaxed">
            We take pride in building strong relationships and delivering exceptional results for our clients. Their feedback reflects our commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative w-full max-w-[100vw] overflow-hidden">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setTimeout(() => setIsHovered(false), 1500)}
            className="flex overflow-x-auto gap-8 px-6 pb-12 no-scrollbar w-full relative z-10 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Render 3 times for seamless infinite loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[400px] bg-white backdrop-blur-2xl border border-slate-200 p-8 md:p-10 rounded-[2rem] shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 mb-6 group-hover:scale-105 transition-transform duration-500">
                    {/* Animated Rotating Dashed Ring */}
                    <div className="absolute inset-[-8px] rounded-full border-[3px] border-dashed border-primary/20 animate-[spin_10s_linear_infinite]" />
                    {/* Animated Pulsing Solid Ring */}
                    <div className="absolute inset-[-3px] rounded-full border-2 border-accent animate-[pulse_2s_ease-in-out_infinite]" />
                    {/* Inner Avatar with 3D Initials */}
                    <div className={`w-full h-full rounded-full overflow-hidden relative flex items-center justify-center shadow-inner bg-gradient-to-br ${
                      ["from-rose-500 to-rose-700", "from-primary to-violet-800", "from-sky-500 to-sky-700", "from-emerald-500 to-emerald-700", "from-amber-500 to-amber-700"][index % 5]
                    }`}>
                      <span 
                        className="text-4xl font-black text-white tracking-tighter font-syne"
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                      >
                        {item.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl mb-1 font-syne">{item.name}</h4>
                  <p className="text-primary text-xs font-bold mb-6 uppercase tracking-wider font-space">{item.role}</p>
                  
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#e34a2e" stroke="#e34a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{item.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-6 gap-4 px-6 text-center relative z-10">
          <p className="text-sm font-medium text-slate-700">
            From initial planning to long-term support — <span className="text-accent font-bold">We Build Digital Solutions You Can Trust.</span>
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
            <span className="text-base font-space">4.9</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#e34a2e" stroke="#e34a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <span className="text-slate-500 font-medium ml-1">Over 2000 Reviews</span>
          </div>
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full mt-12 relative z-10"
        >
          <Link href="/contact" className={buttonVariants({ variant: "accent", size: "lg", className: "group relative overflow-hidden px-12" })}>
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
