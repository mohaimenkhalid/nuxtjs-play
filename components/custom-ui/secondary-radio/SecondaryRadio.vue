<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  inputId?: [Number, String][];
  name?: string;
  labelTxt?: string;
  labelClass?: string;
  class?: string;
  checked?: boolean;
}>();
</script>

<template>
  <div :class="cn('grow', props.class)">
    <input type="radio" :id="inputId" :value="labelTxt" :name="name" hidden :checked="checked" class="secondary-radio" />
    <label
        :for="inputId"
        :class="cn('peer-disabled:cursor-not-allowed peer-disabled:opacity-30', props.labelClass)"
    >
      <slot name="icon"></slot>
      <span class="text-base text-dark-shade3">{{ labelTxt }}</span>
    </label>
  </div>
</template>

<style scoped>
.secondary-radio + label {
  @apply py-2 px-3 bg-white border border-borderColor shadow-xs shadow-ring-secondary rounded-md h-10 cursor-pointer flex items-center gap-x-2 transition-all
}

.secondary-radio:checked + label {
  @apply border-primary
}

.secondary-radio:checked + label * {
  @apply text-primary
}
</style>