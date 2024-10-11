<template>
  <div class="quick-view">
    <v-dialog v-model="dialog">
      <v-icon @click="dialog = false"
        style=" position: absolute; right: -10px; top: -10px; background-color: black;color: white; padding: 5px; font-size: 30px; z-index: 100000;">mdi-close</v-icon>
      <v-card class="dialog-content bg-white card" elevation="0">
        <v-container class="" width="750" style="position: relative;">
          <v-row>
            <v-col cols="6" class="px-5">
              <v-skeleton-loader v-if="loading" type="image, image, image"></v-skeleton-loader>
              <div v-if="!loading">
                <img style="height: 300px; width: 100%;" :src="tapImg ? tapImg : product.thumbnail" alt="">
                <v-tabs center-active class="my-10 px-2 " height="150" width="100" v-model="tapImg">
                  <v-tab class="mx-3 px-2 " v-for="(img, i) in product.images" :key="i" :value="img">
                    <img w style="width: 150px;" :src="img" alt="">
                  </v-tab>
                </v-tabs>
              </div>
            </v-col>
            <v-col cols="6" class="px-5">
              <v-skeleton-loader v-if="loading" type="article, article, article, actions"></v-skeleton-loader>
              <div class="content card" v-if="!loading">
                <h1> ({{ product.title }}) Samble - {{ product.category }} For sale </h1>
                <v-rating class="pt-5" v-model="product.rating" density="compact" color="yellow-darken-3" half-increment
                  readonly>
                </v-rating>
                <p class="py-5"> {{ product.description }}</p>
                <span>Availability: {{ product.stock > 0 ? 'In stock' : 'not available' }}</span>
                <p class="py-5 font-weight-bold">
                  <del>${{ product.price }}</del> From<span class="font-weight-bold text-red">
                    ${{
                      (product.price - Math.ceil(product.price *
                        product.discountPercentage / 100)).toFixed(2) }}</span>
                </p>

                <div
                  style="width: fit-content; padding: 5px; border: 1px solid #ccc; height: 40px; border-radius: 20px; "
                  class="d-flex align-center py-5 ">
                  <v-icon @click="quantity > 1 ? quantity-- : false">mdi-minus</v-icon>
                  <input v-model="quantity" min="1" type="number"
                    style="outline: none; width: 80px; text-align: center;">
                  <v-icon @click="quantity++">mdi-plus</v-icon>
                </div>
                <p class="mt-5"> subTotale : <span class="font-weight-bold text-red">
                    $ {{ ((product.price - Math.ceil(product.price *
                      product.discountPercentage / 100)) * quantity).toFixed(2) }}</span> </p>
                <v-btn :loading="btnLoading" @click="addToCart(product)" class="mt-10"
                  style="color: white; background-color: black; font-weight: bold; width: 100%; height: 40px;" rounded>
                  {{ $t('Add To Cart') }}</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Cart } from "~/stores/cart"
import { mapActions } from "pinia"
export default {
  methods: {
    ...mapActions(Cart, ['addCart']),
    addToCart(item) {
      item.quantity = this.quantity
      this.btnLoading = true
      setTimeout(() => {
        this.btnLoading = false
        this.addCart(item)
        this.dialog = false
        this.bus("openCartAuto")
        this.bus("showMsg", `'Your ${item.title} was addd succssefuly`)
      }, 1000)
    }
  },
  mounted() {
    const { $bus } = useNuxtApp();
    this.get = $bus.$on
    this.bus = $bus.$emit
    this.get("openQuickView", (productData) => {
      this.product = productData
      this.dialog = true
      this.loading = false
    })
  }, data() {
    return {
      product: '',
      tapImg: '',
      quantity: 1,
      get: '',
      bus: '',
      loading: false,
      btnLoading: false,
      dialog: false,
    }
  },
}
</script>

<style lang="scss">
.dialog-content {
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #eee;
  }

  &::-webkit-scrollbar-track {
    width: 10px;
    background-color: #ccc;
  }
}

@media (max-width:767px) {
  .content {
    h1 {
      font-size: 23px !important;
    }

    p {
      font-size: 13px !important;
    }
  }

}

.dark-mode input {
  color: white !important;
}

.dark-mode .quick-view,
.dark-mode .swiper-next,
.dark-mode .swiper-prev,
.dark-mode .v-skeleton-loader,
.dark-mode .action,
.dark-mode .btn,
.dark-mode .card {
  background-color: #0a0313 !important;
  color: white !important;
}
</style>