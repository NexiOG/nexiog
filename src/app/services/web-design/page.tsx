import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Palette, PenTool, Layout, Monitor, MousePointer2, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function WebDesignPage() {
  return (
    <>
      <PageHero 
        title="Award-Winning UI/UX Design" 
        description="We craft stunning, highly converting user interfaces and digital brand identities that leave a lasting impression on your audience." 
        primaryCtaText="View Our Portfolio" 
        primaryCtaLink="/portfolio" 
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
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200" 
              alt="UI/UX Web Design" 
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
              Design That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#a855f7]">Drives Conversion.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Aesthetics mean nothing if users can't navigate your site. We combine deep behavioral psychology with breathtaking modern aesthetics to create user experiences that feel intuitive, seamless, and incredibly premium.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Data-driven User Experience (UX) research",
                "High-fidelity UI prototyping in Figma",
                "Comprehensive design systems and brand guidelines",
                "Micro-interactions and advanced motion design"
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Design Philosophy</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Where art meets science in the digital world.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "Wireframing", desc: "Establishing the core structure and user flow before applying any visual styling." },
              { icon: Palette, title: "Visual Identity", desc: "Creating stunning color palettes, typography, and visual assets that reflect your brand." },
              { icon: MousePointer2, title: "Interactive Prototyping", desc: "Clickable Figma prototypes so you can feel the application before we write a single line of code." },
              { icon: Sparkles, title: "Motion Design", desc: "Subtle, smooth animations that guide the user's eye and make the interface feel alive." },
              { icon: Monitor, title: "Responsive UX", desc: "Ensuring the design language translates perfectly across mobile, tablet, and desktop viewports." },
              { icon: PenTool, title: "Design Systems", desc: "Building scalable component libraries so your brand remains perfectly consistent." },
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Design Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">How we turn abstract ideas into beautiful realities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent z-0" />
            
            {[
              { num: "01", title: "Research", desc: "Competitor analysis, mood boards, and understanding your target demographic." },
              { num: "02", title: "Wireframes", desc: "Low-fidelity structural layouts to map out the perfect user journey." },
              { num: "03", title: "High-Fidelity", desc: "Applying colors, typography, imagery, and pixel-perfect detailing in Figma." },
              { num: "04", title: "Handoff", desc: "Delivering a comprehensive design system to our engineering team for flawless execution." },
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Does your brand need a refresh?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Let our design team create a stunning visual experience that sets you apart from your competitors.</p>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group" })}>
              Start the Design Process 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}