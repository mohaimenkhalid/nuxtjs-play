<script setup lang="ts">
import Cookies from 'js-cookie';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function sleep(time: any) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function _signOut() {
  Cookies.remove('auth.token')
  await sleep(1000)
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
    <slot />
  </div>
</template>
<script setup lang="ts">
</script>