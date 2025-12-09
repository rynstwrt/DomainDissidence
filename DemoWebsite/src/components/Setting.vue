<script setup>
    defineProps({
        title: String
    });
</script>

<template>
    <div class="setting">
        <label>{{ title }}:</label>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .setting {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        //justify-content: flex-start;
        //align-items: center;

        label {
            font-family: inherit;
            font-size: 1.13rem;
            margin-right: 10px;
            text-wrap: nowrap;
            margin-bottom: 3px;
            letter-spacing: 1px;
        }

        :slotted(input) {
            width: 100%;
            font-family: inherit;
            padding: 2px 3px;
        }
    }
</style>