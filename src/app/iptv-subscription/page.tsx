import type { Metadata } from "next";
import { plans, faqs } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Check, Shield, Tv, Zap, MessageCircle, Smartphone } from "lucide-react";
import { Pricing } from "@/components/sections/Pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans - 1, 3, 6 & 12 Months | HD/4K Streaming",
  description: "Choose the perfect IPTV subscription plan. Starting at $7.50/month with 20,000+ channels, HD/4K quality, and 24/7 support. Instant activation available.",
  keywords: "IPTV subscription, IPTV plans, IPTV pricing, monthly IPTV, yearly IPTV",
  openGraph: {
    title: "IPTV Subscription Plans - Stream 20,000+ Channels",
    description: "Get IPTV subscription with HD/4K quality. Plans from 1-12 months.",
    url: "https://yoursite.com/iptv-subscription",
    type: "website",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "IPTV Subscription Plans",
      },
    ],
  },
  alternates: {
    canonical: "https://yoursite.com/iptv-subscription",
  },
};

const pageFaqs = [
    {
        question: "What's included in the IPTV subscription?",
        answer: "All IPTV subscription plans include 20,000+ live channels, HD/4K quality streaming, 24/7 customer support, instant activation, and anti-freeze technology."
    },
    {
        question: "How quickly is my IPTV subscription activated?",
        answer: "Your IPTV subscription is activated instantly after payment confirmation. You'll receive login credentials within minutes."
    },
    {
        question: "Can I upgrade my IPTV subscription?",
        answer: "Yes! You can upgrade your IPTV subscription at any time. Contact our 24/7 support team for assistance."
    },
    {
        question: "Which plan offers the best value?",
        answer: "Our 12-month IPTV subscription offers the best value at just $7.50/month, saving you $102 compared to monthly billing."
    }
]

export default function IPTVSubscription() {
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "IPTV Subscription",
        "description": "Premium IPTV subscription with 20,000+ channels, HD/4K quality, and 24/7 support",
        "brand": {
          "@type": "Brand",
          "name": "IPTV Service"
        },
        "offers": plans.map(plan => ({
          "@type": "Offer",
          "name": `IPTV Subscription - ${plan.name}`,
          "price": plan.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `https://yoursite.com${plan.url}`,
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition",
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2547"
        }
      };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      
      <div className="py-16 text-center sm:py-24">
        <Container>
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">IPTV Subscription Plans</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Choose the perfect plan for your streaming needs. All plans include 20,000+ channels in HD/4K quality.
            </p>
        </Container>
      </div>

      <Pricing />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our IPTV Subscription?</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                  <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Tv size={20} className="text-primary"/> 20,000+ Channels</h3>
                  <p className="text-muted-foreground">Access to premium channels from around the world with our IPTV subscription</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                  <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Zap size={20} className="text-primary"/> Instant Activation</h3>
                  <p className="text-muted-foreground">Your IPTV subscription is activated immediately after payment</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                  <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Check size={20} className="text-primary"/> HD/4K Quality</h3>
                  <p className="text-muted-foreground">Crystal clear streaming in High Definition and 4K resolution</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                  <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Shield size={20} className="text-primary"/> Anti-Freeze Technology</h3>
                  <p className="text-muted-foreground">Enjoy uninterrupted streaming with our advanced anti-freeze tech</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                  <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><MessageCircle size={20} className="text-primary"/> 24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock customer support for all IPTV subscription plans</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                  <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Smartphone size={20} className="text-primary"/> Multi-Device</h3>
                  <p className="text-muted-foreground">Watch on Smart TV, Android, iOS, Fire Stick, and more</p>
              </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
        <Container>
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="mx-auto mt-8 max-w-3xl" itemScope itemType="https://schema.org/FAQPage">
              <Accordion type="single" collapsible>
                {pageFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <AccordionTrigger itemProp="name">{faq.question}</AccordionTrigger>
                    <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.answer}</p>
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
                <h2 className="font-headline text-3xl font-bold">100% Satisfaction Guarantee</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Try our IPTV subscription risk-free. If you're not satisfied within the first 7 days, we'll provide a full refund—no questions asked.
                </p>
            </div>
        </Container>
      </section>

    </>
  );
}
