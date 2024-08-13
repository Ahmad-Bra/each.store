<template>
    <div class="why-shop py-15" style="color: white;">
        <v-container fluid>
            <h1 class="text-center py-5" style=" font-weight: bold; font-size: 40px;"><span
                    style="color: aquamarine;s">Why
                    Shop</span>
                With Us?</h1>
            <v-row class="align-center text-center">
                <v-col cols="6" md="3">
                    <div class="why-box">
                        <img style="width: 100px; " src="/images/weekly-flash-sales.png" alt="">
                        <h3>Free shippin on first order </h3>
                        <p> Lorem ipsum dolor, sit amet consectetur </p>
                        <a href="#">Learn More</a>
                    </div>
                </v-col>
                <v-col cols="6" md="3">
                    <div class="why-box">
                        <img style="width: 100px;" src="/images/free-shipping.png" alt="">
                        <h3>Free shippin on first order </h3>
                        <p> Lorem ipsum dolor, sit amet consectetur </p>
                        <a href="#">Learn More</a>
                    </div>
                </v-col>
                <v-col cols="6" md="3">
                    <div class="why-box">
                        <img style="width: 100px;" src="/images/discount.png" alt="">
                        <h3>Free shippin on first order </h3>
                        <p> Lorem ipsum dolor, sit amet consectetur </p>
                        <a href="#">Learn More</a>
                    </div>
                </v-col>
                <v-col cols="6" md="3">
                    <div class="why-box">
                        <img style="width: 100px;" src="/images/cash-back.png" alt="">
                        <h3>Free shippin on first order </h3>
                        <p> Lorem ipsum dolor, sit amet consectetur </p>
                        <a href="#">Learn More</a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss">
.why-shop {
    background-image: url(/images/why-shop-with-us-banner.webp);
    background-size: cover;

    .why-box {
        padding: 15px 30px;

        p {
            padding: 10px 0;
        }

        a {
            color: white;
        }
    }

}
</style>