<template>
  <div class="min-h-screen  bg-gray-50 scroll-smooth">
    <NavHeader :menu-items="menuItems"/>
    <main class="h-full w-full">
      <slot />
    </main>
    <NavFooter :menu-items="menuItems"/>
  </div>
</template>

<script lang="ts" setup>
const menuItems = ref([
  {text: 'Home', link: '/'},
  {text: 'About', link: '/#about'},
  {text: 'Skills', link: '/#skills'},
  {text: 'Projects', link: '/#projects'},
  {text: 'Contact', link: '/#contact'}

])
</script>

<style>
body{
  scroll-behavior: smooth;
}
</style>