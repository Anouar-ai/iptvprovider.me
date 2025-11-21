
import { sportEvents } from "@/lib/site-data/sport-events";
import { ContentCarousel } from "../shared/ContentCarousel";

export function SportEvents() {
  return (
    <ContentCarousel
      items={sportEvents}
      title="Sport"
      titleClassName="styled-title absolute top-8 text-7xl opacity-10 sm:top-4 sm:text-[9rem]"
      subtitle="Events"
      subtitleClassName="text-2xl font-bold uppercase tracking-[10px]"
    />
  );
}
