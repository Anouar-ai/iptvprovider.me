
import { sportEvents } from "@/lib/site-data/sport-events";
import { getPlaceholderImage } from "@/lib/server/image-blur-server";
import { SportEvents } from "./SportEvents";

export default async function SportEventsContainer() {
    const items = await Promise.all(
        sportEvents.map(async (item) => {
            const placeholder = await getPlaceholderImage(item.src);
            return { ...item, placeholder };
        })
    );

    return <SportEvents items={items} />;
}
