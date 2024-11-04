<script setup lang="ts">
import {RiCircleFill, RiStarLine} from "@remixicon/vue";
import {Button} from "~/components/ui/button";

const props = defineProps<{
  isSeeAllDetails?: boolean;
}>();
const emit = defineEmits('toggleDetails')
const handleToggleDetails = () => {
  emit('toggleDetails');
};
</script>

<template>
  <div class="flex items-center divide-x divide-dashed divide-gray-shade4">
    <div class="pr-4 grow space-y-3">
      <div class="flex gap-x-2">
        <Button variant="secondary" size="xs" class="font-normal rounded pointer-events-none">
          <RiStarLine class="text-white w-3 h-3" />
          <span>Recommended</span>
        </Button>
        <Button variant="successLight" size="xs" class="font-normal rounded pointer-events-none">
          Sleeper Coach
        </Button>
      </div>

      <div class="flex gap-x-4 xl:gap-x-8">
        <img src="@/assets/imgs/bus.png" alt="bus img" class="shrink-0 w-[120px] h-[120px] rounded">
        <div class="flex flex-col justify-between">
          <div>
            <h4 class="mb-1 text-xl text-dark font-semibold">Green Line</h4>
            <p class="text-dark-shade2 text-xs flex items-center gap-x-1">
              <span>500-B-K/B-2</span>
              <RiCircleFill class="text-[#D9D9D9] w-1 h-1" />
              <span>HinoAK1J plus</span>
            </p>
          </div>
          <div class="grid grid-cols-2 gap-x-6 gap-y-4">
            <p class="flex items-center gap-x-2">
              <img src="~/assets/imgs/icons/stop-watch-gray.png" alt="stopwatch icon">
              <span class="text-dark-secondary text-xs font-medium">Departs 10:00 am</span>
            </p>
            <p class="flex items-center gap-x-2">
              <img src="~/assets/imgs/icons/stop-watch-gray.png" alt="stopwatch icon">
              <span class="text-dark-secondary text-xs font-medium">Arrives 04:00 pm</span>
            </p>
            <p class="flex items-center gap-x-2">
              <img src="~/assets/imgs/icons/route-gray.png" alt="route icon">
              <span class="text-dark-secondary text-xs font-medium">Dhaka-Sylhet</span>
            </p>
            <div>
              <Button v-if="!isSeeAllDetails" @click="handleToggleDetails" variant="link" size="xs" class="p-0 justify-start">
                <img src="~/assets/imgs/icons/add-circle-orange.png" alt="+">
                <span class="underline">See All Details</span>
              </Button>
              <Button v-else @click="handleToggleDetails" variant="link" size="xs" class="p-0 justify-start">
                <img src="~/assets/imgs/icons/remove-circle.png" alt="-">
                <span class="underline">Close All Details</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Right-->
    <div class="shrink-0 w-[162px] pl-4 space-y-3">
      <Button variant="infoLight" size="xs" class="gap-x-1 font-normal">
        <img src="@/assets/imgs/icons/copy-info.png" alt="copy icon">
        <span>JAT0705 for 5% off</span>
      </Button>
      <div class="text-right space-y-2">
        <p class="text-dark-secondary text-xs">Per seat</p>
        <p class="text-dark-secondary text-xl"><strong class="text-dark">1500</strong> BDT</p>
        <p class="text-info text-xs">4 Seats Available</p>
        <Button size="sm" class="gap-x-1.5">
          <span>Select Seats</span>
          <img src="@/assets/imgs/icons/arrow-right-white.png" alt="arrow icon">
        </Button>
      </div>
    </div>
  </div>
</template>