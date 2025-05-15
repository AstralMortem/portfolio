<script setup lang="ts">

const {data} = await useAsyncData('projectList', () => queryCollection('projects').all())

</script>

<template>

  <UCarousel v-slot="{item}" :items="data || []" :ui="{item: 'md:basis-1/3'}" class="w-full h-full" dots :autoplay="{ delay: 6000 }">
    <UCard class="w-full h-full">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 w-full h-full">
        <img :src="item.meta.preview" :alt="item.title" class="max-w-40 w-full h-fit">
        <div class="flex flex-col gap-2 items-center md:items-end justify-end">
          <p class="font-bold text-2xl">{{ item.title }}</p>
          <p class="text-center md:text-end">{{ item.description }}</p>
          <div class="flex flex-row gap-2 items-center justify-start">
            <UButton v-if="item.meta.repoUrl" icon="mdi:github" :to="item.meta.repoUrl" class="w-fit"  color="neutral" size="xl" target="_blank"/>
            <UButton label="More" trailing-icon="mdi:chevron-right" :to="item.path" class="w-fit" variant="outline"/>
          </div>
        </div>
      </div>
    </UCard>
  </UCarousel>

</template>