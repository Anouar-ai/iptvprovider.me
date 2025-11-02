
"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { NetflixLogo, DisneyPlusLogo, AppleTVLogo, HBOLogo, ParamountPlusLogo, StarzLogo, CheckmarkLogo } from "../shared/BrandLogos";

const logos = [
  { id: "netflix", component: NetflixLogo },
  { id: "disneyplus", component: DisneyPlusLogo },
  { id: "appletv", component: AppleTVLogo },
  { id: "hbo", component: HBOLogo },
  { id: "paramount", component: ParamountPlusLogo },
  { id: "starz", component: StarzLogo },
  { id: "checkmark", component: CheckmarkLogo },
];

export function LogoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem
                key={logo.id}
                className="min-w-0 shrink-0 basis-1/2 pl-4 sm:basis-1/6"
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group flex h-16 w-full flex-col items-center justify-center rounded-xl border px-4 transition-all duration-300 md:h-24",
                    activeIndex === index
                      ? "border-primary bg-primary/5 shadow-lg dark:bg-primary/10"
                      : "border-black/5 bg-white/5 hover:border-primary/50 hover:bg-white/10 hover:shadow-md dark:border-white/5 dark:bg-black/10 dark:hover:border-primary/50 dark:hover:bg-black/20"
                  )}
                  type="button"
                >
                  <div className="relative flex size-8 items-center justify-center md:size-14">
                    <div className="flex size-8 items-center justify-center md:size-14 [&>svg]:size-full [&>svg]:object-contain">
                      <logo.component />
                    </div>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
