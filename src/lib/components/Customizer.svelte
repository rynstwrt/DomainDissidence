<script lang="ts">
    let {config = $bindable()} = $props();
</script>


<div>
    <div>
        <label class="label block">Website name</label>
        <input type="text" class="input" bind:value={config.name}/>
    </div>

    <div>
        <label class="label block">Color scheme</label>
    </div>
</div>