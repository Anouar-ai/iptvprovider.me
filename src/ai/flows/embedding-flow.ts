import { z } from 'zod';
import { ai } from '../genkit';

export const generateTextEmbedding = ai.defineFlow({
    name: 'generateTextEmbedding',
    inputSchema: z.string(),
    outputSchema: z.array(z.number()),
}, async (text) => {
    const response = await ai.embed({
        embedder: 'googleai/text-embedding-004',
        content: text,
    });
    const result = response as any;
    const embedding = result.embedding || result.embeddings?.[0]?.embedding;
    if (!embedding) {
        throw new Error("No embedding returned");
    }
    return embedding;
});
