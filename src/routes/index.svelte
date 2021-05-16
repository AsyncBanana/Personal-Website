<script>
	//import Saos from 'saos';
	import Skill from '../components/skill.svelte';
	import jsLogo from '../assets/js_logo.svg';
	import reactLogo from '../assets/react_logo.svg';
	import svelteLogo from '../assets/svelte_logo.svg';
	import htmlLogo from '../assets/HTML5_logo.svg';
	import cssLogo from '../assets/CSS_logo.svg';
	import goLogo from '../assets/go_logo.png'
	import tailwindLogo from '../assets/tailwind_logo.svg'
	import materializeLogo from '../assets/materialize_logo.svg'
	import typescriptLogo from '../assets/typescript_logo.svg'
	import pythonLogo from '../assets/python_logo.svg'
</script>

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
	<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-ancestors 'none';">
</svelte:head>
<div class="relative h-screen">
	<h1 class="fadeInTop fadeIn md:text-9xl text-7xl mt-20 m-auto w-min">Build</h1>
	<h1 class="fadeInRight fadeIn md:text-9xl text-7xl m-auto w-min">the</h1>
	<h1 class="fadeInEnd fadeIn text-7xl md:text-9xl m-auto w-min">Future</h1>
	<div class="m-auto w-min">
		<a href="#Intro" alt="Go to intro" aria-label="Go to intro">
			<svg
				class="animate-bounce w-12 h-24 mt-20 text-amber-900"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</a>
	</div>
</div>
<h1 class="text-center" id="Intro">Hello, I am AsyncBanana</h1>
<h2 class="text-center text-gray-500">A student and multi platform developer</h2>
<br />
<div class="m-auto w-3/5 text-center">
	<p>
		I am a developer that does web dev, desktop development, some mobile development, a bit of data
		science, and more! I also write about programming stuff
	</p>
	<p>I like Go, JavaScript, new, shiny frameworks, and bananas :)</p>
	<p>🚧This is currently in progress🚧</p>
</div>
<h1 class="text-center" id="Skills">Skills</h1>
<div class="grid md:grid-cols-6 lg:grid-cols-8 grid-cols-3 gap-5 m-auto w-3/5">
	<Skill name="JavaScript" imageUrl={jsLogo} />
	<Skill name="React" imageUrl={reactLogo} />
	<Skill name="Svelte" imageUrl={svelteLogo} />
	<Skill name="HTML 5" imageUrl={htmlLogo} />
	<Skill name="CSS 3" imageUrl={cssLogo} />
	<Skill name="Go" imageUrl={goLogo}/>
	<Skill name="Tailwind CSS" imageUrl={tailwindLogo}/>
	<Skill name="Materialize CSS" imageUrl={materializeLogo}/>
	<Skill name="Python" imageUrl={pythonLogo}/>
	<Skill name="TypeScript" imageUrl={typescriptLogo}/>
</div>

<style>
	@keyframes fade-in-top {
		0% {
			opacity: 0;
			transform: translateY(-15vw);
		}
		100% {
			transform: translateY(0vw);
			opacity: 1;
		}
	}
	@keyframes fade-in-right {
		0% {
			opacity: 0;
			transform: translateX(5vw);
		}
		100% {
			transform: translateX(0vw);
			opacity: 1;
		}
	}
	@keyframes fade-in-end {
		0% {
			opacity: 0;
			transform: translateX(15vw);
		}
		50% {
			transform: translateX(0vw);
			opacity: 1;
		}
		100% {
			color: rgb(138, 58, 58);
			color: linear-gradient(-45deg, rgba(138, 58, 58, 1) 32%, rgba(255, 136, 0, 1) 81%);
			transform: translateX(0vw);
			opacity: 1;
		}
	}
	.fadeInTop {
		animation-name: fade-in-top;
	}
	.fadeInRight {
		animation-name: fade-in-right;
		animation-delay: 0.5s;
	}
	.fadeInEnd {
		animation-name: fade-in-end;
		animation-delay: 1s;
		animation-duration: 2s !important;
	}
	.fadeIn {
		animation-duration: 0.5s;
		animation-direction: normal;
		animation-timing-function: ease-in;
		animation-fill-mode: both;
		opacity: 0;
	}
</style>
