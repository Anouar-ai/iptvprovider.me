
import { weeklyBuzzItems } from "@/lib/site-data/weekly-buzz";
import { ContentCarousel } from "../shared/ContentCarousel";

export function WeeklyBuzz() {
  return (
    <ContentCarousel
      items={weeklyBuzzItems}
      title="Top 10"
      titleClassName="styled-title absolute top-8 text-7xl opacity-10 sm:top-4 sm:text-[9rem]"
      subtitle="Movies"
      subtitleClassName="text-2xl font-bold uppercase tracking-[10px]"
    />
  );
}
