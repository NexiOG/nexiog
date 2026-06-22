import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <PageHero 
        title="Custom Software Built to Automate Workflows" 
        description="Architecting custom enterprise SaaS systems, complex APIs, and automated tools designed explicitly around your corporate operational workflows." 
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
            <div className="text-5xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Workflow Automation</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Replacing manual, error-prone tasks with automated scripts and scheduled cron jobs.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">🔗</div>
            <h3 className="text-2xl font-bold text-white mb-4">API Integrations</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Connecting disparate third-party systems to allow seamless data flow across your entire software stack.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">☁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">SaaS Architecture</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Building scalable multi-tenant databases with strict data isolation and scalable pricing tiers.</p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}