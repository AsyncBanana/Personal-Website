<script>
    import 'balloon-css'
    export let imageUrl;
    export let name;
</script>
<div aria-label={name} data-balloon-pos="down">
    <img src={imageUrl} alt={name} class="w-full h-full rounded-xl"/>
</div>