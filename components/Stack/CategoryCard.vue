<template>
  <UCard>
    <div class="flex items-center mb-4">
      <div class="bg-primary bg-opacity-10 text-white p-3 rounded-lg mr-4 flex items-center justify-center">
        <UIcon :name="$props.icon" size="1em"/>
      </div>
      <h3 class="text-xl font-bold text-secondary-dark">{{ $props.title }}</h3>
    </div>
    <div class="lg:grid-cols-3 md:grid-cols-2 gap-2 grid">
      <StackInfo v-for="stack in getStacksByCategory($props.category)" :key="stack.title" :stack="stack"/>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
  }
})

const {getStacksByCategory} = useStack()

</script>

<style>

</style>