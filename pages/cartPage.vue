<template>

  <Head>
    <Title>Cart </Title>
    <Meta name="decription" content="Your Cart Page ">
    </Meta>
  </Head>
  <NuxtLayout />
  <div>
    <v-container fluid>
      <v-row style="">
        <v-col cols="12" md="9">
          <h1> {{ $t('Your Cart') }}</h1>
          <v-breadcrumbs color="grey" :items="items">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
          <div class="py-2">
            {{ cart.cartItem.length }}
            <v-progress-linear class="mt-3" color="red" srtiped height="8"
              :model-value="parseInt((subTotprice / 10000) * 100) <= 100 ? parseInt((subTotprice / 10000) * 100) : 100"></v-progress-linear>
          </div>
          <div class="d-flex align-center justify-space-between my-5">
            <p v-if="10000 - subTotprice < 0">Your order over free shipping </p>
            <p v-if="10000 - subTotprice > 0"> Only ${{ 10000 - subTotprice }} away from free
              shepping
            </p>
            <v-btn v-if="cart.cartItem.length" @click="clearCart()" class="text-white bg-error">
              <v-icon>
                mdi-delete
              </v-icon>
              Clear Cart
            </v-btn>
          </div>
          <tabel>
            <thead>
              <tr>
                <th class="w-100 text-left">PRODUCT</th>
                <th>PRICE</th>
                <th style="padding: 0 80px;">QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
          </tabel>
          <v-card class="cart-item" elevation="0" style="max-height: 400px; padding: 10px; overflow-y: auto;">
            <v-row v-for="  item in cart.cartItem" :key="item.id" class="align-center">
              <v-col cols="3">
                <div class="d-flex align-center">
                  <v-icon class="text-error" style="margin: 0 20px; font-size: 30px"
                    @click="deletItem(item.id)">mdi-delete</v-icon>
                  <img width="50%" height="100" :src="item.thumbnail" alt="">
                </div>
              </v-col>
              <v-col cols="9">
                <div class="d-flex align-center justify-space-between ">
                  <p style="max-width: 300px" class="mb-3">{{ item.category }} sample - {{ item.title
                    }}</p>
                  <span class="text-red">$ {{
                    Math.ceil(item.price - Math.ceil(item.price *
                      item.discountPercentage / 100)) }}</span>
                  <div class="d-flex align-center justify-space-between pt-5">
                    <div style=" padding: 5px; border: 1px solid #ccc; height: 40px; border-radius: 20px; "
                      class="d-flex align-center  py-5 ">
                      <v-icon @click="item.quantity > 1 ? item.quantity-- : false">mdi-minus</v-icon>
                      <input v-model="item.quantity" min="1" type="number"
                        style="outline: none; width: 40px; text-align: center;">
                      <v-icon @click="item.quantity++">mdi-plus</v-icon>
                    </div>
                  </div>
                  <span class="text-red">$ {{ subTotprice }}</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <p style="margin: 20px 0; display: flex; gap: 20px; align-items: center; color: #777;">
            <v-icon>mdi-gift</v-icon>
            do you want a gift
            wrap? only for 10$
            <v-btn rounded bordered>add</v-btn>
          </p>
          <p style="font-size: 20px; margin: 20px 0;">addional comments</p>
          <v-textarea width="40%" clear-icon="mdi-close-circle" label="special instruction for seller"
            model-value="This is clearable text." clearable></v-textarea>
        </v-col>
        <v-col class="mb-5" cols="12" md="3">
          <h4 style="padding: 10px;">Order Summary</h4>
          <v-divider class="border-opacity-100" color="black" :thickness="3"></v-divider>
          <div class="d-flex align-center justify-space-between py-5">
            <strong>Subtotale</strong>
            <span class="text-red">$ {{ subTotprice }}</span>
          </div>
          <v-divider class="border-opacity-100" color="grey" :thickness="2"></v-divider>
          <p class="my-3">coubon code:</p>
          <v-text-field label="Enter coubon code"></v-text-field>
          <p class="my-3">coubon code will be applied in checkout page</p>
          <div class="d-flex align-center justify-space-between py-5">
            <strong>TOTAL</strong>
            <span class="text-red">$ {{ subTotprice }}</span>
          </div>
          <v-divider class="border-opacity-100" color="grey" :thickness="2"></v-divider>
          <p class="my-3">Tax included and shipping calculated at checkout </p>
          <div class="d-flex flex-column mx-auto">
            <v-btn density="comfortable" @click="navigateTo('/checkout/')"
              style="height: 50px; max-width: 300px; background-color: #ccc; color: black; margin: 0; " rounded>
              proceed to
              CheckOut</v-btn>
            <v-btn @click="navigateTo('/')"
              style="height: 50px; max-width: 300px;  color: white;background-color: rgb(3, 3, 154); margin: 0; margin-top: 10px ; "
              rounded>
              continue shopping
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Cart } from "~/stores/cart.js"
import { mapActions, mapState } from "pinia";
export default {
  setup() {
    definePageMeta({
      middleware: ['auth-cart']

    })
    const cart = Cart()
    let subTotprice = ref(null)

    watchEffect(() => {
      if (cart.subTotalPrice()) {
        subTotprice.value = cart.subTotalPrice()
      }
      if (!cart.cartItem.length) navigateTo('/')
    })
    return { cart, subTotprice }

  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          disabled: false,
          to: '/',
        },
        {
          title: 'Your Cart',
          disabled: false,
          to: '/cartPage',
        },
      ],
      value: [],
      favorites: [],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
      ],
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions(Cart, ['deletItem', "clearCart"]),
  },

}

</script>

<style lang="scss" scoped>
th {
  padding: 20px;
  background-color: #eee;
  margin-top: 30px;
}

.dark-mode th {
  background-color: #0a0313 !important;
}

@media (max-width:767px) {
  th {
    padding: 10px 20px !important;
  }
}
</style>