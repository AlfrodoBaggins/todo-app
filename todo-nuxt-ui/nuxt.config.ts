import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxthq/ui',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
})