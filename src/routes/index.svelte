<script>
	import Project from '../components/project.svelte';
	import Skill from '../components/skill.svelte';
	import jsLogo from '../assets/js_logo.svg';
	import reactLogo from '../assets/react_logo.svg';
	import svelteLogo from '../assets/svelte_logo.svg';
	import htmlLogo from '../assets/HTML5_logo.svg';
	import cssLogo from '../assets/CSS_logo.svg';
	import goLogo from '../assets/go_logo.png';
	import tailwindLogo from '../assets/tailwind_logo.svg';
	import materializeLogo from '../assets/materialize_logo.svg';
	import typescriptLogo from '../assets/typescript_logo.svg';
	import pythonLogo from '../assets/python_logo.svg';
	import flutterLogo from '../assets/flutter_logo.svg';
	import dartLogo from '../assets/dart_logo.svg';
	import csharpLogo from '../assets/csharp_logo.svg';
	import gitLogo from '../assets/git_logo.svg';
	import linuxLogo from '../assets/linux_logo.svg';
	import dockerLogo from '../assets/docker_logo.svg';
	import bashLogo from '../assets/bash_logo.svg';
	import gcpLogo from '../assets/gcp_logo.svg';
	import nextjsLogo from '../assets/nextjs_logo.svg';
	import gatsbyLogo from '../assets/gatsby_logo.svg';
	import tensorflowLogo from '../assets/tensorflow_logo.svg';
	import amplifyLogo from '../assets/amplify_logo.svg';
	import firebaseLogo from '../assets/firebase_logo.svg';
	import herokuLogo from '../assets/heroku_logo.svg';
	import redisLogo from '../assets/redis_logo.svg';
	import figmaLogo from '../assets/figma_logo.svg';
	import nodejsLogo from '../assets/nodejs_logo.svg';
	import mathgameslogo from '../assets/mathgames.png';
</script>

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
<div class="m-auto w-3/5">
	<h1 class="text-center" id="Intro">Hello, I am AsyncBanana</h1>
	<h2 class="text-center text-gray-500">A student and multi platform developer</h2>
	<br />
	<p>
		&#8195;I am a developer that does web dev, desktop development, some mobile development, a bit
		of data science, and more! I also write about programming stuff. This is my
		portfolio/resume/personal website built with TypeScript, SvelteKit, and TailwindCSS
	</p>
	<p>I like Go, JavaScript, new, shiny frameworks, and bananas :)</p>
	<p class="text-center">🚧This is currently in progress🚧</p>
	<h1 class="text-center" id="Skills">Skills</h1>
	<div class="grid md:grid-cols-6 lg:grid-cols-8 grid-cols-3 gap-5">
		<Skill name="JavaScript" imageUrl={jsLogo} />
		<Skill name="Node.js" imageUrl={nodejsLogo} />
		<Skill name="React & React Native" imageUrl={reactLogo} />
		<Skill name="Next.js" imageUrl={nextjsLogo} />
		<Skill name="Gatsby" imageUrl={gatsbyLogo} />
		<Skill name="Svelte" imageUrl={svelteLogo} />
		<Skill name="HTML 5" imageUrl={htmlLogo} />
		<Skill name="CSS 3" imageUrl={cssLogo} />
		<Skill name="Go" imageUrl={goLogo} />
		<Skill name="Tailwind CSS" imageUrl={tailwindLogo} />
		<Skill name="Materialize CSS" imageUrl={materializeLogo} />
		<Skill name="Python" imageUrl={pythonLogo} />
		<Skill name="TypeScript" imageUrl={typescriptLogo} />
		<Skill name="C#" imageUrl={csharpLogo} />
		<Skill name="Dart" imageUrl={dartLogo} />
		<Skill name="Flutter" imageUrl={flutterLogo} />
		<Skill name="Git" imageUrl={gitLogo} />
		<Skill name="Linux" imageUrl={linuxLogo} />
		<Skill name="Bash" imageUrl={bashLogo} />
		<Skill name="Docker" imageUrl={dockerLogo} />
		<Skill name="Google Cloud" imageUrl={gcpLogo} />
		<Skill name="AWS Amplify" imageUrl={amplifyLogo} />
		<Skill name="Firebase" imageUrl={firebaseLogo} />
		<Skill name="Heroku" imageUrl={herokuLogo} />
		<Skill name="Tensorflow" imageUrl={tensorflowLogo} />
		<Skill name="Redis" imageUrl={redisLogo} />
		<Skill name="Figma" imageUrl={figmaLogo} />
	</div>
	<p>
		*Note: This is only a subset of all of the libraries, languages, and frameworks that I have
		knowledge of. Contact me for more info
	</p>
	<h1 class="text-center" id="Projects">Projects</h1>
	<div class="grid lg:grid-cols-2">
		<Project Name="This portfolio" Description="A fun project" Url="Portfolio" />
		<Project
			Name="Smoothie Stand"
			Description="An advanced Discord economy bot"
			Url="Smoothie-Stand"
		/>
		<Project
			Name="GuildScript"
			Description="A Discord bot for building communities"
			Url="GuildScript"
		/>
		<Project
			Name="Math Games"
			Description="A popular, unique Roblox game to help practice math in a fun way"
			Url="Math-Games"
			ImageUrl={mathgameslogo}
		/>
		<Project
			Name="Shouting Adventures"
			Description="A Roblox game based off of Shouting Simulator"
			Url="Shouting-Adventures"
		/>
	</div>
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
