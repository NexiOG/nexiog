import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";

export default function WebDesignPage() {
  return (
    <>
      <PageHero 
        title="Stunning UI/UX Design Custom-Built to Convert" 
        description="Crafting pixel-perfect, highly intuitive digital environments in Figma that capture brand authority and strategically convert visitors into clients." 
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
            <div className="text-5xl mb-6">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-4">Figma Prototypes</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">We create interactive, high-fidelity prototypes that allow you to test user flows before a single line of code is written.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">✨</div>
            <h3 className="text-2xl font-bold text-white mb-4">Brand Identity</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Strict adherence to your brand guidelines, ensuring perfect color tokens, typography, and spacing consistency.</p>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#050505] p-10 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_rgba(129,74,200,0.1)]"
          >
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Conversion UI</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Data-backed layouts structured specifically to guide users toward primary call-to-actions and sales funnels.</p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}