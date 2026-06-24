"use client";

import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";
import { MotionDiv, MotionH2, MotionP } from "@/components/Motion";
import { buttonVariants } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";
import Image from "next/image";

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "IT Consulting",
  "Digital Marketing"
];

const INDUSTRIES = [
  "FinTech & Banking",
  "Healthcare & Telemed",
  "E-Commerce & Retail",
  "EdTech & eLearning",
  "Real Estate & PropTech",
  "Logistics & Supply Chain"
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", company: "", email: "", phone: "", budget: "", message: "" });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", company: "", email: "", phone: "", budget: "", message: "" });
      setSelectedServices([]);
      alert("Message sent successfully!");
    }, 1500);
  };

  const FAQS = [
    { q: "What is your typical project timeline?", a: "Most of our enterprise web and app projects take between 8 to 16 weeks, depending on complexity and integration requirements." },
    { q: "Do you accept formal RFPs?", a: "Yes, we actively participate in RFP processes for enterprise and government contracts. Send your RFP directly to nexiogtechnologies@gmail.com." },
    { q: "What is your minimum engagement size?", a: "To ensure we deliver top-tier quality and dedicated resources, our minimum project engagement typically starts at ₹15,999." },
  ];

  return (
    <div className="min-h-screen bg-background text-white pb-32">
      
      {/* Editorial Header */}
      <section className="pt-40 pb-10 px-6 max-w-7xl mx-auto">
        <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter leading-[0.9] mb-8">
            Let's build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">the future.</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/50 max-w-3xl leading-relaxed mb-16">
            Whether you have a strict RFP or just a napkin sketch, our engineering team is ready to deliver world-class digital products.
          </p>
          
          {/* Hero Banner Image */}
          <div className="w-full h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
              alt="Premium Office" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
        </MotionDiv>
      </section>

      {/* Industries We Serve */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-6">Industries We Serve Globally</h3>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((industry, i) => (
              <div key={i} className="text-sm md:text-base font-medium text-white/80 border border-white/10 rounded-full px-4 py-2 hover:bg-white/5 transition-colors">
                {industry}
              </div>
            ))}
          </div>
        </MotionDiv>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-24">
            
            {/* Global Operations */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold tracking-tight mb-8">Global Operations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">India HQ</h4>
                  <p className="text-sm text-white/70 mb-2">Development & Operations Hub</p>
                  <a href="mailto:nexiogtechnologies@gmail.com" className="text-lg hover:text-white transition-colors block mb-1 border-b border-white/10 w-fit pb-1">nexiogtechnologies@gmail.com</a>
                  <a href="tel:+917980888810" className="text-lg hover:text-white transition-colors border-b border-white/10 w-fit pb-1">+91 79808 88810</a>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">North America Desk</h4>
                  <p className="text-sm text-white/70 mb-2">Client Relations & Strategy</p>
                  <p className="text-lg text-white">9AM - 6PM EST</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">EMEA Desk</h4>
                  <p className="text-sm text-white/70 mb-2">European Partnerships</p>
                  <p className="text-lg text-white">9AM - 6PM CET</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">24/7 Support</h4>
                  <p className="text-sm text-white/70 mb-2">Dedicated Client SLA Support</p>
                  <p className="text-lg text-white">Always Online</p>
                </div>
              </div>
            </MotionDiv>

            {/* Testimonial */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative p-8 md:p-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" 
                alt="Abstract Background" 
                fill 
                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0514]/90 to-primary/20" />
              
              <div className="absolute top-6 left-8 text-7xl text-primary/40 font-serif leading-none">"</div>
              <p className="text-xl md:text-2xl font-light italic leading-relaxed text-white relative z-10 mb-8 pt-6">
                NexiOG didn't just build our platform; they engineered a highly scalable ecosystem that completely transformed how we do business globally.
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-primary/50">
                  <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">Enterprise Client</div>
                  <div className="text-sm text-secondary tracking-wide">Confidential Case Study</div>
                </div>
              </div>
            </MotionDiv>

            {/* What Happens Next Timeline */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold tracking-tight mb-8">The Process</h3>
              <div className="flex flex-col gap-8 relative border-l border-white/10 ml-3 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050505] border-2 border-primary" />
                  <h4 className="text-xl font-bold mb-2">1. Discovery Call (24hrs)</h4>
                  <p className="text-white/50 leading-relaxed">We schedule a 30-minute introductory call to understand your vision, requirements, and technical constraints.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20" />
                  <h4 className="text-xl font-bold mb-2">2. Technical Audit</h4>
                  <p className="text-white/50 leading-relaxed">Our architects review your tech stack and define the optimal infrastructure and frameworks.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20" />
                  <h4 className="text-xl font-bold mb-2">3. Proposal & Architecture</h4>
                  <p className="text-white/50 leading-relaxed">You receive a detailed technical proposal mapping out timelines, milestones, and costs.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20" />
                  <h4 className="text-xl font-bold mb-2">4. Engineering Kickoff</h4>
                  <p className="text-white/50 leading-relaxed">Once approved, our engineering pods deploy instantly and development begins with full transparency.</p>
                </div>
              </div>
            </MotionDiv>

            {/* Contact FAQ */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold tracking-tight mb-8">Frequently Asked Questions</h3>
              <div className="flex flex-col border-t border-white/10">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border-b border-white/10">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
                    >
                      <span className="text-lg font-bold pr-8">{faq.q}</span>
                      <span className="text-2xl font-light text-white/30">{activeFaq === i ? "−" : "+"}</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-white/50 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>

          </div>

          {/* Right Column: Floating Form (5 cols) */}
          <div className="lg:col-span-5 relative">
            <MotionDiv 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h3 className="text-3xl font-extrabold mb-8 tracking-tight">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Services Needed Grid */}
                <div className="space-y-4 mb-6">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 block">I am interested in...</label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map(service => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3 py-1.5 rounded-full border text-sm transition-all duration-300 ${
                          selectedServices.includes(service) 
                            ? "border-primary bg-primary/10 text-white font-bold" 
                            : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floating Inputs Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" 
                      placeholder="Name" 
                      id="name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-5 text-xs font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:text-primary">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" 
                      placeholder="Company" 
                      id="company"
                    />
                    <label htmlFor="company" className="absolute left-0 -top-5 text-xs font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:text-primary">Company Name</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" 
                      placeholder="Email" 
                      id="email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-5 text-xs font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:text-primary">Email Address</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="tel" 
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" 
                      placeholder="Phone" 
                      id="phone"
                    />
                    <label htmlFor="phone" className="absolute left-0 -top-5 text-xs font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:text-primary">Phone Number</label>
                  </div>
                </div>

                <div className="relative group">
                  <select 
                    value={formState.budget}
                    onChange={(e) => setFormState({...formState, budget: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#050505] text-white/50">Select Budget Range</option>
                    <option value="basic" className="bg-[#050505] text-white">₹15,999 - ₹19,999 (Basic)</option>
                    <option value="advance" className="bg-[#050505] text-white">₹34,999 - ₹54,999 (Advance)</option>
                    <option value="pro" className="bg-[#050505] text-white">₹99,999 - ₹1,99,999 (Pro)</option>
                    <option value="custom" className="bg-[#050505] text-white">Custom Amount</option>
                  </select>
                  <label className="absolute left-0 -top-5 text-xs font-bold uppercase tracking-widest text-primary">Project Budget</label>
                  <div className="absolute right-0 top-4 pointer-events-none text-white/50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>

                <div className="relative group pt-4">
                  <textarea 
                    required
                    rows={1} 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none min-h-[100px]" 
                    placeholder="Message" 
                    id="message"
                  />
                  <label htmlFor="message" className="absolute left-0 -top-1 text-xs font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-1 peer-focus:text-xs peer-focus:uppercase peer-focus:text-primary">Project Details</label>
                </div>
                
                <div className="pt-8 flex flex-col gap-6">
                  <Magnetic>
                    <button type="submit" disabled={isSubmitting} className={buttonVariants({ variant: "default", size: "lg", className: "w-full py-6 text-lg tracking-wide rounded-none" })}>
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>
                  </Magnetic>
                  
                  {isMounted && (
                    <>
                      <div className="flex items-center gap-4 w-full">
                        <div className="h-px bg-white/10 flex-1" />
                        <span className="text-white/30 text-xs font-bold uppercase tracking-widest">Or</span>
                        <div className="h-px bg-white/10 flex-1" />
                      </div>
                      
                      <PopupButton
                        url="https://calendly.com/nexiog"
                        rootElement={document.body}
                        text="Book a Discovery Call directly"
                        className="w-full py-6 text-lg tracking-wide bg-transparent border border-white/20 hover:border-white text-white transition-colors flex items-center justify-center gap-3"
                      />
                    </>
                  )}
                </div>
              </form>
            </MotionDiv>
          </div>

        </div>
      </section>

      {/* Others vs Us Comparison - Professional Restyle */}
      <section className="py-32 px-6 relative max-w-7xl mx-auto mb-12">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
            The Difference
          </span>
          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Traditional Agencies <span className="text-white/30 italic font-light mx-2">vs</span> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NexiOG</span>
          </MotionH2>
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Traditional Agencies Column */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-8 bg-black/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-white/30 text-xl font-serif">A</span>
                </div>
                <h3 className="text-2xl font-bold text-white/50">Typical Agency</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Use bloated, pre-built templates",
                  "Hidden fees and unclear pricing",
                  "Slow, monolithic development cycles",
                  "Pass you off to junior developers",
                  "Outdated tech stacks (WordPress, jQuery)",
                  "Launch and abandon"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5 text-white/40">
                    <svg className="w-6 h-6 text-red-500/50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NexiOG Column */}
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col gap-8 bg-gradient-to-br from-[#0a0514] to-[#1a0b2e] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary p-[1px] shadow-[0_0_20px_rgba(129,74,200,0.3)]">
                  <div className="w-full h-full rounded-full bg-[#0a0514] flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold text-xl">N</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">NexiOG</h3>
              </div>
              
              <ul className="space-y-6 relative z-10">
                {[
                  "Bespoke, engineered-from-scratch architectures",
                  "100% transparent pricing and milestones",
                  "Agile, rapid CI/CD deployment pipelines",
                  "Top 1% senior engineering talent",
                  "Modern stacks (Next.js, React, Node.js)",
                  "Dedicated 24/7 post-launch SLA support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5 text-white">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionDiv>
      </section>
    </div>
  );
}
