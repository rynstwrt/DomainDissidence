<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Preview from '@/components/Preview.vue';

function toggleSidebar() {
    document.querySelector("#sidebar").classList.toggle("active");

    document.querySelector("#preview").classList.toggle("expanded");

    // document.querySelector("#preview").classList.add("expanded")
}

</script>


<template>
<!--     <header> -->
<!--         <h1>DemoWebsite</h1> -->
<!--         <nav> -->
<!--             <RouterLink to="/">Home</RouterLink> -->
<!--             <RouterLink to="/deals">Deals</RouterLink> -->
<!--         </nav> -->
<!--     </header> -->

    <header>
        <img id="menu-icon" src="./assets/icon/menu.svg" alt="Menu icon" @click="toggleSidebar">
    </header>

    <main>
        <Sidebar></Sidebar>
        <Preview/>
    </main>
</template>


<style lang="scss" scoped>
    @use "./css/_colors.scss" as *;

    //.roboto-<uniquifier> {
    //  font-family: "Roboto", sans-serif;
    //  font-optical-sizing: auto;
    //  font-weight: <weight>;  // [100,900]
    //  font-style: normal;
    //  font-variation-settings: "wdth" 100;
    //}


    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(html), :global(body) {
        height: 100%;
    }

    :global(body) {
        background-color: $background;
        color: $text;
        height: 100vh;
        font-family: "Roboto", sans-serif;
    }

    :global(#app) {
        //border: 1px solid cyan;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    $header-height: 45px;
    header {
        display: flex;
        align-items: center;
        padding:8px;
        height: $header-height;
        background-color: $background-mute;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;

        #menu-icon {
            height: 100%;
            cursor: pointer;
        }
    }


    //#app {
    //    border: 1px solid blue;
    //}


    main {
        display: flex;
        //flex-direction: row;
        flex-flow: row nowrap;
        //background-color: blue;
        margin-top: $header-height;
        flex: 1;
    }
</style>
