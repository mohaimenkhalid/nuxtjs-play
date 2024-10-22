<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { RiArrowDownSLine } from "@remixicon/vue";

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-borderColor shadow-xs shadow-ring-secondary bg-white px-3 py-1.5 text-base placeholder:font-normal placeholder:text-dark-shade-3 focus:outline-none disabled:cursor-not-allowed disabled:opacity-30 [&>span]:line-clamp-1',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
<!--      <ChevronDown class="w-4 h-4 opacity-50" />-->
      <RiArrowDownSLine class="w-6 text-gray-shade5" />
    </SelectIcon>
  </SelectTrigger>
</template>
