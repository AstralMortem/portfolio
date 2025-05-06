<script setup lang="ts">

const {data} = await useAsyncData('projectList', () => queryCollection('projects').all())

</script>

<template>

  <UCarousel v-slot="{item}" :items="data || []" :ui="{item: 'basis-1/3'}" class="w-full">
    <UCard class="w-full">
      <div class="flex flex-row justify-between items-center gap-4">
        <img :src="item.meta.preview" :alt="item.title" class="max-w-40 w-full h-full">
        <div class="flex flex-col gap-1">
          <p class="font-bold">{{ item.title }}</p>
          <p>{{ item.description }}</p>
          <div class="flex flex-row gap-2 items-center justify-start">
            <UButton v-if="item.meta.repoUrl" icon="mdi:github" :to="item.meta.repoUrl" class="w-fit"  color="neutral" size="xl"/>
            <UButton label="More" trailing-icon="mdi:chevron-right" :to="item.path" class="w-fit" variant="outline"/>
          </div>
        </div>
      </div>
    </UCard>
  </UCarousel>

</template>