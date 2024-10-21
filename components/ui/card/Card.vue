<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'p-4 bg-white rounded-md shadow-sm shadow-ring',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
