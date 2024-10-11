<template>

  <Head>
    <Title>Checkout</Title>
    <Meta name="decription" content="Checkout Page">
    </Meta>
  </Head>
  <NuxtLayout />

  <div>
    <v-container>
      <v-row>
        <v-col class="order-md-1 mb-10" cols="12" md="6">
          <v-card class="cart-item " elevation="0"
            style="max-height: 490px; padding: 10px ;overflow-y: auto;margin-top: 20px">
            <v-row v-for="  item in cart.cartItem" :key="item.id" class="align-center">
              <v-col cols="3">
                <div class="d-flex align-center">
                  <v-icon class="text-error" style="margin: 0 20px; font-size: 30px"
                    @click="cart.deletItem(item.id)">mdi-delete</v-icon>
                  <img width="50%" height="100" :src="item.thumbnail" alt="">
                </div>
              </v-col>
              <v-col cols="9">
                <div class="d-flex align-center justify-space-between ">
                  <p class="mb-3">{{ item.category }} sample - {{ item.title }}</p>
                </div>
                <span class="text-red">${{ Math.ceil((
                  item.price - Math.ceil(item.price *
                    item.discountPercentage / 100)) * item.quantity) }}
                </span>
              </v-col>
            </v-row>
            <div class="d-flex align-center justify-space-between py-5">
              <strong>Subtotale</strong>
              <span class="text-red">$ {{ subTotprice }} </span>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-breadcrumbs color="grey" :items="items">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
          <v-text-field v-model.trim="orderStore.order.phone_number" :rules="rules" hide-details="auto"
            label=" phone number"></v-text-field>
          <br>
          <v-text-field v-model.trim="orderStore.order.user_email" :rules="rules" hide-details="auto"
            label="email"></v-text-field>
          <p class="my-3">delivery method</p>
          <v-radio-group v-model.trim="orderStore.order.delivery_method" column>
            <v-radio label='pickUp' value="pickUp"> </v-radio>
            <v-radio label="delivery" value="delivery"></v-radio>
          </v-radio-group>
          <v-row>
            <v-col cols="12">
              <v-select :rules="rules" v-model.trim="orderStore.order.country" :items="states" label="Select Country">
                <template v-slot:selection="{ item, index }">
                  <v-chip v-if="index < 2">
                    <span>{{ item.title }}</span>
                  </v-chip>
                  <span v-if="index === 2" class="text-grey text-caption align-self-center">
                    (+{{ value.length - 2 }} others)
                  </span>
                </template>
              </v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field :rules="rules" v-model.trim="orderStore.order.first_name" label="First name"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field :rules="rules" v-model.trim="orderStore.order.last_name" label="last name"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field :rules="rules" v-model.trim="orderStore.order.user_address" label="Address "></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model.trim="orderStore.order.apartment" label="apartment (optional)"></v-text-field>
            </v-col>
            <v-col cols="12">
              <div class="text-warning" v-if="user_info_msg"> <v-icon>mdi-information-outline</v-icon> {{ user_info_msg
                }}</div>
              <v-btn @click="showCardPayment"
                style="height: 50px;  color: white;background-color: rgba(3, 3, 154,6); margin: 0; margin-top: 10px ;width: 200px; "
                rounded :disabled="isCompletedInfo">
                Complete Payment
              </v-btn>

            </v-col>

            <v-col cols="12" v-if="isCompletedInfo">
              <div id="card-element" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
              </div>
              <div id="card-error " class="text-error" role="alert" v-if="error">{{ error }}</div>
              <div id="card-error " class="text-success" role="alert" v-if="successMsg">{{ successMsg }}</div>
              <v-btn @click="pay()"
                style="height: 50px;  color: white;background-color: rgba(3, 3, 154,6); margin: 0; margin-top: 10px ;width: 200px; "
                rounded>
                Order
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-container>
  </div>

</template>

<script>
import { Cart } from "~/stores/cart.js"
import { orders } from "~/stores/orders";
import Stripe from "stripe";
import { loadStripe } from '@stripe/stripe-js';

