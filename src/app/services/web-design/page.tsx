"use client";

import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Palette, PenTool, Layout, Monitor, Sparkles, ArrowRight, CheckCircle2, ChevronDown, Wand2 } from "lucide-react";
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

export default function WebDesignPage() {
  return (
    <>
      <PageHero 
        title="UI/UX & Web Design" 
        description="We craft stunning, highly converting user interfaces and digital brand identities that leave a lasting impression on your audience." 
        primaryCtaText="View Our Portfolio" 
        primaryCtaLink="/portfolio" 
        hideButtons={false}
      />

      {/* 2. Why Choose Us - Creative Grid Layout */}
      <section className="py-24 px-6 relative z-10 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Our Designs Convert.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Aesthetics are useless without strategy. Our design philosophy marries breathtaking visuals with deep behavioral psychology. We map out exact user journeys, reducing cognitive load and guiding visitors effortlessly toward the checkout or contact button.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> Data-driven wireframing</li>
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> Advanced micro-interactions & motion</li>
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> Pixel-perfect Figma handoffs</li>
              </ul>
            </div>

            {/* Creative Visual Side (Overlapping images) */}
            <div className="lg:col-span-7 relative h-[500px] hidden md:block">
              <MotionDiv 
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="absolute top-0 right-0 w-[60%] h-[300px] rounded-3xl overflow-hidden border-4 border-background shadow-2xl z-10"
              >
                <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" alt="UI Design" fill className="object-cover" />
              </MotionDiv>
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 w-[60%] h-[300px] rounded-3xl overflow-hidden border-4 border-background shadow-2xl z-20"
              >
                <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" alt="UX Wireframes" fill className="object-cover" />
              </MotionDiv>
              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#a855f7]/20 rounded-full blur-[100px] z-0" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bento Features Grid */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Design Arsenal</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
            {/* Box 1 */}
            <MotionDiv initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:col-span-2 bg-[#11081f] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-colors flex flex-col justify-center">
              <Palette className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Design Systems</h3>
              <p className="text-muted-foreground text-sm">We don't just design pages; we build highly scalable, reusable component libraries (colors, typography, buttons) so your brand remains flawlessly consistent.</p>
            </MotionDiv>
            {/* Box 2 */}
            <MotionDiv initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2 bg-[#11081f] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/40 transition-colors flex flex-col justify-center">
              <Layout className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Interactive Prototypes</h3>
              <p className="text-muted-foreground text-sm">Clickable Figma prototypes allow you and your stakeholders to 'feel' the website and approve the user flows before a single line of code is ever written.</p>
            </MotionDiv>
            {/* Box 3, 4, 5 */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-[#a855f7] to-[#7c3aed] p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <Sparkles className="w-8 h-8 text-white mb-2" />
              <h3 className="text-lg font-bold text-white">Motion Design</h3>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-2 bg-[#11081f] p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
              <Monitor className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Omni-channel Responsive</h3>
              <p className="text-muted-foreground text-sm">Every layout is meticulously designed for mobile, tablet, and ultra-wide desktops.</p>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-[#11081f] p-8 rounded-3xl border border-white/5 flex flex-col justify-center items-center text-center">
              <Wand2 className="w-8 h-8 text-[#a855f7] mb-2" />
              <h3 className="text-lg font-bold text-white">Branding</h3>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 px-6 relative z-10 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Design FAQs</h2>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="What design software do you use?" 
              answer="We use Figma as our primary design tool. It allows for real-time collaboration, meaning you can log in, see us designing in real-time, and leave comments directly on specific elements."
            />
            <FAQItem 
              question="Do you provide the source files?" 
              answer="Absolutely. Upon project completion and final payment, ownership of all design assets and the complete Figma source files are fully transferred to your company."
            />
            <FAQItem 
              question="Do you also write the copy/text for the website?" 
              answer="We offer UX copywriting as an add-on service. If you prefer to provide your own text, we will design with realistic placeholder content and swap it out once your copy is ready."
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Does your brand need a refresh?</h2>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group mt-8" })}>
              Start the Design Process 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}