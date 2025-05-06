<template>

  <UPopover mode="hover">
    <UButton :label="$props.stack.title" variant="outline" class="rounded-full cursor-pointer" :leading-icon="$props.stack.icon"/>
    <template #content>
      <UCard class="w-fit">
        <div class="flex flex-row items-start justify-start gap-4">
          <div class="flex flex-col gap-2 items-center">
            <UIcon :name="$props.stack.icon" size="3em"/>
            <ULink :to="$props.stack.link" target="_blank">
              <UIcon name='i-mdi-link'/>
            </ULink>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <p class="font-bold text-lg">{{ $props.stack.title }}</p>
            <div class="w-full flex flex-col justify-start gap-2 items-center">
              <UProgress v-model="$props.stack.procent"/>
              <span class="text-md font-semibold">{{ $props.stack.exp }} years of exp.</span>
            </div>
            <p v-if="$props.stack.description" class="prose max-w-[200px] text-wrap">{{ $props.stack.description }}</p>
          </div>
        </div>
      </UCard>
    </template>
  </UPopover>
</template>

<script lang="ts" setup>
import { UButton, UPopover } from '#components';
import type { PropType } from 'vue';
import type { Stack } from '~/types';

const props = defineProps({
  stack: {
    type: {} as PropType<Stack>,
    required: true
  }
})




</script>

<style>

</style>