"use client";

import Link from "next/link";
import { MotionDiv, MotionH1, MotionP } from "@/components/Motion";
import { buttonVariants } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  hideButtons?: boolean;
}

export default function PageHero({ 
  title, 
  description, 
  primaryCtaText = "Get in touch \u2197", 
  primaryCtaLink = "/contact",
  secondaryCtaText = "View services",
  secondaryCtaLink = "/services",
  hideButtons = false
}: PageHeroProps) {

  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-48 pb-32 px-6 min-h-[60vh] overflow-hidden bg-[#050505] text-white border-b border-white/5">
      {/* Premium CSS Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes orb-float-1 {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(50px, -50px) scale(1.1); }
            66% { transform: translate(-30px, 30px) scale(0.9); }
            100% { transform: translate(0, 0) scale(1); }
          }
          @keyframes orb-float-2 {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-60px, 40px) scale(0.9); }
            66% { transform: translate(40px, -40px) scale(1.1); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .animate-orb-1 { animation: orb-float-1 18s infinite ease-in-out; }
          .animate-orb-2 { animation: orb-float-2 22s infinite ease-in-out; }
        `}} />
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

        {/* Animated Glowing Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#7e57c2] blur-[150px] mix-blend-screen animate-orb-1 opacity-50"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#e34a2e] blur-[180px] mix-blend-screen animate-orb-2 opacity-30"></div>
        
        {/* Dark bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center text-center z-10 relative">
        
        {/* Subtle Corporate Badge */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-bold uppercase tracking-[0.25em] mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          NexiOG Technologies
        </MotionDiv>

        {/* Animated Heading */}
        <MotionH1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,6vw,6rem)] font-extrabold tracking-tighter mb-8 leading-[1.05]"
        >
          {title}
        </MotionH1>
        
        {/* Animated Description */}
        <MotionP 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mb-12 leading-relaxed font-medium"
        >
          {description}
        </MotionP>

        {/* CTA Buttons */}
        {!hideButtons && (
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link 
              href={primaryCtaLink} 
              className={buttonVariants({ variant: "accent", size: "lg", className: "px-10 py-6 text-base group relative overflow-hidden w-full sm:w-auto shadow-[0_0_30px_rgba(227,74,46,0.3)] hover:shadow-[0_0_40px_rgba(227,74,46,0.5)] transition-all" })}
            >
              {primaryCtaText}
            </Link>
            
            <Link 
              href={secondaryCtaLink} 
              className={buttonVariants({ variant: "outline", size: "lg", className: "px-10 py-6 text-base border-white/10 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black w-full sm:w-auto transition-all" })}
            >
              {secondaryCtaText}
            </Link>
          </MotionDiv>
        )}
      </div>
    </section>
  );
}
