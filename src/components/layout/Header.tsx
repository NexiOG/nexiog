"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { buttonVariants } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pointer-events-none flex justify-center">
      <div 
        className={`pointer-events-auto flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] w-full rounded-none px-8 ${
          isScrolled 
            ? "py-4 bg-transparent border-transparent" 
            : "py-6 bg-transparent border-transparent"
        }`}
      >
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2">
        <img src="/video/image-removebg-preview.png" alt="NexiOG Icon" className="h-10 w-auto object-contain" />
        <img src="/video/image-removebg-preview%20(1).png" alt="NexiOG Technologies" className="h-7 w-auto object-contain" />
      </Link>

      {/* Navigation matching the mockup */}
      <nav className="hidden lg:flex items-center gap-12">
        <ul className="flex space-x-10 items-center">
          <li className="py-2"><Link href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Home</Link></li>
          
          {/* Services Dropdown */}
          <li className="relative group">
            <div className="text-sm font-medium text-white/90 hover:text-white transition-colors cursor-pointer py-2">Services</div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
              <Link href="/services" className="px-4 py-3 text-sm font-semibold text-primary hover:text-white hover:bg-white/10 rounded-lg transition-colors border-b border-white/5 mb-1">All Services</Link>
              <Link href="/services/web-development" className="px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-colors">Web Development</Link>
              <Link href="/services/web-design" className="px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-colors">Web Design</Link>
              <Link href="/services/app-development" className="px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-colors">App Development</Link>
              <Link href="/services/digital-marketing" className="px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-colors">SEO & Marketing</Link>
              <Link href="/services/software-development" className="px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-colors">Software Development</Link>
              <Link href="/services/it-solutions" className="px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-colors">IT Solutions</Link>
            </div>
          </li>
          
          <li className="py-2"><Link href="/portfolio" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Portfolio</Link></li>
          <li className="py-2"><Link href="/about" className="text-sm font-medium text-white/90 hover:text-white transition-colors">About</Link></li>
          <li className="py-2"><Link href="/blog" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Blog</Link></li>
          <li className="py-2"><Link href="/contact" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Contact</Link></li>
        </ul>

        {/* CTA Button matching the mockup */}
        <Link href="/contact" className={buttonVariants({ variant: "default" })}>
          Get a Proposal
        </Link>
      </nav>
      </div>
    </header>
  );
}
