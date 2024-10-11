<template>
    <div class="landing" data-aos="zoom-out">
        <div class="parent">
            <div class="img-holder">
                <img src="/images/banner-bg.jpg" alt="">
            </div>
            <div class="banner-info">
                <h1> <span>Huge Saving</span> On UHD Television</h1>
                <p class="pt-6">Sale Up To 70% Off on Selected Item</p>
                <v-btn class="my-4 px-6" style="font-weight: bold; " variant="outlined" rounded>Shop
                    Now</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.img-holder {
    img {
        object-fit: cover;
        width: 100%;
    }
}

.parent {
    position: relative;

    .banner-info {
        position: absolute;
        left: 40px;
        top: 20px;
        width: 50%;
    }

    .banner-info h1 {
        max-width: 500px;
        color: white;
        font-size: 67px;
        font-family: "Londrina Sketch", "Londrina Sketch Fallback: Arial", sans-serif;
        font-weight: 600;
    }

    .banner-info P {
        color: white;
    }

    .banner-info span {
        color: aquamarine;
    }
}

@media (max-width:1285px) {
    .parent {

        font-size: 20px;

        h1 {
            font-size: 40px !important;
        }
    }

}

@media (max-width:992px) {
    .banner-info {
        font-size: 15px !important;

        h1 {
            font-size: 34px !important;
        }
    }

}

@media (max-width:767px) {

    .banner-info {
        top: 0 !important;
        font-size: 12px !important;

        h1 {
            font-size: 24px !important;
            padding-top: 2px;
        }
    }
}
</style>