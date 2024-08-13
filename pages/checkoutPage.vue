<template>

    <Head>
        <Title>Checkout</Title>
        <Meta name="decription" content="Checkout Page">
        </Meta>
    </Head>
    <NuxtLayout />

    <div style="padding-top: 125px;">
        <v-container>
            <v-row>
                <v-col class="order-md-1 mb-10" cols="12" md="6">
                    <v-card class="cart-item " elevation="0"
                        style="max-height: 490px; padding: 10px ;overflow-y: auto;margin-top: 20px">
                        <v-row v-for="  item in cartItem" :key="item.id" class="align-center">
                            <v-col cols="3">
                                <div class="d-flex align-center">
                                    <v-icon class="text-error" style="margin: 0 20px; font-size: 30px"
                                        @click="deletItem(item.id)">mdi-delete</v-icon>
                                    <img width="50%" height="100" :src="item.thumbnail" alt="">
                                </div>
                            </v-col>
                            <v-col cols="9">
                                <div class="d-flex align-center justify-space-between ">
                                    <p class="mb-3">{{ item.category }} sample - {{ item.title }}</p>
                                    <span class="text-red">${{ Math.ceil((
                                        item.price - Math.ceil(item.price *
                                            item.discountPercentage / 100)) * item.quantity) }}
                                    </span>
                                </div>
                            </v-col>
                            <v-col cols="12">
                                <div style="gap: 20px;" class="d-flex  justify-space-between">
                                    <v-text-field label="Discount code"></v-text-field>
                                    <v-btn style="height: 55px; ">apply</v-btn>
                                </div>
                                <div class="d-flex align-center justify-space-between py-5">
                                    <strong>Subtotale</strong>
                                    <span class="text-red">${{ Math.ceil((
                                        item.price - Math.ceil(item.price *
                                            item.discountPercentage / 100)) * item.quantity) }}</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-breadcrumbs color="grey" :items="items">
                        <template v-slot:divider>
                            <v-icon icon="mdi-chevron-right"></v-icon>
                        </template>
                    </v-breadcrumbs>
                    <v-text-field :rules="rules" hide-details="auto" label=" email or phone number"></v-text-field>
                    <p class="my-3">delivery method</p>
                    <v-radio-group v-model="column" column>
                        <v-radio label='pickUp' value="radio-1"> </v-radio>
                        <v-radio label="delivery" value="radio-2"></v-radio>
                    </v-radio-group>
                    <v-row>
                        <v-col cols="12">
                            <v-select v-model="value" :items="states" label="Select Item" multiple>
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
                            <v-text-field label="First name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="last name"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Address"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="apartment (optional)"></v-text-field>
                        </v-col>
                        <v-btn @click="navigateTo('/')"
                            style="height: 50px;  color: white;background-color: rgb(3, 3, 154); margin: 0; margin-top: 10px ;width: 200px; "
                            rounded>
                            continue shopping
                        </v-btn>
                    </v-row>
                </v-col>

            </v-row>
        </v-container>
    </div>

</template>

<script>
import { Cart } from "~/stores/cart.js"
import { auth } from "~/stores/auth.js"
import { mapActions, mapState } from "pinia";

export default {
    data() {
        return {
            quantity: 1,
            column: null,
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
    mounted() {
        this.checkToken()
    },
    methods: {
        ...mapActions(Cart, ['deletItem']),
        ...mapActions(auth, ["checkToken"]),
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

<style></style>