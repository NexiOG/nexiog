import PageHero from "@/components/PageHero";
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero 
        title="Privacy Policy" 
        description="Effective Date: January 1, 2026" 
        hideButtons={true}
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            At NexiOG Technologies, headquartered in Kolkata, West Bengal, India, we are committed to safeguarding the privacy and digital security of our global enterprise clients. This policy outlines our data protection standards, application isolation handling, and encryption parameters.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">1. Data Collection & Processing</h2>
          <p className="text-muted-foreground mb-6">
            We collect technical project parameters, corporate contact information, and infrastructure credentials explicitly for the purpose of executing contracted engineering services. We utilize zero-trust architecture principles when processing client-provided data.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">2. Application Isolation Handling</h2>
          <p className="text-muted-foreground mb-6">
            All custom applications and databases developed by NexiOG Technologies utilize strict multi-tenant data isolation logic. Client staging environments are strictly segregated using Docker containerization and Kubernetes orchestration to prevent cross-contamination of proprietary data.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">3. Encryption Parameters</h2>
          <p className="text-muted-foreground mb-6">
            We enforce industry-standard cryptographic protocols matching national and international security regulations. Data at rest is secured via AES-256 encryption within PostgreSQL and Redis clusters, while data in transit is protected via TLS 1.3 over HTTPS/WebSockets.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">4. Third-Party Sharing & Compliance</h2>
          <p className="text-muted-foreground mb-6">
            NexiOG Technologies does not sell, rent, or lease corporate data to third parties. Information may be shared with our trusted cloud infrastructure providers (e.g., AWS, Vercel) strictly under established Data Processing Agreements (DPAs) required to host and serve the applications.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">5. Contact Information</h2>
          <p className="text-muted-foreground mb-6">
            For inquiries regarding our security infrastructure, data handling practices, or privacy compliance, please contact our administrative team at privacy@nexiog.in.
          </p>
        </div>
      </section>
    </>
  );
}
