"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "@/components/Particles";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 min-h-[60vh] overflow-hidden bg-black text-white">
      {/* Starry Particles Background */}
      <Particles />

      {/* Huge Central Purple Glow - Optimized without GPU blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-[800px] h-[800px] rounded-full mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(129,74,200,0.3)_0%,rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="max-w-4xl w-full flex flex-col items-center text-center z-10">
        
        {/* Animated Heading */}
        <h1 className={`text-5xl md:text-[64px] font-semibold tracking-tight mb-6 leading-[1.1] transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {title}
        </h1>
        
        {/* Animated Description */}
        <p 
          className={`text-[17px] md:text-[19px] text-white/90 max-w-2xl mb-10 leading-relaxed font-medium transition-all duration-1000 ease-out delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {description}
        </p>

        {/* CTA Buttons */}
        {!hideButtons && (
          <div className={`flex flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link 
              href={primaryCtaLink} 
              className={buttonVariants({ variant: "default", size: "lg", className: "group relative overflow-hidden" })}
            >
              {primaryCtaText}
            </Link>
            
            <Link 
              href={secondaryCtaLink} 
              className={buttonVariants({ variant: "secondary", size: "lg", className: "group relative overflow-hidden" })}
            >
              {secondaryCtaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
