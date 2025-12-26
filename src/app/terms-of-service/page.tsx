import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Terms of Service | IPTV Provider",
    description: "Terms of Service for IPTV Provider. Review our service terms, user responsibilities, and usage policies.",
    canonical: "/terms-of-service",
  });
}

export default function TermsOfService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
    { name: "Terms of Service", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/terms-of-service` },
  ]);

  return (
    <main className="py-16 sm:py-24">
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li>Terms of Service</li>
          </ol>
        </nav>
        <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          <header className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: December 26, 2025
            </p>
          </header>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using IPTV Provider services, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p>
                IPTV Provider offers streaming television services delivered over the internet. Our service includes access to 
                live TV channels, video on demand content, and related features as described on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p>As a user of our service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years old to subscribe</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not share your account with unauthorized users</li>
                <li>Not use the service for any illegal purposes</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Subscription and Payments</h2>
              <p>
                Subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except as required 
                by law or as specified in our <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Service Availability</h2>
              <p>
                While we strive for 99.9% uptime, we do not guarantee uninterrupted service. Service may be temporarily unavailable 
                due to maintenance, updates, or factors beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Content and Licensing</h2>
              <p>
                All content provided through our service is licensed for personal, non-commercial use only. 
                Redistribution, public performance, or commercial use is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at our discretion if you violate these terms. 
                You may cancel your subscription at any time through your account settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p>
                IPTV Provider shall not be liable for any indirect, incidental, special, or consequential damages arising from 
                your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our service after changes constitutes 
                acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:support@iptvprovider.me" className="text-primary hover:underline">support@iptvprovider.me</a>.
              </p>
            </div>
          </section>
        </article>
      </Container>
    </main>
  );
}
