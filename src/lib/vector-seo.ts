
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
 * Generates a semantic content structure for a given topic using the DeepSeek AI model.
 * @param topic The topic to analyze.
 * @returns A promise that resolves to the semantic content structure.
 */
export async function generateSemanticContent(topic: string): Promise<SemanticContent> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error('DEEPSEEK_API_KEY is not set in the environment variables.');
  }

  const prompt = `Analyze the topic "${topic}" and provide a semantic content breakdown. Identify the following:
    1.  **Primary Entity**: The single most important subject.
    2.  **Related Entities**: Closely related people, places, organizations, or concepts.
    3.  **Semantic Clusters**: Group related concepts into clusters. Each cluster should be an array of strings, starting with the main theme.
    4.  **Contextual Keywords**: Keywords that frequently appear in the same semantic context as the topic.`;

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that only responds with valid JSON based on the user\'s request.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        response_format: { type: 'json_object' },
        stream: false,
      }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`DeepSeek API request failed with status ${response.status}: ${errorBody}`);
    }

    const data = await response.json();
    
    if (!data.choices || data.choices.length === 0 || !data.choices[0].message?.content) {
        throw new Error('Invalid response structure from DeepSeek API.');
    }

    const jsonContent = JSON.parse(data.choices[0].message.content);
    
    // Validate the JSON against our Zod schema
    const validationResult = SemanticContentSchema.safeParse(jsonContent);

    if (!validationResult.success) {
        throw new Error(`Failed to validate semantic content from DeepSeek API: ${validationResult.error.message}`);
    }

    return validationResult.data;

  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    throw new Error(`Failed to generate semantic content: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generates a vector embedding for a given text string.
 * @param text The text to generate an embedding for.
 * @returns A promise that resolves to an array of numbers representing the embedding.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  // Groq/DeepSeek do not support embeddings, so we return a zero-vector as a fallback.
  // This will disable semantic similarity for related content but prevent errors.
  return new Array(768).fill(0);
}
