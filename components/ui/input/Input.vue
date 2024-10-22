<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
      v-model="modelValue"
      :class="cn('h-10 w-full rounded-md border border-borderColor shadow-xs shadow-ring-secondary bg-white px-3 py-1.5 font-normal text-sm lg:text-base file:border-0 file:bg-transparent file:font-medium placeholder:font-normal placeholder:text-dark-shade-3 disabled:cursor-not-allowed disabled:opacity-30',
      props.class)"
  >
</template>