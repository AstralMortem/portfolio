<template>
  <section :id="$props.id" class="py-16 md:py-24" :class="[style]">
    <UContainer>
      <h2 v-if="$props.title" class="section-title" data-aos="fade-up">{{ $props.title }}</h2>
      <slot/>
    </UContainer>
  </section>
</template>

<script lang="ts" setup>
import { UContainer } from '#components';

const props = defineProps({
  id:{
    type: String,
    required: true
  },
  title: {
    type: String,
    default: undefined
  },
  isDarker:{
    type: Boolean,
    default: false
  }
})

const style = computed(()=> props.isDarker?'bg-gray-50 dark:bg-neutral-900':'bg-white dark:bg-neutral-800')

</script>

<style>

</style>