import { Hero } from "@/components/sections/Hero";
import type { Metadata } from 'next';
import { Schema } from "@/components/shared/Schema";
import dynamic from 'next/dynamic';
import { ContentCarouselSkeleton } from "@/components/shared/ContentCarousel";
import SemanticContent from "@/components/shared/SemanticContent";
import { getHomePageData } from "@/lib/data/home-page";
import { generateMetadata as generateMeta } from '@/lib/site-config';

export const metadata: Metadata = generateMeta({
  title: 'IPTV Provider — IPTV Service in USA, UK & Worldwide',
  description: 'Subscribe to our IPTV service with 24,000+ live channels & VOD. HD/4K quality, instant activation & 24/7 support. Premium IPTV streaming worldwide.',
  canonical: '/',
});

const Brands = dynamic(() => import("@/components/sections/Brands").then(mod => mod.Brands));
const Devices = dynamic(() => import("@/components/sections/Devices").then(mod => mod.Devices));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => mod.Pricing));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks").then(mod => mod.HowItWorks));
const CTA = dynamic(() => import("@/components/sections/CTA").then(mod => mod.CTA));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));

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
    productSchema,
    videoSchema
  } = await getHomePageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="video" schema={videoSchema} />
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
