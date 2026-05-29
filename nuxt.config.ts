// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/',
    head: {
      title: "Leo Miranda — Senior Fullstack Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Senior Fullstack Developer building fast, beautiful software for the web.",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap",
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