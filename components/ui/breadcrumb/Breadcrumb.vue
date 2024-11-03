<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <nav aria-label="breadcrumb" :class="cn('pb-4 border-b border-primary-light', props.class)">
    <slot />
  </nav>
</template>
