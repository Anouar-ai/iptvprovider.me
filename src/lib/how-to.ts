
import articles from '@/lib/site-data/how-to.json';
import { PlaceHolderImages } from './placeholder-images';

export const howToArticles = articles.map(article => {
    const image = PlaceHolderImages.find(img => img.id === article.id);
    return {
        ...article,
        image,
    };
});
