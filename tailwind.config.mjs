import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope Variable', ...defaultTheme.fontFamily.sans],
				mona: ['MonaSans', ...defaultTheme.fontFamily.mono],
			},
			animation: {
				float: 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translate3d(0px, -8px, 0)' },
					'50%': { transform: 'translate3d(0px, 8px, 0)' },
				},
			},
			// boxShadow: {
			// 	xs: '0px 1px 1px rgba(24, 24, 27, 0.06), 0px 0px 0px rgba(24, 24, 27, 0.08), 0px 0px 0px rgba(24, 24, 27, 0.08)',
			// 	sm: '0px 2px 1px rgba(24, 24, 27, 0.01), 0px 1px 1px rgba(24, 24, 27, 0.05), 0px 1px 1px rgba(24, 24, 27, 0.09), 0px 0px 0px rgba(24, 24, 27, 0.1), 0px 0px 0px rgba(24, 24, 27, 0.1);',
			// 	md: '0px 5px 2px rgba(24, 24, 27, 0.03), 0px 3px 2px rgba(24, 24, 27, 0.1), 0px 1px 1px rgba(24, 24, 27, 0.17), 0px 0px 1px rgba(24, 24, 27, 0.2), 0px 0px 0px rgba(24, 24, 27, 0.2);',
			// 	lg: '0px 25px 7px rgba(24, 24, 27, 0.01), 0px 16px 6px rgba(24, 24, 27, 0.04), 0px 9px 5px rgba(24, 24, 27, 0.15), 0px 4px 4px rgba(24, 24, 27, 0.26), 0px 1px 2px rgba(24, 24, 27, 0.29), 0px 0px 0px rgba(24, 24, 27, 0.3);',
			// },
			borderRadius: {
				'4xl': '2rem',
			},
			colors: {
				brand: '#f8122f',
			},
		},
	},
	plugins: [
		plugin(function componentPlugin({ addComponents }) {
			addComponents({
				'.heading-1': {
					'@apply font-mona text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none font-semibold':
						{},
				},
				'.heading-2': {
					'@apply font-mona text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none font-semibold':
						{},
				},
				'.heading-3': {
					'@apply font-mona text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-none font-semibold':
						{},
				},
				'.heading-4': {
					'@apply font-mona text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none font-semibold':
						{},
				},
				'.heading-5': {
					'@apply font-mona text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none font-semibold':
						{},
				},
				'.heading-6': {
					'@apply font-mona text-base sm:text-lg lg:text-xl xl:text-2xl leading-none font-semibold':
						{},
				},
			});
		}),
	],
};
