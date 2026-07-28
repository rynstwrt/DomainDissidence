<script lang="ts">
    let {config = $bindable()} = $props();
</script>


<header>
    <h1>{config.name}</h1>
</header>