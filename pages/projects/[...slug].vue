<script setup lang="ts">
import { StackInfo, UISection } from '#components'


const route = useRoute()
const { data: project } = await useAsyncData(route.path, () => {
  return queryCollection('projects').path(route.path).first()
})

const formatDate = (dateString: string ) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(date)
}

const {findStack} = useStack()

</script>

<template>

  <div>
    <UISection id="header" is-darker>
      <div class="mb-8">
        <ULink to="/#projects" class="inline-flex items-center text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 transition-colors text-sm">
          <span class="mr-2">←</span> Back to Portfolio
        </ULink>
      </div>
      <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-200" data-aos="fade-right">{{ project?.title }}</h1>
      <div class="text-gray-600 dark:text-gray-300" data-aos="fade-right">
        <span>{{ formatDate(project?.meta.date) }}</span>
        <span class="mx-2">•</span>
        <span>{{ project?.meta.category }}</span>
      </div>
    </UISection>

    <UISection id="image" is-darker >
      <img 
          :src="project?.meta.preview" 
          :alt="project?.title" 
          class="w-full h-auto object-cover"
          data-aos="fade-left"
        >
    </UISection>

    <UISection id="overview" is-darker>
      <div class="flex flex-col-reverse md:flex-row justify-between items-start">
        <div >
          <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-200" data-aos="fade-right">Project Overview</h2>
          <div v-if="project" class="prose prose-lg max-w-none" data-aos="fade-right">
            <ContentRenderer :value="project" />
          </div>
        </div>
        <div class="space-y-6" >
        <!-- Tech Stack -->
        <UCard data-aos="fade-left">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tech Stack</h3>
          <div class="grid grid-cols-2 gap-2 w-fit">
            <StackInfo v-for="stack in project?.meta.stack || []" :key="stack" :stack="findStack(stack)"/>
          </div>
        </UCard>
        
        <!-- Project Links -->
        <UCard data-aos="fade-left">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Project Links</h3>
          <div class="space-y-2">
            <a v-if="project?.meta.liveUrl" :href="project?.meta.liveUrl" target="_blank" class="hover:text-primary cursor-pointer flex items-center gap-1"><Icon name="heroicons:globe-alt"/> Live Demo</a>
            <a v-if="project?.meta.repoUrl" :href="project?.meta.repoUrl" target="_blank" class="hover:text-primary cursor-pointer flex items-center gap-1"><Icon name="mdi:github"/> Repository</a>
            <a v-if="project?.meta.docUrl" :href="project?.meta.docUrl" target="_blank" class="hover:text-primary cursor-pointer flex items-center gap-1"><Icon name="heroicons:book-open"/> Documentation</a>
          </div>
        </UCard>        
        <!-- Client -->
        <UCard v-if="project?.meta.client" data-aos="fade-left">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Client</h3>
          <p class="text-gray-700 dark:text-gray-200">{{ project?.meta.client }}</p>
        </UCard>
        <!-- Timeline -->
        <UCard data-aos="fade-left">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Timeline</h3>
          <p class="text-gray-700 dark:text-gray-200">{{ project?.meta.timeline || "Not specified" }}</p>
        </UCard>
      </div>
      </div>
    </UISection>

    <UISection id="gallery" is-darker v-if="project?.meta.gallery && project?.meta.gallery.length">
      <h2 class="text-2xl font-semibold mb-6 text-gray-900" data-aos="fade-right">Project Gallery</h2>
      
      <UCarousel v-slot="{item}" :item="project?.meta.gallery || []" data-aos="fade-left">
        <img :src="item.src" :alt="item.alt || 'Gallery Image'">
      </UCarousel>
    </UISection>

  </div>

</template>