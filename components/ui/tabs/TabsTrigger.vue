<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="cn(
      'grow inline-flex items-center justify-center whitespace-nowrap py-1 px-4 text-dark-shade3 font-normal text-sm transition-all border-b border-dark-shade3 rounded-t-md focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-primary disabled:pointer-events-none disabled:opacity-30 data-[state=active]:font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary',
      props.class,
    )"
  >
    <span class="truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
