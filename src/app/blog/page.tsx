import PageHero from "@/components/PageHero";
import { MotionDiv } from "@/components/Motion";
import Link from "next/link";
import Image from "next/image";

const POSTS = [
  {
    id: 1,
    title: "How We Achieved a Perfect 100 Lighthouse Score with Next.js",
    category: "Engineering",
    date: "Oct 24, 2023",
    image: "https://framerusercontent.com/images/wZ4QywsLlJwC6C7w4D9W92Oqug6a6e.jpg"
  },
  {
    id: 2,
    title: "The Future of B2B SaaS Architecture in 2024",
    category: "Architecture",
    date: "Oct 18, 2023",
    image: "https://framerusercontent.com/images/CDxS3e61UksiMm0oJGi80w7vEA5e73.jpg"
  },
  {
    id: 3,
    title: "Optimizing Core Web Vitals for Enterprise SEO Growth",
    category: "Marketing",
    date: "Sep 30, 2023",
    image: "https://framerusercontent.com/images/JK0fwwNQempKT9E5v6SvIj81ag6177.jpg"
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHero 
        title="Engineering Insights & Market Strategy" 
        description="Deep dives into software architecture, SEO methodologies, and high-performance engineering from the NexiOG team." 
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <MotionDiv 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href="#" className="group block bg-[#050505] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-muted-foreground text-sm font-medium mb-3">{post.date}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-snug mb-6">
                    {post.title}
                  </h3>
                  <div className="mt-auto text-sm font-bold text-white/50 group-hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors">
                    Read Article &rarr;
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </section>
    </>
  );
}
