import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Devices } from "@/components/sections/Devices";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogGrid } from "@/components/sections/BlogGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Devices />
      <Pricing />
      <CTA />
      <Testimonials />
      <FAQ />
      <BlogGrid />
    </>
  );
}
