<script setup>

import SidebarSection from '@/components/SidebarSection.vue'
import Setting from '@/components/Setting.vue'
</script>


<template>
    <div id="sidebar" class="active">
        <img id="dd-logo" src="../assets/img/ddlogo.png" alt="DomainDissidence logo">

        <SidebarSection title="Images">
            <Setting title="Background Image URL">
                <input type="url" placeholder="https://test.com">
            </Setting>
        </SidebarSection>


    </div>

</template>


<style lang="scss" scoped>
    @use "../css/colors.scss" as *;
    @use "sass:color";

    #sidebar {
        background-color: color.adjust($background-mute, $lightness: -1.5%);
        //width: 100%;
        width: 300px;
        position: absolute;
        padding: 25px;
        transform: translateX(-100%);
        transition: transform .2s ease-out;
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;

        &.active {
            transform: translateX(0);
        }


        #dd-logo {
            width: 100%;
            margin-bottom: 20px;
        }
    }
</style>