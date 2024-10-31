<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { RiUser3Line } from "@remixicon/vue";
</script>

<template>
  <header class="bg-white h-20 sticky top-0 z-50">
    <div class="container py-4">
      <div class="flex justify-between items-center">
        <router-link to="/home">
          <img src="~/assets/imgs/jatri-logo.png" alt="Jatri logo">
        </router-link>
        <Button class="w-[154px]">
          <span>Login</span>
          <RiUser3Line class-name="w-5 h-5" />
        </Button>
      </div>
    </div>
  </header>
</template>