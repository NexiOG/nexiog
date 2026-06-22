import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHero 
        title="High-Performance Websites Built for Speed" 
        description="Lightning-fast websites and robust web portals engineered for speed, cross-device responsiveness, and maximum visitor engagement using Next.js." 
        primaryCtaText="Start Your Project" 
        primaryCtaLink="/contact" 
        hideButtons={false}
      />

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">100 Speed Score</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">We optimize core web vitals down to the millisecond, ensuring perfect Google Lighthouse performance scores.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Next.js Structures</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Harness the power of server-side rendering and static site generation to build robust edge architectures.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">📱</div>
            <h3 className="text-2xl font-bold text-white mb-4">Responsive Portals</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Fluid layouts built with Tailwind CSS designed to scale flawlessly from ultra-wide monitors to mobile viewports.</p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}