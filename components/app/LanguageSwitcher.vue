<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath();

import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";


const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const selectedLanguage = ref();

const changeLanguage = (lang: string) => {
  switchLocalePath(lang)
}
</script>

<template>
  <nuxt-link :to="switchLocalePath('bn')">EN</nuxt-link>
  {{availableLocales}}
  <DropdownMenu>
    <DropdownMenuTrigger>English</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuSeparator />
      <DropdownMenuItem as-child v-for="language in availableLocales">
        <nuxt-link :to="switchLocalePath(language.key)">{{language.label}}</nuxt-link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>