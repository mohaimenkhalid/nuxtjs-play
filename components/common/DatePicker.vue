<script setup>
import {RiCalendarScheduleLine} from "@remixicon/vue";
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: 'Pick a date'
  },
})
const modelValue = defineModel();

</script>

<template>
  <v-date-picker
      :mode="mode"
      :masks="masks"
      v-model="modelValue"
      :model-config="modelConfig"
      :timezone="'asia/dhaka'"
      :available-dates="availableDateRange"
      :disabled-dates="disabledDates"
  >
    <template v-slot="{ inputValue, togglePopover, inputEvents }">
        <Button
            @click="togglePopover"
            variant="grayLight"
            readonly
            class="flex items-center justify-start w-full h-[68px] font-normal text-dark-shade3"
            >
          <RiCalendarScheduleLine class="w-5"/>
          <span>{{ inputValue ? inputValue : placeholder }}</span>
        </Button>
    </template>
  </v-date-picker>
</template>