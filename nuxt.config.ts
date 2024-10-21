// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/jpg",
          href: "/logo.jpg",
        },
      ],
    },
  },
  experimental: {
    inlineRouteRules: true,
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
    "@vueuse/nuxt",
  ],
  runtimeConfig: {
    public: {
      stripePK: process.env.STRIPE_PK,
      strpeSK: process.env.STRIPE_SK,
      SUPABASE_API_URL: process.env.SUPABASE_API_URL,
      SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.js",
  },

  compatibilityDate: "2024-09-29",
});
