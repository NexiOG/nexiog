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
      {/* Premium Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Massive Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7e57c2] via-[#e34a2e]/20 to-transparent blur-[120px] mix-blend-screen rounded-full transform -translate-y-1/2" />
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
