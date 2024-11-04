<script setup lang="ts">
import { ref } from "vue"
import TripsDetails from "~/components/search/search-left/buses/trips/trip-details/TripsDetails.vue";
import TripInfo from "~/components/search/search-left/buses/trips/trip-info/TripInfo.vue";

const isSeeAllDetails = ref(false)
const toggleDetails = () => {
  isSeeAllDetails.value = !isSeeAllDetails.value
}
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="n in 3"
      class="w-full p-4 bg-white shadow-sm shadow-ring rounded-md"
    >
      <TripInfo :isSeeAllDetails="isSeeAllDetails" @toggleDetails="toggleDetails" />
      <TripsDetails v-if="isSeeAllDetails" />
    </div>
  </div>
</template>