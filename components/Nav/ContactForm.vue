<template>
  <UCard>
    <UForm class="space-y-4" :state="formState" @submit.prevent="handleSubmit">
      <UFormField label="Name" name="name">
        <UInput v-model="formState.name" placeholder="Your name" class="w-full"/>
      </UFormField>
      <UFormField label="Email" name="email">
        <UInput v-model="formState.email" placeholder="your.email@example.com" class="w-full"/>
      </UFormField>
      <UFormField label="Subject" name="subject">
        <UInput v-model="formState.subject" placeholder="What is regarding?" class="w-full"/>
      </UFormField>
      <UFormField label="Message" name="message">
        <UTextarea v-model="formState.message" placeholder="Your message here." class="w-full"/>
      </UFormField>
      <UButton label="Send Message" type="submit" :loading="loading" size="xl"/>
    </UForm>
  </UCard>
</template>

<script lang="ts" setup>
import {  UButton, UFormField, UInput, UTextarea } from '#components';

const formState = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const loading = ref(false);

// Form submission handler
const handleSubmit = async () => {
  loading.value = true;
  
  loading.value = false
};
</script>

<style>

</style>