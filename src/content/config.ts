// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const servicesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			cover: image(),
			coverAlt: z.string(),
			image1: image().optional(),
			image1Alt: z.string().optional(),
			image2: image().optional(),
			image2Alt: z.string().optional(),
		}),
});

const worksCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			cover: image(),
			coverAlt: z.string(),
		}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	services: servicesCollection,
	works: worksCollection,
};
