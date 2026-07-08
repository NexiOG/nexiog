"use client";

import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Link from "next/link";
import { Network, ServerCog, ShieldAlert, HeadphonesIcon, HardDrive, WifiHigh, ArrowRight, CheckCircle2, ChevronDown, Lock, Server } from "lucide-react";
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

export default function ITSolutionsPage() {
  return (
    <>
      <PageHero 
        title="Managed Enterprise IT" 
        description="Robust, secure, and highly available IT infrastructure designed to keep your enterprise running without interruption." 
        primaryCtaText="Get IT Support" 
        primaryCtaLink="/contact" 
        hideButtons={false}
      />

      {/* 2. Why Choose Us - Server Uptime Focus Layout */}
      <section className="py-24 px-6 relative z-10 bg-background overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <MotionDiv initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/20 to-transparent blur-3xl rounded-full" />
              {/* Abstract Server Rack Graphic */}
              <div className="relative bg-[#05020a] border border-white/10 p-6 rounded-3xl space-y-4">
                {[1, 2, 3].map((rack) => (
                  <div key={rack} className="bg-[#11081f] border border-white/5 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Server className="w-6 h-6 text-[#a855f7]" />
                      <div>
                        <div className="text-white font-bold text-sm">Mainframe Cluster {rack}</div>
                        <div className="text-green-400 text-xs flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> 100% Operational
                        </div>
                      </div>
                    </div>
                    <div className="text-muted-foreground text-xs font-mono">Ping: {Math.floor(Math.random() * 20 + 10)}ms</div>
                  </div>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Trust Our MSP?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                IT shouldn't be a break/fix emergency. It should be an invisible, proactive force driving your company. We act as your entire outsourced IT department, guaranteeing 99.99% uptime and impenetrable corporate security.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#a855f7] mb-2">99.9%</div>
                  <div className="text-white font-bold text-sm">Guaranteed Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#a855f7] mb-2">&lt;15m</div>
                  <div className="text-white font-bold text-sm">Helpdesk Response</div>
                </div>
              </div>
            </MotionDiv>

          </div>
        </div>
      </section>

      {/* 3. Core IT Capabilities Grid */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Infrastructure Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldAlert, title: "Cybersecurity Ops", desc: "Endpoint detection (EDR), firewall management, and zero-trust architecture to prevent ransomware breaches." },
              { icon: ServerCog, title: "Cloud Management", desc: "Administration of AWS, Azure, and Microsoft 365 environments ensuring data integrity." },
              { icon: Network, title: "Network Architecture", desc: "Designing and installing high-speed, secure corporate networks (SD-WAN, VPNs, VLANs)." },
              { icon: HardDrive, title: "Disaster Recovery", desc: "Automated off-site backups and rapid bare-metal recovery protocols to guarantee business continuity." },
              { icon: HeadphonesIcon, title: "24/7 Helpdesk", desc: "Lightning-fast remote support to resolve employee technical issues instantly." },
              { icon: Lock, title: "Compliance Audits", desc: "Ensuring your IT infrastructure meets rigorous HIPAA, SOC2, or GDPR standards." },
            ].map((feature, idx) => (
              <MotionDiv key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-[#11081f] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-all group">
                <feature.icon className="w-10 h-10 text-[#a855f7] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 px-6 relative z-10 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">IT Support FAQs</h2>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="Do you provide 24/7 support?" 
              answer="Yes, our Network Operations Center (NOC) and Helpdesk operate 24/7/365. Regardless of when a server goes down or an employee gets locked out, we are immediately available."
            />
            <FAQItem 
              question="How do you handle onboarding a new client?" 
              answer="We begin with a comprehensive technical audit of your existing infrastructure. We then silently install our monitoring agents and deploy our security stack without disrupting your team's day-to-day operations."
            />
            <FAQItem 
              question="What happens if we get hit by ransomware?" 
              answer="Our primary goal is prevention via advanced Endpoint Detection. However, if an attack occurs, our Disaster Recovery plan immediately isolates the network, drops the infected machines, and restores your entire environment from immutable off-site backups within hours, not days."
            />
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a0b2e] to-[#05020a] rounded-[3rem] p-12 md:p-20 text-center border border-[#a855f7]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/tech-hero-bg.png')] opacity-10 mix-blend-overlay object-cover" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Tired of IT Headaches?</h2>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group mt-8" })}>
              Schedule IT Consultation 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}