"use client";

import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Code, Zap, Server, MonitorSmartphone, LayoutTemplate, Database, ArrowRight, CheckCircle2, ChevronDown, Rocket, ShieldCheck, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

// Custom FAQ Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl bg-[#0a0515] overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <h4 className="text-lg font-semibold text-white">{question}</h4>
        <ChevronDown className={`w-5 h-5 text-[#a855f7] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

export default function WebDevelopmentPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero 
        title="Next-Gen Web Architecture" 
        description="We engineer blazing fast, highly scalable web applications that dominate search engines and convert visitors into enterprise clients." 
        primaryCtaText="Start Your Project" 
        primaryCtaLink="/contact" 
        hideButtons={false}
      />

      {/* 2. Overview (Why Choose Us) - ZigZag Layout */}
      <section className="py-24 px-6 relative z-10 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionDiv 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-[#a855f7]/20 shadow-[0_0_50px_rgba(168,85,247,0.1)]"
            >
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" alt="Code Architecture" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05020a]/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="bg-[#a855f7] text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-3">100/100 Lighthouse</div>
                <h3 className="text-2xl font-bold text-white">Unmatched Performance</h3>
              </div>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose Our Web Dev Team?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Most agencies build websites using bloated WordPress templates that take seconds to load. We write custom React/Next.js code from the ground up. This means your website loads instantly, ranks higher on Google, and provides a drastically superior user experience.
              </p>
              <ul className="space-y-4">
                {["Server-Side Rendering (SSR) for massive SEO boosts", "Edge network deployment for global sub-50ms latency", "Zero-layout-shift architecture", "Custom API integrations (Stripe, Salesforce, etc.)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionDiv initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Security & Scalability First.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                As your business grows, your digital infrastructure needs to handle the traffic. We build on enterprise-grade cloud providers with robust database architectures. Whether you get 100 visitors a day or 100,000 during a marketing campaign, your site will not crash.
              </p>
              <ul className="space-y-4">
                {["DDoS protection & Web Application Firewalls (WAF)", "Automated database backups & redundancy", "Headless CMS architecture for secure content management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>
            <MotionDiv 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative h-[400px] w-full rounded-3xl overflow-hidden border border-[#a855f7]/20 shadow-[0_0_50px_rgba(168,85,247,0.1)]"
            >
              <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" alt="Server Scalability" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#05020a]/80 to-transparent" />
            </MotionDiv>
          </div>

        </div>
      </section>

      {/* 3. The Bento Box Features Grid */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Engineering Arsenal</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Modern capabilities delivered through a cutting-edge bento layout.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {/* Large Card */}
            <MotionDiv initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#1a0b2e] to-[#0a0515] p-8 rounded-3xl border border-[#a855f7]/30 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute top-8 right-8 w-16 h-16 bg-[#a855f7]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-[#a855f7]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Full-Stack Next.js</h3>
              <p className="text-muted-foreground text-lg">We utilize the absolute cutting edge of React frameworks. By rendering pages on the server before they reach the user, we guarantee blazing fast load times and maximum indexing by Google.</p>
            </MotionDiv>

            {/* Standard Cards */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2 bg-[#0a0515] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/50 transition-colors flex flex-col justify-center">
              <Database className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Headless CMS</h3>
              <p className="text-muted-foreground">Decoupled content management systems like Sanity or Strapi for ultimate flexibility.</p>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0a0515] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/50 transition-colors flex flex-col justify-center">
              <Search className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Technical SEO</h3>
              <p className="text-muted-foreground text-sm">Perfect semantic HTML and meta structures.</p>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-[#0a0515] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/50 transition-colors flex flex-col justify-center">
              <ShieldCheck className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Ironclad Security</h3>
              <p className="text-muted-foreground text-sm">OAuth, JWT, and rigorous data encryption.</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 4. Tech Stack Marquee / Grid */}
      <section className="py-24 px-6 relative z-10 border-y border-white/5 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-sm font-bold text-[#a855f7] tracking-widest uppercase mb-12">Powered by Industry-Leading Technology</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Generic placeholder tech text instead of complex SVGs to keep code clean */}
            {["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "NODE.JS", "POSTGRESQL", "AWS", "VERCEL"].map((tech, i) => (
              <div key={i} className="text-2xl md:text-3xl font-black tracking-tighter text-white hover:text-[#a855f7] transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Web Development FAQs</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our engineering process.</p>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="How long does it take to build a custom website?" 
              answer="A standard corporate website typically takes 4-6 weeks from design to launch. Complex web applications with custom portals or e-commerce capabilities generally take 2-4 months depending on the scope of features."
            />
            <FAQItem 
              question="Do you use WordPress?" 
              answer="We highly recommend against traditional monolithic WordPress for performance and security reasons. Instead, we build modern Headless architectures (Next.js front-end paired with a Headless CMS) which offers the same content-editing ease but is exponentially faster and more secure."
            />
            <FAQItem 
              question="Will my team be able to update content easily?" 
              answer="Absolutely. We integrate highly intuitive, visual Content Management Systems (like Sanity or Strapi) that allow your marketing team to update text, images, and pages without needing to write a single line of code."
            />
            <FAQItem 
              question="Do you provide ongoing maintenance and hosting?" 
              answer="Yes, we offer comprehensive hosting, maintenance, and retainer packages. We deploy your site on premium enterprise edge networks (like Vercel or AWS) and provide 24/7 uptime monitoring and security patching."
            />
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a0b2e] to-[#05020a] rounded-[3rem] p-12 md:p-20 text-center border border-[#a855f7]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/tech-hero-bg.png')] opacity-10 mix-blend-overlay object-cover" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to dominate the web?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Let's build a lightning-fast, high-converting website that scales alongside your business.</p>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group" })}>
              Get a Free Proposal 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}