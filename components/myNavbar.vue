<template>
  <div class="navbar w-100 d-flex align-center">
    <div class="main-nav" style=" background-color: rgb(3, 3, 154); padding: 10px 20px; width: 100%">
      <v-row class=" ma-auto align-center justify-center">
        <v-col cols="2 " class=" py-0">
          <img style="cursor: pointer; width:50px; height: 50px; border-radius: 10px;"
            @click="$router.push({ path: '/' })" src="/images/logo.jpg" alt="logo">
        </v-col>
        <v-col cols="8" class="py-0">
          <div style="display: flex; width:75%; margin: auto">
            <v-autocomplete prepend-inner-icon="mdi-magnify" clearable style="color: #eee;" :items="categories"
              v-model="catName[0]" class="w-75 px-5 inp" :label="$t('search in store')"></v-autocomplete>
            <v-btn
              style="text-align: center; align-content: center;transform: translateY(10px); background-color: rgb(0 82 180 / 0%) !important"
              @click="navigateTo(`/productCategory/${catName.length > 0 ? catName[0] : 'Some Thing Went Wrong, Try Again!'}`)"
              class="pa-3 bg-black">
              {{ $t('search') }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="2" class="py-0">
          <div class="icons d-flex align-center justify-end ga-2">
            <v-menu v-if="user" v-model="menu" :close-on-content-click="false" location="end">
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props" style="margin-right: 10px; text-align: end;" color="orange-lighten-4 "
                  size="40px">
                  mdi-account</v-icon>
              </template>
              <v-card class="menu" max-width="300">
                <v-list>
                  <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" title="Welcome :"
                    :subtitle="userEmail">
                    <template v-slot:append>
                      <v-btn style="font-weight: bold;" :class="fav ? 'text-red' : ''" icon="mdi-heart" variant="text"
                        @click="fav = !fav"></v-btn>
                    </template>
                  </v-list-item>
                </v-list>
                <v-card-text v-if="user">
                  <ul class="user-links">
                    <li>
                      <NuxtLink to="/favoritePage"> <v-icon>mdi-heart</v-icon> {{ $t('My Wishlist') }} </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/order/"> <v-icon>mdi-order-bool-ascending-variant</v-icon>{{ $t('My Orders') }}
                      </NuxtLink>
                    </li>
                  </ul>
                  <v-card-actions class="pa-0">
                    <v-btn @click=" logout()" class=" text-error">
                      {{ $t('Logout') }} &nbsp;
                      <v-icon style=" font-size: 25px;">mdi-logout</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card-text>


              </v-card>
            </v-menu>
            <v-btn @click="navigateTo('/login')" v-if="!user" rounded class="sign-btn">{{ $t('Sign in') }} </v-btn>
            <v-icon style="margin-right: 10px; text-align: end;" color="orange-lighten-4 " size="40px"
              @click="openCart()">
              mdi-cart</v-icon>
            <v-badge location="right top" :content="cartItem.length" offsetX="25" offsetY="-15"
              color="red-darken-3"></v-badge>
          </div>
        </v-col>
        <v-row class="align-center ma-auto">
          <v-col cols="9" class="py-0">
            <ul class="d-flex align-center justify-start ">
              <li class="categ" style="list-style: none; color: white; font-weight: 500; margin-right: 20px"
                v-for="link in categories" :key="link.title" @click="this.catName[0] = link.route">
                <nuxt-link :to="{ path: `/productCategory/${link.route}` }"
                  style="text-decoration: none; color: white">{{
                    $t(link.title)
                  }} </nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col cols="3" class="py-0">
            <div class="info-lang d-flex align-center justify-end ">
              <div class="px-5">
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
              <v-btn style="background-color: transparent;  color: white"
                v-if="useCookie('i18n_redirected').value == 'ar'" @click=" setLocale('en')">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512; width: 20px; margin: 0 5px;"
                  xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
                  <circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"></circle>
                  <g>
                    <path style="fill:#0052B4;"
                      d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"></path>
                    <path style="fill:#0052B4;"
                      d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"></path>
                    <path style="fill:#0052B4;"
                      d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z">
                    </path>
                    <path style="fill:#0052B4;"
                      d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"></path>
                    <path style="fill:#0052B4;"
                      d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"></path>
                    <path style="fill:#0052B4;"
                      d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"></path>
                    <path style="fill:#0052B4;"
                      d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"></path>
                    <path style="fill:#0052B4;"
                      d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"></path>
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
              <v-btn style="background-color: transparent;  color: white"
                v-if="useCookie('i18n_redirected').value == 'en'" @click=" setLocale('ar')">
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
          </v-col>
        </v-row>
      </v-row>
    </div>
    <!-- md screen -->
    <div class="respo-nav w-100 d-flex align-center justify-space-between"
      style="background-color: rgb(3, 3, 154); padding: 10px 20px; width: 100% ">
      <div class="text-center d-flex align-center">
        <v-app-bar-nav-icon @click="openSideBar()" variant="text" class="text-white"></v-app-bar-nav-icon>
      </div>
      <div class="d-flex align-center ga-2">
        <v-menu v-if="user" v-model="menuRespo" :close-on-content-click="false" location="end">
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" style="margin-right: 10px; text-align: end;" color="orange-lighten-4 " size="40px">
              mdi-account</v-icon>
          </template>
          <v-card class="menu" max-width="300">
            <v-list>
              <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" title="Welcome :"
                :subtitle="userEmail">
                <template v-slot:append>
                  <v-btn style="font-weight: bold;" :class="fav ? 'text-red' : ''" icon="mdi-heart" variant="text"
                    @click="fav = !fav"></v-btn>
                </template>
              </v-list-item>
            </v-list>
            <v-card-text>
              <ul class="user-links">
                <li>
                  <NuxtLink to="/favoritePage"> <v-icon>mdi-heart</v-icon> {{ $t('My Wishlist') }} </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/order/"> <v-icon>mdi-order-bool-ascending-variant</v-icon>{{ $t('My Orders') }}
                  </NuxtLink>
                </li>
              </ul>
              <v-card-actions class="pa-0">
                <v-btn @click="logout()" class=" text-error">
                  {{ $t('Logout') }} &nbsp;
                  <v-icon style=" font-size: 25px;">mdi-logout</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-menu>
        <v-btn @click="navigateTo('/login')" v-if="!user" rounded class="sign-btn"> {{ $t('Sign in') }}</v-btn>
        <v-icon style="margin-right: 10px; text-align: end;" color="orange-lighten-4 " size="40px" @click="openCart()">
          mdi-cart</v-icon>
        <v-badge location="right top" :content="cartItem.length" offsetX="25" offsetY="-15"
          color="red-darken-3"></v-badge>
      </div>
    </div>

  </div>
</template>

<script>
import { ProductsModule } from "~/stores/Products"
import { Cart } from "~/stores/cart"
import { mapState } from "pinia"

export default {
  setup() {
    definePageMeta({
      middleware: ["auth"]
    })
    const client = useSupabaseClient()
    const user = useSupabaseUser()
    let userEmail = ref('')
    if (user.value) {
      userEmail.value = user.value.email
    }

    const { locale, setLocale } = useI18n()
    const { $bus } = useNuxtApp();
    let openSideBar = () => {
      $bus.$emit('openSideBar');
    }
    let openCart = () => {
      $bus.$emit('openCart');
    }

    //logout user

    let logout = async () => {
      try {
        let { error } = await client.auth.signOut()
        if (error) {
          alert(error.message)
        }
      } catch (error) {
        throw error
      }
    }
    return { openCart, locale, setLocale, openSideBar, logout, user, userEmail }
  },
  computed: {
    ...mapState(ProductsModule, ["categories", "catName"]),
    ...mapState(Cart, ["cartItem"])
  },
  methods: {
    updateSelectedLang(lang) {
      this.selectedLang.splice(0, 1, lang);
    },
  }, data() {
    return {
      menu: false,
      menuRespo: false,
      fav: false,
      value: '',
    }
  },
}
</script>

<style lang="scss">
.navbar {
  z-index: 9;
  position: sticky;
  top: 0;

  & input {
    border-radius: 20px;
    outline: none;
    height: 40px;
  }
}

.categ {
  a {
    &:hover {
      color: #7f7fdb !important;
      transition: .3s;
    }
  }
}

.dark-mode {
  .user-links {
    li a {
      color: #a0a0ef;
    }
  }
}

.sign-btn {
  background-color: #7f7fdb !important;
  color: white;
}

.user-links {
  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;

    & &:hover {
      background: #f0f0f0;
      border-radius: 6px;
      transition: .3s;

      & a {
        color: rgba(39, 39, 133, 0.947);
      }
    }

    .v-icon {
      color: rgba(39, 39, 133, 0.947);
      margin-inline-end: 10px;
    }

    a {
      text-decoration: none;
      color: #121212;
    }
  }
}

.inp>input {
  background-color: #eee !important;
}

.respo-nav {
  display: none !important;
}

.main-nav {
  height: 140px;
}

@media(max-width:1285px) {
  .main-nav {
    display: none !important;
  }

  .respo-nav {
    display: flex !important;
  }
}

@media (max-width:767px) {
  .respo-nav {
    .search {
      display: none !important;
    }
  }
}

.dark-mode .v-list,
.dark-mode .v-list-item,
.dark-mode .menu {
  background-color: #0a0313 !important;
  color: white !important;
}
</style>