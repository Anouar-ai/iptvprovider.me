
import { unstable_cache as cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { getCountryById } from "@/lib/countries";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQPageSchema } from '@/lib/schema';
import type { BreadcrumbList, Service, FAQPage } from 'schema-dts';

const getPageFaqs = (country: { name: string; timezone: string; currency: string; language: string }) => [
  {
    question: `Is your IPTV service available in ${country.name}?`,
    answer: `Yes, our IPTV service is fully available and optimized for viewers in ${country.name}. Our service operates 24/7 in your timezone (${country.timezone}), ensuring you can watch your favorite content anytime. Interface available in ${country.language} and English. You get access to local ${country.name} channels as well as our full international lineup of 20,000+ channels.`
  },
  {
    question: `What payment methods do you accept in ${country.name}?`,
    answer: `We accept payments in ${country.currency} and all major international currencies including USD, EUR, and GBP. Payment options include credit/debit cards (Visa, Mastercard, Amex), PayPal, and cryptocurrency. All transactions are encrypted and processed securely.`
  },
  {
    question: `How fast is the activation process in ${country.name}?`,
    answer: `Activation is instant worldwide, including in ${country.name}. As soon as your payment is confirmed, you receive your login credentials via email within minutes. Our automated system works in your timezone (${country.timezone}), so you can start streaming immediately, day or night.`
  },
  {
    question: `Do I need a VPN to use IPTV in ${country.name}?`,
    answer: `While not mandatory, we recommend using a VPN in ${country.name} to ensure your privacy, bypass potential ISP throttling, and access geo-restricted content. A VPN guarantees the smoothest streaming experience and protects your viewing activity.`
  },
  {
    question: `What channels are available in ${country.name}?`,
    answer: `In ${country.name}, you get access to all major local channels (in ${country.language}) plus our complete library of 20,000+ international channels. This includes sports, movies, news, entertainment, and kids' content in HD and 4K quality. Channel lineup includes content from USA, UK, Canada, Europe, Middle East, Asia, and more.`
  }
];

// This function fetches and processes all data required for a specific country page in a single, cached operation.
export const getCountryPageData = cache(
  async (countryId: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

    const country = getCountryById(countryId);
    if (!country) {
      notFound();
    }
    const { name } = country;

    const pageFaqs = getPageFaqs(country);

    // Define all data fetching and processing promises
    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent(`IPTV Provider in ${name}`);

    const breadcrumbSchemaPromise: Promise<BreadcrumbList> = Promise.resolve(generateBreadcrumbSchema([
      { name: "Home", item: `${baseUrl}/` },
      { name: "Locations", item: `${baseUrl}/locations` },
      { name: name, item: `${baseUrl}/country/${countryId}` }
    ]));

    const serviceSchemaPromise: Promise<Service> = Promise.resolve(generateServiceSchema({
      serviceType: "IPTV Provider",
      providerName: "IPTV Provider",
      areaServed: { type: "Country", name },
      name: `IPTV Provider for ${name}`,
      description: `Premium IPTV service available in ${name} with over 20,000 channels, HD/4K quality, and instant setup.`,
      offers: {
        "@type": "Offer",
        price: "16.00",
        priceCurrency: "USD"
      }
    }));

    const faqSchemaPromise: Promise<FAQPage> = Promise.resolve(generateFAQPageSchema(pageFaqs));

    // Await all promises in parallel
    const [
      semanticContent,
      breadcrumbSchema,
      serviceSchema,
      faqSchema
    ] = await Promise.all([
      semanticContentPromise,
      breadcrumbSchemaPromise,
      serviceSchemaPromise,
      faqSchemaPromise
    ]);

    return {
      country,
      pageFaqs,
      semanticContent,
      breadcrumbSchema,
      serviceSchema,
      faqSchema
    };
  },
  ['country-page-data'], // Base cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'country-page'], // Tag for on-demand revalidation
  }
);

