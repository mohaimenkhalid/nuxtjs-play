<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'
import { RiArrowRightSLine } from "@remixicon/vue"

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn(
      'touch-manipulation absolute h-6 w-6 rounded-full p-0 border-primary bg-white',
      orientation === 'horizontal'
        ? '-right-3 top-1/2 -translate-y-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      !canScrollNext ? 'hidden' : '',
      props.class,
    )"
    variant="border"
    @click="scrollNext"
  >
    <slot>
      <RiArrowRightSLine class="h-5 w-5 text-primary" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
