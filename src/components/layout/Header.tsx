"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-4 left-0 w-full z-[100] pointer-events-none flex justify-center px-4">
      <div 
        className={`pointer-events-auto flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-7xl rounded-full px-6 md:px-8 ${
          isScrolled 
            ? "py-3 bg-transparent backdrop-blur-md border border-white/10 shadow-lg" 
            : "py-4 bg-transparent border border-transparent"
        }`}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src="/video/image-removebg-preview.png" alt="NexiOG Icon" className="h-8 md:h-10 w-auto object-contain" />
          <img src="/video/image-removebg-preview (1).png" alt="NexiOG Technologies" className="h-5 md:h-7 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          <ul className="flex space-x-10 items-center">
            <li className="py-2"><Link href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Home</Link></li>
            <li className="py-2"><Link href="/about" className="text-sm font-medium text-white/90 hover:text-white transition-colors">About</Link></li>
            
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
            <li className="py-2"><Link href="/blog" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Blog</Link></li>
            <li className="py-2"><Link href="/contact" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Contact</Link></li>
          </ul>

          <Link href="/contact" className={buttonVariants({ variant: "default" })}>
            Get a Proposal
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden z-50 p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#050505]/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 pointer-events-auto overflow-y-auto pb-10"
          >
            <nav className="flex flex-col gap-6 items-center text-center mt-10">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white/90 hover:text-primary transition-colors">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white/90 hover:text-primary transition-colors">About</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white/90 hover:text-primary transition-colors">Services</Link>
              <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white/90 hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white/90 hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white/90 hover:text-primary transition-colors">Contact</Link>
              
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`${buttonVariants({ variant: "default" })} mt-6 w-full max-w-xs`}>
                Get a Proposal
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
