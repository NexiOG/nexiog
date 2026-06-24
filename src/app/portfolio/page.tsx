"use client";

import { useState } from "react";
import { MotionDiv, MotionH2, MotionP } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "@/config/portfolio";
import { buttonVariants } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category.includes(activeCategory) || activeCategory.includes(p.category.split(' - ')[0]));

  return (
    <div className="min-h-screen bg-background text-white pb-32">
      
      {/* Advanced Custom Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-8 inline-block">
              Selected Works
            </span>
          </MotionDiv>
          
          <MotionH2 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-8"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-2">excellence</span>, 
            <br className="hidden md:block"/> built to scale.
          </MotionH2>
          
          <MotionP 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed"
          >
            Explore our featured case studies across web, mobile, and custom software architectures. We don't just build apps; we build businesses.
          </MotionP>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        
        {/* Interactive Sticky Category Filters */}
        <div className="sticky top-24 z-40 bg-background/80 backdrop-blur-xl py-6 mb-16 border-b border-white/5 mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-white/5 p-1.5 rounded-full border border-white/10 shadow-2xl">
            {["All", "Web Development", "App Development", "Software Development"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 z-10"
              >
                <span className={`relative z-20 ${activeCategory === cat ? "text-white" : "text-white/60 hover:text-white"}`}>
                  {cat}
                </span>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary/90 rounded-full shadow-[0_0_20px_rgba(129,74,200,0.5)] z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Box Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {filteredProjects.map((item, index) => {
            // Logic for asymmetric grid
            let colSpan = "md:col-span-6";
            let height = "h-[450px] md:h-[600px]"; // Default tall
            
            const layoutPattern = index % 6;
            if (layoutPattern === 0) { colSpan = "md:col-span-8"; height = "h-[450px] md:h-[600px]"; }
            else if (layoutPattern === 1) { colSpan = "md:col-span-4"; height = "h-[450px] md:h-[600px]"; }
            else if (layoutPattern === 2) { colSpan = "md:col-span-5"; height = "h-[450px] md:h-[500px]"; }
            else if (layoutPattern === 3) { colSpan = "md:col-span-7"; height = "h-[450px] md:h-[500px]"; }
            else if (layoutPattern === 4) { colSpan = "md:col-span-12"; height = "h-[450px] md:h-[700px]"; }
            else if (layoutPattern === 5) { colSpan = "md:col-span-6"; height = "h-[450px] md:h-[600px]"; }

            return (
              <MotionDiv 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#050505] shadow-xl col-span-1 ${colSpan}`}
              >
                <Link href={item.link} className={`block w-full ${height} relative`}>
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale-[30%] group-hover:grayscale-0"
                  />
                  
                  {/* Base Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                  
                  {/* Dynamic Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply" />
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                    
                    {/* Top Row: Category Pill & Arrow */}
                    <div className="flex justify-between items-start w-full transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <span className="px-4 py-2 bg-black/40 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md">
                        {item.category}
                      </span>
                      
                      {/* Animated Arrow Button */}
                      <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 transform rotate-[-45deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 hover:bg-primary hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                    </div>
                    
                    {/* Bottom Row: Title & Tags */}
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-[1.1] tracking-tight">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/10 border border-white/10 rounded-md text-xs font-bold tracking-wider uppercase text-white/90 backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </Link>
              </MotionDiv>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-3xl font-bold text-white/30">No projects found matching your criteria.</h3>
          </div>
        )}
      </section>

      {/* Premium CTA Section */}
      <section className="mt-40 mb-20 px-6 max-w-5xl mx-auto">
        <MotionDiv 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10 shadow-2xl group bg-[#0a0514]"
        >
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(129,74,200,0.15),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(223,122,254,0.15),transparent_50%)]" />
          
          <div className="relative z-10">
            <span className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-8 inline-block shadow-[0_0_20px_rgba(129,74,200,0.2)]">
              Start A Project
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Ready to engineer <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">your vision?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Partner with our elite team of architects and developers to build your next industry-leading platform.
            </p>
            <Magnetic>
              <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "px-14 py-7 text-xl rounded-full shadow-[0_0_40px_rgba(129,74,200,0.4)] hover:shadow-[0_0_60px_rgba(129,74,200,0.6)] transition-all duration-300" })}>
                Start a Conversation
              </Link>
            </Magnetic>
          </div>
        </MotionDiv>
      </section>
    </div>
  );
}
