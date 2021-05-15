module.exports = {
	purge: ['./src/routes/*.svelte', './src/index.html', './src/components/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	mode: 'jit'
};
