"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { MotionDiv, MotionH2 } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "@/config/portfolio";
import { buttonVariants } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category.includes(activeCategory) || activeCategory.includes(p.category.split(' - ')[0]));

  return (
    <>
      <PageHero 
        title="Case Studies Built Around Growth, Products, and Platforms" 
        description="Real examples across web development, app development, SEO, digital marketing, and custom software."
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
            Our Work
          </span>
          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Case Studies</span>
          </MotionH2>
        </div>
        
        {/* Category Filter - Nexto Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All", "Web Development", "App Development", "Software Development"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat 
                  ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(129,74,200,0.4)]" 
                  : "bg-transparent text-white/60 border-white/10 hover:border-primary/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Nexto Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((item, index) => (
            <MotionDiv 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#050505] shadow-xl"
            >
              <Link href={item.link} className="block w-full h-[450px] relative">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                {/* Overlay Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/20 border border-primary/50 text-primary text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-end gap-6">
                    <div>
                      <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-xs font-bold tracking-wider uppercase text-white/70">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Arrow Button */}
                    <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 hover:bg-primary hover:text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-white/50">No projects found in this category.</h3>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[radial-gradient(circle_at_center,rgba(129,74,200,0.1)_0%,rgba(0,0,0,0)_70%)] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
            Start A Project
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Your project could be next.</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">Let's build something extraordinary together.</p>
          <Magnetic>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "px-12 py-6 text-lg rounded-full" })}>
              Start a Conversation
            </Link>
          </Magnetic>
        </div>
      </section>
    </>
  );
}
