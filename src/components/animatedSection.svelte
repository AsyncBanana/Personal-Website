<script>
	import Saos from 'saos';
</script>

<div>
	{#if $$slots.heading}
		<Saos animation="expand 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
			<slot name="heading" />
		</Saos>
	{/if}
	{#if $$slots.description}
		<Saos animation="fade 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both" once={true}>
			<slot name="description" />
		</Saos>
	{/if}
</div>

<style>
	@keyframes -global-expand {
		0% {
			letter-spacing: -0.5em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes -global-fade {
		0% {
			transform: translateY(50px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
