<script setup lang="ts">
import {useAuthStore} from "~/store/useAuthStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import LanguageSwitcher from "~/components/app/LanguageSwitcher.vue";
import DarkModeSwitcher from "~/components/app/DarkModeSwitcher.vue";
import {toast} from "vue-sonner";
const authStore = useAuthStore();
const localePath = useLocalePath();

async function _signOut() {
  await authStore.signOut();
  await navigateTo(localePath('/'))
  toast.success("Logout successfully!")
}
</script>

<template>
  <header class="bg-white">
    <div class="container py-4">
      <nav>
        <div class="flex justify-between">
          <div class="flex items-center gap-x-6">
            <div>
              <nuxt-link :to="localePath('/dashboard')" class="text-3xl font-bold">Demo Site</nuxt-link>
            </div>
            <ul class="list-none">
              <li class="inline-block ms-3">
                <nuxt-link :to="localePath('/products')" class="bg-gray-700 text-white p-2 rounded-sm">Products</nuxt-link>
              </li>
              <li class="inline-block ms-3">
                <nuxt-link :to="localePath('/category')">Category</nuxt-link>
              </li>
              <li class="inline-block ms-3">
                <nuxt-link>Users</nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <div class="mr-3 flex items-center gap-x-2">
              <DarkModeSwitcher />
              <LanguageSwitcher />
              <client-only>
              <DropdownMenu>
                <DropdownMenuTrigger>mohaimen</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem @click="_signOut()">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
                </client-only>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>