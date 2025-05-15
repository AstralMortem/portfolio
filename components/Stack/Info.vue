<template>

  <UPopover mode="hover">
    <UButton :label="$props.stack.title" variant="outline" class="rounded-full cursor-pointer" :leading-icon="$props.stack.icon"/>
    <template #content>
      <UCard class="w-fit min-w-[300px]">
        <div class="flex flex-col gap-4 items-start justify-start">
          <div class="flex flex-row justify-between items-center gap-4 w-full">

            <div class="flex flex-col gap-2 items-center">
              <UIcon :name="$props.stack.icon" size="3em"/>
              <ULink :to="$props.stack.link" target="_blank">
                <UIcon name='i-mdi-link'/>
              </ULink>
            </div>

            <div class="flex flex-col gap-2  w-full">
              
              <div class="flex flex-row justify-between items-center">
                <p class="font-bold text-lg">{{ $props.stack.title }}</p>
                <span class="text-md font-semibold">{{ $props.stack.exp }} years of exp.</span>
              </div>
              <UProgress v-model="$props.stack.procent" status :ui="{'root':'flex flex-col-reverse'}"/>
              
            
            </div>
          </div>
          <p v-if="$props.stack.description" class="max-w-[300px] w-full text-wrap">{{ $props.stack.description }}</p>
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