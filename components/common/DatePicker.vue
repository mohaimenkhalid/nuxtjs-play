<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/v-calendar'
import { format } from 'date-fns'
import {RiCalendarScheduleLine} from "@remixicon/vue";
import {useVModel} from "@vueuse/core";
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: 'Pick a date'
  },
  modelValue: {
    required: true
  }
})

const emits = defineEmits('update:modelValue')
const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
})

const open = ref(false)
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
          variant="grayLight"
          role="combobox"
          :aria-expanded="open"
          class=" justify-start w-full h-[68px] font-normal text-dark-shade3"
      >
        <RiCalendarScheduleLine class="w-5"/>
        <span>{{ modelValue ? format(modelValue, 'PP') : placeholder }}</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="modelValue" />
    </PopoverContent>
  </Popover>
</template>