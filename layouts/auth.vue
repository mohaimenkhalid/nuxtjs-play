<script setup lang="ts">
import Loader from "~/components/app/Loader.vue";
import {useAuthStore} from "~/store/useAuthStore";
const authStore = useAuthStore();
</script>

<template>
  <div class="min-h-svh">
    <slot />
  </div>
  <transition name="fade">
    <Loader v-if="authStore.getIsInitializingStore" />
  </transition>
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
