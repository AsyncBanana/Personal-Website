<script>
    import 'balloon-css'
    export let imageUrl;
    export let name;
</script>
<button aria-label={name} data-balloon-pos="down" class="focus:ring-4 focus:outline-none">
    <img src={imageUrl} alt={name} class="w-auto h-auto rounded-lg md:rounded-xl m-auto" loading="lazy"/>
</button>