<script setup lang="ts">
import {Checkbox} from "~/components/ui/checkbox";
import {Label} from "~/components/ui/label";
import { cn } from '@/lib/utils'

const props = defineProps<{
  labelTxt: {
    type: String
  },
  inputId: {
    type: String
  },
  class: {
    type: String
  },
  labelClass: {
    type: String
  }
}>();
</script>

<template>
  <div :class="cn('flex items-center', props.class)">
    <Checkbox :id="inputId" />
    <label
        :for="inputId"
        :class="cn('pl-2 text-textColor-quaternary text-base font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-30', props.labelClass)"
    >
      {{ labelTxt }}
    </label>
  </div>
</template>