<script setup lang="ts">
import { ref } from "vue"
import { Button } from '~/components/ui/button'
import {RiStarLine} from "@remixicon/vue";

const isSeeAllDetails = ref(false)
</script>

<template>
  <div class="space-y-2">
    <div class="w-full p-4 bg-white shadow-sm shadow-ring rounded-md ">
      <div class="flex items-center space-x-4 divide-x divide-dashed divide-gray-shade4">
        <div class="grow space-y-3">
          <div class="flex gap-x-2">
            <Button variant="secondary" size="xs" class="pointer-events-none">
              <RiStarLine class="text-white w-3 h-3" />
              <span>Recommended</span>
            </Button>
            <Button variant="successLight" size="xs" class="pointer-events-none">
              Sleeper Coach
            </Button>
          </div>
        </div>

        <div class="shrink-0 w-[154px] pl-4">
          right
        </div>
      </div>

      <!--SeeAllDetails-->
      <div v-if="isSeeAllDetails">
        SeeAllDetails
      </div>
    </div>
  </div>
</template>