export default {
  async setup() {
    definePageMeta({
      middleware: ['auth-user']
    })
    const cart = Cart()
    const orderStore = orders()
    const { supabase } = useSupabase()
    let subTotprice = ref(null)
    let user = useSupabaseUser()
    let orderItem = ref([])
    let clientSecret = null
    let makeOrder = null
    let sentOrder = null
    let stripe = null
    let cardElement = ref(null)
    let error = ref(null);
    let successMsg = ref(null)
    let user_info_msg = ref(null)
    let isCompletedInfo = ref(false)
    let pay;
    const stripePromise = loadStripe(useRuntimeConfig().public.stripePK);

    let showCardPayment = async () => {

      if (orderStore.order.user_email == '' && orderStore.order.first_name == '' && orderStore.order.user_address == '') {
        user_info_msg.value = `please complete your informations .`
        return
      } else {
        user_info_msg.value = ``
        isCompletedInfo.value = true
        stripe = await stripePromise;
        const elements = stripe.elements();
        // Create and mount the card element.  
        var style = {
          base: {
            fontSize: '18px',
          },
          invalid: {
            color: "#121212",
            iconColor: '#CCC'
          }
        }
        cardElement = elements.create('card', {
          hidePostalCode: true,
          style
        });
        cardElement.mount('#card-element');
        cardElement.on('change', (event) => {
          if (event.error.message) {
            error.value = event.error.message
            setTimeout(() => {
              error.value = ''
            }, 3000);
          }
        });
      }
    }
    watchEffect(() => {
      if (orderStore.order.user_email !== null && orderStore.order.first_name !== null && orderStore.order.user_address !== null)
        user_info_msg.value = ``
      // subTotprice
      if (cart.subTotalPrice()) {
        subTotprice.value = cart.subTotalPrice()
      }

      if (!cart.cartItem.length) navigateTo('/')
    })

    pay = async () => {
      const stripeSecret = Stripe(useRuntimeConfig().public.strpeSK)

      const paymentIntent = await stripeSecret.paymentIntents.create({
        amount: (subTotprice.value * 100), // in $
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      });
      if (paymentIntent.error) {
        throw Error(paymentIntent.error)
      }
      clientSecret = paymentIntent.client_secret

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      })
      if (result.paymentIntent.status) {
        successMsg.value = 'Your order is succeded'
        error.value = ''
        cart.cartItem.forEach((item) => {
          orderItem.value.push(item)
        })
        if (orderItem.value.length > 0) {
          sentOrder()
        } else {
          return alert(`No order has been oadded`);
        }
        // to dataBase
        makeOrder(result.paymentIntent.id)     // Sent User Details to dataBase
        navigateTo('/checkout/success')
        setTimeout(() => {
          cart.cartItem = []
          localStorage.clear()
        }, 10000);
      }
    }
    // sent order item into dataBase 

    sentOrder = async () => {
      let result = orderItem.value.forEach(async (item) => {
        const { data, error } = await supabase.from('orderItem').insert([
          { orderId: item.id, user_id: user.value.id }
        ]).select()
      })
    }
    // Sent User Details to dataBase
    makeOrder = async (stripeid) => {
      let response = await supabase.from('orders').insert([
        {
          stripe_id: stripeid,
          phone_number: orderStore.order.phone_number,
          user_email: orderStore.order.user_email,
          delivery_method: orderStore.order.delivery_method,
          first_name: orderStore.order.first_name,
          last_name: orderStore.order.last_name,
          country: orderStore.order.country,
          user_address: orderStore.order.user_address,
          apartment: orderStore.order.apartment || null,
        }
      ]).select()
    }

    return { subTotprice, cart, sentOrder, isCompletedInfo, orderStore, clientSecret, pay, error, stripe, cardElement, successMsg, user_info_msg, showCardPayment }
  },
  data() {
    return {
      value: [],
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      items: [
        {
          title: 'Cart',
        },
        {
          title: 'informaion',
        },
        {
          title: 'shipping',
        },
        {
          title: 'Payment',
        },
      ],
      favorites: [],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
      ],
    }
  },
}


</script>

<style></style>