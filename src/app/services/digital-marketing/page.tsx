import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Target, TrendingUp, Search, Mail, BarChart, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function DigitalMarketingPage() {
  return (
    <>
      <PageHero 
        title="Data-Driven Digital Marketing" 
        description="Explosive growth strategies combining SEO, targeted ads, and conversion optimization to dominate your market." 
        primaryCtaText="Get a Free Audit" 
        primaryCtaLink="/contact" 
        hideButtons={false}
      />

      {/* 2. Overview Section */}
      <section className="py-24 px-6 relative z-10 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10"
          >
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
              alt="Digital Marketing" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#a855f7]/20 to-transparent mix-blend-overlay" />
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Stop Guessing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#a855f7]">Start Converting.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A great product means nothing if nobody knows it exists. Our performance marketing team uses data science, compelling creative, and algorithmic bidding strategies to acquire high-value customers at the lowest possible CPA (Cost Per Acquisition).
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Technical and On-Page SEO optimization",
                "High-ROAS Google and Meta advertising campaigns",
                "Automated email marketing sequences",
                "Advanced tracking and conversion rate optimization (CRO)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#a855f7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>
      </section>

      {/* 3. Core Features Grid */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Growth Channels</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Omnichannel strategies designed for exponential ROI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Search Engine Optimization", desc: "Climb to the top of Google with technical SEO, high-authority link building, and targeted content." },
              { icon: Target, title: "Pay-Per-Click Ads", desc: "Hyper-targeted campaigns on Google Search and Display networks that capture high-intent buyers." },
              { icon: Users, title: "Social Media Advertising", desc: "Thumb-stopping creative and sophisticated retargeting funnels on Meta, LinkedIn, and TikTok." },
              { icon: Mail, title: "Email Automation", desc: "Segmented email flows that nurture leads, recover abandoned carts, and boost customer LTV." },
              { icon: TrendingUp, title: "Conversion Optimization", desc: "A/B testing landing pages and funnels to maximize the revenue generated from your existing traffic." },
              { icon: BarChart, title: "Advanced Analytics", desc: "Custom Looker Studio dashboards giving you real-time visibility into every marketing dollar spent." },
            ].map((feature, idx) => (
              <MotionDiv 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0a0515] p-8 rounded-3xl border border-white/5 hover:-translate-y-2 hover:border-[#a855f7]/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#a855f7]/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#a855f7]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow / Process */}
      <section className="py-24 px-6 relative z-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Growth Framework</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A scientific approach to scaling your revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent z-0" />
            
            {[
              { num: "01", title: "Audit", desc: "Deep diving into your current analytics, ad accounts, and competitor landscape." },
              { num: "02", title: "Strategy", desc: "Building a custom, multi-channel media plan and projecting target ROI." },
              { num: "03", title: "Execution", desc: "Creating ads, building landing pages, and launching campaigns across all networks." },
              { num: "04", title: "Scale", desc: "Relentless A/B testing and algorithmic budget scaling for winning campaigns." },
            ].map((step, idx) => (
              <MotionDiv 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                <div className="w-24 h-24 rounded-full bg-[#05020a] border-2 border-[#a855f7]/30 flex items-center justify-center text-3xl font-black text-[#a855f7] mb-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a0b2e] to-[#05020a] rounded-[3rem] p-12 md:p-20 text-center border border-[#a855f7]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/tech-hero-bg.png')] opacity-10 mix-blend-overlay object-cover" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to scale?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Let our growth team analyze your current marketing stack and show you exactly where you're leaving money on the table.</p>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group" })}>
              Request Marketing Audit 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}