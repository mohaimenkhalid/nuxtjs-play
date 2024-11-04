<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {RiCalendarScheduleLine} from "@remixicon/vue";

const travellers = defineModel()

function counter(traveller, actionType) {
  if(actionType === 'add') {
    travellers.value[traveller]++
  } else {
    travellers.value[traveller]--
  }

}
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <Button
          variant="grayLight"
          readonly
          class="flex items-center justify-start w-full h-[68px] font-normal text-dark-shade3"
      >
        <RiCalendarScheduleLine class="w-5"/>
        <span>Person</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <div v-for="(index, traveller) in travellers" :key="traveller">
        {{traveller}} {{index}}: <button @click="counter(traveller, 'remove')">-</button> <button @click="counter(traveller, 'add')">+</button>
      </div>
    </PopoverContent>
  </Popover>
</template>