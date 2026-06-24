import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/Motion";
import FloatingSocials from "@/components/FloatingSocials";

export const metadata = {
  title: 'IT Solutions - Coming Soon | NexiOG Technologies',
  description: 'Our IT Solutions services are currently being revamped to serve you better. Stay tuned for cutting-edge cloud security and infrastructure offerings.',
};

export default function ItSolutionsPage() {
  return (
    <>
      <FloatingSocials />
      <div className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/it_solutions_realistic.png"
            alt="IT Solutions Background"
            fill
            className="object-cover opacity-30 mix-blend-luminosity scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-[#e34a2e] text-sm font-bold tracking-[0.2em] uppercase">IT Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e34a2e] to-[#814ac8]">Soon</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We are currently engineering a robust suite of IT infrastructure and security solutions. Our new offerings will be available shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/services"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-md"
              >
                Explore Other Services
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#e34a2e] text-white font-semibold hover:bg-[#c63d24] transition-all shadow-[0_0_20px_rgba(227,74,46,0.3)] hover:shadow-[0_0_40px_rgba(227,74,46,0.5)]"
              >
                Contact Us
              </Link>
            </div>
          </MotionDiv>
        </div>
      </div>
    </>
  );
}