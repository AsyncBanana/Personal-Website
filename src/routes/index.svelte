<script>
	import Project from '../components/project.svelte';
	import Skill from '../components/skill.svelte';
	import IconLink from '../components/iconLink.svelte';
	import jsLogo from '../assets/js_logo.svg';
	import reactLogo from '../assets/react_logo.svg';
	import svelteLogo from '../assets/svelte_logo.svg';
	import htmlLogo from '../assets/HTML5_logo.svg';
	import cssLogo from '../assets/CSS_logo.svg';
	import goLogo from '../assets/go_logo.png';
	import tailwindLogo from '../assets/tailwind_logo.svg';
	import typescriptLogo from '../assets/typescript_logo.svg';
	import pythonLogo from '../assets/python_logo.svg';
	import flutterLogo from '../assets/flutter_logo.svg';
	import dartLogo from '../assets/dart_logo.svg';
	import gitLogo from '../assets/git_logo.svg';
	import linuxLogo from '../assets/linux_logo.svg';
	import dockerLogo from '../assets/docker_logo.svg';
	import bashLogo from '../assets/bash_logo.svg';
	import gcpLogo from '../assets/gcp_logo.svg';
	import nextjsLogo from '../assets/nextjs_logo.svg';
	import gatsbyLogo from '../assets/gatsby_logo.svg';
	import amplifyLogo from '../assets/amplify_logo.svg';
	import firebaseLogo from '../assets/firebase_logo.svg';
	import herokuLogo from '../assets/heroku_logo.svg';
	import redisLogo from '../assets/redis_logo.svg';
	import figmaLogo from '../assets/figma_logo.svg';
	import nodejsLogo from '../assets/nodejs_logo.svg';
	import rustLogo from '../assets/rust_logo.svg';
	import AnimatedSection from '../components/animatedSection.svelte';
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
	<AnimatedSection>
		<h1 slot="heading" class="text-center" id="Skills">Skills</h1>
	</AnimatedSection>
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
		<Skill name="Python" imageUrl={pythonLogo} />
		<Skill name="TypeScript" imageUrl={typescriptLogo} />
		<Skill name="Rust" imageUrl={rustLogo} />
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
		<Skill name="Redis" imageUrl={redisLogo} />
		<Skill name="Figma" imageUrl={figmaLogo} />
	</div>
	<AnimatedSection>
		<h1 slot="heading" class="text-center" id="Projects">Projects</h1>
	</AnimatedSection>

	<div class="grid lg:grid-cols-2">
		<Project
			Name="Microdiff"
			Description="The fastest object and array differ for JavaScript, with 2.5k+ stars on GitHub"
			Url="Microdiff"
		/>
		<Project
			Name="Medium Articles"
			Description="Articles that I have written on Medium"
			Url="Medium"
		/>
		<Project
			Name="Serenity Editor"
			Description="The lightest editor you have ever seen"
			Url="Serenity-Editor"
		/>
		<Project
			Name="This portfolio"
			Description="The porfolio website you are looking at right now"
			Url="Portfolio"
		/>
		<Project
			Name="Coin Flipper"
			Description="A simple, fun Discord economy bot"
			Url="Coin-Flipper"
		/>
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
			ImageUrl={/*mathgameslogo*/ ''}
		/>
		<Project
			Name="Shouting Adventures"
			Description="A Roblox game based off of Shouting Simulator"
			Url="Shouting-Adventures"
		/>
	</div>
	<h1 id="Contact">Contact me</h1>
	<div class="flex m-auto w-1/3">
		<IconLink href="https://github.com/AsyncBanana" tooltip="GitHub">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				fill="currentColor"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				/>
			</svg>
		</IconLink>
		<IconLink href="https://asyncbanana.medium.com/" tooltip="Medium (Blog)">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1770 1000"
				width="50"
				height="50"
				fill="currentColor"
			>
				<circle cx="500" cy="500" r="500" />
				<ellipse ry="475" rx="250" cy="501" cx="1296" />
				<ellipse cx="1682" cy="502" rx="88" ry="424" />
			</svg>
		</IconLink>
		<IconLink href="https://discordapp.com/users/722933309633462274" tooltip="Discord">
			<svg width="50" height="50" viewBox="0 0 48 48" class="svg-1X37T1" overflow="visible"
				><defs
					><path
						d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
						id="7db07dd6-689b-4f51-96e5-b87c310d6aeb-blob_mask"
					/></defs
				><mask
					id="7db07dd6-689b-4f51-96e5-b87c310d6aeb"
					fill="black"
					x="0"
					y="0"
					width="50"
					height="50"
					><use href="#7db07dd6-689b-4f51-96e5-b87c310d6aeb-blob_mask" fill="white" /></mask
				><foreignObject
					mask="url(#7db07dd6-689b-4f51-96e5-b87c310d6aeb)"
					x="0"
					y="0"
					width="50"
					height="50"
					><div
						class="wrapper-1BJsBx selected-bZ3Lue"
						role="listitem"
						data-list-item-id="guildsnav___home"
						tabindex="-1"
						href="/channels/@me/854847237745541140"
						aria-label="Home"
					>
						<div class="childWrapper-anI2G9">
							<svg
								class="homeIcon-FuNwkv"
								aria-hidden="false"
								width="48"
								height="48"
								viewBox="0 0 28 20"
								><path
									fill="currentColor"
									d="M20.6644 20C20.6644 20 19.8014 18.9762 19.0822 18.0714C22.2226 17.1905 23.4212 15.2381 23.4212 15.2381C22.4384 15.881 21.5034 16.3334 20.6644 16.6429C19.4658 17.1429 18.3151 17.4762 17.1884 17.6667C14.887 18.0953 12.7774 17.9762 10.9795 17.6429C9.61301 17.381 8.43836 17 7.45548 16.6191C6.90411 16.4048 6.30479 16.1429 5.70548 15.8096C5.63356 15.7619 5.56164 15.7381 5.48973 15.6905C5.44178 15.6667 5.41781 15.6429 5.39384 15.6191C4.96233 15.381 4.7226 15.2143 4.7226 15.2143C4.7226 15.2143 5.87329 17.1191 8.91781 18.0238C8.19863 18.9286 7.31164 20 7.31164 20C2.0137 19.8333 0 16.381 0 16.381C0 8.7144 3.45205 2.50017 3.45205 2.50017C6.90411 -0.07123 10.1884 0.000197861 10.1884 0.000197861L10.4281 0.285909C6.11301 1.52399 4.12329 3.40493 4.12329 3.40493C4.12329 3.40493 4.65068 3.11921 5.53767 2.71446C8.10274 1.59542 10.1404 1.2859 10.9795 1.21447C11.1233 1.19066 11.2432 1.16685 11.387 1.16685C12.8493 0.976379 14.5034 0.92876 16.2295 1.11923C18.5068 1.38114 20.9521 2.0478 23.4452 3.40493C23.4452 3.40493 21.5514 1.61923 17.476 0.381146L17.8116 0.000197861C17.8116 0.000197861 21.0959 -0.07123 24.5479 2.50017C24.5479 2.50017 28 8.7144 28 16.381C28 16.381 25.9623 19.8333 20.6644 20ZM9.51712 8.88106C8.15068 8.88106 7.07192 10.0715 7.07192 11.5239C7.07192 12.9763 8.17466 14.1667 9.51712 14.1667C10.8836 14.1667 11.9623 12.9763 11.9623 11.5239C11.9863 10.0715 10.8836 8.88106 9.51712 8.88106ZM18.2671 8.88106C16.9007 8.88106 15.8219 10.0715 15.8219 11.5239C15.8219 12.9763 16.9247 14.1667 18.2671 14.1667C19.6336 14.1667 20.7123 12.9763 20.7123 11.5239C20.7123 10.0715 19.6336 8.88106 18.2671 8.88106Z"
								/></svg
							>
						</div>
					</div>
				</foreignObject>
			</svg>
		</IconLink>
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
