"use client";

import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";
import { MotionDiv, MotionH2, MotionP } from "@/components/Motion";
import { buttonVariants } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", company: "", email: "", phone: "", budget: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", company: "", email: "", phone: "", budget: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  const FAQS = [
    { q: "What is your typical project timeline?", a: "Most of our enterprise web and app projects take between 8 to 16 weeks, depending on complexity and integration requirements." },
    { q: "Do you accept formal RFPs?", a: "Yes, we actively participate in RFP processes for enterprise and government contracts. Send your RFP directly to nexiogtechnologies@gmail.com." },
    { q: "What is your minimum engagement size?", a: "To ensure we deliver top-tier quality and dedicated resources, our minimum project engagement typically starts at $10k." },
  ];

  return (
    <div className="min-h-screen bg-background text-white pb-32">
      
      {/* Massive Editorial Header */}
      <section className="pt-48 pb-32 px-6 max-w-[1400px] mx-auto">
        <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1 className="text-[clamp(4rem,12vw,12rem)] font-black tracking-tighter leading-[0.85] mb-12">
            Let's build <br/><span className="text-[#e65100]">the future.</span>
          </h1>
          <p className="text-2xl md:text-4xl font-light text-white/50 max-w-4xl leading-relaxed">
            Whether you have a strict RFP or just a napkin sketch, our engineering team is ready to deliver world-class digital products.
          </p>
        </MotionDiv>
      </section>

      <section className="px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
          
          {/* Left Column: Details (7 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-32">
            
            {/* Department Routing */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-4xl font-bold tracking-tight mb-12">Direct Lines</h3>
              <div className="grid grid-cols-1 gap-12">
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest text-white/40 mb-4">New Business</h4>
                  <a href="mailto:nexiogtechnologies@gmail.com" className="text-2xl md:text-3xl hover:text-[#e65100] transition-colors border-b-2 border-white/10 hover:border-[#e65100] pb-2 break-all">nexiogtechnologies@gmail.com</a>
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest text-white/40 mb-4">General Inquiry</h4>
                  <a href="mailto:nexiog@gmail.com" className="text-2xl md:text-3xl hover:text-[#e65100] transition-colors border-b-2 border-white/10 hover:border-[#e65100] pb-2 break-all">nexiog@gmail.com</a>
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest text-white/40 mb-4">Direct Phone / WhatsApp</h4>
                  <a href="tel:+917980888810" className="text-2xl md:text-3xl hover:text-[#e65100] transition-colors border-b-2 border-white/10 hover:border-[#e65100] pb-2">+91 79808 88810</a>
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest text-white/40 mb-4">Global Support</h4>
                  <p className="text-2xl md:text-3xl text-white/80">24/7 Dedicated Support</p>
                </div>
              </div>
            </MotionDiv>

            {/* What Happens Next Timeline */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-4xl font-bold tracking-tight mb-12">What Happens Next?</h3>
              <div className="flex flex-col gap-12 relative border-l-2 border-white/10 ml-4 pl-12">
                <div className="relative">
                  <div className="absolute -left-[60px] top-1 w-6 h-6 rounded-full bg-[#050505] border-4 border-[#e65100]" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">1. Discovery Call</h4>
                  <p className="text-xl text-white/50 leading-relaxed">We schedule a 30-minute introductory call to understand your vision, requirements, and technical constraints.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[60px] top-1 w-6 h-6 rounded-full bg-[#050505] border-4 border-white/20" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">2. Technical Audit & Strategy</h4>
                  <p className="text-xl text-white/50 leading-relaxed">Our architects review your tech stack and propose a highly scalable infrastructure plan and project roadmap.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[60px] top-1 w-6 h-6 rounded-full bg-[#050505] border-4 border-white/20" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">3. Proposal & Kickoff</h4>
                  <p className="text-xl text-white/50 leading-relaxed">You receive a detailed technical proposal with clear milestones. Once approved, development begins immediately.</p>
                </div>
              </div>
            </MotionDiv>

            {/* Contact FAQ */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-4xl font-bold tracking-tight mb-12">Frequently Asked Questions</h3>
              <div className="flex flex-col border-t-2 border-white/10">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border-b-2 border-white/10">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full py-8 flex justify-between items-center text-left hover:text-[#e65100] transition-colors"
                    >
                      <span className="text-2xl md:text-3xl font-bold pr-8 leading-tight">{faq.q}</span>
                      <span className="text-5xl font-light text-white/30">{activeFaq === i ? "−" : "+"}</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-64 pb-10 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-xl md:text-2xl text-white/50 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>

          </div>

          {/* Right Column: Floating Form (6 cols) */}
          <div className="lg:col-span-6 relative lg:pl-16">
            <MotionDiv 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-40"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-16">
                
                {/* Floating Inputs Layout */}
                <div className="grid grid-cols-1 gap-16">
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-3xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent" 
                      placeholder="Name" 
                      id="name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-8 text-sm font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:md:text-3xl peer-placeholder-shown:top-6 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-8 peer-focus:text-sm peer-focus:uppercase peer-focus:text-[#e65100]">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-3xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent" 
                      placeholder="Company" 
                      id="company"
                    />
                    <label htmlFor="company" className="absolute left-0 -top-8 text-sm font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:md:text-3xl peer-placeholder-shown:top-6 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-8 peer-focus:text-sm peer-focus:uppercase peer-focus:text-[#e65100]">Company Name</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-16">
                  <div className="relative group">
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-3xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent" 
                      placeholder="Email" 
                      id="email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-8 text-sm font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:md:text-3xl peer-placeholder-shown:top-6 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-8 peer-focus:text-sm peer-focus:uppercase peer-focus:text-[#e65100]">Email Address</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="tel" 
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-3xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent" 
                      placeholder="Phone" 
                      id="phone"
                    />
                    <label htmlFor="phone" className="absolute left-0 -top-8 text-sm font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:md:text-3xl peer-placeholder-shown:top-6 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-8 peer-focus:text-sm peer-focus:uppercase peer-focus:text-[#e65100]">Phone Number</label>
                  </div>
                </div>

                <div className="relative group">
                  <select 
                    value={formState.budget}
                    onChange={(e) => setFormState({...formState, budget: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-3xl text-white focus:outline-none focus:border-[#e65100] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#050505] text-white/50">Select Budget Range</option>
                    <option value="5k-10k" className="bg-[#050505] text-white">$5k - $10k</option>
                    <option value="10k-50k" className="bg-[#050505] text-white">$10k - $50k</option>
                    <option value="50k+" className="bg-[#050505] text-white">$50k+</option>
                  </select>
                  <label className="absolute left-0 -top-8 text-sm font-bold uppercase tracking-widest text-[#e65100]">Project Budget</label>
                  <div className="absolute right-0 top-6 pointer-events-none text-white/50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>

                <div className="relative group pt-6">
                  <textarea 
                    required
                    rows={1} 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-3xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent resize-none min-h-[150px]" 
                    placeholder="Message" 
                    id="message"
                  />
                  <label htmlFor="message" className="absolute left-0 -top-4 text-sm font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:md:text-3xl peer-placeholder-shown:top-6 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-sm peer-focus:uppercase peer-focus:text-[#e65100]">Project Details</label>
                </div>
                
                <div className="pt-12 flex flex-col gap-8">
                  <Magnetic>
                    <button type="submit" disabled={isSubmitting} className={buttonVariants({ variant: "default", size: "lg", className: "w-full py-8 text-2xl tracking-wide rounded-none font-bold" })}>
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>
                  </Magnetic>
                  
                  {isMounted && (
                    <>
                      <div className="flex items-center gap-6 w-full py-4">
                        <div className="h-0.5 bg-white/10 flex-1" />
                        <span className="text-white/30 text-sm font-bold uppercase tracking-widest">Or</span>
                        <div className="h-0.5 bg-white/10 flex-1" />
                      </div>
                      
                      <PopupButton
                        url="https://calendly.com/nexiog"
                        rootElement={document.body}
                        text="Book a Discovery Call directly"
                        className="w-full py-8 text-2xl tracking-wide bg-transparent border-2 border-white/20 hover:border-white text-white transition-colors flex items-center justify-center gap-4 font-bold"
                      />
                    </>
                  )}
                </div>

        </div>
      </section>
    </div>
  );
}
