<script lang="ts" setup>
import SearchLeft from "~/components/search/search-left/SearchLeft.vue";
import SearchRight from "~/components/search/search-right/SearchRight.vue";
</script>

<template>
  <section class="pt-28">
    <div class="container">
      <div class="flex gap-6">
        <div class="grow shrink-0">
          <SearchLeft />
        </div>
        <div class="w-[453px] shrink-0">
          <SearchRight />
        </div>
      </div>
    </div>
  </section>
</template>