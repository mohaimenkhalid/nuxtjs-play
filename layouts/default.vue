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
import LoadingIndicator from "~/components/app/LoadingIndicator.vue";
import LanguageSwitcher from "~/components/app/LanguageSwitcher.vue";
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
  <LoadingIndicator />
  <div>
    <nav class="bg-gray-300 py-3">
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
              <nuxt-link :to="localePath('/users')">Users</nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <div class="mr-3">
            <LanguageSwitcher />
            <DropdownMenu>
            <DropdownMenuTrigger>mohaimen</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem @click="_signOut()">Logout</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">

</script>