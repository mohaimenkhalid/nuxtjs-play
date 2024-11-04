<script lang="ts" setup>
</script>

<template>
  <div>
    <div class="px-4 grid grid-cols-3">
      <div
          v-for="(n, index) in 14"
          :key="index"
      >
        <div class="flex items-center gap-x-2">
          <img src="~/assets/imgs/icons/stop-watch-gray.png" alt="stopwatch icon">
          <p class="text-dark-shade1 text-sm">10:{{ index+1 }}0 am</p>
        </div>
        <Separator orientation="vertical" class="h-2 my-1 mx-2" labelClass="bg-body" />
      </div>
    </div>
  </div>
</template>