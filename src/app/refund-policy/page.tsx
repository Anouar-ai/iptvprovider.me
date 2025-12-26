import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Refund Policy | IPTV Provider",
    description: "IPTV Provider refund policy. Learn about our 7-day money-back guarantee and refund request procedures.",
    canonical: "/refund-policy",
  });
}

export default function RefundPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
    { name: "Refund Policy", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/refund-policy` },
  ]);

  return (
    <main className="py-16 sm:py-24">
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li>Refund Policy</li>
          </ol>
        </nav>
        <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          <header className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Refund Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: December 26, 2025
            </p>
          </header>

          <section className="space-y-8">
            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 mt-0">7-Day Money-Back Guarantee</h2>
              <p className="mb-0">
                We stand behind the quality of our service. If you're not completely satisfied within the first 7 days 
                of your subscription, we'll provide a full refund—no questions asked.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Refund Eligibility</h2>
              <p>You are eligible for a full refund if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You request a refund within 7 days of your initial purchase</li>
                <li>Your account is in good standing with no violations of our Terms of Service</li>
                <li>You have not previously received a refund for our service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Non-Refundable Situations</h2>
              <p>Refunds will not be provided in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Requests made after the 7-day guarantee period</li>
                <li>Account suspensions due to Terms of Service violations</li>
                <li>Subscription renewals (refund window applies to initial purchase only)</li>
                <li>Technical issues caused by user's equipment or internet connection</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. How to Request a Refund</h2>
              <p>To request a refund, please follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our support team at <a href="mailto:support@iptvprovider.me" className="text-primary hover:underline">support@iptvprovider.me</a></li>
                <li>Include your account email and order number</li>
                <li>Briefly explain the reason for your refund request</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Refund Processing Time</h2>
              <p>
                Approved refunds are processed within 3-5 business days. Depending on your payment method and financial institution, 
                it may take an additional 5-10 business days for the funds to appear in your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Partial Refunds</h2>
              <p>
                Partial refunds are not available. The 7-day guarantee applies to the full subscription amount only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Contact Support</h2>
              <p>
                For questions about our refund policy or to initiate a refund request, please contact us at{" "}
                <a href="mailto:support@iptvprovider.me" className="text-primary hover:underline">support@iptvprovider.me</a>.
              </p>
            </div>

            <div className="p-6 bg-muted/30 rounded-lg">
              <p className="text-sm mb-0">
                <strong>Note:</strong> This refund policy does not affect your statutory rights as a consumer under applicable law.
              </p>
            </div>
          </section>
        </article>
      </Container>
    </main>
  );
}
