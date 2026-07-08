"use client";

import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, Layers, ShieldCheck, Zap, Globe, Cpu, ArrowRight, CheckCircle2, ChevronDown, Rocket, SmartphoneNfc } from "lucide-react";
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

export default function AppDevelopmentPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero 
        title="Native Mobile App Engineering" 
        description="We design and build award-winning iOS and Android applications that dominate the App Store charts and drive massive business growth." 
        primaryCtaText="Discuss Your App Idea" 
        primaryCtaLink="/contact" 
        hideButtons={false}
      />

      {/* 2. Why Choose Us - Image Showcase Layout */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Build With Our Mobile Team?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We don't just write code; we craft mobile experiences that feel like magic.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
              <div className="relative h-64 rounded-3xl overflow-hidden border border-[#a855f7]/20 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="iOS Dev" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white">Flawless 60FPS Performance</h3>
              <p className="text-muted-foreground">Mobile users have zero patience for lag. We strictly optimize render cycles and memory management so your app feels incredibly smooth and responsive, even on older devices.</p>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col gap-6">
              <div className="relative h-64 rounded-3xl overflow-hidden border border-[#a855f7]/20 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" alt="App UI" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white">Apple & Google Compliance</h3>
              <p className="text-muted-foreground">App Store rejections cost time and money. Our team knows the Human Interface Guidelines and Material Design specs inside-out, guaranteeing swift, successful app store approvals.</p>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-6">
              <div className="relative h-64 rounded-3xl overflow-hidden border border-[#a855f7]/20 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Data Sync" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white">Offline-First Architectures</h3>
              <p className="text-muted-foreground">Your app should work seamlessly even in a subway tunnel. We engineer robust local databases (SQLite/Realm) that automatically sync with your cloud backend when a connection is restored.</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 3. The Mobile Bento Box Grid */}
      <section className="py-24 px-6 relative z-10 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Mobile Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to launch a billion-dollar application.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
            {/* Top Wide Card */}
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-3 bg-gradient-to-r from-[#0a0515] to-[#1a0b2e] p-10 rounded-3xl border border-[#a855f7]/30 flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div className="max-w-2xl">
                <div className="w-16 h-16 bg-[#a855f7]/20 rounded-2xl flex items-center justify-center mb-6">
                  <SmartphoneNfc className="w-8 h-8 text-[#a855f7]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Native & Cross-Platform</h3>
                <p className="text-muted-foreground text-lg">We build pure native apps using Swift and Kotlin for maximum performance, or we utilize React Native and Flutter to deploy to both platforms simultaneously, cutting your time-to-market in half.</p>
              </div>
              <div className="hidden lg:block relative w-64 h-full">
                {/* Abstract graphic representation */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-48 border-4 border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(168,85,247,0.2)]"></div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-48 border-4 border-[#a855f7]/50 rounded-[2rem]"></div>
              </div>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#05020a] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/50 transition-colors flex flex-col justify-center">
              <ShieldCheck className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Biometric Auth</h3>
              <p className="text-muted-foreground text-sm">FaceID and fingerprint integration for bank-grade security and UX.</p>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#05020a] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/50 transition-colors flex flex-col justify-center">
              <Globe className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Push Notifications</h3>
              <p className="text-muted-foreground text-sm">Deeply segmented APNs and FCM integrations to boost retention.</p>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-[#05020a] p-8 rounded-3xl border border-white/5 hover:border-[#a855f7]/50 transition-colors flex flex-col justify-center">
              <Cpu className="w-8 h-8 text-[#a855f7] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">IoT Integration</h3>
              <p className="text-muted-foreground text-sm">Bluetooth Low Energy (BLE) and hardware syncing.</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 4. Development Workflow (Vertical Timeline) */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Engineering Process</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#a855f7]/30 before:to-transparent">
            {[
              { num: "01", title: "Discovery & Prototyping", desc: "We map out user journeys and build a clickable Figma prototype." },
              { num: "02", title: "Frontend Architecture", desc: "Setting up the app shell, navigation routers, and state management." },
              { num: "03", title: "Backend API & Sync", desc: "Wiring the UI to scalable cloud databases and configuring offline syncing." },
              { num: "04", title: "TestFlight & Deployment", desc: "Beta testing via TestFlight and pushing the final build to the App Store." },
            ].map((step, idx) => (
              <MotionDiv key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-[#a855f7] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10">
                  {step.num}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-[#11081f] border border-[#a855f7]/20">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 px-6 relative z-10 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Mobile Dev FAQs</h2>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="Should I build Native or Cross-Platform (React Native)?" 
              answer="If you require extremely heavy graphics, complex animations, or deep hardware integration (like advanced AR), Native (Swift/Kotlin) is best. If you have a standard SaaS, e-commerce, or utility app, React Native is highly recommended as it cuts development time and cost in half while providing near-native performance."
            />
            <FAQItem 
              question="How much does a custom app cost to develop?" 
              answer="Pricing varies wildly based on features. A simple MVP might range from $15k-$30k, while complex enterprise apps with custom backends, real-time syncing, and extensive user roles can be $50k-$150k+. We provide exact transparent quotes after our Discovery phase."
            />
            <FAQItem 
              question="Will you help submit the app to the App Store?" 
              answer="Yes! We handle the entire deployment process. We deal with Apple Developer accounts, Google Play Console, provisioning profiles, privacy policies, and the entire review process."
            />
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a0b2e] to-[#05020a] rounded-[3rem] p-12 md:p-20 text-center border border-[#a855f7]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/tech-hero-bg.png')] opacity-10 mix-blend-overlay object-cover" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Have an App Idea?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Partner with our award-winning mobile engineers to bring your vision to life.</p>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group" })}>
              Talk to an Engineer 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}