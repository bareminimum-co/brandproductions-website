import type { ImageMetadata } from 'astro';

import Emar1 from '../_images/emar/emar-1.png';
import Emar2 from '../_images/emar/emar-2.png';

export interface GalleryImageData {
	image: ImageMetadata;
	alt: string;
	title: string;
	className?: string;
}

export const data: GalleryImageData[] = [
	{
		image: Emar1,
		alt: 'Emar 1',
		title: 'Emar 1',
	},
	{
		image: Emar2,
		alt: 'Emar 2',
		title: 'Emar 2',
	},
];
