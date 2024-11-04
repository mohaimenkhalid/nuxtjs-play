<script lang="ts" setup>
</script>

<template>
  <div>
    <div class="px-4 grid grid-cols-2 gap-8">
      <div class="space-y-3">
        <h4 class="w-[223px] py-2.5 px-2 bg-dark-shade3 text-center rounded-md text-white text-sm font-medium">
          Boarding Points
        </h4>
        <div>
          <div
            v-for="(n, index) in 5"
            :key="index"
            class="grid grid-cols-2 gap-x-2"
          >
            <div>
              <div class="flex items-center gap-x-2">
                <img src="~/assets/imgs/icons/stop-watch-gray.png" alt="stopwatch icon">
                <p class="text-dark-shade1 text-sm">10:{{ index+1 }}0 am</p>
              </div>
              <!--v-if="index < 4" (hide last item separator)-->
              <Separator v-if="index < 4" orientation="vertical" class="h-2 my-1 mx-2" labelClass="bg-body" />
            </div>
            <p class="text-dark-shade1 text-sm truncate">Rajarbagh</p>
          </div>
        </div>
      </div>

      <div class="space-y-3">
        <h4 class="w-[223px] py-2.5 px-2 bg-dark-shade3 text-center rounded-md text-white text-sm font-medium">
          Dropping Points
        </h4>
        <div>
          <div
              v-for="(n, index) in 5"
              :key="index"
              class="grid grid-cols-2 gap-x-2"
          >
            <div>
              <div class="flex items-center gap-x-2">
                <img src="~/assets/imgs/icons/stop-watch-gray.png" alt="stopwatch icon">
                <p class="text-dark-shade1 text-sm">10:{{ index+1 }}0 am</p>
              </div>
              <!--v-if="index < 4" (hide last item separator)-->
              <Separator v-if="index < 4" orientation="vertical" class="h-2 my-1 mx-2" labelClass="bg-body" />
            </div>
            <p class="text-dark-shade1 text-sm truncate">Rajarbagh</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>