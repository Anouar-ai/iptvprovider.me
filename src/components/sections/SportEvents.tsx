
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sportEvents } from "@/lib/site-data/sport-events";

const BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxwYXRoIGQ9Ik0wIDBoOHY1SDB6IiBmaWxsPSIjZWRlZGVkIi8+PC9zdmc+";

export function SportEvents() {
  return (
    <section className="relative space-y-4 px-4 py-4 sm:px-16">
      <div className="-mb-2 text-xl font-bold uppercase tracking-[10px] sm:text-2xl">
        <div className="flex flex-col gap-2 pt-20 max-sm:items-center">
          <h3 className="styled-title absolute top-8 text-7xl opacity-10 sm:top-4 sm:text-[9rem]">
            Sport
          </h3>
          <div className="z-10 -mt-8 max-sm:text-center md:-mt-10 md:translate-x-3">
            <p className="text-2xl font-bold uppercase tracking-[10px]">
              Events
            </p>
          </div>
        </div>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {sportEvents.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/7 pl-3 max-w-[200px]">
              <main className="group relative overflow-hidden rounded-xl">
                  <Image
                    alt={`Poster of ${item.title}`}
                    loading="lazy"
                    width="200"
                    height="300"
                    decoding="async"
                    className="rounded-xl object-cover transition-opacity duration-300 ease-in h-[300px] w-[200px]"
                    src={item.src}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
              </main>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
