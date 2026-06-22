import PageHero from "@/components/PageHero";
export default function TermsOfServicePage() {
  return (
    <>
      <PageHero 
        title="Terms of Service" 
        description="Effective Date: January 1, 2026" 
        hideButtons={true}
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            These Terms of Service ("Terms") govern the contractual agreement between you ("Client") and NexiOG Technologies ("Company"), headquartered in Kolkata, West Bengal, India. By engaging our engineering services, you agree to comply with these rules of execution.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">1. Operational Code Delivery Frames</h2>
          <p className="text-muted-foreground mb-6">
            NexiOG Technologies commits to delivering production-grade digital architecture within the timelines agreed upon in the Master Services Agreement (MSA). All deliverables are subject to our 7-Step Agile Process, including mandatory QA, core web vitals optimization, and cross-browser validation prior to release.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">2. Project Execution Rules</h2>
          <p className="text-muted-foreground mb-6">
            Client collaboration is required during the "Discovery & Research" and "Strategy & Planning" phases. Significant scope alterations requested after the lock-in phase will result in revised delivery estimates and adjusted budget tiers.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">3. Intellectual Property Ownership</h2>
          <p className="text-muted-foreground mb-6">
            Upon final payment clearance, all custom source code, Figma design systems, database architectures, and associated digital assets engineered specifically for the Client will be legally transferred as the exclusive Intellectual Property (IP) of the Client. NexiOG Technologies retains the right to utilize anonymized deployment metrics and non-proprietary structural patterns for internal case studies.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">4. Support & Maintenance (Hypercare)</h2>
          <p className="text-muted-foreground mb-6">
            A dedicated 48-hour hypercare support window is initiated immediately post-deployment to ensure zero-downtime go-live operations. Long-term continuous delivery loops, AWS maintenance, and uptime SLAs (99.99%) are governed by separate IT Solutions retainer contracts.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">5. Legal Jurisdiction</h2>
          <p className="text-muted-foreground mb-6">
            This agreement, and any dispute arising out of or in connection with it, shall be governed by and construed in accordance with the laws of India. Both parties irrevocably submit to the exclusive legal jurisdiction of the courts localized in Kolkata, West Bengal, India.
          </p>
        </div>
      </section>
    </>
  );
}
