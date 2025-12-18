'use server';

/**
 * @fileOverview A flow to check if a given HTML page is AdSense compliant and provide recommendations.
 *
 * - adsenseComplianceCheck - A function that takes HTML content and returns compliance recommendations.
 * - AdSenseComplianceCheckInput - The input type for the adsenseComplianceCheck function.
 * - AdSenseComplianceCheckOutput - The return type for the adsenseComplianceCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdSenseComplianceCheckInputSchema = z.object({
  htmlContent: z.string().describe('The HTML content of the page to check for AdSense compliance.'),
});
export type AdSenseComplianceCheckInput = z.infer<typeof AdSenseComplianceCheckInputSchema>;

const AdSenseComplianceCheckOutputSchema = z.object({
  isCompliant: z.boolean().describe('Whether the HTML content is AdSense compliant.'),
  recommendations: z.array(z.string()).describe('Recommendations to optimize the HTML content for AdSense approval.'),
});
export type AdSenseComplianceCheckOutput = z.infer<typeof AdSenseComplianceCheckOutputSchema>;

export async function adsenseComplianceCheck(input: AdSenseComplianceCheckInput): Promise<AdSenseComplianceCheckOutput> {
  return adsenseComplianceCheckFlow(input);
}

const adsenseComplianceCheckPrompt = ai.definePrompt({
  name: 'adsenseComplianceCheckPrompt',
  input: {schema: AdSenseComplianceCheckInputSchema},
  output: {schema: AdSenseComplianceCheckOutputSchema},
  prompt: `You are an expert in Google AdSense policies. You will receive the HTML content of a web page and must determine if it is compliant with AdSense policies.

  Analyze the following HTML content:
  \`\`\`html
  {{{htmlContent}}}
  \`\`\`

  Based on your analysis, determine if the content is AdSense compliant. Provide a list of recommendations to optimize the HTML content for AdSense approval. Be specific and actionable.

  Ensure that your response is well-structured and easy to understand.`, // crucial last sentence
});

const adsenseComplianceCheckFlow = ai.defineFlow(
  {
    name: 'adsenseComplianceCheckFlow',
    inputSchema: AdSenseComplianceCheckInputSchema,
    outputSchema: AdSenseComplianceCheckOutputSchema,
  },
  async input => {
    const {output} = await adsenseComplianceCheckPrompt(input);
    return output!;
  }
);
