import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      source: 'projects/*.md',
      // Specify the type of content in this collection
      type: 'page'
    })
  }
})
