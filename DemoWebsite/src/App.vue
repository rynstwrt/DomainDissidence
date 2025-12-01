<script setup>
</script>

<template>
    <header>
        <h1>DemoWebsite</h1>

        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/deals">Deals</RouterLink>
            <!-- <RouterLink to="/contact">Contact</RouterLink> -->
            <!-- <RouterLink to="/">Home</RouterLink> -->
        </nav>
    </header>

    <main>
        <RouterView />
    </main>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: red;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
</style>
