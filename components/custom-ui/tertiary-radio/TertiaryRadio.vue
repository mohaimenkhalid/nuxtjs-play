<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import {Label} from "~/components/ui/label";

const props = defineProps<{
  inputId?: [Number, String][];
  labelTxt?: string;
  labelClass?: string;
  class?: string;
}>();
</script>

<template>
  <div :class="cn('p-4 w-[276px] flex bg-white border border-dark-light rounded-md', props.class)">
    <RadioGroupItem :id="inputId" :value="labelTxt" :name="labelTxt" />
    <label
        :for="inputId"
        :class="cn('-mt-1.5 pl-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-30', props.labelClass)"
    >
      <h5 class="text-dark text-base font-semibold">{{ labelTxt }}</h5>
      <p class="mt-1 text-dark-secondary text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </label>
  </div>
</template>