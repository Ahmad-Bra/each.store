<template>
    <v-layout style=" position: sticky; inset: 0; z-index: 999;">
        <myNavbar />
        <CartDrawer />
        <SideBar />
        <v-main>
            <slot />
        </v-main>
    </v-layout>
</template>

<script>
export default {

}
</script>

<style></style>