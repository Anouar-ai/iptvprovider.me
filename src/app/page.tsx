import { Hero } from "@/components/sections/Hero";
import type { Metadata } from "next";
import { Schema } from "@/components/shared/Schema";
import dynamic from "next/dynamic";
import { ContentCarouselSkeleton } from "@/components/shared/ContentCarousel";
import { getHomePageData } from "@/lib/data/home-page";
import { generateMetadata as generateMeta } from "@/lib/site-config";
import WeeklyBuzzContainer from "@/components/sections/WeeklyBuzzContainer";
import SportEventsContainer from "@/components/sections/SportEventsContainer";
import SemanticContentContainer from "@/components/shared/SemanticContentContainer";
import { Suspense } from "react";

export const metadata: Metadata = generateMeta({
  title: "Top IPTV Providers 2026 | 24,000+ Channels | USA, UK & Worldwide",
  description:
    "Compare the best IPTV providers in 2026. Subscribe to premium IPTV service with 24,000+ live channels, HD/4K quality, instant activation & 24/7 support. Try free trial today.",
  canonical: "/",
});

const Brands = dynamic(
  () => import("@/components/sections/Brands").then((mod) => mod.Brands),
  {
    loading: () => (
      <div className="h-32 animate-pulse bg-muted/20 rounded-lg" />
    ),
  }
);
const Devices = dynamic(
  () => import("@/components/sections/Devices").then((mod) => mod.Devices),
  {
    loading: () => (
      <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />
    ),
  }
);
const Pricing = dynamic(
  () => import("@/components/sections/Pricing").then((mod) => mod.Pricing),
  {
    loading: () => (
      <div className="h-[600px] animate-pulse bg-muted/20 rounded-lg" />
    ),
  }
);
const HowItWorks = dynamic(
  () =>
    import("@/components/sections/HowItWorks").then((mod) => mod.HowItWorks),
  {
    loading: () => (
      <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />
    ),
  }
);
const CTA = dynamic(
  () => import("@/components/sections/CTA").then((mod) => mod.CTA),
  {
    loading: () => (
      <div className="h-64 animate-pulse bg-muted/20 rounded-lg" />
    ),
  }
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((mod) => mod.FAQ),
  {
    loading: () => (
      <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />
    ),
  }
);

export default async function Home() {
  const { productSchema, videoSchema } = await getHomePageData();

  // Import enhanced schemas separately to avoid circular dependencies
  const { getEnhancedHomePageData } = await import(
    "@/lib/data/home-page-enhanced"
  );
  const {
    localBusinessUSA,
    localBusinessUK,
    localBusinessWorld,
    howToSchema,
    serviceSchema,
  } = await getEnhancedHomePageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="video" schema={videoSchema} />
      <Schema id="local-business-usa" schema={localBusinessUSA} />
      <Schema id="local-business-uk" schema={localBusinessUK} />
      <Schema id="local-business-world" schema={localBusinessWorld} />
      <Schema id="howto" schema={howToSchema} />
      <Schema id="service" schema={serviceSchema} />
      <Suspense fallback={null}>
        <SemanticContentContainer />
      </Suspense>
      <Hero />
      <Brands />
      <Devices />
      <Pricing />
      <HowItWorks />
      <Suspense fallback={<ContentCarouselSkeleton />}>
        <WeeklyBuzzContainer />
      </Suspense>
      <Suspense fallback={<ContentCarouselSkeleton />}>
        <SportEventsContainer />
      </Suspense>
      <CTA />
      <FAQ />
    </>
  );
}
