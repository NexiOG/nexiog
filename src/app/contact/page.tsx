"use client";

import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";
import { MotionDiv } from "@/components/Motion";
import { buttonVariants } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";

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
    <div className="min-h-screen bg-background text-white pb-40">
      
      {/* Massive Editorial Header */}
      <section className="pt-48 pb-32 px-6 max-w-[1600px] mx-auto">
        <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1 className="text-[clamp(5rem,14vw,14rem)] font-black tracking-tighter leading-[0.8] mb-12">
            Let's build <br/><span className="text-[#e65100]">the future.</span>
          </h1>
          <p className="text-3xl md:text-5xl font-light text-white/50 max-w-5xl leading-tight">
            Whether you have a strict RFP or just a napkin sketch, our engineering team is ready to deliver world-class digital products.
          </p>
        </MotionDiv>
      </section>

      {/* Industries We Serve */}
      <section className="px-6 max-w-[1600px] mx-auto mb-32">
        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold tracking-widest uppercase text-white/40 mb-12">Industries We Serve Globally</h3>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {INDUSTRIES.map((industry, i) => (
              <div key={i} className="text-2xl md:text-4xl font-medium text-white/80 border border-white/10 rounded-full px-8 py-4 hover:bg-white/5 transition-colors">
                {industry}
              </div>
            ))}
          </div>
        </MotionDiv>
      </section>

      <section className="px-6 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
          
          {/* Left Column: Details (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-40">
            
            {/* Global Presence */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-5xl font-bold tracking-tight mb-16">Global Operations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-[#e65100] mb-6">India HQ</h4>
                  <p className="text-2xl text-white/70 mb-4">Development & Operations Hub</p>
                  <a href="mailto:nexiogtechnologies@gmail.com" className="text-2xl font-bold hover:text-white transition-colors block mb-2">nexiogtechnologies@gmail.com</a>
                  <a href="tel:+917980888810" className="text-2xl font-bold hover:text-white transition-colors">+91 79808 88810</a>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-white/40 mb-6">North America Desk</h4>
                  <p className="text-2xl text-white/70 mb-4">Client Relations & Strategy</p>
                  <p className="text-2xl font-bold text-white">Available 9AM - 6PM EST</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-white/40 mb-6">EMEA Desk</h4>
                  <p className="text-2xl text-white/70 mb-4">European Partnerships</p>
                  <p className="text-2xl font-bold text-white">Available 9AM - 6PM CET</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-white/40 mb-6">24/7 Support</h4>
                  <p className="text-2xl text-white/70 mb-4">Dedicated Client SLA Support</p>
                  <p className="text-2xl font-bold text-white">Always Online</p>
                </div>
              </div>
            </MotionDiv>

            {/* Testimonial */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-[#050505] border border-white/10 p-12 md:p-16 rounded-3xl">
              <div className="absolute top-8 left-8 text-8xl text-[#e65100]/20 font-serif leading-none">"</div>
              <p className="text-3xl md:text-4xl font-light italic leading-relaxed text-white/90 relative z-10 mb-8">
                NexiOG didn't just build our platform; they engineered a highly scalable ecosystem that completely transformed how we do business globally.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/10" />
                <div>
                  <div className="text-2xl font-bold">Enterprise Client</div>
                  <div className="text-xl text-[#e65100]">Confidential Case Study</div>
                </div>
              </div>
            </MotionDiv>

            {/* What Happens Next Timeline */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-5xl font-bold tracking-tight mb-16">The Process</h3>
              <div className="flex flex-col gap-16 relative border-l-4 border-white/10 ml-6 pl-16">
                <div className="relative">
                  <div className="absolute -left-[82px] top-1 w-8 h-8 rounded-full bg-[#050505] border-[6px] border-[#e65100]" />
                  <h4 className="text-3xl md:text-4xl font-bold mb-4">1. Discovery Call (24hrs)</h4>
                  <p className="text-2xl text-white/50 leading-relaxed">We schedule a 30-minute introductory call to understand your vision, requirements, and technical constraints.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[82px] top-1 w-8 h-8 rounded-full bg-[#050505] border-[6px] border-white/20" />
                  <h4 className="text-3xl md:text-4xl font-bold mb-4">2. Technical Audit</h4>
                  <p className="text-2xl text-white/50 leading-relaxed">Our architects deeply review your tech stack and define the optimal infrastructure and frameworks.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[82px] top-1 w-8 h-8 rounded-full bg-[#050505] border-[6px] border-white/20" />
                  <h4 className="text-3xl md:text-4xl font-bold mb-4">3. Proposal & Architecture</h4>
                  <p className="text-2xl text-white/50 leading-relaxed">You receive a massive, detailed technical proposal mapping out timelines, milestones, and costs.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[82px] top-1 w-8 h-8 rounded-full bg-[#050505] border-[6px] border-white/20" />
                  <h4 className="text-3xl md:text-4xl font-bold mb-4">4. Engineering Kickoff</h4>
                  <p className="text-2xl text-white/50 leading-relaxed">Once approved, our engineering pods deploy instantly and development begins with full transparency.</p>
                </div>
              </div>
            </MotionDiv>

            {/* Contact FAQ */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-5xl font-bold tracking-tight mb-16">Frequently Asked Questions</h3>
              <div className="flex flex-col border-t-2 border-white/10">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border-b-2 border-white/10">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full py-10 flex justify-between items-center text-left hover:text-[#e65100] transition-colors"
                    >
                      <span className="text-3xl md:text-4xl font-bold pr-8 leading-tight">{faq.q}</span>
                      <span className="text-6xl font-light text-white/30">{activeFaq === i ? "−" : "+"}</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-96 pb-12 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-2xl text-white/50 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>

          </div>

          {/* Right Column: Floating Form (6 cols) */}
          <div className="lg:col-span-6 relative lg:pl-20 mt-24 lg:mt-0">
            <MotionDiv 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-40"
            >
              <h3 className="text-5xl md:text-6xl font-extrabold mb-20 tracking-tight">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-20">
                
                {/* Services Needed Grid */}
                <div className="space-y-6">
                  <label className="text-lg font-bold uppercase tracking-widest text-white/40 block">I am interested in...</label>
                  <div className="flex flex-wrap gap-4">
                    {SERVICES.map(service => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-6 py-4 rounded-full border-2 text-xl transition-all duration-300 ${
                          selectedServices.includes(service) 
                            ? "border-[#e65100] bg-[#e65100]/10 text-white font-bold" 
                            : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floating Inputs Layout */}
                <div className="grid grid-cols-1 gap-20">
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-white/20 py-8 text-3xl md:text-4xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent" 
                      placeholder="Name" 
                      id="name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-8 text-base font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-3xl peer-placeholder-shown:md:text-4xl peer-placeholder-shown:top-8 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-8 peer-focus:text-base peer-focus:uppercase peer-focus:text-[#e65100]">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-white/20 py-8 text-3xl md:text-4xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent" 
                      placeholder="Company" 
                      id="company"
                    />
                    <label htmlFor="company" className="absolute left-0 -top-8 text-base font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-3xl peer-placeholder-shown:md:text-4xl peer-placeholder-shown:top-8 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-8 peer-focus:text-base peer-focus:uppercase peer-focus:text-[#e65100]">Company Name</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-20">
                  <div className="relative group">
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-white/20 py-8 text-3xl md:text-4xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent" 
                      placeholder="Email" 
                      id="email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-8 text-base font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-3xl peer-placeholder-shown:md:text-4xl peer-placeholder-shown:top-8 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-8 peer-focus:text-base peer-focus:uppercase peer-focus:text-[#e65100]">Email Address</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="tel" 
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-white/20 py-8 text-3xl md:text-4xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent" 
                      placeholder="Phone" 
                      id="phone"
                    />
                    <label htmlFor="phone" className="absolute left-0 -top-8 text-base font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-3xl peer-placeholder-shown:md:text-4xl peer-placeholder-shown:top-8 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-8 peer-focus:text-base peer-focus:uppercase peer-focus:text-[#e65100]">Phone Number</label>
                  </div>
                </div>

                <div className="relative group">
                  <select 
                    value={formState.budget}
                    onChange={(e) => setFormState({...formState, budget: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-white/20 py-8 text-3xl md:text-4xl text-white focus:outline-none focus:border-[#e65100] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#050505] text-white/50">Select Budget Range</option>
                    <option value="basic" className="bg-[#050505] text-white">₹15,999 - ₹19,999 (Basic)</option>
                    <option value="advance" className="bg-[#050505] text-white">₹34,999 - ₹54,999 (Advance)</option>
                    <option value="pro" className="bg-[#050505] text-white">₹99,999 - ₹1,99,999 (Pro)</option>
                    <option value="custom" className="bg-[#050505] text-white">Custom Amount</option>
                  </select>
                  <label className="absolute left-0 -top-8 text-base font-bold uppercase tracking-widest text-[#e65100]">Project Budget</label>
                  <div className="absolute right-0 top-10 pointer-events-none text-white/50">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>

                <div className="relative group pt-6">
                  <textarea 
                    required
                    rows={1} 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-white/20 py-8 text-3xl md:text-4xl text-white focus:outline-none focus:border-[#e65100] transition-colors peer placeholder-transparent resize-none min-h-[200px]" 
                    placeholder="Message" 
                    id="message"
                  />
                  <label htmlFor="message" className="absolute left-0 -top-4 text-base font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:text-3xl peer-placeholder-shown:md:text-4xl peer-placeholder-shown:top-8 peer-placeholder-shown:text-white/30 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-base peer-focus:uppercase peer-focus:text-[#e65100]">Project Details</label>
                </div>
                
                <div className="pt-16 flex flex-col gap-10">
                  <Magnetic>
                    <button type="submit" disabled={isSubmitting} className={buttonVariants({ variant: "default", size: "lg", className: "w-full py-10 text-3xl tracking-wide rounded-none font-bold" })}>
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>
                  </Magnetic>
                  
                  {isMounted && (
                    <>
                      <div className="flex items-center gap-8 w-full py-6">
                        <div className="h-0.5 bg-white/10 flex-1" />
                        <span className="text-white/30 text-lg font-bold uppercase tracking-widest">Or</span>
                        <div className="h-0.5 bg-white/10 flex-1" />
                      </div>
                      
                      <PopupButton
                        url="https://calendly.com/nexiog"
                        rootElement={document.body}
                        text="Book a Discovery Call directly"
                        className="w-full py-10 text-3xl tracking-wide bg-transparent border-2 border-white/20 hover:border-white text-white transition-colors flex items-center justify-center gap-6 font-bold"
                      />
                    </>
                  )}
                </div>
              </form>
            </MotionDiv>
          </div>

        </div>
      </section>
    </div>
  );
}
