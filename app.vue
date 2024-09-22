<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import {useAuthStore} from "~/store/useAuthStore";
import Loader from "~/components/app/Loader.vue";
const authStore = useAuthStore();

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
    <transition name="fade">
      <Loader v-if="authStore.getIsInitializingStore" />
    </transition>
  </NuxtLayout>
  <Toaster />
</template>
