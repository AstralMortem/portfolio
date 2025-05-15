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


const computedStack = computed(()=> {
  const stack = project.value?.meta.stack as [] || []
  return stack.filter(i => findStack(i)).map(i => findStack(i))
})


useSeoMeta({
  title: project.title? `${project.title} | Vladyslav Chaliuk` : 'Vladyslav Chaliuk'
})

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
        <span v-if="project?.meta.date">{{ formatDate(project?.meta.date) }}</span>
        <span class="mx-2">•</span>
        <span>{{ project?.meta.category }}</span>
      </div>
    </UISection>

    <UISection id="image" is-darker class="h-fit">
      <img 
          :src="project?.meta.preview" 
          :alt="project?.title" 
          class="w-full h-auto object-cover fill-gray-900"
          data-aos="fade-left"
        >
    </UISection>

    <UISection id="overview" is-darker>
      <div class="flex flex-col md:flex-row justify-between items-start gap-4">
        <div >
          <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-200" data-aos="fade-right">Project Overview</h2>
          <ContentRenderer v-if="project" :value="project" class="prose lg:prose-xl text-gray-900 dark:text-white prose-a:text-gray-900 prose-a:dark:text-white"  />
        </div>
        <div class="space-y-6 md:w-1/3 w-full" >
          <!-- Tech Stack -->
          <UCard data-aos="fade-left">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tech Stack</h3>
            <div class="grid grid-cols-2 gap-2 w-fit">
              <StackInfo v-for="stack in computedStack" :key="stack?.title" :stack="stack"/>
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

    <UISection v-if="project?.meta.gallery && project?.meta.gallery.length" title="Gallery" id="gallery" is-darker>
      <UCarousel v-slot="{item}" :items="project?.meta.gallery as [] || []" data-aos="fade-left" :ui="{item: 'md:basis-1/2'}" dots :autoplay="{ delay: 6000 }">
        <UModal class="w-full h-full" :fullscreen="true">
          <img :src="item" :alt="'Gallery Image'" class="rounded-lg">
          <template #body>
            <div class="flex w-full h-full items-center justify-center">
              <img :src="item" :alt="'Gallery Image'" class="rounded-lg w-fit h-fit">
            </div>
            
          </template>
        </UModal>
        
        
      </UCarousel>
    </UISection>

  </div>

</template>