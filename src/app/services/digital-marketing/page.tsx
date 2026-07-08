"use client";

import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Link from "next/link";
import { Target, TrendingUp, Search, Mail, BarChart, Users, ArrowRight, CheckCircle2, ChevronDown, Activity, PieChart } from "lucide-react";
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

export default function DigitalMarketingPage() {
  return (
    <>
      <PageHero 
        title="Performance Growth Marketing" 
        description="Explosive growth strategies combining SEO, targeted ads, and conversion optimization to dominate your market." 
        primaryCtaText="Get a Free Audit" 
        primaryCtaLink="/contact" 
        hideButtons={false}
      />

      {/* 2. Why Choose Us - Data Dashboard Layout */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Our Campaigns Win.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We do not guess. Every dollar spent is meticulously tracked and optimized through advanced algorithmic bidding and data science. We focus entirely on one metric: Return on Ad Spend (ROAS).
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> Multi-touch attribution modeling</li>
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> AI-driven audience segmentation</li>
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> Split testing (A/B/n) on all creatives</li>
              </ul>
            </div>

            {/* Dashboard Visualizer */}
            <div className="lg:col-span-7">
              <MotionDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#11081f] border border-white/10 rounded-3xl p-6 shadow-2xl relative">
                {/* Simulated Dashboard Header */}
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2"><Activity className="w-5 h-5 text-[#a855f7]" /><span className="text-white font-semibold">Live Campaign Data</span></div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#05020a] p-4 rounded-2xl border border-white/5">
                    <p className="text-muted-foreground text-xs uppercase mb-1">Total Revenue</p>
                    <p className="text-2xl font-bold text-white">$142,500</p>
                    <p className="text-green-400 text-xs mt-2">+24.5% MoM</p>
                  </div>
                  <div className="bg-[#05020a] p-4 rounded-2xl border border-white/5">
                    <p className="text-muted-foreground text-xs uppercase mb-1">ROAS</p>
                    <p className="text-2xl font-bold text-white">4.8x</p>
                    <p className="text-green-400 text-xs mt-2">Target: 3.0x</p>
                  </div>
                  <div className="bg-[#05020a] p-4 rounded-2xl border border-white/5">
                    <p className="text-muted-foreground text-xs uppercase mb-1">Cost Per Acq (CPA)</p>
                    <p className="text-2xl font-bold text-white">$12.40</p>
                    <p className="text-green-400 text-xs mt-2">-15% MoM</p>
                  </div>
                </div>

                {/* Simulated Graph */}
                <div className="h-40 w-full bg-[#05020a] rounded-2xl border border-white/5 relative overflow-hidden flex items-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#a855f7]/20 to-transparent opacity-50" />
                  {/* Fake bars */}
                  {[40, 55, 45, 70, 65, 80, 95, 100].map((h, i) => (
                    <div key={i} className="flex-1 mx-1 bg-[#a855f7]" style={{ height: `${h}%`, borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} />
                  ))}
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Omnichannel Grid */}
      <section className="py-24 px-6 relative z-10 bg-background border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Growth Channels</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#11081f] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-all flex flex-col justify-center">
              <Target className="w-10 h-10 text-[#a855f7] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Paid Acquisition</h3>
              <p className="text-muted-foreground mb-4">Aggressive, hyper-targeted campaigns across Google Search, Meta (Facebook/Instagram), and LinkedIn.</p>
              <div className="flex gap-2">
                <span className="text-xs font-mono bg-[#a855f7]/20 text-[#a855f7] px-2 py-1 rounded">Google Ads</span>
                <span className="text-xs font-mono bg-[#a855f7]/20 text-[#a855f7] px-2 py-1 rounded">Meta Ads</span>
              </div>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#11081f] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-all flex flex-col justify-center">
              <Search className="w-10 h-10 text-[#a855f7] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Technical SEO</h3>
              <p className="text-muted-foreground mb-4">Dominating organic search results through deep technical audits, content clusters, and high-authority backlinks.</p>
              <div className="flex gap-2">
                <span className="text-xs font-mono bg-[#a855f7]/20 text-[#a855f7] px-2 py-1 rounded">On-Page</span>
                <span className="text-xs font-mono bg-[#a855f7]/20 text-[#a855f7] px-2 py-1 rounded">Off-Page</span>
              </div>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#11081f] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-all flex flex-col justify-center">
              <TrendingUp className="w-10 h-10 text-[#a855f7] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">CRO</h3>
              <p className="text-muted-foreground mb-4">Conversion Rate Optimization using heatmaps and A/B split testing to squeeze maximum revenue from existing traffic.</p>
              <div className="flex gap-2">
                <span className="text-xs font-mono bg-[#a855f7]/20 text-[#a855f7] px-2 py-1 rounded">A/B Testing</span>
                <span className="text-xs font-mono bg-[#a855f7]/20 text-[#a855f7] px-2 py-1 rounded">Heatmaps</span>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Marketing FAQs</h2>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="How long does it take to see SEO results?" 
              answer="SEO is a long-term compound investment. Depending on the competitiveness of your industry, you can expect to see initial movement in 3 months, and significant, highly profitable organic traffic scaling up between months 6 to 12."
            />
            <FAQItem 
              question="What is a good ad budget to start with?" 
              answer="For algorithmic bidding platforms like Google and Meta to properly exit the 'learning phase', we recommend a minimum ad spend of $3,000 to $5,000 per month. This allows the AI enough data to find your most profitable audience."
            />
            <FAQItem 
              question="Will I receive marketing reports?" 
              answer="Absolutely. We build real-time custom Looker Studio dashboards for you. You will have 24/7 transparent access to every metric, click, and dollar spent, along with scheduled strategy calls."
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to scale?</h2>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group mt-8" })}>
              Request Marketing Audit 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}