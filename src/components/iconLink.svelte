<script>
    export let href;
    export let tooltip = "";
    import ballooncss from 'balloon-css/balloon.css';
</script>
<a {href} class="text-gray-500 hover:text-white transition-colors m-2 outline-none focus:outline-none focus:ring-4 rounded-md lg:rounded-lg" aria-label={tooltip} data-balloon-pos="up">
    <slot/>
</a>