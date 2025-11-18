
import { howToArticles } from '@/lib/how-to';

export type Post = (typeof howToArticles)[0];

// In a real app, this would fetch from a database or CMS.
export async function getAllPosts(): Promise<Post[]> {
  return howToArticles;
}

/**
 * Calculates a relevance score between two posts based on shared keywords.
 * @param currentPost The post to compare from.
 * @param otherPost The post to compare to.
 * @returns A numerical relevance score.
 */
function calculateRelevance(currentPost: Post, otherPost: Post): number {
  if (!currentPost.keywords || !otherPost.keywords) {
    return 0;
  }

  const currentKeywords = new Set(currentPost.keywords);
  const otherKeywords = new Set(otherPost.keywords);

  let score = 0;
  for (const keyword of currentKeywords) {
    if (otherKeywords.has(keyword)) {
      score++;
    }
  }

  return score;
}

/**
 * Gets a list of related posts for a given slug, based on relevance.
 * @param currentId The slug/ID of the current post.
 * @param minLinks The maximum number of related links to return.
 * @returns An array of related posts.
 */
export async function getRelatedPosts(currentId: string, minLinks = 3) {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find(p => p.id === currentId);

  if (!currentPost) {
    return [];
  }
  
  const related = allPosts
    .filter(post => post.id !== currentId)
    .map(post => ({
      ...post,
      relevanceScore: calculateRelevance(currentPost, post)
    }))
    .filter(post => post.relevanceScore > 0) // Only include posts with some relevance
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, minLinks);
  
  return related;
}
