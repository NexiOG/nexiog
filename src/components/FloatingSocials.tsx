"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socials = [
  {
    name: "Call Us",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    href: "tel:+917980888810",
    color: "group-hover:text-green-400 group-hover:bg-green-400/10 border-green-400/20",
  },
  {
    name: "WhatsApp",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    href: "https://wa.me/917980888810",
    color: "group-hover:text-green-500 group-hover:bg-green-500/10 border-green-500/20",
  },
  {
    name: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    href: "#",
    color: "group-hover:text-blue-500 group-hover:bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    href: "#",
    color: "group-hover:text-pink-500 group-hover:bg-pink-500/10 border-pink-500/20",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 1-4.82z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    href: "#",
    color: "group-hover:text-blue-400 group-hover:bg-blue-400/10 border-blue-400/20",
  },
  {
    name: "X (Twitter)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
    href: "#",
    color: "group-hover:text-white group-hover:bg-white/10 border-white/20",
  }
];

export default function FloatingSocials() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-3"
    >
      <div className="bg-[#0a0514]/80 backdrop-blur-md border border-white/10 p-2 rounded-full shadow-2xl flex flex-col gap-3 relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-20 before:pointer-events-none">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target={social.href.startsWith("tel") || social.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`group relative w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-transparent text-white/70 transition-all duration-300 ${social.color}`}
            aria-label={social.name}
          >
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {social.icon}
            </div>
            
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-2.5 py-1.5 bg-[#150a2f] border border-white/10 text-white text-xs font-semibold rounded-md opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
