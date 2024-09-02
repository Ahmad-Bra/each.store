// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "in-out" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/",
      exclude: ["/*"],
    },
  },
  ssr: true,
  modules: [
    "nuxt-aos",
    "nuxt-swiper",
    "vuetify-nuxt-module",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
  ],
  i18n: {
    vueI18n: "./i18n.config.js",
  },
});
