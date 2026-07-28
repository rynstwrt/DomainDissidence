<script lang="ts">
    import "./layout.css";

    let {children} = $props();
</script>



<svelte:head>
    <title>DomainDissidence</title>
    <meta name="description" content="The DomainDissidence generator."/>
</svelte:head>



<div class="app">
    <main>{@render children()}</main>
</div>