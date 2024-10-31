<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { RiUser3Line } from "@remixicon/vue";

</script>

<template>
  <header class="bg-white">
    <div class="container py-4">
      <div class="flex justify-between items-center">
        <img src="~/assets/imgs/jatri-logo.png" alt="Jatri logo">
        <Button class="w-[154px]">
          <span>Login</span>
          <RiUser3Line class-name="w-5 h-5" />
        </Button>
      </div>
    </div>
  </header>
</template>