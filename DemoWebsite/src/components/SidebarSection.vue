<script setup>
    defineProps({
        title: String
    });
</script>


<template>
    <div class="settings-section">
        <h3>{{ title }}</h3>

        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
    * {
        margin: 20px 0;
    }

    h3 {
        font-weight: 800;
        font-size: 1.7rem;
        letter-spacing: 4px;
        margin-bottom: 6px;
        text-transform: uppercase;
        //padding-bottom: 4px;
        //border-bottom: 1px solid gray;
    }
</style>