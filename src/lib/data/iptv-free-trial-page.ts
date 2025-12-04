
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { generateBreadcrumbSchema, generateFAQPageSchema, generateServiceSchema } from '@/lib/schema';
import type { BreadcrumbList, FAQPage, Service } from 'schema-dts';

const trialFaqs = [
    {
        question: "Is the IPTV free trial really free?",
        answer: "Yes, our 24-hour trial is 100% free. We do not ask for any credit card information or payment details. It is a completely risk-free way to test our service quality."
    },
    {
        question: "What channels are included in the free trial?",
        answer: "The free trial gives you full and unrestricted access to our entire package, including all 20,000+ live channels, movies, sports, and TV series. You get the exact same experience as a paid subscriber."
    },
    {
        question: "Do I need a special device for the trial?",
        answer: "No, you don't need a special device. Our IPTV service works on all major devices, including Smart TVs, Amazon Fire Stick, Android devices, iOS devices, and computers. Our support team can help you get set up."
    },
    {
        question: "How do I cancel the trial?",
        answer: "There is no need to cancel. The trial automatically expires after 24 hours. There are no obligations and you will not be charged."
    },
    {
        question: "What happens after the IPTV trial ends?",
        answer: "After 24 hours, your trial access will stop. If you enjoyed the service, you can easily upgrade to one of our paid plans by contacting us. Your settings and favorites will be saved."
    }
];

export const getIptvFreeTrialPageData = cache(
  async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';
    const pageUrl = `${baseUrl}/iptv-free-trial`;

    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("IPTV Free Trial");

    const breadcrumbSchemaPromise: Promise<BreadcrumbList> = Promise.resolve(generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "IPTV Free Trial", item: pageUrl }
    ]));

    const faqSchemaPromise: Promise<FAQPage> = Promise.resolve(generateFAQPageSchema(trialFaqs));

    const serviceSchemaPromise: Promise<Service> = Promise.resolve(generateServiceSchema({
        serviceType: "Free IPTV Trial",
        providerName: "IPTV Provider",
        name: "24-Hour IPTV Free Trial",
        description: "Get a free 24-hour trial of our premium IPTV service. Access over 20,000 channels, movies, and sports with no credit card required. Instant activation.",
        areaServed: { type: "Country", name: "Worldwide" },
        offers: {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
        }
    }));
    
    const [
      semanticContent,
      breadcrumbSchema,
      faqSchema,
      serviceSchema
    ] = await Promise.all([
      semanticContentPromise,
      breadcrumbSchemaPromise,
      faqSchemaPromise,
      serviceSchemaPromise,
    ]);

    return { 
      semanticContent, 
      breadcrumbSchema,
      faqSchema,
      serviceSchema,
      trialFaqs
    };
  },
  ['iptv-free-trial-page-data'],
  {
    revalidate: 3600,
    tags: ['pages', 'iptv-free-trial-page'],
  }
);

    