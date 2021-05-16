<script>
    import 'balloon-css'
    export let imageUrl;
    export let name;
</script>
<div aria-label={name} data-balloon-pos="down">
    <img src={imageUrl} alt={name} class="w-auto h-auto rounded-lg md:rounded-xl m-auto" loading="lazy"/>
</div>