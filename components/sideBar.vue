<template>
    <v-navigation-drawer v-model="sideBar" temporary width="350">
        <div class="pa-3 d-flex align-center justify-space-between">
            <img style="cursor: pointer; width:45px; height: 45px; border-radius: 10px;" @click="navigateTo('/')"
                src="/images/logo.jpg" alt="logo">
            <v-icon class="text-white" @click="sideBar = false">mdi-close</v-icon>
        </div>
        <v-divider></v-divider>
        <div class="py-5 px-3 d-flex align-center justify-space-between">
            <div class="">
                <span style="cursor: pointer " v-if="$colorMode.preference == 'light'"
                    @click="$colorMode.preference = 'dark'" class="text-white">
                    {{ $t('Dark') }}
                    <v-icon style="color: #eee;">mdi-brightness-4</v-icon>
                </span>
                <span style="cursor: pointer " v-if="$colorMode.preference == 'system'"
                    @click="$colorMode.preference = 'dark'" class="text-white">
                    {{ $t('Light') }}
                    <v-icon style="color: #eee;">mdi-brightness-4</v-icon>
                </span>
                <span style="cursor: pointer " v-if="$colorMode.preference == 'dark'"
                    @click="$colorMode.preference = 'light'" class="text-white">
                    {{ $t('Light') }}
                    <v-icon style="color: #eee;">mdi-brightness-5</v-icon>
                </span>
            </div>
            <div>
                <v-btn style="background-color: transparent;  color: white;    padding: 0;"
                    v-if="useCookie('i18n_redirected').value == 'ar'" @click="[setLocale('en')]">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512; width: 20px; margin: 0 5px;"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
                        <circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"></circle>
                        <g>
                            <path style="fill:#0052B4;"
                                d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z">
                            </path>
                            <path style="fill:#0052B4;"
                                d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z">
                            </path>
                            <path style="fill:#0052B4;"
                                d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z">
                            </path>
                            <path style="fill:#0052B4;"
                                d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z">
                            </path>
                            <path style="fill:#0052B4;"
                                d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z">
                            </path>
                            <path style="fill:#0052B4;"
                                d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"></path>
                            <path style="fill:#0052B4;"
                                d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z">
                            </path>
                            <path style="fill:#0052B4;"
                                d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z">
                            </path>
                        </g>
                        <g>
                            <path style="fill:#D80027;"
                                d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z">
                            </path>
                            <path style="fill:#D80027;"
                                d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z">
                            </path>
                            <path style="fill:#D80027;"
                                d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z">
                            </path>
                            <path style="fill:#D80027;"
                                d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z">
                            </path>
                            <path style="fill:#D80027;"
                                d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z">
                            </path>
                        </g>
                    </svg>
                    En / USD</v-btn>
                <v-btn style="background-color: transparent;  color: white ; padding: 0;"
                    v-if="useCookie('i18n_redirected').value == 'en'" @click=" [setLocale('ar')]">
                    <svg style="margin: 0 5px" width="20px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
                        <path fill="#EEE" d="M0 13h36v10H0z"></path>
                        <path fill="#CE1126" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path>
                        <path fill="#141414" d="M32 31H4a4 4 0 0 1-4-4v-4h36v4a4 4 0 0 1-4 4z"></path>
                        <path
                            d="M9.177 18.332l-.633 1.947l1.656-1.203l1.656 1.203l-.633-1.947l1.656-1.202h-2.047l-.632-1.947l-.632 1.947H7.521zm15.6 0l-.633 1.947l1.656-1.203l1.656 1.203l-.633-1.947l1.656-1.202h-2.047l-.632-1.947l-.632 1.947h-2.047z"
                            fill="#007A3D"></path>
                    </svg>
                    ar /ليرة
                </v-btn>
            </div>
        </div>
        <v-divider></v-divider>
        <div class="px-3 my-5">
            <div class="search ga-1 d-flex align-center text-center w-100">
                <v-autocomplete style="color: #eee;" v-model="catName[0]" :items="routes" class=" "
                    :label="$t('search in store')"></v-autocomplete>
                <v-btn @click="navigateTo(`/productCategory/${catName.length > 0 ? catName[0] : 'try again'}`)"
                    class="pa-3 bg-black" style="color: white; background-color:  #2a19b6 !important;">
                    {{ $t('search') }}
                </v-btn>
            </div>
        </div>
    </v-navigation-drawer>
</template>

<script>
import { ProductsModule } from "~/stores/Products"
import { mapState } from "pinia"

export default {
    setup() {
        const { locale, setLocale } = useI18n()
        let sideBar = ref(false)
        const { $bus } = useNuxtApp();
        onMounted(() => {
            $bus.$on("openSideBar", () => {
                sideBar.value = true
            })
        })
        return { sideBar, locale, setLocale }
    },
    computed: {
        ...mapState(ProductsModule, ["catName"]),
    },
    methods: {
        getProduct() {
            console.log('aasd');

        }
    },
    data() {
        return {
            routes: [
                "smartphones",
                "laptops",
                "lighting",
                "groceries",
                "furniture",
                "home-decoration",
                "mens-watches",
                "mens-shirts",
                "sunglasses",
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
    background-color: rgb(3, 3, 154) !important;
}
</style>
