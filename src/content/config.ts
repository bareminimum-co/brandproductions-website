// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const servicesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			cover: image().refine((img) => img.width >= 1080, {
				message: 'Cover image must be at least 1080 pixels wide!',
			}),
			coverAlt: z.string(),
		}),
});

const worksCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
	}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	services: servicesCollection,
	works: worksCollection,
};
