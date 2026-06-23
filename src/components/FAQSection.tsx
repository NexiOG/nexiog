"use client";

import { useState } from "react";
import Image from "next/image";
import { MotionDiv, MotionH2 } from "@/components/Motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ParallaxDivider } from "@/components/parallax-divider";

const FAQS = [
  {
    question: "What web development services do you offer?",
    answer: "We offer comprehensive web development services including custom website design, enterprise web applications, e-commerce solutions, and robust CMS platforms tailored to your business needs."
  },
  {
    question: "Do you provide website maintenance and support?",
    answer: "Yes, we provide ongoing maintenance, security updates, and technical support to ensure your website remains fast, secure, and fully operational at all times."
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer: "Absolutely. All our websites are designed with a mobile-first approach, ensuring they look and function perfectly across all devices, from smartphones to large desktop screens."
  },
  {
    question: "Will my website be optimized for search engines?",
    answer: "Yes, we build all websites following SEO best practices. This includes optimized code structure, fast loading speeds, and proper metadata to help you rank higher on search engines."
  },
  {
    question: "How long does it take to complete a website?",
    answer: "The timeline depends on the project's complexity. A standard corporate website typically takes 3-4 weeks, while complex e-commerce or custom software solutions may take 8-12 weeks."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Parallax Divider for FAQ */}
      <ParallaxDivider imageSrc="https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&w=1600&q=80" />

      <section id="faq" className="py-24 px-6 relative z-10 bg-white overflow-hidden">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8 font-space shadow-sm"
          >
            Frequently Asked Questions
          </MotionDiv>

          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,4vw,4rem)] md:text-[clamp(3.5rem,5vw,5rem)] font-extrabold text-slate-900 leading-[1] tracking-tighter mb-6 font-syne"
          >
            Get answers to <br/><span className="text-primary">common questions</span>
          </MotionH2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 relative z-10">
          
          {/* Left Column: Image */}
          <div className="flex flex-col items-center lg:items-start justify-center">
            {/* Left Image Component */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 hidden lg:block bg-slate-100">
              <Image 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80" 
                alt="Support Team" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              
              <Link href="/contact" className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl border border-slate-200 p-5 rounded-2xl shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group block hover:-translate-y-1">
                <p className="text-slate-900 font-bold mb-1 group-hover:text-accent transition-colors flex justify-between items-center font-space">
                  Quick Answers Here!
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-accent"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold text-sm transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +91 98765 43210
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`border transition-all duration-300 rounded-[1.5rem] overflow-hidden ${
                      isOpen ? "bg-white border-primary/30 shadow-md" : "bg-slate-50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button 
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none"
                    >
                      <h4 className={`font-bold pr-4 transition-colors font-syne ${isOpen ? "text-primary" : "text-slate-700 hover:text-slate-900"}`}>
                        {index + 1}. {faq.question}
                      </h4>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-accent text-white rotate-45" : "bg-slate-200 text-slate-500 group-hover:bg-accent group-hover:text-white"}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-6 px-6 md:px-8" : "max-h-0 opacity-0 px-6 md:px-8"}`}
                    >
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
