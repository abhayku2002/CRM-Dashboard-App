'use server';
/**
 * @fileOverview Summarizes recent CRM activity to provide a daily highlight summary.
 *
 * - summarizeActivity - A function that summarizes recent activity.
 * - SummarizeActivityInput - The input type for the summarizeActivity function.
 * - SummarizeActivityOutput - The return type for the summarizeActivity function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeActivityInputSchema = z.object({
  recentActivity: z
    .string()
    .describe('A list of recent activities in the CRM system.'),
});
export type SummarizeActivityInput = z.infer<typeof SummarizeActivityInputSchema>;

const SummarizeActivityOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the recent activity.'),
});
export type SummarizeActivityOutput = z.infer<typeof SummarizeActivityOutputSchema>;

export async function summarizeActivity(input: SummarizeActivityInput): Promise<SummarizeActivityOutput> {
  return summarizeActivityFlow(input);
}

const summarizeActivityPrompt = ai.definePrompt({
  name: 'summarizeActivityPrompt',
  input: {
    schema: z.object({
      recentActivity: z
        .string()
        .describe('A list of recent activities in the CRM system.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the recent activity.'),
    }),
  },
  prompt: `You are an AI assistant tasked with summarizing recent CRM activity.  Provide a concise summary of the following activities, highlighting the most important events and insights.

Recent Activity:
{{{recentActivity}}}

Summary:`, // Handlebars syntax used correctly.
});

const summarizeActivityFlow = ai.defineFlow<
  typeof SummarizeActivityInputSchema,
  typeof SummarizeActivityOutputSchema
>({
  name: 'summarizeActivityFlow',
  inputSchema: SummarizeActivityInputSchema,
  outputSchema: SummarizeActivityOutputSchema,
},
async input => {
  const {output} = await summarizeActivityPrompt(input);
  return output!;
});
