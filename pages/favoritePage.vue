<template>

  <Head>
    <Title>Favorites </Title>
    <Meta name="decription" content="Your Favorites Page when you found your fav. poduct">
    </Meta>
  </Head>
  <NuxtLayout />
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h1>{{ $t('Your Favorites') }}</h1>
          <v-breadcrumbs color="grey" :items="items">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
          <EmptyData v-if="!favorite.length" />
          <v-card v-if="favorite.length" class="cart-item" elevation="0"
            style="max-height: 400px; padding: 10px; overflow-y: auto;">
            <v-row v-for="(item, i) in favorite" :key="i" class="align-center">
              <v-col cols="3">
                <div class="d-flex align-center">
                  <v-icon class="text-error" style="margin: 0 20px; font-size: 30px"
                    @click="deletFavItem(item.id)">mdi-delete</v-icon>
                  <img width="50%" height="100" :src="item.thumbnail" alt="">
                </div>
              </v-col>
              <v-col cols="9">
                <div class="d-flex align-center justify-space-between ">
                  <p class="mb-3" style="max-width: 230px;">{{ item.category }} sample - {{ item.title
                    }}</p>
                  <span class="text-red">${{
                    Math.ceil(item.price - Math.ceil(item.price *
                      item.discountPercentage / 100)) }}</span>
                  <div class="d-flex align-center justify-space-between ga-3">
                    <v-btn @click="addToCart(item)"
                      style="color: white; background-color: black; font-weight: bold;  height: 40px;" rounded>{{
                        $t('Add To Cart')
                      }}</v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import { mapState, mapActions } from "pinia";
import { ProductsModule } from "~/stores/Products"
import { Cart } from "~/stores/cart.js";

export default {
  methods: {
    ...mapActions(ProductsModule, ["getFavItems", "deletFavItem"]),
    ...mapActions(Cart, ["addCart"]),
    addToCart(item) {
      setTimeout(() => {
        this.addCart(item)
        this.bus("openCartAuto")
        this.bus("showMsg", `Your ${item.title} was addd succssefuly`)
      }, 1000)
    }
  },
  computed: {
    ...mapState(ProductsModule, ["favorite"])
  },
  mounted() {
    this.getFavItems()
    const { $bus } = useNuxtApp();
    this.bus = $bus.$emit
    // this.favorite.forEach((product) => {
    //   // product.quantity = 1
    // console.log(product.quantity);

    // })
  },
  data() {
    return {
      bus: '',
      items: [
        {
          title: 'Home',
          disabled: false,
          to: '/',
        },
        {
          title: 'Your Favorites',
          disabled: false,
          to: '/favoritePage',
        },
      ],
    }
  },
}
</script>
