<template>
  <div class="flex gap-1">
    <UButton v-for="link in links" :key="link.link" :icon="link.icon" :to="link.link" target="_blank" size="xl" :ui="{leadingIcon:'text-3xl'}" variant="link" color="secondary"/>
  </div>
</template>

<script lang="ts" setup>
import { UButton } from '#components';

const links = [{
  icon: 'mdi:github',
  link: 'https://github.com/AstralMortem'
}, {
  icon:'mdi:linkedin',
  link: 'https://www.linkedin.com/in/vladyslav-chaliuk/'
}, {
  icon: 'mdi:instagram',
  link: 'https://www.instagram.com/mamkin_muzikant'
}]
</script>

<style>

</style>