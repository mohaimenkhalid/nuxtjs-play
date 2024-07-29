<script setup lang="ts">
import Loader from "~/components/app/Loader.vue";
import {useAuthStore} from "~/store/useAuthStore";
const authStore = useAuthStore();
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

async function _signOut() {
  location.href="/"
}

</script>


<template>
  <div>
    <nav class="bg-gray-300 py-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-x-6">
          <div>
            <nuxt-link to="/dashboard" class="text-3xl font-bold">Demo Site</nuxt-link>
          </div>
          <ul class="list-none">
            <li class="inline-block ms-3">
              <nuxt-link to="/product" class="bg-gray-700 text-white p-2 rounded-sm">Products</nuxt-link>
            </li>
            <li class="inline-block ms-3">
              <nuxt-link to="/category">Category</nuxt-link>
            </li>
            <li class="inline-block ms-3">
              <nuxt-link to="/users">Users</nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <div class="mr-3">
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
  <Loader v-if="authStore.getIsInitializingStore" />
</template>
<script setup lang="ts">

</script>