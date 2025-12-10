import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const plugins = [];
if (process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY) {
  plugins.push(googleAI({
    apiVersion: 'v1beta',
  }));
}

export const ai = genkit({
  plugins,
  model: 'googleai/gemini-1.5-flash',
});
