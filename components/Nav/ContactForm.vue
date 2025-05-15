<template>
  <UCard>
    <UForm class="space-y-4" :schema="schema" :state="formState" @submit.prevent="handleSubmit">
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
import type { FormSubmitEvent } from '@nuxt/ui';
import { z } from 'zod';
import emailjs from 'emailjs-com'

const formState = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const reset = () => {
  formState.value = {
    name: '',
  email: '',
  subject: '',
  message: ''
  }
}


const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string()
})

type Schema = z.output<typeof schema>

const loading = ref(false);
const toast = useToast()
// Form submission handler
const handleSubmit = async (e: FormSubmitEvent<Schema>) => {
  loading.value = true;
  const templateParams = {
    name: e.data.name,
    email: e.data.email,
    message: e.data.message,
    subject: e.data.subject,
    time: new Date().toDateString()
  }

  emailjs.send('service_o6f13b7', 'template_xcxwewp', templateParams, 'vhhNnjQDO2_12TsYC')
  .then(() => {
    toast.add({
      title: "Successfuly send",
      description: "Thank for your message",
      color: 'success'
    })
    reset()
  })
  .catch((error) => {
    toast.add({
      title: "Error",
      description: error.message || '',
      color: 'error'
    })
  })
  loading.value = false
};
</script>

<style>

</style>