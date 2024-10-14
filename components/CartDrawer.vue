<template>
  <div class="cart">
    <v-navigation-drawer width="330" v-model="drawer" location="right" temporary>
      <v-card elevation="0" style="color: #777;" v-if="!cart.cartItem.length">
        <v-card-title>
          <div class="d-flex align-center">
            <p class="flex-grow-1">{{ $t('Shopping Cart') }}</p>
            <v-icon @click="drawer = false">mdi-close</v-icon>
          </div>
        </v-card-title>
        <v-card-text class="py-2">
          {{ cart.cartItem.length }}
          <p class="pt-5"> {{ $t('Free shipping for all order over $10000.00!') }}</p>
        </v-card-text>
        <v-card-text class="text-center">
          {{ $t('your cart is empty') }}
        </v-card-text>
        <v-card-actions>
          <v-btn @click="[navigateTo('/'), drawer = false]" class="mt-10" rounded elevation="2" height="50"
            width="100%"> {{ $t('Continue Shopping') }}</v-btn>
        </v-card-actions>
      </v-card>
      <v-card elevation="0" v-if="cart.cartItem.length">
        <v-card-title>
          <div class="d-flex align-center">
            <p class="flex-grow-1"> {{ $t('Shopping Cart') }}</p>
            <v-icon @click="drawer = false">mdi-close</v-icon>
          </div>
        </v-card-title>
        <v-card-text class="py-2">
          {{ cart.cartItem.length }}
          <v-progress-linear class="mt-3" color="red" srtiped height="8"
            :model-value="parseInt((subTotprice / 10000) * 100) <= 100 ? parseInt((subTotprice / 10000) * 100) : 100"></v-progress-linear>
        </v-card-text>
        <v-card-text>
          <p v-if="10000 - subTotprice < 0">{{ $t('Your order over free shipping') }}</p>
          <p v-if="10000 - subTotprice > 0"> {{ $t('Only $') }} {{ (10000 - subTotprice).toFixed(2) }} {{
            $t('away from free shepping') }}
          </p>
        </v-card-text>
        <v-card-text>
          <v-card class="cart-item" elevation="0" style="max-height: 400px; overflow-y: auto;">
            <v-row v-for="  item in cart.cartItem" :key="item.id" class="align-center">
              <v-col cols="5">
                <img width=100% height="100" :src="item.thumbnail" alt="">
              </v-col>
              <v-col cols="7">
                <p class="mb-3">{{ item.category }} sample - {{ item.title }}</p>
                <span class="text-red">${{
                  (item.price - Math.ceil(item.price *
                    item.discountPercentage / 100)).toFixed(2) }}</span>
                <div class="d-flex align-center justify-space-between pt-5">
                  <div
                    style="width:fit-content; padding: 5px; border: 1px solid #ccc; height: 40px; border-radius: 20px; "
                    class="d-flex align-center  py-5 ">
                    <v-icon @click="item.quantity > 1 ? item.quantity-- : false">mdi-minus</v-icon>
                    <input v-model="item.quantity" min="1" type="number"
                      style="outline: none; width: 40px; text-align: center;">
                    <v-icon @click="item.quantity++">mdi-plus</v-icon>
                  </div>
                  <v-icon class="text-error" @click="cart.deletItem(item.id)">mdi-delete</v-icon>
                </div>
              </v-col>
              <v-card-text class="d-flex align-center justify-space-between ">
                <strong> {{ $t('Subtotale') }}</strong>
                <span class="text-red">$ {{ subTotprice }}</span>
              </v-card-text>
            </v-row>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <div class="d-flex flex-column mx-auto">
            <v-btn @click="navigateTo('/checkout/')" width="200" density="comfortable"
              style="height: 40px; background-color: #ccc; color: black; margin: 0; " rounded>
              {{ $t('Check Out') }}</v-btn>
            <v-btn @click="navigateTo('/cartPage')"
              style="height: 40px;  color: white;background-color: rgb(3, 3, 154); margin: 0; margin-top: 10px ; "
              rounded>
              {{ $t('Show Cart') }}
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>

</template>

<script>
import { Cart } from "~/stores/cart.js"
import { mapActions } from "pinia";
export default {
  setup() {
    const cart = Cart()
    let subTotprice = ref(null)

    let drawer = ref(false)
    const { $bus } = useNuxtApp();

    watchEffect(() => {
      if (cart.subTotalPrice()) {
        subTotprice.value = cart.subTotalPrice()
      }
    })

    onMounted(() => {
      $bus.$on("openCart", () => {
        drawer.value = true;
      })
      $bus.$on("openCartAuto", () => {
        drawer.value = true
      })
    })
    return { drawer, cart, subTotprice }
  },
  mounted() {
    this.getItemCart()
  },
  methods: {
    ...mapActions(Cart, ['getItemCart']),
  },

}
</script>

<style lang="scss">
.v-navigation-drawer__scrim {
  position: fixed !important;
}

.v-navigation-drawer__content {
  overflow: hidden;
  padding-top: 0;
}

.cart-item {
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #ccc;
  }

  &::-webkit-scrollbar-track {
    width: 10px;
    background-color: #eee;
  }
}

.dark-mode .action,
.dark-mode .btn,
.dark-mode .v-navigation-drawer__content,
.dark-mode .v-card {
  background-color: #0a0313 !important;
  color: white !important;
}
</style>