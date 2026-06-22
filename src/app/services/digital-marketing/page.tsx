import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";

export default function DigitalMarketingPage() {
  return (
    <>
      <PageHero 
        title="Dominate Google Rankings & Scale Revenue" 
        description="Data-driven technical SEO audits combined with aggressive multi-channel marketing campaigns to turn cold traffic into compounding profit." 
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
            <div className="text-5xl mb-6">📈</div>
            <h3 className="text-2xl font-bold text-white mb-4">Technical SEO</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Deep architectural audits to fix crawl errors, broken links, and metadata gaps that hold back your organic rankings.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Paid Acquisition</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Highly targeted Google and Meta ad campaigns engineered for maximum ROI and lowest cost-per-acquisition.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Analytics</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Custom dashboards tracking exact user behavior, heatmaps, and conversion funnels in real-time.</p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}