import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
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
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li>Terms of Service</li>
          </ol>
        </nav>

        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          Terms of Service
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last Updated: December 26, 2025
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using IPTV Provider services, you accept and agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Service Description</h2>
          <p>
            IPTV Provider offers streaming television services delivered over the internet. Our service includes access to 
            live TV channels, video on demand content, and related features as described on our website.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You must be at least 18 years old to subscribe</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You agree not to share your account with unauthorized users</li>
            <li>You will not use the service for any illegal purposes</li>
            <li>You will comply with all applicable laws and regulations</li>
          </ul>

          <h2>4. Subscription and Payments</h2>
          <p>
            Subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except as required 
            by law or as specified in our <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>.
          </p>

          <h2>5. Service Availability</h2>
          <p>
            While we strive for 99.9% uptime, we do not guarantee uninterrupted service. Service may be temporarily unavailable 
            due to maintenance, updates, or factors beyond our control.
          </p>

          <h2>6. Content and Licensing</h2>
          <p>
            All content provided through our service is licensed for personal, non-commercial use only. 
            Redistribution, public performance, or commercial use is strictly prohibited.
          </p>

          <h2>7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at our discretion if you violate these terms. 
            You may cancel your subscription at any time through your account settings.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            IPTV Provider shall not be liable for any indirect, incidental, special, or consequential damages arising from 
            your use of our services.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our service after changes constitutes 
            acceptance of the modified terms.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:support@iptvprovider.me" className="text-primary hover:underline">support@iptvprovider.me</a>.
          </p>
        </div>
      </Container>
    </main>
  );
}
