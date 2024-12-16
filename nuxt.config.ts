// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: "https://leonardo-p-miranda.github.io/portfolio",                            
    head: {
      title: "Leonardo Miranda",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Fullstack Developer",
        },
      ],
    },
  },
  css: ["@/assets/main.css"],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],

  build: {
    transpile: [],
  },

  compatibilityDate: "2024-12-16",
});