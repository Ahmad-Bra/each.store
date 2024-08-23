<template>
    <div>

        <Head>
            <Title>Home</Title>
            <Meta name="decription" content="this is main page of store">
            </Meta>
        </Head>
        <NuxtLayout />
        <HomePageUpperBanner />
        <HomePageFeaturesServices />
        <HomePageImagesBanner />
        <HomePageProductsComponent :products="products" title="Flash Deals" color="#C62828" />
        <HomePageTopCategory :categor="products" />
        <HomePageNewProducts :newItmes="topFragrances" />
        <HomePageFeaturesServices />
        <HomePageFeaturedBand />
        <HomePageProductsComponent :products="topFragrances" title="Top Fragrances" color="#C62828" />
        <HomePageTopTelevision />
        <HomePageWhyShop />
        <myFooter />
    </div>
</template>
<script>
import { ProductsModule } from "~/stores/Products"
import { mapActions, mapState } from "pinia"
import { Cart } from "~/stores/cart.js"
export default {
    setup() {
        // const user = useSupabaseUser()
        // watch(() => {
        //     if (!user.value) {
        //         return navigateTo('/login')
        //     }
        // })
        definePageMeta({
            middleware: ["auth"]
        })
        return { user }
    },
    data() {
        return {
            openConfirem: false,
        }
    },
    methods: {
        ...mapActions(ProductsModule, ["getProducts"]),
    },
    computed: {
        ...mapState(ProductsModule, ["products", "newProducts", "topFragrances"]),
        ...mapState(Cart, ["cartItem", "confDelete"]),
    }, watch: {
        confDelete(newV, oldV) {
            if (newV == true) this.openConfirem = true;
        }
    },
    async mounted() {
        await this.getProducts()
    },
}
</script>
<style lang="scss"></style>