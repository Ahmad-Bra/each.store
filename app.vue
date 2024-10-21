<template>
  <div>
    <HomePageQuickView></HomePageQuickView>
    <v-dialog transition="dialog-bottom-transition" width="auto" v-model="openConfirem">
      <v-card class="text-center pa-3" style=" width:320px; padding: 24px 20px !important;  ">
        <v-card-title>
          <v-icon style="font-size: 50px; padding: 40px; border-radius: 50%; margin-bottom: 24px;"
            class="bg-red-darken-3">
            mdi-delete
          </v-icon>
        </v-card-title>
        <div class="font-weight-bold pa-0 mb-5">
          {{ $t('Are you sure you want to delete:') }}<span class=" text-error"> {{ itemTitle }} </span> ?
        </div>
        <v-card-actions>
          <v-btn class="text-white bg-info" text="Close Dialog" @click="openConfirem = false">{{ $t('Cansel') }}</v-btn>
          <v-btn class="text-white bg-error" text="Close Dialog " @click="deleteItemConfiremed()">{{ $t('Delete')
            }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog transition="dialog-bottom-transition" width="auto" v-model="openConfiremAll">
      <v-card class="text-center pa-3" style="height: 320px; width:320px; ">
        <v-card-title>
          <v-icon style="font-size: 70px; padding: 50px; border-radius: 50%; " class="bg-error">
            mdi-delete
          </v-icon>
        </v-card-title>
        <v-card-text class="font-weight-bold">
          {{ $t('Are you sure you want to delete All items ?') }}
        </v-card-text>
        <v-card-actions>
          <v-btn class="text-white bg-info" text="Close Dialog" @click="openConfiremAll = false">Cansel</v-btn>
          <v-btn class="text-white bg-error" text="Close Dialog " @click="deleteAllItemConfiremed()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar timeout="2000" v-model="snackbar" multi-line>
      {{ addMsg }}
      <template v-slot:actions>
        <v-icon @click="snackbar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
    <NuxtPage />
  </div>
</template>
<script>
import { Cart } from "~/stores/cart.js"
import { mapState } from "pinia";
export default {
  mounted() {
    const { $bus } = useNuxtApp();
    this.get = $bus.$on
    this.get('openConfDeleteAll', () => {
      this.openConfiremAll = true
    }),
      this.get('openConfDelete', (id) => {
        this.openConfirem = true
        this.itemId = id
        for (let i = 0; i <= this.cartItem.length; i++) {
          if (this.cartItem[i].id == this.itemId) {
            this.itemTitle = this.cartItem[i].title
            break;
          }
        }
      }),
      this.get("showMsg", (msg) => {
        this.snackbar = true
        this.addMsg = msg
      })
  },
  computed: {
    ...mapState(Cart, ["cartItem"]),
  },
  methods: {
    deleteItemConfiremed() {
      this.openConfirem = false
      for (let i = 0; i <= this.cartItem.length; i++) {
        if (this.cartItem[i].id == this.itemId) {
          this.itemTitle = this.cartItem[i].title
          this.cartItem.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cart-item", JSON.stringify(this.cartItem));
    },
    deleteAllItemConfiremed() {
      this.cartItem.length = 0
      localStorage.removeItem("cart-item");
      this.openConfiremAll = false
    },
  },
  data() {
    return {
      itemId: '',
      openConfiremAll: false,
      itemTitle: '',
      snackbar: false,
      openConfirem: false,
      addMsg: "",
      get: '',
    }
  },
}
</script>

<style>
html[dir=rtl] body {
  font-family: "Almarai", sans-serif !important;
}

body {
  font-family: "Almarai", sans-serif !important;
  transition: background-color .5s ease;
}

.v-card-subtitle {
  opacity: 1 !important;
}

.dark-mode body {
  background-color: #01070c;
  color: #ebf4f1;
}
</style>