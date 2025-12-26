import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "DMCA Policy | IPTV Provider",
    description: "Digital Millennium Copyright Act (DMCA) policy for IPTV Provider. Learn about our copyright compliance and reporting procedures.",
    canonical: "/dmca-policy",
  });
}

export default function DMCAPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
    { name: "DMCA Policy", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/dmca-policy` },
  ]);

  return (
    <main className="py-16 sm:py-24">
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li>DMCA Policy</li>
          </ol>
        </nav>
        <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          <header className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              DMCA Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: December 26, 2025
            </p>
          </header>

          <section className="space-y-8">
            <p>
              IPTV Provider respects the intellectual property rights of others and is committed to complying with 
              the Digital Millennium Copyright Act (DMCA) and other applicable intellectual property laws.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Copyright Compliance</h2>
              <p>
                IPTV Provider respects the intellectual property rights of others and expects our users to do the same. 
                In accordance with the Digital Millennium Copyright Act (DMCA), we will respond to valid notices of copyright infringement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Filing a DMCA Notice</h2>
              <p>
                If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, 
                please provide our designated copyright agent with the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identification:</strong> Identification of the copyrighted work claimed to have been infringed</li>
                <li><strong>Location:</strong> Identification of the material claimed to be infringing and its location</li>
                <li><strong>Contact Info:</strong> Your contact information (address, telephone, email)</li>
                <li><strong>Good Faith Statement:</strong> A statement of good faith belief that the use is not authorized</li>
                <li><strong>Accuracy Statement:</strong> A statement that the information is accurate under penalty of perjury</li>
                <li><strong>Signature:</strong> Physical or electronic signature of the copyright owner or authorized agent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Designated Copyright Agent</h2>
              <p>
                Please send all DMCA notices to our designated copyright agent at:{" "}
                <a href="mailto:support@iptvprovider.me" className="text-primary hover:underline">support@iptvprovider.me</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Counter-Notification</h2>
              <p>
                If you believe that your content was removed in error, you may submit a counter-notification to our designated agent 
                with the required information as specified in the DMCA. Your counter-notification must include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that was removed</li>
                <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                <li>Your name, address, and telephone number, and consent to jurisdiction</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Repeat Infringers</h2>
              <p>
                We reserve the right to terminate accounts of users who are repeat infringers of intellectual property rights. 
                In our sole discretion, we may terminate any user who is believed to be a repeat infringer.
              </p>
            </div>

            <div className="p-6 bg-muted/30 rounded-lg">
              <p className="text-sm mb-0">
                <strong>Note:</strong> This policy does not constitute legal advice. For specific legal questions regarding copyright, 
                please consult with a qualified attorney.
              </p>
            </div>
          </section>
        </article>
      </Container>
    </main>
  );
}
