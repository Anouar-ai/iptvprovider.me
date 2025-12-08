


import { getSafeArticleData, type Article } from '@/lib/how-to';
import { getArticlesWithEmbeddings } from '@/lib/server/how-to-server';
import { findSemanticallySimilarContent } from './vector-related-content';
import { unstable_cache as cache } from 'next/cache';

// In a real app, this would fetch from a database or CMS.
export async function getAllPosts(): Promise<Article[]> {
  return (await getArticlesWithEmbeddings()).map(p => ({
    id: p.id,
    category: p.category, // Ensure category is passed if it exists in ContentWithEmbedding, otherwise strict check might fail if not optional there.
    title: p.title,
    description: p.description,
    primaryKeyword: p.primaryKeyword,
    keywords: p.keywords,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    totalTime: p.totalTime,
    steps: p.steps,
    faqs: p.faqs,
    extraSections: p.extraSections,
  }));
}

/**
 * Gets a list of related posts for a given slug, based on semantic similarity.
 * @param currentId The slug/ID of the current post.
 * @param minLinks The maximum number of related links to return.
 * @returns An array of semantically related posts.
 */
// Deterministic, score-based related content algorithm (No dependencies)
export const getRelatedPosts = cache(async (currentId: string, minLinks = 3) => {
  const allPosts = await getAllPosts();

  if (!allPosts || allPosts.length === 0) {
    return [];
  }

  const currentPost = allPosts.find(p => p.id === currentId);

  if (!currentPost) {
    return [];
  }

  // Scoring Algorithm
  const candidates = allPosts
    .filter(p => p.id !== currentId) // Exclude current post
    .map(post => {
      let score = 0;

      // 1. Category Strength (Most Important)
      // Note: We access the 'category' property which you just added to the JSON data.
      if (currentPost?.category && post?.category && currentPost.category === post.category) {
        score += 10;
      }

      // 2. Keyword Overlap (Secondary)
      if (currentPost.keywords && post.keywords) {
        const currentKeywords = currentPost.keywords.map(k => k.toLowerCase());
        const postKeywords = post.keywords.map(k => k.toLowerCase());

        // Count overlapping keywords
        const overlap = postKeywords.filter(k =>
          currentKeywords.some(ck => ck.includes(k) || k.includes(ck))
        ).length;

        score += (overlap * 2);
      }

      // 3. Fallback: Title Similarity
      if (post.title.includes(currentPost.primaryKeyword) || currentPost.title.includes(post.primaryKeyword)) {
        score += 1;
      }

      return {
        ...post,
        score,
        href: `/devices/${post.id}`
      };
    });

  // Sort by score (descending) and return top results
  return candidates
    .sort((a, b) => b.score - a.score)
    .slice(0, 4); // Return top 4 unique related items

},
  ['related-posts'],
  { revalidate: 3600, tags: ['posts'] }
);
