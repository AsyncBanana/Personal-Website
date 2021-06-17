<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const res = await import(`../../lib/data/${page.params.project}.json`);
		return {
			props: res.default
		};
	}
</script>

<script>
	export let Name = '';
	export let Description = 'A project';
	export let Url = 'https://github.com/asyncbanana';
	export let Stats = [];
</script>

<svelte:head>
	<meta
		http-equiv="Content-Security-Policy"
		content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';"
	/>
</svelte:head>
<div class={`mx-auto w-4/5 md:w-3/4 mt-20`}>
	<div class="text-center">
		<h1>{Name}</h1>
		<div class="grid md:grid-cols-2 m-4 gap-4">
			<p class="md:text-2xl text-xl">{Description}</p>
			<div class="stats grid-flow-row">
				{#each Stats as Stat}
					<div class="stat">
						<h2 class="stat-title">{Stat.Header}</h2>
						<p class="stat-value">{Stat.Value}</p>
					</div>
				{/each}
			</div>
		</div>
		<a href={Url} class="btn">Visit project</a>
	</div>
</div>
