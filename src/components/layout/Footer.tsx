'use client';
import Link from 'next/link';
import Image from 'next/image';
import Particles from '@/components/Particles';

export default function Footer() {
  return (
    <footer id="footer" className="relative z-10 w-full overflow-hidden mt-20 text-white min-h-[60vh]">
      {/* Hero-like background with dissolving effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-black"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 250px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 250px)'
        }}
      >
        <Particles />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] rounded-full mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(129,74,200,0.3)_0%,rgba(0,0,0,0)_60%)]" />
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-24 pb-16 gap-16 border-b border-white/10">
            {/* Left Column - Branding */}
            <div className="flex flex-col">
              <Link href="/" className="flex items-center gap-3 mb-8 w-fit">
                <img src="/video/image-removebg-preview.png" alt="NexiOG Icon" className="h-16 w-auto object-contain" />
                <img src="/video/image-removebg-preview%20(1).png" alt="NexiOG Technologies" className="h-12 w-auto object-contain" />
              </Link>
              <p className="text-white/70 text-lg leading-relaxed max-w-sm">
                Because if your digital presence can't handle the future, neither will your business. We engineer the tech, you capture the market.
              </p>
            </div>

            {/* Right Column - Demo/CTA */}
            <div className="flex flex-col lg:pl-16 lg:border-l border-white/10">
              <span className="text-[#e34a2e] text-xs font-black tracking-[0.2em] uppercase mb-4">
                Start your project
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
                Request a Proposal
              </h2>
              <form className="relative flex items-center w-full max-w-md group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="w-full bg-white text-black font-medium px-6 py-5 rounded-full pr-16 focus:outline-none focus:ring-4 focus:ring-[#e34a2e]/30 transition-all placeholder:text-gray-500"
                />
                <button type="submit" className="absolute right-2 top-2 bottom-2 aspect-square bg-[#e34a2e] hover:bg-[#c63d24] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(227,74,46,0.3)] hover:shadow-[0_0_40px_rgba(227,74,46,0.5)] hover:-translate-y-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
            <div>
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services/web-development" className="text-white/60 hover:text-white transition-colors text-sm">Web Development</Link></li>
                <li><Link href="/services/app-development" className="text-white/60 hover:text-white transition-colors text-sm">App Development</Link></li>
                <li><Link href="/services/software-development" className="text-white/60 hover:text-white transition-colors text-sm">Custom Software</Link></li>
                <li><Link href="/services/digital-marketing" className="text-white/60 hover:text-white transition-colors text-sm">SEO & Marketing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link href="/portfolio" className="text-white/60 hover:text-white transition-colors text-sm">Portfolio</Link></li>
                <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors text-sm">Insights</Link></li>
                <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Use</Link></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Social</h4>
              <ul className="space-y-3">
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">Twitter</a></li>
                <li><a href="https://www.facebook.com/share/192uGvjy7Q/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">Facebook</a></li>
                <li><a href="https://www.instagram.com/nexiog.technologies?igsh=MXgyZHlvc3A1Mnp5aA==" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">Instagram</a></li>
                <li><a href="https://wa.me/917980888810" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="flex justify-center items-center py-8 border-t border-white/10 text-white/40 text-sm font-medium text-center">
            <span>&copy; 2026 NexiOG Technologies. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
