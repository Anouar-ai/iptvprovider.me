
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Pricing } from "@/components/sections/Pricing";
import SemanticContent from "@/components/shared/SemanticContent";
import { Devices } from "@/components/sections/Devices";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { getHomePageData } from "@/lib/data/home-page";
import { Schema } from "@/components/shared/Schema";
import dynamic from 'next/dynamic';
import { ContentCarouselSkeleton } from "@/components/shared/ContentCarousel";

const WeeklyBuzz = dynamic(() => import('@/components/sections/WeeklyBuzz').then(mod => mod.WeeklyBuzz), {
  loading: () => <ContentCarouselSkeleton />,
});

const SportEvents = dynamic(() => import('@/components/sections/SportEvents').then(mod => mod.SportEvents), {
  loading: () => <ContentCarouselSkeleton />,
});


export default async function Home() {
    const { 
      semanticContent, 
      weeklyBuzzItemsWithPlaceholders, 
      sportEventsWithPlaceholders,
      productSchema
    } = await getHomePageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <SemanticContent 
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      <Hero />
      <Brands />
      <Devices />
      <Pricing />
      <HowItWorks />
      <WeeklyBuzz items={weeklyBuzzItemsWithPlaceholders} />
      <SportEvents items={sportEventsWithPlaceholders} />
      <CTA />
      <FAQ />
    </>
  );
}
