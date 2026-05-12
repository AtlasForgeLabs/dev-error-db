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
    related_errors: z.array(z.string()).default([]),
    updated: z.string(),
    published_at: z.string().optional(),
    updated_at: z.string().optional(),
  }),
});

export const collections = { errors };
