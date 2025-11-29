
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { weeklyBuzzItems } from "@/lib/site-data/weekly-buzz";
import { sportEvents } from "@/lib/site-data/sport-events";
import { getPlaceholderImage } from "@/lib/image-blur";

// This function fetches and processes all data required for the homepage in a single, cached operation.
export const getHomePageData = cache(
  async () => {
    // Define all data fetching and processing promises
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
      semanticContent,
      weeklyBuzzItemsWithPlaceholders,
      sportEventsWithPlaceholders
    ] = await Promise.all([
      semanticContentPromise,
      weeklyBuzzPromise,
      sportEventsPromise
    ]);

    return { 
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
