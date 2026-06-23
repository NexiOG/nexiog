import { SERVICES } from "@/config/services";
import { PORTFOLIO_PROJECTS } from "@/config/portfolio";
import { METRICS } from "@/config/metrics";
import { METHODOLOGY } from "@/config/methodology";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv, MotionH1, MotionH2, MotionP } from "@/components/Motion";
import { SectionDivider } from "@/components/section-divider";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import { buttonVariants } from "@/components/ui/button";

const TECH_STACK = [
  { name: "React", src: "/tech-icons/react.svg" },
  { name: "Next.js", src: "/tech-icons/nextdotjs.svg" },
  { name: "Tailwind CSS", src: "/tech-icons/tailwindcss.svg" },
  { name: "shadcn/ui", src: "/tech-icons/shadcnui.svg" },
  { name: "Radix UI", src: "/tech-icons/radixui.svg" },
  { name: "CSS3", src: "/tech-icons/css3.svg" },
  { name: "React Query", src: "/tech-icons/reactquery.svg" },
  { name: "Framer Motion", src: "/tech-icons/framer.svg" },
  { name: "GSAP", src: "/tech-icons/greensock.svg" },
  { name: "Node.js", src: "/tech-icons/nodedotjs.svg" },
  { name: "TypeScript", src: "/tech-icons/typescript.svg" },
  { name: "Bun", src: "/tech-icons/bun.svg" },
  { name: "GraphQL", src: "/tech-icons/graphql.svg" },
  { name: "tRPC", src: "/tech-icons/trpc.svg" },
  { name: "Express", src: "/tech-icons/express.svg" },
  { name: "Fastify", src: "/tech-icons/fastify.svg" },
  { name: "PostgreSQL", src: "/tech-icons/postgresql.svg" },
  { name: "MySQL", src: "/tech-icons/mysql.svg" },
  { name: "MongoDB", src: "/tech-icons/mongodb.svg" },
  { name: "Firebase", src: "/tech-icons/firebase.svg" },
  { name: "Redis", src: "/tech-icons/redis.svg" },
  { name: "Clerk", src: "/tech-icons/clerk.svg" },
  { name: "Auth0", src: "/tech-icons/auth0.svg" },
  { name: "JWT", src: "/tech-icons/jsonwebtokens.svg" },
  { name: "AWS", src: "/tech-icons/amazonaws.svg" },
  { name: "Vercel", src: "/tech-icons/vercel.svg" },
  { name: "Docker", src: "/tech-icons/docker.svg" },
  { name: "Kubernetes", src: "/tech-icons/kubernetes.svg" },
  { name: "Terraform", src: "/tech-icons/terraform.svg" },
  { name: "Pulumi", src: "/tech-icons/pulumi.svg" },
  { name: "GitHub Actions", src: "/tech-icons/githubactions.svg" },
  { name: "Sentry", src: "/tech-icons/sentry.svg" },
  { name: "Grafana", src: "/tech-icons/grafana.svg" },
  { name: "Prometheus", src: "/tech-icons/prometheus.svg" }
];

