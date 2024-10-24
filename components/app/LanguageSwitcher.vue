<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath();

import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";


const selectedLocale = computed(() => {
  return locales.value.find(i => i.code == locale.value)
})

</script>

<template>
  <client-only>
    <DropdownMenu>
      <DropdownMenuTrigger class="bg-red-500 text-white p-1 mr-2 my-2">{{selectedLocale?.name}}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem as-child v-for="language in locales">
          <nuxt-link :to="switchLocalePath(language.code)">{{language.name}}</nuxt-link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </client-only>
</template>