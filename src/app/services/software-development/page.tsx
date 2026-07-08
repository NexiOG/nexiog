"use client";

import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Code, Settings, Shield, RefreshCw, Cpu, Database, ArrowRight, CheckCircle2, ChevronDown, Binary, Box, Workflow } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl bg-[#0a0515] overflow-hidden transition-all duration-300">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
        <h4 className="text-lg font-semibold text-white">{question}</h4>
        <ChevronDown className={`w-5 h-5 text-[#a855f7] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <PageHero 
        title="Enterprise Software Architecture" 
        description="Scalable, secure, and custom-tailored software solutions that optimize your business operations and drive exponential growth." 
        primaryCtaText="Discuss Your Architecture" 
        primaryCtaLink="/contact" 
        hideButtons={false}
      />

      {/* 2. Why Choose Us - Tech Data Layout */}
      <section className="py-24 px-6 relative z-10 bg-background overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We don't hack things together. We engineer robust, military-grade systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#05020a] border border-[#a855f7]/20 rounded-3xl p-10 shadow-lg relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#a855f7]/10 rounded-full blur-3xl" />
              <Shield className="w-12 h-12 text-[#a855f7] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Zero-Trust Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In an era of rampant data breaches, security cannot be an afterthought. We implement strict zero-trust architectures, end-to-end encryption, and automated penetration testing pipelines to ensure your proprietary data remains completely impenetrable.
              </p>
              <ul className="space-y-2">
                <li className="text-white/80 text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#a855f7]" /> SOC2 & HIPAA Compliant Ready</li>
                <li className="text-white/80 text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#a855f7]" /> JWT & OAuth2 Auth flows</li>
              </ul>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#05020a] border border-[#a855f7]/20 rounded-3xl p-10 shadow-lg relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              <Workflow className="w-12 h-12 text-[#a855f7] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Microservice Architecture</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Monoliths crash. We build decoupled, containerized microservices using Docker and Kubernetes. This means if one part of your application experiences a massive traffic spike or fails, the rest of your enterprise system remains perfectly online.
              </p>
              <ul className="space-y-2">
                <li className="text-white/80 text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#a855f7]" /> Docker & Kubernetes Orchestration</li>
                <li className="text-white/80 text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#a855f7]" /> Horizontal Auto-Scaling</li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 3. Core Features - High Tech Asymmetric Grid */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Software Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Huge left block */}
            <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-7 bg-[#11081f] p-10 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-all flex flex-col justify-center min-h-[300px]">
              <Database className="w-10 h-10 text-[#a855f7] mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Big Data & Cloud Warehousing</h3>
              <p className="text-muted-foreground text-lg">We architect high-throughput data pipelines and robust cloud warehouses on AWS Redshift or Google BigQuery to ingest, process, and visualize millions of data points in real-time.</p>
            </MotionDiv>

            {/* Right stack */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <MotionDiv initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#11081f] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-all flex-1 flex flex-col justify-center">
                <Code className="w-8 h-8 text-[#a855f7] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Custom SaaS Platforms</h3>
                <p className="text-muted-foreground text-sm">Multi-tenant architectures complete with automated Stripe billing.</p>
              </MotionDiv>
              <MotionDiv initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#11081f] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-all flex-1 flex flex-col justify-center">
                <RefreshCw className="w-8 h-8 text-[#a855f7] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Legacy Modernization</h3>
                <p className="text-muted-foreground text-sm">Safely refactoring old codebases to modern tech stacks.</p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infrastructure Visualizer */}
      <section className="py-24 px-6 relative z-10 bg-background border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <MotionDiv initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full lg:w-1/2">
              <div className="bg-[#05020a] rounded-3xl p-8 border border-[#a855f7]/20 font-mono text-sm text-[#a855f7] leading-relaxed relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
                <p className="text-white/50 mb-2">// System Architecture Definition</p>
                <p><span className="text-blue-400">const</span> infrastructure = {'{'}</p>
                <p className="ml-4">frontend: <span className="text-green-400">'Next.js + React'</span>,</p>
                <p className="ml-4">backend: <span className="text-green-400">'Node.js Microservices'</span>,</p>
                <p className="ml-4">database: <span className="text-green-400">'PostgreSQL Cluster'</span>,</p>
                <p className="ml-4">caching: <span className="text-green-400">'Redis'</span>,</p>
                <p className="ml-4">deployment: <span className="text-green-400">'AWS EKS (Kubernetes)'</span>,</p>
                <p className="ml-4">ci_cd: <span className="text-green-400">'GitHub Actions'</span>,</p>
                <p>{'}'};</p>
                <br/>
                <p><span className="text-blue-400">function</span> <span className="text-yellow-200">deploy</span>() {'{'}</p>
                <p className="ml-4 text-white/80">console.log(<span className="text-green-400">'Systems online. 99.99% uptime.'</span>);</p>
                <p>{'}'}</p>
              </div>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built For Developers, Loved By Enterprises.</h2>
              <p className="text-muted-foreground text-lg mb-6">We maintain pristine, heavily-documented codebases. If your internal engineering team ever needs to take over the project, they will be stepping into a flawlessly architected, industry-standard environment.</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Software FAQs</h2>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="What is your preferred technology stack?" 
              answer="While we are completely stack-agnostic and choose the right tool for the job, our preferred enterprise stack is Next.js (React) for the frontend, Node.js or Go for microservices, and PostgreSQL for relational data, all hosted on AWS or Vercel."
            />
            <FAQItem 
              question="Can you rescue a failing legacy project?" 
              answer="Yes. We frequently take over 'spaghetti code' legacy projects. We begin with a deep code audit, stabilize the existing monolithic system, and then systematically strangle it by replacing it piece-by-piece with modern microservices."
            />
            <FAQItem 
              question="How do you handle intellectual property (IP)?" 
              answer="You own 100% of the codebase and intellectual property from day one. All code is pushed to your private repositories, and our contracts explicitly assign all rights to your enterprise."
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to scale your architecture?</h2>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group mt-8" })}>
              Consult an Architect 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}