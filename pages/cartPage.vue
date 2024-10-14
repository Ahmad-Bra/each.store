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
        <v-col cols="12">
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
          <p class="pt-5" v-if="10000 - subTotprice < 0">{{ $t('Your order over free shipping') }}</p>
          <p class="pt-5" v-if="10000 - subTotprice > 0"> {{ $t('Only $') }} {{ (10000 - subTotprice).toFixed(2) }} {{
            $t('away from free shepping') }}
          </p>
        </v-col>
        <v-col cols="12" md="9">
          <div class="d-flex align-center justify-space-between mb-5">

            <v-btn v-if="cart.cartItem.length" @click="clearCart()" class="text-white bg-error">
              <v-icon>
                mdi-delete
              </v-icon>
              {{ $t('Clear Cart') }}
            </v-btn>
          </div>
          <tabel>
            <thead>
              <tr>
                <th class="w-50"> {{ $t('Product Title') }}</th>
                <th class="w-25"> {{ $t('Preview') }}</th>
                <th> {{ $t('Price') }}</th>
                <th class="text-center"> {{ $t('Quantity') }}</th>
                <th> {{ $t('Total') }}</th>
                <th> {{ $t('Actions') }}</th>
              </tr>
            </thead>
            <tbody id="div">
              <tr v-for="  item in cart.cartItem" :key="item.id">
                <td>
                  <p style="max-width: 400px" class="mb-3">{{ item.category }} sample - {{ item.title
                    }}</p>
                </td>
                <td> <img width="50%" height="100" :src="item.thumbnail" alt=""></td>
                <td><span class="text-red" style="width: 100px !important; display: block;">$ {{
                  Math.ceil(item.price - Math.ceil(item.price *
                    item.discountPercentage / 100)) }}</span></td>
                <td>
                  <div
                    style=" padding: 5px; border: 1px solid #ccc; height: 40px; border-radius: 20px; width: fit-content;"
                    class="d-flex align-center  py-5 ">
                    <v-icon @click="item.quantity > 1 ? item.quantity-- : false">mdi-minus</v-icon>
                    <input v-model="item.quantity" min="1" type="number"
                      style="outline: none; width: 40px; text-align: center;">
                    <v-icon @click="item.quantity++">mdi-plus</v-icon>
                  </div>
                </td>
                <td> <span class="text-red" style="width: 100px !important; display: block;">$ {{ subTotprice }}</span>
                </td>
                <td>
                  <v-icon class="text-error" style="margin: 0 20px; font-size: 30px"
                    @click="deletItem(item.id)">mdi-delete</v-icon>
                </td>
              </tr>
            </tbody>
          </tabel>
        </v-col>
        <v-col class="mb-5" cols="12" md="3">
          <div class="card">
            <h4 style="padding: 10px;"> {{ $t('Order Summary') }}</h4>
            <v-divider class="border-opacity-100" color="black" :thickness="3"></v-divider>
            <div class="d-flex align-center justify-space-between py-5">
              <strong> {{ $t('Subtotale') }}</strong>
              <span class="text-red">$ {{ subTotprice }}</span>
            </div>
            <v-divider class="border-opacity-100" color="grey" :thickness="2"></v-divider>
            <p class="my-3"> {{ $t('coubon code:') }}</p>
            <v-text-field :label="$t('Enter coubon code')"></v-text-field>
            <p class="my-3"> {{ $t('coubon code will be applied in checkout page') }}</p>
            <div class="d-flex align-center justify-space-between py-5">
              <strong>{{ $t('TOTAL') }}</strong>
              <span class="text-red">$ {{ subTotprice }}</span>
            </div>
            <v-divider class="border-opacity-100" color="grey" :thickness="2"></v-divider>
            <p class="my-3">{{ $t('Tax included and shipping calculated at checkout') }} </p>
            <div class="d-flex flex-column mx-auto">
              <v-btn density="comfortable" @click="navigateTo('/checkout/')"
                style="height: 50px; max-width: 300px; background-color: #ccc; color: black; margin: 0; " rounded>
                {{ $t('proceed to CheckOut') }}</v-btn>
              <v-btn @click="navigateTo('/')"
                style="height: 50px; max-width: 300px;  color: white;background-color: rgb(3, 3, 154); margin: 0; margin-top: 10px ; "
                rounded>
                {{ $t('continue shopping') }}
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <HomePageProductsComponent :products="products.products" title="Flash Deals" color="#C62828" />
  </div>
</template>

<script>
import { Cart } from "~/stores/cart.js"
import { useSortable } from '@vueuse/integrations/useSortable'
import { mapActions, mapState } from "pinia";
export default {
  setup() {
    definePageMeta({
      middleware: ['auth-cart']
    })
    const products = ProductsModule()
    const cart = Cart()
    let subTotprice = ref(null)

    watchEffect(() => {
      if (cart.subTotalPrice()) {
        subTotprice.value = cart.subTotalPrice()
      }
      if (!cart.cartItem.length) navigateTo('/')
    })

    useSortable('#div', cart.cartItem, { animation: 500 })

    return { cart, subTotprice, products }

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
tabel {
  min-width: 100%;
  overflow: auto;
  display: block;
}

.card {
  box-shadow: 0px 0px 15px #ddd;
  padding: 10px 12px;
}

th {
  background-color: #f0f0f0;
  margin-top: 30px;
  padding: 10px;
  text-align: start;
  text-transform: capitalize !important;
}

td {
  padding: 10px;
  text-align: start;
  border-bottom: 1px solid #ccc !important;
  cursor: grab;
}


.dark-mode {
  .card {
    box-shadow: 0px 0px 15px #1b1b1b !important;
  }

  td {
    border-bottom: 1px solid #1b1b1b !important;
  }
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