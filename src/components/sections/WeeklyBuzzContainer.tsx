
import { weeklyBuzzItems } from "@/lib/site-data/weekly-buzz";
import { getPlaceholderImage } from "@/lib/server/image-blur-server";
import { WeeklyBuzz } from "./WeeklyBuzz";

export default async function WeeklyBuzzContainer() {
    const items = await Promise.all(
        weeklyBuzzItems.map(async (item) => {
            const placeholder = await getPlaceholderImage(item.src);
            return { ...item, placeholder };
        })
    );

    return <WeeklyBuzz items={items} />;
}
