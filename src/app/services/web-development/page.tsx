import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Code, Zap, Server, MonitorSmartphone, LayoutTemplate, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHero 
        title="High-Performance Websites Built for Speed" 
        description="Lightning-fast websites and robust web portals engineered for speed, cross-device responsiveness, and maximum visitor engagement." 
        primaryCtaText="Start Your Project" 
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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
              alt="Web Development" 
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
              We Don't Just Build Websites. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#a855f7]">We Build Digital Experiences.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              In today's digital landscape, your website is your most powerful asset. We specialize in developing custom, highly optimized web applications that captivate users and convert visitors into loyal customers. By leveraging modern frameworks like Next.js and React, we ensure your site is fast, secure, and scalable.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Pixel-perfect responsive design across all devices",
                "Lightning-fast load times for better SEO",
                "Secure and scalable architectures",
                "Seamless integration with third-party APIs"
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to dominate your market online.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "100 Speed Score", desc: "We optimize core web vitals down to the millisecond, ensuring perfect Google Lighthouse performance scores." },
              { icon: Code, title: "Next.js Architecture", desc: "Harness the power of server-side rendering and static site generation to build robust edge architectures." },
              { icon: MonitorSmartphone, title: "Responsive Portals", desc: "Fluid layouts built with Tailwind CSS designed to scale flawlessly from ultra-wide monitors to mobile viewports." },
              { icon: Database, title: "CMS Integration", desc: "Seamless integration with Headless CMS platforms like Sanity or Strapi so your marketing team can easily update content." },
              { icon: Server, title: "Backend API Dev", desc: "Custom REST and GraphQL APIs designed to securely connect your front-end with robust databases and third-party services." },
              { icon: LayoutTemplate, title: "E-Commerce", desc: "Scalable online stores engineered to handle massive traffic spikes and deliver frictionless checkout experiences." },
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Development Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A proven methodology for delivering exceptional digital products on time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent z-0" />
            
            {[
              { num: "01", title: "Discovery", desc: "We analyze your business goals, target audience, and technical requirements." },
              { num: "02", title: "Design", desc: "Creating wireframes, UI/UX mockups, and interactive prototypes for approval." },
              { num: "03", title: "Development", desc: "Writing clean, scalable code and building out the front-end and back-end systems." },
              { num: "04", title: "Launch", desc: "Rigorous QA testing, deployment, and post-launch performance monitoring." },
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