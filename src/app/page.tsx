
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
import { Schema } from "@/components/shared/Schema";
import { generateProductSchema } from "@/lib/schema";


export default async function Home() {
    const { 
      semanticContent, 
      weeklyBuzzItemsWithPlaceholders, 
      sportEventsWithPlaceholders 
    } = await getHomePageData();

    const productSchema = generateProductSchema({
      name: "IPTV Provider Subscription",
      description: "As one of the best IPTV providers, we offer a premium IPTV service provider subscription with over 20,000 channels, HD/4K quality, and instant activation.",
      image: "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
      ratingValue: "4.9",
      reviewCount: "1843",
      price: "16.00"
    });

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
