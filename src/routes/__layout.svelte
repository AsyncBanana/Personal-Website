<svelte:head>
	<!-- Primary Meta Tags -->
	<title>AsyncBanana - Build the Future</title>
	<meta name="title" content="AsyncBanana - Build the Future" />
	<meta
		name="description"
		content="AsyncBanana is a multi-platform developer and student who does web dev, desktop dev, data science, and more"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://asyncbanana.dev/" />
	<meta property="og:title" content="AsyncBanana - Build the Future" />
	<meta
		property="og:description"
		content="AsyncBanana is a multi-platform developer and student who does web dev, desktop dev, data science, and more"
	/>
	<!--<meta
		property="og:image"
		content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
	/>-->

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://asyncbanana.dev/" />
	<meta property="twitter:title" content="AsyncBanana - Build the Future" />
	<meta
		property="twitter:description"
		content="AsyncBanana is a multi-platform developer and student who does web dev, desktop dev, data science, and more"
	/>
	<!--<meta
		property="twitter:image"
		content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
	/>-->
	<!-- Other -->
	<meta
		http-equiv="Content-Security-Policy"
		content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';"
	/>
</svelte:head>
<script>
	import tailwindcss from '../assets/tailwind.css';
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>
