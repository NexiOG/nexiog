import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";

export default function ItSolutionsPage() {
  return (
    <>
      <PageHero 
        title="Ironclad Cloud Security & 99.9% Uptime" 
        description="Securing your entire digital ecosystem with automated CI/CD pipelines, robust AWS cloud migration, and ironclad cybersecurity protocols." 
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
            <div className="text-5xl mb-6">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Proactive threat monitoring, automated firewalls, and regular penetration testing to secure your assets.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">☁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">AWS Migration</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Smoothly transitioning legacy on-premise servers to scalable, auto-healing AWS cloud environments.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">🔄</div>
            <h3 className="text-2xl font-bold text-white mb-4">CI/CD Pipelines</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Automated testing and deployment workflows ensuring bug-free, zero-downtime application updates.</p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}