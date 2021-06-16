<script>
	export let Name = 'Unknown';
	export let Description = '';
	export let Url;
    export let ImageUrl = '';
</script>
<div class="m-4 card bg-cover" style={`background-image: url(${ImageUrl});`}>
<div class={`bg-primary compact ${ImageUrl === '' ? '' : 'bg-center glass'} h-full`}>
	<div class="card-body">
		<h2 class="card-title">{Name}</h2>
		<p>{Description}</p>
        <div class="card-actions">
            <a class="btn" href={`/Projects/${Url}`}>Visit project page</a>
        </div>
	</div>
</div>
</div>
