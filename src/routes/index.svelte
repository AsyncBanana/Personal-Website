<script>
	//import Saos from 'saos';
</script>

<svelte:head>
	<title>AsyncBanana | Build the future</title>
</svelte:head>
<div class="relative h-screen">
	<h1 class="fadeInTop fadeIn md:text-9xl text-7xl mt-20 m-auto w-min">Build</h1>
	<h1 class="fadeInRight fadeIn md:text-9xl text-7xl m-auto w-min">the</h1>
	<h1 class="fadeInEnd fadeIn text-7xl md:text-9xl m-auto w-min">Future</h1>
	<div class="m-auto w-min">
		<a href="#intro">
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
<h1 class="text-center" id="intro">Hello, I am AsyncBanana</h1>
<h2 class="text-center text-gray-500">A student and multi platform developer</h2>
<br />
<div class="m-auto w-3/5 text-center">
	<p>
		I am a developer that does web dev, desktop development, some mobile development, a bit of data
		science, and more! I also write about programming stuff
	</p>
	<p>I like Go, JavaScript, new, shiny frameworks, and bananas :)</p>
	<p>🚧This is currently in progress🚧</p>
	<div class="grid md:grid-rows-3 grid-rows-2" />
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
