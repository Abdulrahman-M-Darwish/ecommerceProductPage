/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "hsl(26, 100%, 55%)",
					200: "hsl(25, 100%, 94%)",
				},
				blue: {
					vark: "hsl(220, 13%, 13%)",
					dark: "hsl(219, 9%, 45%)",
					grayish: "hsl(220, 14%, 75%)",
					light: "hsl(223, 64%, 98%)",
				},
			},
		},
	},
	plugins: [],
};
