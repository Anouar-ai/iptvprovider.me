
import articles from '@/lib/site-data/how-to.json';
import { PlaceHolderImages } from './placeholder-images';
import { getPlaceholderImage } from './server/image-blur-server';

type ArticleWithImage = (typeof articles)[0] & {
    image?: {
        imageUrl: string;
        imageHint: string;
        width?: number;
        height?: number;
        blurDataURL?: string;
    }
};

// A pre-filled version of the articles with static data.
// The blurDataURL is added at build time.
let processedArticles: ArticleWithImage[] | null = null;

// This function will be called during the build process to pre-generate blur placeholders
async function processArticles() {
    if (processedArticles) return;

    const articlesWithBlur = await Promise.all(articles.map(async (article) => {
        const imageInfo = PlaceHolderImages.find(img => img.id === `guide-image-${article.id}`);
        if (!imageInfo) return { ...article, image: undefined };
        
        try {
            const blurDataURL = await getPlaceholderImage(imageInfo.imageUrl);
            return {
                ...article,
                image: {
                    ...imageInfo,
                    blurDataURL,
                },
            };
        } catch (error) {
             console.error(`Failed to generate blur data for ${imageInfo.imageUrl}`, error);
             return {
                ...article,
                image: {
                    ...imageInfo,
                    blurDataURL: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxwYXRoIGQ9Ik0wIDBoOHY1SDB6IiBmaWxsPSIjZWRlZGVkIi8+PC9zdmc+",
                },
            };
        }
    }));
    processedArticles = articlesWithBlur;
}


// We need to ensure the processing happens before the export is used.
// This top-level await is supported in modern ES modules.
await processArticles();

// This function now synchronously returns the pre-processed articles.
const getProcessedArticles = (): ArticleWithImage[] => {
    if (!processedArticles) {
        // This fallback should ideally not be hit during a standard build process,
        // but it's here as a safeguard for other runtime environments.
        return articles.map(article => {
            const imageInfo = PlaceHolderImages.find(img => img.id === `guide-image-${article.id}`);
            return {
                ...article,
                image: imageInfo ? { 
                    ...imageInfo, 
                    blurDataURL: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxwYXRoIGQ9Ik0wIDBoOHY1SDB6IiBmaWxsPSIjZWRlZGVkIi8+PC9zdmc+" 
                } : undefined,
            };
        });
    }
    return processedArticles;
};

export const howToArticles: ArticleWithImage[] = getProcessedArticles();

// A lightweight version of the data for client/edge use, without server-side dependencies.
export const getSafeArticleData = (deviceId: string) => {
    return articles.find((p) => p.id === deviceId);
}
