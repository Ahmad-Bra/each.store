<template>
    <div class="cart">
        <v-navigation-drawer width="330" v-model="drawer" location="right" temporary>
            <v-card elevation="0" style="color: #777;" v-if="!cartItem.length">
                <v-card-title>
                    <div class="d-flex align-center">
                        <p class="flex-grow-1">{{ $t('Shopping Cart') }}</p>
                        <v-icon @click="drawer = false">mdi-close</v-icon>
                    </div>
                </v-card-title>
                <v-card-text class="py-2">
                    {{ cartItem.length }}
                    <p class="pt-5">Free shipping for all order over $10000.00!</p>
                </v-card-text>
                <v-card-text class="text-center">
                    your card is empty
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="[navigateTo('/'), drawer = false]" class="mt-10" rounded elevation="2" height="50"
                        width="100%">Continue Shopping</v-btn>
                </v-card-actions>
            </v-card>
            <v-card elevation="0" v-if="cartItem.length">
                <v-card-title>
                    <div class="d-flex align-center">
                        <p class="flex-grow-1">Shopping Cart</p>
                        <v-icon @click="drawer = false">mdi-close</v-icon>
                    </div>
                </v-card-title>
                <v-card-text class="py-2">
                    {{ cartItem.length }}
                    <v-progress-linear class="mt-3" color="red" srtiped height="8"
                        :model-value="parseInt((calcSubtotal / 10000) * 100) <= 100 ? parseInt((calcSubtotal / 10000) * 100) : 100"></v-progress-linear>
                </v-card-text>
                <v-card-text>
                    <p class="pt-5" v-if="10000 - calcSubtotal < 0">Your order over free shipping </p>
                    <p class="pt-5" v-if="10000 - calcSubtotal > 0"> Only ${{ 10000 - calcSubtotal }} away from free
                        shepping
                    </p>
                </v-card-text>
                <v-card-text>
                    <v-card class="cart-item" elevation="0" style="max-height: 400px; overflow-y: auto;">
                        <v-row v-for="  item in cartItem" :key="item.id" class="align-center">
                            <v-col cols="5">
                                <img width=100% height="100" :src="item.thumbnail" alt="">
                            </v-col>
                            <v-col cols="7">
                                <p class="mb-3">{{ item.category }} sample - {{ item.title }}</p>
                                <span class="text-red">${{
                                    item.price - Math.ceil(item.price *
                                        item.discountPercentage / 100) }}</span>
                                <div class="d-flex align-center justify-space-between pt-5">
                                    <div style="width:fit-content; padding: 5px; border: 1px solid #ccc; height: 40px; border-radius: 20px; "
                                        class="d-flex align-center  py-5 ">
                                        <v-icon @click="item.quantity > 1 ? item.quantity-- : false">mdi-minus</v-icon>
                                        <input v-model="item.quantity" min="1" type="number"
                                            style="outline: none; width: 40px; text-align: center;">
                                        <v-icon @click="item.quantity++">mdi-plus</v-icon>
                                    </div>
                                    <v-icon class="text-error" @click="deletItem(item.id)">mdi-delete</v-icon>
                                </div>
                            </v-col>
                            <v-card-text class="d-flex align-center justify-space-between ">
                                <strong>Subtotale</strong>
                                <span class="text-red">${{ (
                                    item.price - Math.ceil(item.price *
                                        item.discountPercentage / 100)) * item.quantity }}</span>
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-card-text>
                <v-card-actions>
                    <div class="d-flex flex-column mx-auto">
                        <v-btn @click="navigateTo('/checkoutPage')" width="200" density="comfortable"
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
import { mapActions, mapState } from "pinia";
export default {
    data() {
        return {
        }
    },
    setup() {
        let drawer = ref(false)
        const { $bus } = useNuxtApp();
        onMounted(() => {
            $bus.$on("openCart", () => {
                drawer.value = true;
            })
            $bus.$on("openCartAuto", () => {
                drawer.value = true
            })
        })
        return { drawer }
    },
    mounted() {
        this.getItemCart()
    },
    methods: {
        ...mapActions(Cart, ['getItemCart', 'deletItem']),
    },
    computed: {
        ...mapState(Cart, ["cartItem"]),
        calcSubtotal() {
            let price = 0
            this.cartItem.forEach((prodcut) => {
                price += (((prodcut.price - Math.ceil(prodcut.price *
                    prodcut.discountPercentage / 100)) * prodcut.quantity))
            })
            return price;
        }
    }
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
        width: 5px;
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