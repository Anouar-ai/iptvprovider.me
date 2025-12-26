import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
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
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
    { name: "Licensing Disclaimer", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/licensing-disclaimer` },
  ]);

  return (
    <main className="py-16 sm:py-24">
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li>Licensing Disclaimer</li>
          </ol>
        </nav>
        <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          <header className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Licensing Disclaimer
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: December 26, 2025
            </p>
          </header>

          <section className="space-y-8">
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 mt-0">Important Notice</h2>
              <p className="mb-0">
                This disclaimer provides important information about content licensing and your responsibilities as a user 
                of IPTV Provider services. Please read carefully.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Content Licensing</h2>
              <p>
                IPTV Provider operates as a content aggregation and streaming platform. We make reasonable efforts to ensure 
                that all content provided through our service is properly licensed or falls within fair use provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. User Responsibility</h2>
              <p>By using our service, you acknowledge and agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are solely responsible for your use of the content provided</li>
                <li>You will use the service only for personal, non-commercial purposes</li>
                <li>You will comply with all applicable copyright and intellectual property laws in your jurisdiction</li>
                <li>You will not redistribute, publicly perform, or commercially exploit any content accessed through our service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Geographic Restrictions</h2>
              <p>
                Content availability may vary by geographic location due to licensing restrictions. Some content may not be 
                available in certain jurisdictions. It is your responsibility to ensure that your use of the service complies 
                with local laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Content</h2>
              <p>
                Our service may include content provided by third parties. IPTV Provider is not responsible for the accuracy, 
                legality, or quality of third-party content. All third-party content is the property of its respective owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Copyright Claims</h2>
              <p>
                If you believe that any content available through our service infringes your copyright, please refer to our{" "}
                <Link href="/dmca-policy" className="text-primary hover:underline">DMCA Policy</Link> for information on how 
                to file a copyright claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Changes to Content</h2>
              <p>
                Content availability is subject to change without notice. IPTV Provider reserves the right to add, modify, 
                or remove content from our service at any time for any reason, including but not limited to licensing changes 
                or legal compliance requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. No Warranty</h2>
              <p>
                IPTV Provider makes no warranties or representations regarding the legality of any specific content in your 
                jurisdiction. The service is provided "as is" without warranties of any kind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless IPTV Provider from any claims, damages, or expenses arising from 
                your use of the service or violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p>
                For questions about licensing or content concerns, please contact us at{" "}
                <a href="mailto:support@iptvprovider.me" className="text-primary hover:underline">support@iptvprovider.me</a>.
              </p>
            </div>

            <div className="p-6 bg-muted/30 rounded-lg">
              <p className="text-sm mb-0">
                <strong>Legal Notice:</strong> This disclaimer does not constitute legal advice. For specific legal questions 
                regarding your use of IPTV services, please consult with a qualified attorney in your jurisdiction.
              </p>
            </div>
          </section>
        </article>
      </Container>
    </main>
  );
}
