<script lang="ts">
  export let title: string;
  export let link: string | undefined;
  export let type: "developer" | "writer" | undefined;
</script>

<svelte:element
  this="{link ? 'a' : 'div'}"
  class="{`rounded-lg h-60 text-white p-3 duration-300 ${
    type === 'writer' ? 'gradient-red' : 'gradient-blue'
  }`}"
  class:hover:brightness-150="{link}"
  href="{link}"
>
  <h3 class="font-display font-bold responsive:text-2xl">{title}</h3>
  <span class="responsive:text-md"><slot /></span>
</svelte:element>
