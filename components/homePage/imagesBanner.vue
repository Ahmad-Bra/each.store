<template>
    <div class="img-landing" style="background-color: #eee ; padding: 20px;" data-aos="fade-right"
        data-aos-duration="10000" data-aos-easing="linear">
        <v-container fluid>
            <v-row class="ga-.25 justify-center">
                <v-col cols="12" md="6" lg="4" sm="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="img-holder">
                            <img v-bind="props"
                                :style="`scale : ${isHovering ? 1.05 : 1} ; transition: .3s ease-in-out`"
                                src="/images/headset.webp" alt="">
                        </div>
                    </v-hover>

                </v-col>
                <v-col cols="12" md="6" lg="4" sm="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="img-holder"><img v-bind="props"
                                :style="`scale : ${isHovering ? 1.05 : 1}; transition: .3s ease-in-out`"
                                src="/images/chairs.webp" alt=""></div>
                    </v-hover>

                </v-col>
                <v-col cols="12" md="6" lg="4" sm="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="img-holder"><img v-bind="props"
                                :style="`scale : ${isHovering ? 1.05 : 1}; transition: .3s ease-in-out`"
                                src="/images/playstations.webp" alt=""></div>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row class="g-.10 pt-5">
                <v-col cols="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="img-holder">
                            <img v-bind="props" :style="`scale : ${isHovering ? 1.05 : 1}; transition: .3s ease-in-out`"
                                src="/images/laptops.webp" alt="">
                        </div>
                    </v-hover>
                </v-col>
                <v-col cols="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="img-holder">
                            <img v-bind="props" :style="`scale : ${isHovering ? 1.05 : 1}; transition: .3s ease-in-out`"
                                src="/images/iphones.webp" alt="">
                        </div>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.img-holder {
    overflow: hidden;

    .img-holder img {
        width: 100%;

    }
}

.dark-mode .img-landing {
    background-color: #0a0313 !important;
}
</style>