import { generateLocalBusinessSchema, generateHowToSchema, generateServiceSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site-config';

/**
 * Enhanced homepage data for Local SEO and featured snippets
 * Provides LocalBusiness schemas for USA/UK targeting and HowTo schema for quick setup
 */
export async function getEnhancedHomePageData() {
  const baseUrl = siteConfig.url;

  // LocalBusiness schema for USA
  const localBusinessUSA = generateLocalBusinessSchema({
    name: 'IPTV Provider',
    description: 'Premium IPTV service provider in the United States offering 24,000+ live channels with HD/4K streaming',
    areaServed: 'United States',
    country: 'US',
  });

  // LocalBusiness schema for UK
  const localBusinessUK = generateLocalBusinessSchema({
    name: 'IPTV Provider',
    description: 'Leading IPTV service provider in the United Kingdom with HD/4K streaming and 24/7 support',
    areaServed: 'United Kingdom',
    country: 'GB',
  });

  // LocalBusiness schema for Worldwide
  const localBusinessWorld = generateLocalBusinessSchema({
    name: 'IPTV Provider',
    description: 'Global IPTV streaming service provider offering worldwide coverage with 24,000+ channels',
    areaServed: 'Worldwide',
    country: 'WORLD',
  });

  // HowTo schema for IPTV setup - optimized for featured snippets
  const howToSchema = generateHowToSchema({
    name: 'How to Set Up IPTV Service in 5 Minutes',
    description: 'Quick step-by-step guide to set up IPTV Provider service on any device including Fire Stick, Smart TV, and mobile devices',
    image: {
      url: `${baseUrl}/IPTV-Provider.png`,
      width: 1200,
      height: 630,
    },
    url: `${baseUrl}/#how-it-works`,
    totalTime: 'PT5M', // 5 minutes in ISO 8601 format
    steps: [
      {
        name: 'Step 1: Subscribe to a Plan',
        text: 'Choose your preferred IPTV subscription plan (monthly or yearly) and complete secure payment. Instant activation upon purchase.',
        url: `${baseUrl}/pricing`,
      },
      {
        name: 'Step 2: Download IPTV App',
        text: 'Install IPTV Smarters Pro or TiviMate on your device. Available for Fire Stick, Android TV, Smart TVs, iOS, and Android.',
        url: `${baseUrl}/devices`,
      },
      {
        name: 'Step 3: Enter Your Credentials',
        text: 'Input your login details (username, password, and server URL sent via email) into the IPTV app.',
        url: `${baseUrl}/iptv-guide`,
      },
      {
        name: 'Step 4: Start Streaming',
        text: 'Browse 24,000+ live channels and 80,000+ VOD content. Start watching in HD/4K quality immediately.',
        url: `${baseUrl}/`,
      },
    ],
  });

  // Service schema for IPTV streaming
  const serviceSchema = generateServiceSchema({
    serviceType: 'IPTV Streaming Service',
    providerName: siteConfig.name,
    areaServed: { type: 'Place', name: 'Worldwide' },
    name: 'Premium IPTV Subscription',
    description: 'Professional IPTV streaming service with 24,000+ live channels, 80,000+ VOD library, HD/4K quality, and 24/7 customer support',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '7.50',
      highPrice: '20.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/pricing`,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
  });

  return {
    localBusinessUSA,
    localBusinessUK,
    localBusinessWorld,
    howToSchema,
    serviceSchema,
  };
}
