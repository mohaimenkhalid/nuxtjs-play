<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="cn('flex flex-wrap items-center gap-1.5 break-words capitalize text-xs md:text-sm text-textColor-tertiary sm:gap-3', props.class)"
  >
    <slot />
  </ol>
</template>
