import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				urbanist: ['var(--font-urbanist)', 'sans-serif'],
				figtree: ['var(--font-figtree)', 'sans-serif'],
			},
			breakpoints: {
				sm: "640px",
				md: "768px",
				lg: "1200px",
				"2xl": "1536px"
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
