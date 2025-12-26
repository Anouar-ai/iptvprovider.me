import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
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
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li>DMCA Policy</li>
          </ol>
        </nav>

        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          DMCA Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last Updated: December 26, 2025
          </p>

          <h2>Copyright Compliance</h2>
          <p>
            IPTV Provider respects the intellectual property rights of others and expects our users to do the same. 
            In accordance with the Digital Millennium Copyright Act (DMCA), we will respond to valid notices of copyright infringement.
          </p>

          <h2>Filing a DMCA Notice</h2>
          <p>
            If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, 
            please provide our designated copyright agent with the following information:
          </p>

          <ul>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material claimed to be infringing</li>
            <li>Your contact information (address, telephone, email)</li>
            <li>A statement of good faith belief that the use is not authorized</li>
            <li>A statement that the information is accurate under penalty of perjury</li>
            <li>Physical or electronic signature of the copyright owner or authorized agent</li>
          </ul>

          <h2>Designated Copyright Agent</h2>
          <p>
            Email: <a href="mailto:support@iptvprovider.me" className="text-primary hover:underline">support@iptvprovider.me</a>
          </p>

          <h2>Counter-Notification</h2>
          <p>
            If you believe that your content was removed in error, you may submit a counter-notification to our designated agent 
            with the required information as specified in the DMCA.
          </p>

          <h2>Repeat Infringers</h2>
          <p>
            We reserve the right to terminate accounts of users who are repeat infringers of intellectual property rights.
          </p>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm">
              <strong>Note:</strong> This policy does not constitute legal advice. For specific legal questions regarding copyright, 
              please consult with a qualified attorney.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
