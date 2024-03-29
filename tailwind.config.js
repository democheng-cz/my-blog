/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	content: [],
	theme: {
		extend: {},
		screens: {
			"2xl": { max: "1535px" },

			xl: { max: "1350px" },

			lg: { max: "1023px" },

			md: { max: "767px" },

			sm: { max: "639px" },
		},
	},
	plugins: [],
}
