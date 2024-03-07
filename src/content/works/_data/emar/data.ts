import type { ImageMetadata } from 'astro';

const allImages = import.meta.glob<{ default: ImageMetadata }>(
	'/src/content/works/_data/**/*.{png,jpg,jpeg,webp}',
);
const paths: string[] = [];

for (const path in allImages) {
	const image = await allImages[path]();
	paths.push(image.default.src);
}

export { paths };
