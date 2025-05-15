
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
      prefix: 'portfolio',
      dir: './assets/icons'
    }]
  },

  content: {
    build:{
      markdown:{
        toc:{
          depth: 3
        },
        highlight:{
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
          }
        }
      }
    }
  },
})