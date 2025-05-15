<template>
  <footer class="bg-neutral-700 dark:bg-neutral-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">ChaliukPortfolio</h3>
          <p class="text-gray-300">Full-Stack Developer specializing in creating modern, responsive web applications with FastAPI, Nuxt.js and Tailwind CSS.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="(item, index) in menuItems" :key="index">
              <NuxtLink :to="item.link" class="text-gray-300 hover:text-primary transition-colors duration-300">
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Connect</h3>
          <NavFooterLinks/>
          <div class="mt-4">
            <p class="text-gray-300">Email: <a href="mailto:chaliukvladyslav@gmail.com" class="hover:text-primary transition-colors duration-300">chaliukvladyslav@gmail.com</a></p>
            <p class="text-gray-300">Location: Kyiv, Ukraine</p>
          </div>
        </div>
      </div>
      
      <div class="border-t border-neutral-800 dark:border-neutral-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} ChaliukPortfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { NavFooterLinks } from '#components';

defineProps({
  menuItems: {
    type: Array<object>,
    required: true
  }
})

</script>