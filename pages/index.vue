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
    <HomePageNewProducts :newItmes="topSmartPhones.slice(0, 9)" />
    <HomePageFeaturesServices />
    <HomePageFeaturedBand />
    <HomePageProductsComponent :products="topSmartPhones" title="Top SmartPhones" color="#C62828" />
    <HomePageTopTelevision />
    <HomePageProductsComponent :products="accessories" title="" color="#C62828" />
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
    defineRouteRules({
      prerender: true,
    });
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
    ...mapState(ProductsModule, ["products", "newProducts", "topSmartPhones", "accessories"]),
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