<template>
  <header class="fixed w-screen bg-white dark:bg-neutral-800 shadow-md z-50 transition-all duration-300" :class="{ 'py-2': scrolled, 'py-4': !scrolled }">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <ULink to="/" class="text-2xl font-bold text-primary">
        <span class="text-neutral-600 dark:text-white">Chaliuk</span>Portfolio
      </ULink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li v-for="(item, index) in menuItems" :key="index">
            <ULink :to="item.link" class="text-neutral-600 dark:text-white hover:text-primary transition-colors duration-300">
              {{ item.text }}
            </ULink>
          </li>
          <UIColorMode/>
        </ul>
      </nav>

      <!-- Mobile Navigation Button -->
      <UButton icon="i-heroicons-list-bullet" variant="link" class="md:hidden" color="neutral" :ui="{leadingIcon:'text-2xl'}" @click="mobileMenuOpen = !mobileMenuOpen"/>
      
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-neutral-800 py-4 shadow-inner">
      <div class="container mx-auto px-4">
        <ul class="space-y-4">
          <li v-for="(item, index) in menuItems" :key="index">
            <ULink :to="item.link" class="block text-secondary dark:text-white hover:text-primary transition-colors duration-300" @click="mobileMenuOpen = false">
              {{ item.text }}
            </ULink>
          </li>
          <UIColorMode/>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { UButton, UIColorMode } from '#components';

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

defineProps({
  menuItems: {
    type: Array<object>,
    required: true
  }
})




</script>