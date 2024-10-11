// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/",
      // exclude: ["/*"],
      include: ["/checkout/"],
    },
  },

  ssr: false,

  modules: [
    "nuxt-aos",
    "nuxt-swiper",
    "vuetify-nuxt-module",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
    "@unlok-co/nuxt-stripe",
    "@nuxt/fonts",
  ],
  runtimeConfig: {
    public: {
      stripePK: process.env.STRIPE_PK,
      strpeSK: process.env.STRIPE_SK,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.js",
  },

  compatibilityDate: "2024-09-29",
});
