"use client";

import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";
import PageHero from "@/components/PageHero";
import { MotionDiv, MotionH2 } from "@/components/Motion";
import { buttonVariants } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <>
      <PageHero 
        title="Contact Us" 
        description="Let's discuss how we can engineer your next big idea. Reach out to our team."
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Left Column: Contact Info (Nexto Style) */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <MotionDiv initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
                Get In Touch
              </span>
              <MotionH2 
                className="text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight"
              >
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Amazing.</span>
              </MotionH2>
              <p className="text-white/60 mb-10 leading-relaxed text-lg">
                Whether you have a strict RFP or just a napkin sketch, our engineering team is ready to deliver.
              </p>
            </MotionDiv>

            <div className="flex flex-col gap-8">
              {[
                { title: "Primary Email", desc: "nexiogtechnologies@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { title: "Secondary Email", desc: "nexiog@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { title: "Contact Number", desc: "+91 79808 88810", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
              ].map((info, i) => (
                <MotionDiv 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xl shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={info.icon} /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{info.title}</h4>
                    <p className="text-white/60">{info.desc}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form (Nexto Style) */}
          <MotionDiv 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#050505] border border-white/10 rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <h3 className="text-3xl font-extrabold text-white mb-8 tracking-tight">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-xs font-bold tracking-wider uppercase text-white/50 group-focus-within:text-primary transition-colors">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-white/[0.03] border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all rounded-t-lg" 
                    placeholder="Rahul Sharma" 
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-bold tracking-wider uppercase text-white/50 group-focus-within:text-primary transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-white/[0.03] border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all rounded-t-lg" 
                    placeholder="rahul@company.com" 
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-xs font-bold tracking-wider uppercase text-white/50 group-focus-within:text-primary transition-colors">Phone Number</label>
                <input 
                  type="tel" 
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  className="w-full bg-white/[0.03] border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all rounded-t-lg" 
                  placeholder="+91 98765 43210" 
                />
              </div>
              
              <div className="space-y-2 group">
                <label className="text-xs font-bold tracking-wider uppercase text-white/50 group-focus-within:text-primary transition-colors">How can we help?</label>
                <textarea 
                  required
                  rows={4} 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/[0.03] border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all rounded-t-lg resize-none" 
                  placeholder="Tell us about your project goals, timeline, and budget..." 
                />
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Magnetic>
                  <button type="submit" disabled={isSubmitting} className={buttonVariants({ variant: "default", size: "lg", className: "w-full md:w-auto px-12" })}>
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </Magnetic>
                <div className="hidden sm:block text-white/30 text-sm font-bold uppercase tracking-widest px-2">OR</div>
                {isMounted && (
                  <div className="w-full sm:w-auto">
                    <PopupButton
                      url="https://calendly.com/nexiog"
                      rootElement={document.body}
                      text="Book a Discovery Call"
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-white/20 bg-transparent hover:bg-white/10 text-white shadow-sm h-10 rounded-md px-12 w-full sm:w-auto"
                    />
                  </div>
                )}
              </div>
            </form>
          </MotionDiv>

        </div>
      </section>
    </>
  );
}
