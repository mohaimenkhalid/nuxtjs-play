<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import {Label} from "~/components/ui/label";

const props = defineProps<{
  inputId?: number | string;
  labelTxt?: string;
  labelClass?: string;
  labelBlockClass?: string;
  class?: string;
  labelDescription?: string;
  labelDescriptionClass?: string;
}>();
</script>

<template>
  <div :class="cn('relative', props.class)">
    <RadioGroupItem :id="inputId" :value="labelTxt" :name="labelTxt" class="absolute top-6 left-4" />
    <label
        :for="inputId"
        :class="cn('block p-4 pl-12 md:pl-[52px] bg-white border border-dark-light rounded-md peer-disabled:cursor-not-allowed peer-disabled:opacity-30', props.labelBlockClass)"
    >
      <h5 :class="cn('text-dark text-base font-semibold', props.labelClass)">{{ labelTxt }}</h5>
      <p :class="cn('mt-1 text-dark-secondary text-sm font-normal', props.labelDescriptionClass)">{{ labelDescription }}</p>
    </label>
  </div>
</template>