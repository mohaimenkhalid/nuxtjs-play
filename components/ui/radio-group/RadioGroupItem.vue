<script setup lang="ts">
import { cn } from '@/lib/utils'
import { RiCircleFill } from "@remixicon/vue";
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'aspect-square h-5 w-5 bg-white rounded-full border border-borderColor shadow-lg shadow-ring-gray focus-within:border-success disabled:cursor-not-allowed disabled:opacity-30',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      class="flex items-center justify-center"
    >
      <RiCircleFill class="h-full w-full fill-success" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>