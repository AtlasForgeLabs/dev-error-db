import { defineCollection, z } from 'astro:content';

const errors = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    technology: z.string(),
    error_signature: z.string(),
    common_causes: z.array(z.string()),
    quick_fix: z.string(),
    updated: z.string(),
  }),
});

export const collections = { errors };
