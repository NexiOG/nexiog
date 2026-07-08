import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Code, Settings, Shield, RefreshCw, Cpu, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <PageHero 
        title="Enterprise Software Development" 
        description="Scalable, secure, and custom-tailored software solutions that optimize your business operations and drive exponential growth." 
        primaryCtaText="Discuss Your Architecture" 
        primaryCtaLink="/contact" 
        hideButtons={false}
      />

      {/* 2. Overview Section */}
      <section className="py-24 px-6 relative z-10 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10"
          >
            <Image 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
              alt="Software Development" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#a855f7]/20 to-transparent mix-blend-overlay" />
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Software Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#a855f7]">Massive Scale.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Off-the-shelf software rarely fits complex business models. We build bespoke, enterprise-grade software systems that solve your specific operational bottlenecks. From cloud-native SaaS platforms to internal ERP systems, we engineer software that handles millions of requests seamlessly.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Microservices architecture for horizontal scaling",
                "Advanced data analytics and visualization dashboards",
                "Legacy system modernization & cloud migration",
                "Automated CI/CD pipelines and DevOps engineering"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#a855f7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>
      </section>

      {/* 3. Core Features Grid */}
      <section className="py-24 px-6 relative z-10 bg-[#05020a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Enterprise Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Bulletproof infrastructure for mission-critical applications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Custom SaaS", desc: "End-to-end development of multi-tenant SaaS platforms complete with billing and user management." },
              { icon: Database, title: "Big Data & AI", desc: "Data pipelines, warehousing, and machine learning integrations to extract actionable intelligence." },
              { icon: Settings, title: "ERP & CRM Systems", desc: "Bespoke internal tools designed specifically for your workforce to maximize operational efficiency." },
              { icon: Shield, title: "Advanced Security", desc: "HIPAA, SOC2, and GDPR compliant architectures with rigorous penetration testing protocols." },
              { icon: Cpu, title: "Cloud Native", desc: "Serverless and containerized deployments (Docker/Kubernetes) on AWS, GCP, and Azure." },
              { icon: RefreshCw, title: "Legacy Migration", desc: "Safely transitioning outdated monolithic systems into modern, scalable microservice architectures." },
            ].map((feature, idx) => (
              <MotionDiv 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0a0515] p-8 rounded-3xl border border-white/5 hover:-translate-y-2 hover:border-[#a855f7]/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#a855f7]/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#a855f7]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow / Process */}
      <section className="py-24 px-6 relative z-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Software Lifecycle</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Agile development methodologies for rapid, reliable delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent z-0" />
            
            {[
              { num: "01", title: "Architecture", desc: "Designing robust database schemas, system APIs, and choosing the perfect tech stack." },
              { num: "02", title: "Sprints", desc: "Agile, 2-week development sprints with continuous integration and stakeholder feedback." },
              { num: "03", title: "Testing", desc: "Automated unit testing, integration testing, and rigorous QA to ensure zero critical bugs." },
              { num: "04", title: "DevOps", desc: "Seamless CI/CD deployment pipelines to push updates with zero downtime." },
            ].map((step, idx) => (
              <MotionDiv 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                <div className="w-24 h-24 rounded-full bg-[#05020a] border-2 border-[#a855f7]/30 flex items-center justify-center text-3xl font-black text-[#a855f7] mb-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a0b2e] to-[#05020a] rounded-[3rem] p-12 md:p-20 text-center border border-[#a855f7]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/tech-hero-bg.png')] opacity-10 mix-blend-overlay object-cover" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Need a custom solution?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Speak with our lead architects to discuss your software requirements and get a technical roadmap.</p>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-14 px-8 text-lg group" })}>
              Consult an Architect 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionDiv>
      </section>
    </>
  );
}