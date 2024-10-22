<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { RiCheckFill } from "@remixicon/vue";
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn('peer h-5 w-5 shrink-0 rounded-sm border border-borderColor focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-30 data-[state=checked]:border-success data-[state=checked]:bg-success data-[state=checked]:text-white',
         props.class)"
  >
    <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
      <slot>
        <RiCheckFill size="20px" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
