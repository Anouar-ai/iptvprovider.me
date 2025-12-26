
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Pricing } from "@/components/sections/Pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import SemanticContent from "@/components/shared/SemanticContent";
import { SubscriptionFeatures } from "@/components/sections/SubscriptionFeatures";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { Check } from "lucide-react";

export function generateMetadata(): Metadata {
  const title = "IPTV Subscription Plans & Pricing 2026 | From $7.50/mo";
  const description = "Compare IPTV subscription plans from $7.50/month. 24,000+ HD/4K channels, instant activation, 7-day money-back guarantee. Choose your plan and start streaming today.";

  return {
    ...generatePageMetadata({
      title,
      description,
      canonical: "/pricing",
    }),
    title: {
      absolute: title,
    }
  };
}


export default async function IPTVSubscription() {
  const {
    semanticContent,
    productSchema,
    breadcrumbSchema,
    faqSchema,
    pricingPageFaqs
  } = await getPricingPageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="faq" schema={faqSchema} />

      <SemanticContent
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />

      <main>
        <section className="py-16 sm:py-24">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  Pricing
                </li>
              </ol>
            </nav>

            <div className="text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">IPTV Subscription Plans &amp; Pricing</h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                Stream 24,000+ live channels in HD & 4K quality. Choose the IPTV subscription that fits your needs — all plans include instant activation and 7-day money-back guarantee.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 24,000+ Channels</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Instant Activation</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 7-Day Guarantee</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 24/7 Support</div>
            </div>
          </Container>
        </section>

        <Pricing />

        <SubscriptionFeatures />

        <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">IPTV Subscription — Frequently Asked Questions</h2>
            </div>
            <div className="mx-auto mt-8 max-w-3xl">
              <Accordion type="single" collapsible>
                {pricingPageFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-24">
          <Container>
            <div className="rounded-xl bg-primary/10 p-8 text-center md:p-12">
              <h2 className="font-headline text-3xl font-bold">7-Day Money-Back Guarantee</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                Try our IPTV subscription completely risk-free. If you're not 100% satisfied within the first 7 days, contact our support team for a full refund — no questions asked. We're confident you'll love the service.
              </p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
