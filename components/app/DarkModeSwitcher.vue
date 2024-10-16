<script setup lang="ts">
import {Icon} from '@iconify/vue'
import {Button} from '@/components/ui/button'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'

const colorMode = useColorMode()

useHead({
  htmlAttrs: {
    class: computed(() => {
      if (colorMode.value === "dark") return 'dark';
      return '';
    }),
  },
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Icon icon="radix-icons:moon"
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
        <Icon icon="radix-icons:sun"
              class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem
          @click="colorMode.preference = 'dark'"
      >
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<!--<style>-->
<!--body {-->
<!--  background-color: #fff;-->
<!--  color: rgba(0, 0, 0, 0.8);-->
<!--}-->

<!--.dark-mode body {-->
<!--  background-color: #091a28;-->
<!--  color: #ebf4f1;-->
<!--}-->

<!--.sepia-mode body {-->
<!--  background-color: #f1e7d0;-->
<!--  color: #433422;-->
<!--}-->
<!--</style>-->