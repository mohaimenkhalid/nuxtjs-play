<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import {Label} from "~/components/ui/label";

const props = defineProps<{
  inputId?: number | string;
  labelTxt?: string;
  labelClass?: string;
  class?: string;
}>();
</script>

<template>
  <div :class="cn('flex items-center', props.class)">
    <RadioGroupItem :id="inputId" :value="labelTxt" :name="labelTxt" />
    <label
      :for="inputId"
      :class="cn('pl-3 text-textColor-quaternary text-base font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-30', props.labelClass)"
    >
      {{ labelTxt }}
    </label>
  </div>
</template>