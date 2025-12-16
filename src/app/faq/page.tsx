
import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import SemanticContent from "@/components/shared/SemanticContent";
import { getFaqPageData } from "@/lib/data/faq-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Frequently Asked Questions | IPTV Provider",
    description: "Have questions about our IPTV Provider? Find answers to common questions about free trials, device compatibility, buffering, activation, and our refund policy.",
    canonical: "/faq",
  });
}

export default async function FaqPage() {
  const {
    semanticContent,
    faqSchema,
    breadcrumbSchema
  } = await getFaqPageData();

  return (
    <>
      <Schema id="faq" schema={faqSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />

      <SemanticContent
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      <main>
        <Container className="py-16 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                FAQ
              </li>
            </ol>
          </nav>
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our IPTV service? Find answers to common questions about trials, compatibility, setup, and more.
            </p>
          </div>
          <FAQ />
        </Container>
      </main>
    </>
  );
}
