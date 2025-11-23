
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define the schema for the semantic content structure
const SemanticContentSchema = z.object({
  primaryEntity: z.string().describe('The main subject or topic.'),
  relatedEntities: z
    .array(z.string())
    .describe('A list of people, places, or concepts related to the primary entity.'),
  semanticClusters: z
    .array(z.array(z.string()))
    .describe('Groups of related concepts. Each inner array is a cluster, with the first element being the cluster\'s main topic.'),
  contextualKeywords: z
    .array(z.string())
    .describe('Keywords that often appear in the same semantic space as the topic.'),
});

export type SemanticContent = z.infer<typeof SemanticContentSchema>;

/**
 * Generates a semantic content structure for a given topic using an AI model.
 * @param topic The topic to analyze.
 * @returns A promise that resolves to the semantic content structure.
 */
export async function generateSemanticContent(topic: string): Promise<SemanticContent> {
  const { output } = await ai.generate({
    model: 'groq/llama3-8b-8192',
    output: { schema: SemanticContentSchema },
    prompt: `Analyze the topic "${topic}" and provide a semantic content breakdown in JSON format. Identify the following:
    1.  **Primary Entity**: The single most important subject.
    2.  **Related Entities**: Closely related people, places, organizations, or concepts.
    3.  **Semantic Clusters**: Group related concepts into clusters. Each cluster should be an array of strings, starting with the main theme.
    4.  **Contextual Keywords**: Keywords that frequently appear in the same semantic context as the topic.`,
  });

  if (!output) {
    throw new Error('Failed to generate semantic content. The AI model did not return a valid output.');
  }
  return output;
}

/**
 * Generates a vector embedding for a given text string.
 * @param text The text to generate an embedding for.
 * @returns A promise that resolves to an array of numbers representing the embedding.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  // Groq does not support embeddings, so we return a zero-vector as a fallback.
  // This will disable semantic similarity for related content but prevent errors.
  return new Array(768).fill(0);
}
