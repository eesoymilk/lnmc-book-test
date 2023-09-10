/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans TC', ...defaultTheme.fontFamily.sans],
				serif: ['Noto Serif TC', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true
	}
};
