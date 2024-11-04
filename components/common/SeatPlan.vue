<script setup lang="ts">
import SeatDesign from "~/components/common/SeatIcon.vue";
</script>

<template>
  <div class="w-[220px] p-2 pb-5 border border-gray-shade4 rounded-t-7xl rounded-b-3xl space-y-2">
    <div class="flex flex-col gap-2 items-end">
      <img src="~/assets/imgs/icons/driver-seat-gray.png" alt="driver seat">
      <Separator class="w-20 text-center" />
    </div>

    <div class="space-y-4">
      <div
          v-for="n in 9"
          class="flex gap-x-2 justify-between items-center"
      >
        <SeatDesign color="#8D8D8F" size="32" />
        <SeatDesign color="#8D8D8F" size="32" />
        <div class="text-xs text-dark-secondary">A</div>
        <SeatDesign color="#8D8D8F" size="32" />
        <SeatDesign color="#8D8D8F" size="32" />
      </div>
    </div>
  </div>
</template>