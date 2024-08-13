<template>
    <div class="category">
        <div class="img-holder">
            <img src="/images/cyber-banner.webp" alt="">
        </div>
        <div class="top-category">
            <v-container fluid>
                <h1 class="text-black pt-5 text-center">Top Category</h1>
                <v-row class="py-10">
                    <v-col cols="6" sm="4" md="3" lg="2" v-for="(cate) in categor.slice(0, 6)" :key="cate.id">
                        <v-card style="min-height: 215px;" class="category-hold card" elevation="0">
                            <v-card-item>
                                <div class="text-center pt-5">
                                    <img style="max-width: 100% ; height: 150px; border-radius: 50%; width: 120px;height: 120px;"
                                        :src="cate.thumbnail" alt="">
                                    <p style="font-weight: bold; ">{{ cate.title }}</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categor: {
            type: Array,
        }
    }
}
</script>

<style>
.category .img-holder img {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.swiper-button-next::after,
.swiper-button-prev::after {
    font-size: 15px !important;
    background-color: white;
    border: 1px solid blue;
    border-radius: 50%;
    padding: 10px
}

.dark-mode .top-category h1 {
    color: white !important;
}

.dark-mode .card {
    background-color: #0a0313 !important;
    color: white;
}
</style>