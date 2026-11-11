import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string(),
    technologies: z.array(z.string()),
    category: z.enum(['web', 'cloud', 'devops']),
    image: z.string(),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.date(),
    status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
    highlights: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};