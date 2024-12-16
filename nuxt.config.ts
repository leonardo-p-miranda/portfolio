// nuxt.config.ts
export default defineNuxtConfig({
  css: ["@/assets/main.css"],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],

  build: {
    transpile: [],
  },

  compatibilityDate: "2024-12-16",
});