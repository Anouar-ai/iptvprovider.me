import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Licensing Disclaimer | IPTV Provider",
    description: "IPTV Provider licensing disclaimer. Important information about content licensing and user responsibilities.",
    canonical: "/licensing-disclaimer",
  });
}

export default function LicensingDisclaimer() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li>Licensing Disclaimer</li>
          </ol>
        </nav>

        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          Licensing Disclaimer
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last Updated: December 26, 2025
          </p>

          <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg mb-8">
            <h2 className="mt-0">Important Notice</h2>
            <p className="mb-0">
              This disclaimer provides important information about content licensing and your responsibilities as a user 
              of IPTV Provider services. Please read carefully.
            </p>
          </div>

          <h2>Content Licensing</h2>
          <p>
            IPTV Provider operates as a content aggregation and streaming platform. We make reasonable efforts to ensure 
            that all content provided through our service is properly licensed or falls within fair use provisions.
          </p>

          <h2>User Responsibility</h2>
          <p>
            By using our service, you acknowledge and agree that:
          </p>
          <ul>
            <li>You are solely responsible for your use of the content provided</li>
            <li>You will use the service only for personal, non-commercial purposes</li>
            <li>You will comply with all applicable copyright and intellectual property laws in your jurisdiction</li>
            <li>You will not redistribute, publicly perform, or commercially exploit any content accessed through our service</li>
          </ul>

          <h2>Geographic Restrictions</h2>
          <p>
            Content availability may vary by geographic location due to licensing restrictions. Some content may not be 
            available in certain jurisdictions. It is your responsibility to ensure that your use of the service complies 
            with local laws and regulations.
          </p>

          <h2>Third-Party Content</h2>
          <p>
            Our service may include content provided by third parties. IPTV Provider is not responsible for the accuracy, 
            legality, or quality of third-party content. All third-party content is the property of its respective owners.
          </p>

          <h2>Copyright Claims</h2>
          <p>
            If you believe that any content available through our service infringes your copyright, please refer to our{" "}
            <Link href="/dmca-policy" className="text-primary hover:underline">DMCA Policy</Link> for information on how 
            to file a copyright claim.
          </p>

          <h2>Changes to Content</h2>
          <p>
            Content availability is subject to change without notice. IPTV Provider reserves the right to add, modify, 
            or remove content from our service at any time for any reason, including but not limited to licensing changes 
            or legal compliance requirements.
          </p>

          <h2>No Warranty</h2>
          <p>
            IPTV Provider makes no warranties or representations regarding the legality of any specific content in your 
            jurisdiction. The service is provided "as is" without warranties of any kind.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless IPTV Provider from any claims, damages, or expenses arising from 
            your use of the service or violation of these terms.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about licensing or content concerns, please contact us at{" "}
            <a href="mailto:support@iptvprovider.me" className="text-primary hover:underline">support@iptvprovider.me</a>.
          </p>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm mb-0">
              <strong>Legal Notice:</strong> This disclaimer does not constitute legal advice. For specific legal questions 
              regarding your use of IPTV services, please consult with a qualified attorney in your jurisdiction.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
