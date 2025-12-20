
import { unstable_cache as cache } from 'next/cache';

import { generateProductSchema, generateVideoSchema } from '@/lib/schema';
import type { Product } from 'schema-dts';
import { siteConfig } from '@/lib/site-config';
import { plans } from '@/lib/site-data/pricing';

// This function fetches and processes all data required for the homepage in a single, cached operation.
export const getHomePageData = cache(
  async () => {
    const productSchema = generateProductSchema({
      name: "Premium IPTV Subscription Service",
      description: "Get the best IPTV service with over 24,000 live channels and a massive VOD library. Instant activation, HD/4K quality, and 24/7 support. Subscribe to the top IPTV provider today!",
      image: `${siteConfig.url}/og-image.jpg`,
      sku: "iptv-premium-service",
      mpn: "iptv-premium-service",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      ratingValue: "4.9",
      reviewCount: "1843",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...plans.map(p => p.price_monthly)).toFixed(2),
        highPrice: Math.max(...plans.map(p => p.price_monthly)).toFixed(2),
        offerCount: plans.length,
        offers: plans.map(plan => ({
          "@type": "Offer",
          name: `IPTV Provider - ${plan.name}`,
          price: plan.price.toFixed(2),
          priceCurrency: "USD",
          url: `${siteConfig.url}/pricing`
        }))
      }
    });

    // Video schema for Hero promotional video
    const videoSchema = generateVideoSchema({
      name: "The Best IPTV Subscription Service Provider",
      description: "Discover why IPTV Provider is the world's premier streaming service. Watch 24,000+ live channels, sports, movies & TV shows in HD/4K quality.",
      thumbnailUrl: `${siteConfig.url}/og-image.jpg`,
      uploadDate: "2024-01-01T00:00:00+00:00",
      contentUrl: `${siteConfig.url}/The-Best-IPTV-Subscription-Service-Provider.webm`,
      duration: "PT30S",
    });

    return {
      productSchema,
      videoSchema
    };
  },
  ['home-page-data'], // Cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'home-page'], // Tag for on-demand revalidation
  }
);

