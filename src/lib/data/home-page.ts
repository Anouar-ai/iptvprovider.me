
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { weeklyBuzzItems } from "@/lib/site-data/weekly-buzz";
import { sportEvents } from "@/lib/site-data/sport-events";
import { getPlaceholderImage } from "@/lib/image-blur";

// This function fetches and processes all data required for the homepage in a single, cached operation.
export const getHomePageData = cache(
  async () => {
    // Define all data fetching and processing promises
    const productSchemaPromise = Promise.resolve({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "IPTV Provider Subscription",
        "image": "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
        "description": "As one of the best IPTV providers, we offer a premium IPTV service provider subscription with over 20,000 channels, HD/4K quality, and instant activation.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1843"
        },
        "offers": {
            "@type": "Offer",
            "price": "16.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "/pricing",
            "priceValidUntil": "2025-12-31",
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": 0,
                "currency": "USD"
              },
              "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "WW" 
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "DAY"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "DAY"
                }
              }
            },
            "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "WW",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "merchantReturnDays": 7,
                "returnMethod": "https://schema.org/ReturnByMail",
                "returnFees": "https://schema.org/FreeReturn"
            }
        }
    });

    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("Best IPTV Provider");

    const weeklyBuzzPromise = Promise.all(
      weeklyBuzzItems.map(async (item) => {
        const placeholder = await getPlaceholderImage(item.src);
        return { ...item, placeholder };
      })
    );

    const sportEventsPromise = Promise.all(
      sportEvents.map(async (item) => {
        const placeholder = await getPlaceholderImage(item.src);
        return { ...item, placeholder };
      })
    );
    
    // Await all promises in parallel
    const [
      productSchema,
      semanticContent,
      weeklyBuzzItemsWithPlaceholders,
      sportEventsWithPlaceholders
    ] = await Promise.all([
      productSchemaPromise,
      semanticContentPromise,
      weeklyBuzzPromise,
      sportEventsPromise
    ]);

    return { 
      productSchema, 
      semanticContent, 
      weeklyBuzzItemsWithPlaceholders, 
      sportEventsWithPlaceholders 
    };
  },
  ['home-page-data'], // Cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['home-page'], // Tag for on-demand revalidation
  }
);
