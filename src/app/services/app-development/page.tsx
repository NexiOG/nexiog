import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";

export default function AppDevelopmentPage() {
  return (
    <>
      <PageHero 
        title="Sleek Mobile Apps for iOS and Android" 
        description="Sleek, powerful mobile applications built on cross-platform frameworks to put your enterprise services directly into your customer’s pocket." 
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
            <div className="text-5xl mb-6">📱</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cross-Platform</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Native-feeling apps deployed seamlessly across both iOS and Android from a single robust codebase.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Offline Support</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Advanced caching layers ensuring your app remains functional and fast even in low-connectivity areas.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure APIs</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Military-grade encryption securing all data transmissions between the mobile device and your cloud backend.</p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}