<template>

  <Head>
    <Title>Product details </Title>
    <Meta name="decription" content="Your Product details Page ">
    </Meta>
  </Head>
  <NuxtLayout />
  <div class="pro-details" data-aos="zoom-out" data-aos-duration="10000" data-aos-easing="linear">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" class="px-5">
          <v-skeleton-loader v-if="loading" type="image, image, image"></v-skeleton-loader>
          <div v-if="!loading">
            <img style="height: 500px; width: 100%;" :src="tapImg ? tapImg : productDetails.thumbnail" alt="">
            <v-tabs center-active class="my-10 px-2 " height="150" width="100" v-model="tapImg">
              <v-tab class="mx-3 px-2 " v-for="(img, i) in productDetails.images" :key="i" :value="img">
                <img w style="width: 150px;" :src="img" alt="">
              </v-tab>
            </v-tabs>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="px-5">
          <v-skeleton-loader v-if="loading" type="article, article, article, actions"></v-skeleton-loader>
          <div class="content" v-if="!loading">
            <h1> ({{ productDetails.title }}) Samble - {{ productDetails.category }} For sale </h1>
            <v-rating class="pt-5" v-model="productDetails.rating" density="compact" color="yellow-darken-3"
              half-increment readonly>
            </v-rating>
            <p class="py-5"> {{ productDetails.description }}</p>
            <span>Availability: {{ productDetails.stock > 0 ? 'In stock' : 'not available' }}</span>
            <p class="py-5 font-weight-bold">
              <del>${{ productDetails.price }}</del> From<span class="font-weight-bold text-red">
                ${{
                  (productDetails.price - Math.ceil(productDetails.price *
                    productDetails.discountPercentage / 100)).toFixed(2) }}</span>
            </p>
            <div style="width: fit-content; padding: 5px; border: 1px solid #ccc; height: 40px; border-radius: 20px; "
              class="d-flex align-center py-5 ">
              <v-icon @click="quantity > 1 ? quantity-- : false">mdi-minus</v-icon>
              <input v-model="quantity" min="1" type="number" style="outline: none; width: 80px; text-align: center;">
              <v-icon @click="quantity++">mdi-plus</v-icon>
            </div>
            <p class="mt-5"> subTotale : <span class="font-weight-bold text-red">
                ${{
                  ((productDetails.price - Math.ceil(productDetails.price *
                    productDetails.discountPercentage / 100)) * quantity).toFixed(2) }}</span> </p>
            <div class="d-flex align-center mt-10">
              <v-btn :loading="btnloading" @click="addToCart(productDetails)" class=" w-75"
                style="color: white; background-color: black; font-weight: bold; width: 100%; height: 40px;" rounded>
                Add To
                Cart</v-btn>
              <v-btn style="font-weight: bold;" icon=" mdi-heart" variant="text" @click="addToFav(productDetails)">
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      <PdCmnt></PdCmnt>
    </v-container>
  </div>
</template>

<script>
import { ProductsModule } from "@/stores/Products"
import { Cart } from "@/stores/cart"
import { mapActions, mapState } from "pinia"
export default {

  methods: {
    ...mapActions(ProductsModule, ['getSingleProd', 'addToFav']),
    ...mapActions(Cart, ['addCart']),
    addToCart(item) {
      item.quantity = this.quantity
      this.btnloading = true
      setTimeout(() => {
        this.btnloading = false
        this.addCart(item)
        this.bus("openCartAuto")
        this.bus("showMsg", `Your ${item.title} was addd succssefuly`)
      }, 1000);
    }
  },
  computed: {
    ...mapState(ProductsModule, ['productDetails']),
    ...mapState(Cart, ['cartItem'])
  },
  async created() {
    this.loading = true
    await this.getSingleProd(this.$route.params.id)
    this.loading = false
  },
  mounted() {

    const { $bus } = useNuxtApp();
    this.bus = $bus.$emit
  },
  data() {
    return {
      bus: '',
      loading: false,
      tapImg: '',
      quantity: 1,
      btnloading: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>