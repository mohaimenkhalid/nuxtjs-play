<script setup lang="ts">
import Loader from "~/components/app/Loader.vue";
import {useAuthStore} from "~/store/useAuthStore";
const authStore = useAuthStore();
</script>

<template>
  <div class="min-h-svh">
    <slot />
  </div>
  <Loader v-if="authStore.getLoader" />
</template>