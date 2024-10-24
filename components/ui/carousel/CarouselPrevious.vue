<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'
import { RiArrowLeftSLine } from "@remixicon/vue"

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn(
      'touch-manipulation absolute h-6 w-6 rounded-full p-0 border-primary bg-white',
      orientation === 'horizontal'
        ? '-left-3 top-1/2 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      !canScrollPrev ? 'hidden' : '',
      props.class,
    )"
    variant="border"
    @click="scrollPrev"
  >
    <slot>
      <RiArrowLeftSLine class="h-5 w-5 text-primary" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
