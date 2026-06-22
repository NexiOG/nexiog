import PageHero from "@/components/PageHero";
import { SERVICES } from "@/config/services";
import { MotionDiv, MotionH2 } from "@/components/Motion";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";
import { buttonVariants } from "@/components/ui/button";

const FRAMER_IMAGES = [
  "https://framerusercontent.com/images/wZ4QywsLlJwC6C7w4D9W92Oqug6a6e.jpg",
  "https://framerusercontent.com/images/CDxS3e61UksiMm0oJGi80w7vEA5e73.jpg",
  "https://framerusercontent.com/images/JK0fwwNQempKT9E5v6SvIj81ag6177.jpg",
  "https://framerusercontent.com/images/TbStOE6QtWLglNJaSOxQJqyQJOEe3e8.jpg",
  "https://framerusercontent.com/images/wZ4QywsLlJwC6C7w4D9W92Oqug6a6e.jpg",
  "https://framerusercontent.com/images/CDxS3e61UksiMm0oJGi80w7vEA5e73.jpg",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Our Services" 
        description="Core digital services engineered for compounding growth. NexiOG Technologies designs, builds, ranks, automates, and secures the systems that move your business forward."
      />

      {/* Services Grid - Nexto Style */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
            What We Do
          </span>
          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight"
          >
            Premium Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solutions</span>
          </MotionH2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <MotionDiv
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href={service.href}
                className="group flex flex-col h-full bg-[#050505] border border-white/5 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Nexto Style Floating Icon */}
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="text-2xl font-bold">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/60 text-[17px] leading-relaxed flex-grow mb-8">
                  {service.description}
                </p>
                
                <div className="mt-auto w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 transform group-hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Process Timeline - Nexto Style */}
      <section className="py-24 px-6 bg-[#0a0514] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
              Working Process
            </span>
            <MotionH2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight"
            >
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Execute</span>
            </MotionH2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business goals and technical requirements." },
              { step: "02", title: "Architecture", desc: "Designing scalable cloud architectures and user journeys." },
              { step: "03", title: "Development", desc: "Agile sprints with weekly transparent code commits." },
              { step: "04", title: "Deployment", desc: "Launch, monitoring, and continuous scaling optimization." },
            ].map((process, i) => (
              <MotionDiv 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="w-24 h-24 mx-auto bg-[#050505] border-2 border-primary/30 rounded-full flex items-center justify-center text-3xl font-black text-white relative z-10 shadow-[0_0_30px_rgba(129,74,200,0.2)] mb-8">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{process.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Deep Dive */}
      <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(129,74,200,0.1)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionDiv initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
                Why Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Not Just Code. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Business Solutions.</span>
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                We believe that technology should be a multiplier, not a cost center. Every service we provide is rooted in a deep understanding of your business objectives. Whether it's a mobile app to increase customer retention or an SEO campaign to drive organic revenue, we engineer for outcomes.
              </p>
              <ul className="space-y-4 mb-10">
                {["Dedicated Tech Leads for Every Project", "Weekly Sprint Reviews & Transparent Reporting", "Scalable Architectures Ready for Millions of Users", "Post-Launch Maintenance & Growth Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Magnetic>
                <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "px-10" })}>
                  Discuss Your Needs
                </Link>
              </Magnetic>
            </MotionDiv>
            
            <MotionDiv initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent mix-blend-multiply" />
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  );
}
