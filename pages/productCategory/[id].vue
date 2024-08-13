<template>

    <Head>
        <Title>{{ title }}</Title>
        <Meta name="decription" content="Your Product details Page ">
        </Meta>
    </Head>
    <NuxtLayout />
    <div class="pro-category text-center">
        <v-container fluid>
            <h1 style="margin-top: 130px;">{{ ($route.params.id) }}</h1>
            <v-card elevation="0" :loading="loading">
                <v-row class="mt-5">
                    <v-row class="mt-6" v-if="loading">
                        <v-col cols="12">
                            <v-row>
                                <v-col v-for=" num in 7" :key="num" cols="3">
                                    <v-skeleton-loader class="skel" type="card, paragraph, button"></v-skeleton-loader>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-col v-if="!loading" cols="12" sm="6" md="4" lg="3" v-for="categor in productsCategory.products"
                        :key="categor.title">
                        <v-card elevation="0">
                            <v-card-item>
                                <v-card-subtitle style="position: relative;" class="img-holder">
                                    <img style="height: 200px;"
                                        :src="ShownItem[categor.title] ? ShownItem[categor.title] : categor.thumbnail"
                                        alt="">
                                    <v-btn @click="quickView(categor)" variant="outlined" rounded class="quick bg-white"
                                        style="height: 30px; position: absolute; inset: 50%; transform: translate(-50%, -50%); font-size: 12px;width: 100px; ">
                                        Quick View
                                    </v-btn>
                                </v-card-subtitle>
                                <v-card-text>
                                    <p>
                                        ({{ categor.title }})
                                        {{ categor.description.length <= 40 ? categor.description :
                                            categor.description.slice(0, 40) }} ... </p>
                                            <v-rating v-model="categor.rating" density="compact" color="yellow-darken-3"
                                                half-increment readonly>
                                            </v-rating>
                                            <p>
                                                <del>${{ categor.price }}</del> From<span
                                                    class="font-weight-bold text-red">
                                                    ${{
                                                        Math.ceil(categor.price - Math.ceil(categor.price *
                                                    categor.discountPercentage / 100)) }}</span>
                                            </p>
                                </v-card-text>
                                <v-card-actions class="action">
                                    <v-btn-toggle class="mb-5 action" v-model="ShownItem[categor.title]" mandatory>
                                        <v-btn size="x-small action" v-for=" pic, i in categor.images " :value="pic"
                                            :key="i">
                                            <img :src="pic"
                                                style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid #ccc;">
                                        </v-btn>
                                    </v-btn-toggle>
                                </v-card-actions>
                                <div class="d-flex align-center">
                                    <v-btn style="font-weight: bold;" icon=" mdi-heart" variant="text"
                                        @click="addToFav(categor)">
                                    </v-btn>
                                    <v-btn @click="navigateTo(`/productDetails/${categor.id}`)" rounded
                                        class=" w-75 btn" style="width: 100%; padding: 3px 0; font-weight: 500">Choose
                                        Options</v-btn>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import { auth } from "~/stores/auth.js"
import { ProductsModule } from "~/stores/Products"
import { mapActions, mapState } from "pinia"
export default {
    setup() {
        const { $bus } = useNuxtApp();
        let quickView = (product) => {
            $bus.$emit("openQuickView", product)
        }
        return { quickView }
    },
    methods: {
        ...mapActions(ProductsModule, ["getByCategory", "addToFav"]),
        ...mapActions(auth, ["checkToken"]),
    },
    computed: {
        ...mapState(ProductsModule, ["productsCategory", "catName"])
    },
    watch: {
        async $route() {
            document.documentElement.scrollTo(0, 0)
            this.loading = true
            await this.getByCategory(this.catName[0])
            this.loading = false
        }
    },
    async mounted() {
        this.checkToken()
        this.title = `${this.$route.params.id} page`
        this.loading = true
        await this.getByCategory(this.catName[0])
        this.loading = false
    },
    data() {
        return {
            title: '',
            ShownItem: {},
            loading: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.dark-mode .action,
.dark-mode .v-skeleton-loader,
.dark-mode .btn,
.dark-mode .v-card {
    background-color: #0a0313 !important;
    color: white !important;
}
</style>