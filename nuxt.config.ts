import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    'nuxt-aos',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
  icon:{
    provider: 'server',
    customCollections: [{
      prefix: 'custom',
      dir: './assets/icons'
    }]
  }
})