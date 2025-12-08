
import articles from '@/lib/site-data/how-to.json';

// Export the raw article data for use in server components
// Define the article type explicitly to include the new category field
export interface Article {
    id: string;
    category?: string;
    title: string;
    description: string;
    primaryKeyword: string;
    keywords: string[];
    datePublished: string;
    dateModified: string;
    totalTime: string;
    steps: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
    extraSections?: { id: string; title: string; content: string }[];
}

// Export the raw article data as typed
export const howToArticles: Article[] = articles;

// A lightweight, dependency-free function to get article data for client/edge use.
// This function does NOT include the processed image blur data.
export const getSafeArticleData = (deviceId: string): Article | undefined => {
    return articles.find((p) => p.id === deviceId);
}
