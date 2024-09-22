<script setup lang="ts">

</script>

<template>
  <div class="min-h-svh">
    <slot />
  </div>
</template>

<style>
/* Define global styles or additional styles as needed */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
