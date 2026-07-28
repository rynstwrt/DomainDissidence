<script lang="ts">
    import {LucideSquarePen, Eye} from "@lucide/svelte";
    import Customizer from "$lib/components/Customizer.svelte";
    import Preview from "$lib/components/Preview.svelte";
    import {Views} from "$lib/ddtypes.d";

    let currentView = $state(Views.CUSTOMIZER);

    let config = $state({
        name: "FindBestDeals"
    });
</script>



<div class="p-6">
    {#if currentView == Views.CUSTOMIZER}
        <Customizer bind:config/>
    {:else if currentView == Views.PREVIEW}
        <Preview bind:config/>
    {/if}
</div>



<div class="dock dock-sm bg-neutral">
    <button onclick={() => (currentView = Views.CUSTOMIZER)}
            class:dock-active={currentView === Views.CUSTOMIZER}>
        <LucideSquarePen size={20}/>
        <span class="dock-label">Customize</span>
    </button>

    <button onclick={() => (currentView = Views.PREVIEW)}
            class:dock-active={currentView === Views.PREVIEW}>
        <Eye size={20}/>
        <span class="dock-label">Preview</span>
    </button>
</div>



<style>
    .dock-active::after {
        height: 1px !important;
        padding: 0;
        margin: 0;
        border-top: none;
        bottom: 3px;
        background-color: var(--color-primary);
    }
</style>