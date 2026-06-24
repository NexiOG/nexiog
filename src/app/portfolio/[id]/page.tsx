import { PORTFOLIO_PROJECTS } from "@/config/portfolio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default function PortfolioCaseStudy({ params }: { params: { id: string } }) {
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-end pb-16 md:pb-24">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 inline-block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-6 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Stats/Tech Bar */}
      <div className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white/40 uppercase text-sm font-bold tracking-widest mb-2">Role</h4>
            <p className="text-white text-lg font-medium">{project.category}</p>
          </div>
          <div>
            <h4 className="text-white/40 uppercase text-sm font-bold tracking-widest mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-white text-lg font-medium">
                  {tag}{tag !== project.tags[project.tags.length - 1] ? "," : ""}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white/40 uppercase text-sm font-bold tracking-widest mb-2">Platform</h4>
            <p className="text-white text-lg font-medium">Web / Mobile</p>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="prose prose-invert prose-lg md:prose-xl w-full max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-white/70 leading-relaxed mb-16">{project.challenge}</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Solution</h2>
          <p className="text-white/70 leading-relaxed mb-16">{project.solution}</p>

          <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">Business Impact</h2>
            <ul className="space-y-6 relative z-10">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50 text-primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                  </div>
                  <span className="text-white/80 font-medium text-lg md:text-xl">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-32 border-t border-white/5 bg-[radial-gradient(circle_at_bottom,rgba(129,74,200,0.1)_0%,rgba(0,0,0,0)_60%)]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">Ready to write your success story?</h2>
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "px-12 py-6 text-lg rounded-full" })}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </article>
  );
}
