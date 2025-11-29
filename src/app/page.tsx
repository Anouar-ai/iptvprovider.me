
import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Pricing } from "@/components/sections/Pricing";
import SemanticContent from "@/components/shared/SemanticContent";
import { WeeklyBuzz } from "@/components/sections/WeeklyBuzz";
import { SportEvents } from "@/components/sections/SportEvents";
import { Devices } from "@/components/sections/Devices";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { getHomePageData } from "@/lib/data/home-page";


export default async function Home() {
    const { 
      productSchema, 
      semanticContent, 
      weeklyBuzzItemsWithPlaceholders, 
      sportEventsWithPlaceholders 
    } = await getHomePageData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
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