const FRAMER_IMAGES = [
  "https://framerusercontent.com/images/wZ4QywsLlJwC6C7w4D9W92Oqug6a6e.jpg",
  "https://framerusercontent.com/images/CDxS3e61UksiMm0oJGi80w7vEA5e73.jpg",
  "https://framerusercontent.com/images/JK0fwwNQempKT9E5v6SvIj81ag6177.jpg",
  "https://framerusercontent.com/images/TbStOE6QtWLglNJaSOxQJqyQJOEe3e8.jpg",
  "https://framerusercontent.com/images/wZ4QywsLlJwC6C7w4D9W92Oqug6a6e.jpg",
  "https://framerusercontent.com/images/CDxS3e61UksiMm0oJGi80w7vEA5e73.jpg",
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden bg-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
          style={{ WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
        >
          <source src="/video/background%203d.mp4" type="video/mp4" />
        </video>
        
        {/* No additional background elements, only the video */}

        <div className="w-full max-w-7xl mx-auto relative z-10 pointer-events-none mt-12 md:mt-0">
          <div className="max-w-4xl mx-auto mt-4 pointer-events-none text-center">
            <MotionH1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[clamp(2.2rem,8vw,5.5rem)] font-extrabold leading-[1.05] mb-6 tracking-tighter text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-b md:from-white md:via-white/90 md:to-[#a855f7] drop-shadow-xl md:drop-shadow-[0_0_40px_rgba(124,58,237,0.3)]"
            >
              We Engineer the Tech. <span className="block md:inline mt-2 md:mt-0">You Capture the Market</span>
            </MotionH1>
            <MotionP 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[clamp(1rem,1.5vw,1.25rem)] text-white drop-shadow-lg mb-10 max-w-2xl mx-auto leading-[1.8] font-medium tracking-normal px-4"
            >
              From Concept to Launch: We Build High-Performance Websites and Custom Software Solutions That Drive Business Growth.
            </MotionP>
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pointer-events-auto px-6"
            >
              {/* Primary 3D Button */}
              <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "group relative overflow-hidden" })}>
                <span className="relative flex items-center gap-2 drop-shadow-md tracking-wide">
                  Get in touch
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </Link>

              {/* Secondary 3D Glass Button */}
              <Link href="#services" className={buttonVariants({ variant: "secondary", size: "lg", className: "group relative overflow-hidden" })}>
                <span className="relative flex items-center gap-2 tracking-wide text-white/90 group-hover:text-white transition-colors">
                  View services
                </span>
              </Link>
            </MotionDiv>
          </div>
        </div>

        {/* Tech Stack Banner inside Hero */}
        <div className="absolute bottom-0 left-0 w-full bg-transparent py-6 overflow-hidden flex whitespace-nowrap z-20">
          <div className="flex animate-[scroll_90s_linear_infinite] items-center w-max hover:[animation-play-state:paused]">
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div key={i} className="flex flex-shrink-0 items-center justify-center h-12 px-5 rounded-full bg-white/5 border border-white/10 group transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-default mx-3 gap-3">
                {tech.src && (
                  <img 
                    src={tech.src} 
                    alt={tech.name} 
                    title={tech.name}
                    className="w-6 h-6 transition-all duration-300 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 drop-shadow-sm" 
                  />
                )}
                <span className="text-sm font-semibold text-white/80 tracking-wide group-hover:text-white transition-all duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative z-10">
        <div className="flex flex-col items-center justify-center mb-24 relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120px] bg-[#3b2166]/30 blur-[80px] rounded-[100%] pointer-events-none" />
          
          {/* Futuristic Badge */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-6 py-2.5 rounded-full border border-[#4b3375] bg-[#150a24]/50 text-[#a78bfa] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm"
          >
            Next-Gen Capabilities
          </MotionDiv>
          
          {/* Glowing Header */}
          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(3.5rem,6vw,6rem)] font-extrabold text-center tracking-tighter leading-[1] text-white relative z-10"
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2e8f0] via-[#7e57c2] to-[#ce93d8]">Digital Services</span>
          </MotionH2>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <MotionDiv 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative w-full aspect-[4/3] rounded-[2rem] border border-white/10 bg-[#050505] p-2 hover-3d-shine shadow-2xl">
                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-black/50">
                      <Image 
                        src={service.mockupImage!} 
                        alt={service.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 hover:scale-105" 
                      />
                    </div>
                  </div>
                </MotionDiv>

                {/* Text Side */}
                <MotionDiv 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="w-full md:w-1/2 flex flex-col items-start"
                >
                  {/* Badge */}
                  <div className="px-4 py-1.5 rounded-lg border border-white/10 bg-transparent text-sm font-semibold text-white/90 mb-6">
                    {service.badge}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-4xl lg:text-[2.75rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[1.1rem] lg:text-[1.2rem] text-muted-foreground leading-relaxed mb-10 max-w-lg">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {service.tags?.map(tag => (
                      <span key={tag} className="px-5 py-2.5 rounded-lg border border-white/10 bg-[#0a0a0a] text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors cursor-default shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </MotionDiv>

              </div>
            );
          })}
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full mt-20 relative z-10"
        >
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "group relative overflow-hidden px-12" })}>
            <span className="relative flex items-center gap-2 drop-shadow-md tracking-wide">
              Contact Us Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </Link>
        </MotionDiv>
      </section>

      <SectionDivider inverted={true} />

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-6 relative z-10 bg-[radial-gradient(circle_at_center,rgba(129,74,200,0.1)_0%,rgba(0,0,0,0)_70%)]">
        <div className="flex flex-col items-center text-center mb-20 relative">
          {/* Subtle background glow with continuous float animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120px] bg-[#3b2166]/30 blur-[80px] rounded-[100%] pointer-events-none animate-float-medium" />

          {/* Futuristic Badge */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2.5 rounded-full border border-[#4b3375] bg-[#150a24]/50 text-[#a78bfa] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm"
          >
            Our Process
          </MotionDiv>
          
          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3.5rem,6vw,6rem)] font-extrabold text-center tracking-tighter leading-[1] text-white relative z-10 mb-8"
          >
            A Proven Process for<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2e8f0] via-[#7e57c2] to-[#ce93d8]">Exceptional Results</span>
          </MotionH2>
          
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[1.25rem] md:text-[1.35rem] text-muted-foreground/80 max-w-3xl leading-[1.6] tracking-wide font-normal relative z-10"
          >
            Every engagement follows our battle-tested framework,<br className="hidden md:block" /> ensuring clarity, quality, and on-time delivery at every stage.
          </MotionP>
        </div>
        <div className="max-w-7xl mx-auto relative py-8 w-full grid grid-cols-1 md:grid-cols-12 gap-6 px-4">
          {METHODOLOGY.map((step, i) => (
            <MotionDiv 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative flex flex-col justify-end bg-[#080414] border border-white/5 rounded-3xl overflow-hidden hover:border-[#8b5cf6]/40 transition-all duration-700 hover-3d-shine shadow-2xl min-h-[420px] p-8 md:p-10 ${step.colSpan}`}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                <Image 
                  src={step.image!} 
                  alt={step.subtitle!} 
                  fill 
                  className="object-cover object-center opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080414] via-[#080414]/90 to-transparent"></div>
              </div>
              
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.06] transition-colors duration-700 pointer-events-none leading-none select-none">
                {step.step}
              </div>

              {/* Content Area */}
              <div className="relative z-10 flex flex-col justify-end h-full mt-auto">
                <div className="inline-flex items-center gap-3 mb-5">
                  <div className="h-[2px] w-8 bg-[#8b5cf6] transition-all duration-500 group-hover:w-12"></div>
                  <span className="text-[#a78bfa] font-bold text-[11px] tracking-[0.25em] uppercase">
                    Phase {step.step} — {step.title}
                  </span>
                </div>
                <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-[1.15] tracking-tight group-hover:text-[#e2e8f0] transition-colors">
                  {step.subtitle}
                </h4>
                <p className="text-muted-foreground/80 text-base md:text-lg leading-[1.7] font-normal max-w-[95%]">
                  {step.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full mt-20 relative z-10"
        >
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "group relative overflow-hidden px-12" })}>
            <span className="relative flex items-center gap-2 drop-shadow-md tracking-wide">
              Contact Us Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </Link>
        </MotionDiv>
      </section>

      <SectionDivider inverted={false} />

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 relative z-10 bg-transparent overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#3b2166]/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-20 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-6 py-2.5 rounded-full border border-[#4b3375] bg-[#150a24]/50 text-[#a78bfa] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm inline-block"
          >
            Why Choose Us
          </MotionDiv>
          
          <MotionH2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(3.5rem,5vw,5rem)] font-extrabold text-white leading-[1] tracking-tighter mb-8"
          >
            Smart web solutions built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2e8f0] via-[#7e57c2] to-[#ce93d8]">your success</span>
          </MotionH2>

        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-[1.1rem] leading-[1.7] mb-12 max-w-[95%] text-left"
            >
              At NexiOG, we don't just write code; we engineer digital experiences that drive measurable business growth. Partner with us for cutting-edge technology, unmatched performance, and a team dedicated to turning your vision into reality. We build scalable architectures that future-proof your business, ensuring every solution is secure, lightning-fast, and optimized for maximum user engagement.
            </MotionP>

            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            >
              {/* Card 1 */}
              <div className="bg-[#11091e]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-[#e34a2e]/30 transition-colors shadow-xl">
                <div className="text-4xl font-extrabold text-white mb-2">25+</div>
                <div className="text-sm font-medium text-white/80 mb-6">Skilled Team Developers</div>
                <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  Deliver excellence through experience, innovation.
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#11091e]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-[#e34a2e]/30 transition-colors shadow-xl">
                <div className="text-4xl font-extrabold text-white mb-2">15+</div>
                <div className="text-sm font-medium text-white/80 mb-6">Countries Served Globally</div>
                <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  Deliver excellence through experience, innovation.
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-8"
            >
              <Link href="/contact" className={buttonVariants({ variant: "accent", className: "group relative overflow-hidden gap-2 px-10" })}>
                Contact Us Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>

              <a href="tel:+917980888810" className="flex items-center gap-4 group cursor-pointer transition-all">
                <div className="w-12 h-12 rounded-full bg-[#1c1c1c] flex items-center justify-center border border-white/10 shadow-md group-hover:bg-[#e34a2e]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e34a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider group-hover:text-white transition-colors">Call Us!</div>
                  <div className="font-bold text-white tracking-wide text-lg group-hover:text-[#e34a2e] transition-colors">+91 79808 88810</div>
                </div>
              </a>
            </MotionDiv>

          </div>

          {/* Right Content - Image */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image 
              src="/images/why-choose-us.png" 
              alt="Team collaborating" 
              fill 
              className="object-cover object-center"
            />
          </MotionDiv>

        </div>
      </section>

      <SectionDivider inverted={true} />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 relative z-10 bg-[radial-gradient(circle_at_center,rgba(129,74,200,0.1)_0%,rgba(0,0,0,0)_70%)]">
        <div className="flex flex-col items-center text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120px] bg-[#3b2166]/30 blur-[80px] rounded-[100%] pointer-events-none" />
          
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2.5 rounded-full border border-[#4b3375] bg-[#150a24]/50 text-[#a78bfa] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm"
          >
            Our Portfolio
          </MotionDiv>

          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,4vw,4rem)] md:text-[clamp(3.5rem,5vw,5rem)] font-extrabold text-white leading-[1] tracking-tighter"
          >
            A showcase of visionary digital products <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2e8f0] via-[#7e57c2] to-[#ce93d8]">crafted to inspire & engage</span>
          </MotionH2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 overflow-hidden h-[800px] rounded-[3rem] border border-white/10 bg-[#0a0514]/50 backdrop-blur-sm shadow-2xl">
          {/* Fading Edges for the marquee */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0514] to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0514] to-transparent z-20 pointer-events-none" />

          {/* Scrolling Content */}
          <div className="flex flex-col gap-8 px-6 md:px-12 py-12 animate-[scroll-vertical_60s_linear_infinite] hover:[animation-play-state:paused]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_PROJECTS.map((project, i) => (
                <MotionDiv
                  key={project.id}
                  className="group flex flex-col bg-[#11091e]/80 border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#e34a2e]/30 hover-3d-shine shadow-2xl relative"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/50">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11091e] via-transparent to-transparent opacity-80" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mx-6 p-6 md:p-8 flex flex-col relative z-10 -mt-16 bg-[#180d2b] border border-white/10 rounded-2xl shadow-xl hover:border-[#e34a2e]/50 transition-colors mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <Link href={project.link} className="flex items-center gap-2 text-sm font-semibold text-[#e34a2e] hover:text-[#c63d24] transition-colors w-fit group/link">
                      Read More 
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  </div>
                </MotionDiv>
              ))}
            </div>

            {/* Duplicate for infinite effect */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_PROJECTS.map((project, i) => (
                <div
                  key={`${project.id}-dup`}
                  className="group flex flex-col bg-[#11091e]/80 border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#e34a2e]/30 hover-3d-shine shadow-2xl relative"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/50">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11091e] via-transparent to-transparent opacity-80" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mx-6 p-6 md:p-8 flex flex-col relative z-10 -mt-16 bg-[#180d2b] border border-white/10 rounded-2xl shadow-xl hover:border-[#e34a2e]/50 transition-colors mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <Link href={project.link} className="flex items-center gap-2 text-sm font-semibold text-[#e34a2e] hover:text-[#c63d24] transition-colors w-fit group/link">
                      Read More 
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full mt-20 relative z-10"
        >
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "group relative overflow-hidden px-12" })}>
            <span className="relative flex items-center gap-2 drop-shadow-md tracking-wide">
              Contact Us Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </Link>
        </MotionDiv>
      </section>

      <TestimonialsSection />

      <SectionDivider inverted={false} />

      {/* Core Features Section */}
      <section id="features" className="py-20 px-6 relative z-10 overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2.5 rounded-full border border-[#4b3375] bg-[#150a24]/50 text-[#a78bfa] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm"
          >
            Our Core Feature
          </MotionDiv>

          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,4vw,4rem)] md:text-[clamp(3.5rem,5vw,5rem)] font-extrabold text-white leading-[1] tracking-tighter"
          >
            Core features that drive <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2e8f0] via-[#7e57c2] to-[#ce93d8]">digital excellence</span>
          </MotionH2>
        </div>

        {/* Content Container */}
        <div className="relative w-full flex justify-center lg:justify-end items-center min-h-[600px] max-w-7xl mx-auto rounded-[3rem] overflow-hidden">
          {/* The Image with Vignette Mask (Dissolving Effect) */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)',
              maskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)',
            }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80" 
              alt="Developer Building Website" 
              fill 
              className="object-cover opacity-70"
            />
          </div>
          
          {/* The Content Card */}
          <MotionDiv 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-xl bg-gradient-to-br from-[#180d2b]/80 to-[#11091e]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_80px_rgba(129,74,200,0.15)] lg:mr-[5%]"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Our core features are designed to deliver high-performance, scalable web solutions that help your business succeed online.
            </p>
            
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#e34a2e] flex items-center justify-center shrink-0 shadow-lg shadow-[#e34a2e]/20 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide">Responsive Website Design</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">We create fully responsive websites that provide a seamless experience across all devices.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#e34a2e] flex items-center justify-center shrink-0 shadow-lg shadow-[#e34a2e]/20 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide">Custom Web Development</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">We develop custom tailored solutions that fit perfectly with your business needs.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#e34a2e] flex items-center justify-center shrink-0 shadow-lg shadow-[#e34a2e]/20 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide">Third-Party Tool Integrations</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">We seamlessly integrate external APIs and tools to boost your platform's capability.</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full mt-20 relative z-10"
        >
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "group relative overflow-hidden px-12" })}>
            <span className="relative flex items-center gap-2 drop-shadow-md tracking-wide">
              Contact Us Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </Link>
        </MotionDiv>
      </section>

      <FAQSection />
    </>
  );
}
