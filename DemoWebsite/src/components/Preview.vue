<script setup>

</script>

<template>
    <div id="preview">
        <h2>FakeSite</h2>
        <h2>FakeSite</h2>
        <h2>FakeSite</h2>
        <h2>FakeSite</h2>
    </div>
</template>

<style lang="scss" scoped>
    #preview {
        display: flex;
        flex-direction: column;
        //border: 1px solid red;
        width: 100%;
        transition: margin-left .2s ease-out;
        margin-left: 300px;

        &.expanded {
            margin-left: 0;
            //border: 1px solid green;
        }

        //flex: auto;
        //flex: 1;
        //flex: auto;
        //width: 100%;
        //flex-grow: 1;
        //flex-grow: 2;
        //flex: 2;
        //flex: 1;
        //flex-grow: auto;
        //position: relative;
        //left: 0;
        //top: 0;
        //right: 0;
        //bottom: 0;
    }
</style>