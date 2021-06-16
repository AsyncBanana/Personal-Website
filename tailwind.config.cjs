module.exports = {
	purge: ['./src/routes/*.svelte', './src/index.html', './src/components/*.svelte', './src/routes/Projects/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('daisyui')
	],
	mode: 'jit',
	daisyui: {
		themes: [
		  'dark',
		],
	  },
};
