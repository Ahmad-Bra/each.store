<template>
    <v-layout>
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