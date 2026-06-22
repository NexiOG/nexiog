import PageHero from "@/components/PageHero";
import { TEAM } from "@/config/team";
import { MotionDiv, MotionH2 } from "@/components/Motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About NexiOG" 
        description="We are a team of visionary engineers, designers, and strategists dedicated to building high-performance digital platforms that dominate the market."
      />

      {/* Nexto-style Split About Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
          </MotionDiv>
          
          <MotionDiv initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
              About Company
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
        </div>
      </section>

      {/* Stats Section - Nexto Style */}
      <section className="py-16 px-6 bg-[#0a0514] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">10<span className="text-primary">+</span></h3>
            <p className="text-sm uppercase tracking-widest text-white/50 font-bold">Years Exp</p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">500<span className="text-primary">+</span></h3>
            <p className="text-sm uppercase tracking-widest text-white/50 font-bold">Projects</p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">99<span className="text-primary">%</span></h3>
            <p className="text-sm uppercase tracking-widest text-white/50 font-bold">Retention</p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">50<span className="text-primary">+</span></h3>
            <p className="text-sm uppercase tracking-widest text-white/50 font-bold">Experts</p>
          </MotionDiv>
        </div>
      </section>

      {/* Why Choose Us / Core Values - Nexto Grid */}
      <section className="py-32 px-6 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(129,74,200,0.05)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
              Why Choose Us
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

      {/* Team Section */}
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
