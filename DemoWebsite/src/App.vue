<script setup>
</script>


<template>
    <header>
        <h1>DemoWebsite</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/deals">Deals</RouterLink>
        </nav>
    </header>

    <main>
        <RouterView />
    </main>
</template>


<style lang="scss" scoped>
    @use "./css/_colors.scss" as *;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        //background-color: red;
    }


    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        //background-color: $background-mute;
    }
</style>
