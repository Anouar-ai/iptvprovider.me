import { z } from 'zod';
import { ai } from '../genkit';
import { SemanticContentSchema } from '@/lib/types/semantic-content';

export const generateSemanticContentFlow = ai.defineFlow({
    name: 'generateSemanticContentFlow',
    inputSchema: z.string().describe('The topic to generate semantic content for'),
    outputSchema: SemanticContentSchema,
}, async (topic) => {
    const { output } = await ai.generate({
        model: 'googleai/gemini-1.5-flash',
        prompt: `Generate semantic content schema for the topic: ${topic}. Include primary entity, related entities, semantic clusters, and contextual keywords.`,
        output: { format: 'json', schema: SemanticContentSchema }
    });

    if (!output) {
        throw new Error("Failed to generate content");
    }

    return output;
});
