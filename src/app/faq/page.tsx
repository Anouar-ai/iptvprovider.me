
import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { faqs } from "@/lib/site-data/faq";
import SemanticContent from "@/components/shared/SemanticContent";
import { generateSemanticContent } from "@/lib/vector-seo";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | IPTV Provider",
    description: "Have questions about our IPTV Provider? Find answers to common questions about free trials, device compatibility, buffering, activation, and our refund policy.",
    alternates: {
        canonical: "/faq",
    }
};

export default async function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.iptvprovider.me/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "FAQ",
            "item": "https://www.iptvprovider.me/faq"
        }
    ]
  };

  const semanticContent = await generateSemanticContent("IPTV Provider Frequently Asked Questions");

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
            <FAQ />
        </Container>
      </main>
    </>
  );
}
