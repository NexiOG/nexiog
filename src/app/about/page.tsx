import PageHero from "@/components/PageHero";
import { TEAM } from "@/config/team";
import { MotionDiv, MotionH2, MotionP } from "@/components/Motion";
import Image from "next/image";

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
];

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About NexiOG" 
        description="NexiOG Technologies, founded in 2011, is a software development company that provides cutting-edge technology and software solutions to global businesses. We have a solution for all your business needs, from IT consulting to design and development, quality assurance, and digital marketing."
      />

      {/* Founders Message Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Creating exceptional digital solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">innovative businesses.</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-8">
              <p>
                Our company, NexiOG Technologies, is an outcome of an entrepreneur's dream to become the world's most trusted provider of software solutions. Since 2011, we have worked tirelessly with our entire team of talented employees to keep NexiOG Technologies at the forefront of the software solutions industry.
              </p>
              <p>
                Our urge to build a large, rapidly growing company drives us. Besides, NexiOG Technologies is more than just impressive numbers; it is the accumulation of our ambition, creativity, and technical expertise. We believe that every business is driven by purpose and core values. Our ideas and mission are reflected not only in our work but also in our workplace culture.
              </p>
              <p>
                NexiOG Technologies is, at its core, a technologically advanced, people-centric, ambitious, and customer-focused company. It is founded on the business principles that we, as a company, look up to.
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl w-fit">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-xl">
                CF
              </div>
              <div>
                <h4 className="font-bold text-white">Co-Founders</h4>
                <p className="text-sm text-primary">NexiOG Technologies</p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[600px]">
            {/* Grid of images composition */}
            <div className="absolute top-0 right-0 w-[80%] h-[70%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10">
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-3xl overflow-hidden border-4 border-[#050505] shadow-2xl z-20">
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Team Meeting" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
          </MotionDiv>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 relative border-y border-white/5 bg-[#0a0514]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <MotionH2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4">
              Established in 2011, NexiOG Technologies has been offering world-class information technology services
            </MotionH2>
          </div>

          <div className="relative mt-20">
            {/* Minimalist Timeline Representation */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
              {[2011, 2013, 2015, 2017, 2020, "Present"].map((year, i) => (
                <div key={i} className="flex flex-col items-center group relative">
                  <div className="w-4 h-4 rounded-full bg-white/20 border-2 border-[#0a0514] z-10 group-hover:bg-primary transition-colors duration-300" />
                  <span className="mt-4 font-bold text-white/50 group-hover:text-white transition-colors duration-300">{year}</span>
                  {/* Connectors (hidden on mobile, absolute positioned) */}
                  {i < 5 && <div className="hidden md:block absolute top-2 left-1/2 w-[calc(100%+2rem)] h-[1px] bg-white/10 -z-10 group-hover:bg-primary/50 transition-colors duration-300" />}
                </div>
              ))}
            </div>

            <MotionDiv initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-[#110a1f] border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[150px] font-black text-white/[0.03] leading-none select-none">2011</div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">The Journey Begins</h3>
                  <p className="text-white/70 leading-relaxed">
                    We started our journey presenting ourselves as a software development company capable of handling complex projects involving cutting-edge and challenging technologies. From day one, our mission was to engineer platforms that set new industry standards.
                  </p>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                  <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Office Start" fill className="object-cover" />
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Existing Nexto-style Split About Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
              Why Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              We Execute <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Excellence.</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Based in India, NexiOG Technologies is an elite digital agency focused on driving tangible business outcomes. We don't just write code—we engineer scalable solutions tailored for the Indian and global markets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { title: "Expert Engineers", desc: "Top 1% technical talent." },
                { title: "Agile Process", desc: "Fast, transparent delivery." },
                { title: "Scale Ready", desc: "Built for millions of users." },
                { title: "24/7 Support", desc: "Always online for you." },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-white/50 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10">
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10" />
          </MotionDiv>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 px-6 bg-[#0a0514] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <MotionH2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-6">
            Technologies and Platforms <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">That We Work With</span>
          </MotionH2>
          <MotionP initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/60 max-w-3xl mx-auto mb-16 text-lg">
            NexiOG Technologies has skillfully mastered the art of creating superior and feature-rich software, web, and mobile apps. Our team of developers has profound knowledge and first-hand experience in using the latest frameworks and trending technologies.
          </MotionP>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
            {TECH_STACK.map((tech, idx) => (
              <MotionDiv 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Tech Logo */}
                <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img src={tech.src} alt={tech.name} className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                </div>
                <span className="text-sm font-semibold text-white/80 group-hover:text-white">{tech.name}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Panel Statistical Overview */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black -z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(129,74,200,0.15),transparent_50%)] -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Statistical Overview of our Company
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              Since our inception, we have rapidly grown to become one of the most trusted software solution providers in the industry. While the numbers are currently as stated, we are confident that with our continued efforts, they will grow into much bigger and better numbers.
            </p>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {/* Modern Bento-style Stats Cards */}
            <div className="bg-white/[0.02] backdrop-blur-lg border border-white/10 p-6 rounded-3xl flex flex-col justify-center items-center text-center aspect-square shadow-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">2011</div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-[0.15em] font-bold group-hover:text-white/70 transition-colors">Established</div>
            </div>
            
            <div className="bg-white/[0.02] backdrop-blur-lg border border-white/10 p-6 rounded-3xl flex flex-col justify-center items-center text-center aspect-square shadow-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">75<span className="text-primary">+</span></div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-[0.15em] font-bold group-hover:text-white/70 transition-colors">Team Members</div>
            </div>
            
            <div className="bg-white/[0.02] backdrop-blur-lg border border-white/10 p-6 rounded-3xl flex flex-col justify-center items-center text-center aspect-square shadow-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">1280</div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-[0.15em] font-bold group-hover:text-white/70 transition-colors">Projects</div>
            </div>
            
            {/* Highlighted Glowing Card */}
            <div className="relative p-6 rounded-3xl flex flex-col justify-center items-center text-center aspect-square overflow-hidden transform md:scale-110 z-10 group shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] border border-primary/50">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.8)_0%,rgba(124,58,237,0.3)_100%)] group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">392</div>
                <div className="text-xs md:text-sm text-white/90 uppercase tracking-[0.15em] font-bold">Happy Clients</div>
              </div>
            </div>
            
            <div className="bg-white/[0.02] backdrop-blur-lg border border-white/10 p-6 rounded-3xl flex flex-col justify-center items-center text-center aspect-square shadow-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">30<span className="text-primary">%</span></div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-[0.15em] font-bold group-hover:text-white/70 transition-colors">YoY Growth</div>
            </div>
            
            <div className="bg-white/[0.02] backdrop-blur-lg border border-white/10 p-6 rounded-3xl flex flex-col justify-center items-center text-center aspect-square shadow-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">250<span className="text-primary">+</span></div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-[0.15em] font-bold mb-3 group-hover:text-white/70 transition-colors">5-Star Reviews</div>
              <div className="flex gap-1.5 text-primary drop-shadow-[0_0_5px_rgba(124,58,237,0.5)]">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* How We Help Our Customers */}
      <section className="py-32 px-6 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <MotionH2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How We Help Our Customers
          </MotionH2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Communication", img: "/images/communication_card.png" },
            { title: "Transparency", img: "/images/transparency_card.png" },
            { title: "Focus On Results", img: "/images/results_card.png" },
            { title: "Support", img: "/images/support_card.png" }
          ].map((card, idx) => (
            <MotionDiv 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image 
                src={card.img} 
                alt={card.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="w-10 h-10 mb-4 rounded-lg bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-primary transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Existing Why Choose Us / Core Values - Nexto Grid */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(129,74,200,0.05)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
              Core Principles
            </span>
            <MotionH2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight"
            >
              Our Core <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">Values</span>
            </MotionH2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Engineering Excellence", desc: "We don't just build websites. We engineer scalable, secure, and lightning-fast digital ecosystems.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { title: "Agile & Transparent", desc: "No black boxes. You get complete visibility into our sprint cycles, roadmaps, and daily code commits.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Business-First Approach", desc: "Every line of code we write is tied to your business KPIs. If it doesn't drive revenue, we rethink it.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            ].map((value, i) => (
              <MotionDiv 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0a0514] border border-white/5 rounded-3xl p-10 shadow-2xl group hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={value.icon} /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Team Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-20">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
            Our Experts
          </span>
          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight"
          >
            Executive <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">Leadership</span>
          </MotionH2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {TEAM.map((member, index) => (
            <MotionDiv 
              key={member.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-[#050505] border border-white/10 rounded-3xl p-10 text-center hover:border-primary/50 transition-all duration-500 overflow-hidden relative shadow-2xl"
            >
              <div className="w-40 h-40 rounded-full mx-auto mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-black ring-2 ring-white/10 overflow-hidden relative">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <span className="text-4xl font-extrabold text-white">{member.initials}</span>
                )}
              </div>
              
              <h3 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">{member.name}</h3>
              <div className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6">{member.role}</div>
              <p className="text-muted-foreground text-[17px] leading-relaxed mb-8">{member.description}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary hover:border-primary transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>
    </>
  );
}
