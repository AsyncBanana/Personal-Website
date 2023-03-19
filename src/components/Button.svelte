<script lang="ts">
  let className = "";
  export let type: "outline" | "primary" = "primary";
  export let link: string | undefined;
  export { className as class };
  const standardClasses = `${
    type === "outline" ? "border-primary border-4 " : ""
  }${
    type === "primary" ? "gradient-primary text-white " : ""
  }rounded-lg text-center py-4 px-8 block text-2xl font-bold hover:brightness-150 duration-300 ${className}`;
</script>

{#if link}
  <a class="{standardClasses}" href="{link}"><slot /></a>
{:else}
  <button class="{standardClasses}"><slot /></button>
{/if}
